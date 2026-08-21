import * as Dialog from "@radix-ui/react-dialog";
import { Loader2, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { WorkspaceSession } from "../types/workspace";
import { Button } from "./ui/button";
import {
	settingsDialogBodyClass,
	settingsDialogContentClass,
	settingsDialogFooterClass,
	settingsDialogHeaderClass,
} from "./ui/dialog";

type SessionRevertConfirmDialogProps = {
	error?: string;
	isReverting: boolean;
	onConfirm: () => void;
	onOpenChange: (open: boolean) => void;
	open: boolean;
	session?: WorkspaceSession;
};

export function SessionRevertConfirmDialog({
	error,
	isReverting,
	onConfirm,
	onOpenChange,
	open,
	session,
}: SessionRevertConfirmDialogProps) {
	const { t } = useTranslation();
	const title = session?.title;
	return (
		<Dialog.Root open={open} onOpenChange={isReverting ? undefined : onOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className="dialog-overlay data-[state=open]:animate-overlay-in" />
				<Dialog.Content
					className={`${settingsDialogContentClass} fixed left-1/2 top-1/2 w-dialog-md -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-modal-in`}
				>
					<button
						type="button"
						className="settings-dialog-close-button settings-close-button"
						aria-label={t("common.close")}
						disabled={isReverting}
						onClick={() => onOpenChange(false)}
					>
						<X className="size-5" aria-hidden="true" />
					</button>
					<div className={settingsDialogHeaderClass}>
						<Dialog.Title className="settings-dialog-title">{t("revert.dialog")}</Dialog.Title>
						<Dialog.Description className="text-control text-settings-muted">
							{title ? t("revert.bodyNamed", { title }) : t("revert.body")}
						</Dialog.Description>
					</div>
					{error ? (
						<div className={settingsDialogBodyClass}>
							<p className="text-xs text-destructive">{error}</p>
						</div>
					) : null}
					<div className={settingsDialogFooterClass}>
						<Button type="button" variant="footer" onClick={() => onOpenChange(false)} disabled={isReverting}>
							{t("common.no")}
						</Button>
						<Button
							aria-label={t("revert.confirmAria")}
							className="bg-danger-strong text-white hover:bg-danger-strong hover:opacity-90"
							disabled={isReverting}
							onClick={onConfirm}
							type="button"
							variant="footer-primary"
						>
							{isReverting ? <Loader2 className="size-icon-base animate-spin" aria-hidden="true" /> : null}
							{t("common.yes")}
						</Button>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
