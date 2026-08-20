import type { MenuItemConstructorOptions } from "electron";

// Electron's auto-generated default menu resolves `role: "toggleDevTools"`
// against `BrowserWindow.getFocusedWindow()`, which is always undefined for
// this app's `BaseWindow` + `WebContentsView` composition — clicking it
// throws "Cannot read properties of undefined (reading 'toggleDevTools')".
// macOS/Linux therefore need an explicit menu too, with the devtools item
// swapped for the same AO-browser-aware toggle Windows already uses.
export function buildAppMenuTemplate(
	isMac: boolean,
	appName: string,
	onToggleDevTools: () => void,
): MenuItemConstructorOptions[] {
	const devtoolsItem: MenuItemConstructorOptions = {
		label: "Toggle Developer Tools",
		accelerator: isMac ? "Alt+Cmd+I" : "Ctrl+Shift+I",
		click: onToggleDevTools,
	};
	return [
		...(isMac
			? [
					{
						label: appName,
						submenu: [
							{ role: "about" as const },
							{ type: "separator" as const },
							{ role: "services" as const },
							{ type: "separator" as const },
							{ role: "hide" as const },
							{ role: "hideOthers" as const },
							{ role: "unhide" as const },
							{ type: "separator" as const },
							{ role: "quit" as const },
						],
					},
				]
			: []),
		{
			label: "Edit",
			submenu: [
				{ role: "undo" },
				{ role: "redo" },
				{ type: "separator" },
				{ role: "cut" },
				{ role: "copy" },
				{ role: "paste" },
				{ role: "selectAll" },
			],
		},
		{
			label: "View",
			submenu: [
				{ role: "reload" },
				{ role: "forceReload" },
				devtoolsItem,
				{ type: "separator" },
				{ role: "resetZoom" },
				{ role: "zoomIn" },
				{ role: "zoomOut" },
				{ type: "separator" },
				{ role: "togglefullscreen" },
			],
		},
		{
			label: "Window",
			submenu: isMac
				? [{ role: "minimize" }, { role: "zoom" }, { type: "separator" }, { role: "front" }]
				: [{ role: "minimize" }, { role: "close" }],
		},
	];
}

export function buildWindowsAppMenuTemplate(onToggleDevTools?: () => void): MenuItemConstructorOptions[] {
	const devtoolsItem: MenuItemConstructorOptions = onToggleDevTools
		? {
			label: "Toggle DevTools",
			accelerator: "Ctrl+Shift+I",
			click: onToggleDevTools,
		}
		: { role: "toggleDevTools" };
	return [
		{
			label: "Edit",
			submenu: [
				{ role: "undo" },
				{ role: "redo" },
				{ type: "separator" },
				{ role: "cut" },
				{ role: "copy" },
				{ role: "paste" },
				{ role: "selectAll" },
			],
		},
		{
			label: "View",
			submenu: [
				{ role: "reload" },
				devtoolsItem,
				{ type: "separator" },
				{ role: "resetZoom" },
				{ accelerator: "Ctrl+=", role: "zoomIn" },
				{ accelerator: "Ctrl+Plus", acceleratorWorksWhenHidden: true, role: "zoomIn", visible: false },
				{ accelerator: "Ctrl+-", role: "zoomOut" },
				{ type: "separator" },
				{ role: "togglefullscreen" },
			],
		},
		{
			label: "Window",
			submenu: [{ role: "minimize" }, { role: "close" }],
		},
	];
}
