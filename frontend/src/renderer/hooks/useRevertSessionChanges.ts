import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { WorkspaceSession } from "../types/workspace";
import { workspaceQueryKey } from "./useWorkspaceQuery";
import { apiClient, apiErrorMessage } from "../lib/api-client";
import { captureRendererEvent } from "../lib/telemetry";

type RevertSessionChangesOptions = {
	onSuccess?: (session: WorkspaceSession) => void;
};

export function useRevertSessionChanges(options: RevertSessionChangesOptions = {}) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (session: WorkspaceSession) => {
			void captureRendererEvent("ao.renderer.session_revert_requested", { project_id: session.workspaceId });
			const { error, response } = await apiClient.POST("/api/v1/sessions/{sessionId}/revert", {
				params: { path: { sessionId: session.id } },
			});
			if (error) {
				const fallback = response ? `Failed to revert changes (${response.status})` : "Failed to revert changes";
				throw new Error(apiErrorMessage(error, fallback));
			}
		},
		onSuccess: async (_data, session) => {
			void captureRendererEvent("ao.renderer.session_revert_succeeded", { project_id: session.workspaceId });
			await queryClient.invalidateQueries({ queryKey: workspaceQueryKey });
			options.onSuccess?.(session);
		},
		onError: (_error, session) => {
			void captureRendererEvent("ao.renderer.session_revert_failed", { project_id: session.workspaceId });
		},
	});
}
