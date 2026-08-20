### Example package.json configuration

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

The package.json file after initializing the project and installing Electron.

```json
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jane Doe",
  "license": "MIT",
  "devDependencies": {
    "electron": "23.1.3"
  }
}
```

--------------------------------

### Example Electron Application Package Structure

Source: https://github.com/electron/electron/blob/main/docs/tutorial/windows-store-guide.md

This snippet illustrates the typical file and directory structure of an Electron application after it has been packaged by a tool like `@electron/packager`. This packaged output serves as the input for the `electron-windows-store` utility, which then converts it into an `.appx` package for the Windows Store.

```plaintext
├── Ghost.exe
├── LICENSE
├── content_resources_200_percent.pak
├── content_shell.pak
├── d3dcompiler_47.dll
├── ffmpeg.dll
├── icudtl.dat
├── libEGL.dll
├── libGLESv2.dll
├── locales
│   ├── am.pak
│   ├── ar.pak
│   ├── [...]
├── node.dll
├── resources
│   └── app.asar
├── v8_context_snapshot.bin
├── squirrel.exe
└── ui_resources_200_percent.pak
```

--------------------------------

### Electron Documentation: Example Heading Structure in Markdown

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

Illustrates the recommended heading hierarchy for Electron documentation pages, including main titles, chapters, and sub-chapters, using a 'Quick Start' guide as an example. This structure ensures consistent navigation and organization across documentation.

```markdown
# Quick Start

...

## Main process

...

## Renderer process

...

## Run your app

...

### Run as a distribution

...

### Manually downloaded Electron binary

...
```

--------------------------------

### Launch installed snap application

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

Execute the installed Electron snap application from the command line using the application name defined in the snapcraft.yaml configuration.

```shell
electron-packager-hello-world
```

--------------------------------

### Install electron-windows-store CLI

Source: https://github.com/electron/electron/blob/main/docs/tutorial/windows-store-guide.md

This command installs the `electron-windows-store` command-line interface globally using npm. This tool is essential for converting packaged Electron applications into the Windows Store's `.appx` format, enabling UWP features and simplified distribution.

```sh
npm install -g electron-windows-store
```

--------------------------------

### Install and run Electron with --ignore-scripts

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Demonstrates how to install Electron without running postinstall scripts and trigger the on-demand binary download.

```sh
# won't install binary to `node_modules/electron`
npm install electron --save-dev --ignore-scripts

# will download the binary on demand before starting electron process
npx electron .

# subsequent runs will used the binary downloaded from the first run
npx electron .
```

--------------------------------

### Example .desktop file for launcher actions

Source: https://github.com/electron/electron/blob/main/docs/tutorial/linux-desktop-actions.md

This example demonstrates how to define custom actions within a `.desktop` file for a media player, including `PlayPause`, `Next`, and `Previous` actions with their respective `Name` and `Exec` commands.

```plaintext
Actions=PlayPause;Next;Previous

[Desktop Action PlayPause]
Name=Play-Pause
Exec=audacious -t

[Desktop Action Next]
Name=Next
Exec=audacious -f

[Desktop Action Previous]
Name=Previous
Exec=audacious -r
```

--------------------------------

### Install Electron with verbose output

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Enables download progress tracking for monitoring installations on slower network connections.

```sh
npm install --verbose electron
```

--------------------------------

### Install Electron Build Tools

Source: https://github.com/electron/electron/blob/main/CLAUDE.md

Global installation command for the build tools CLI.

```bash
npm i -g @electron/build-tools
```

--------------------------------

### ProxyRules Configuration Examples

Source: https://github.com/electron/electron/blob/main/docs/api/structures/proxy-config.md

Practical examples demonstrating various proxyRules configurations including scheme-specific routing, fallback proxies, SOCKS proxies, and direct connections. Each example shows how to route different URL schemes through different proxies with optional failover mechanisms.

```text
http=foopy:80;ftp=foopy2
foopy:80
foopy:80,bar,direct://
socks4://foopy
http=foopy,socks5://bar.com
http=foopy,direct://
http=foopy;socks=foopy2
```

--------------------------------

### Install Electron Build Tools globally

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Install @electron/build-tools from npm to automate Electron compilation setup and access remote execution features.

```sh
npm install -g @electron/build-tools
```

--------------------------------

### Start the Electron application

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

Command to launch the Electron application using the configured start script.

```sh
npm run start
```

--------------------------------

### Install snap package with sudo snap install

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

Install the generated snap package on a Linux system using the snap package manager. The --dangerous flag allows installation of unsigned packages during development and testing.

```shell
sudo snap install electron-packager-hello-world_0.1_amd64.snap --dangerous
```

--------------------------------

### Setup Windows Desktop App Converter with PowerShell

Source: https://github.com/electron/electron/blob/main/docs/tutorial/windows-store-guide.md

PowerShell commands to configure the Windows Desktop App Converter for container virtualization. This involves setting execution policy and running the converter setup script with the Windows base image. Execute these commands in an elevated PowerShell prompt (run as Administrator).

```powershell
Set-ExecutionPolicy bypass
```

```powershell
.\DesktopAppConverter.ps1 -Setup -BaseImage .\BaseImage-14316.wim
```

--------------------------------

### Install Electron alpha and beta builds

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Installs experimental builds slated for the next major version of Electron.

```sh
npm install electron@alpha --save-dev
npm install electron@beta --save-dev
```

--------------------------------

### Initialize Window and Message Loop in C++

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Sets up the window class, creates the main window with DPI scaling, and starts the standard Windows message loop.

```cpp
    wc.lpfnWndProc = WindowProc;
    wc.hInstance = GetModuleHandle(nullptr);
    wc.lpszClassName = L"TodoApp";
    RegisterClassExW(&wc);

    // Get the DPI for the monitor
    UINT dpi = GetDpiForSystem();

    // Create window
    HWND hwnd = CreateWindowExW(
      0, L"TodoApp", L"Todo List",
      WS_OVERLAPPEDWINDOW,
      CW_USEDEFAULT, CW_USEDEFAULT,
      Scale(500, dpi), Scale(500, dpi),
      nullptr, nullptr,
      GetModuleHandle(nullptr), nullptr
    );

    if (hwnd == nullptr) {
      return;
    }

    // Controls go here! The window is currently empty,
    // we'll add controls in the next step.

    ShowWindow(hwnd, SW_SHOW);

    // Message loop
    MSG msg = {};
    while (GetMessage(&msg, nullptr, 0, 0)) {
      TranslateMessage(&msg);
      DispatchMessage(&msg);
    }

    // Clean up
    DeleteObject(hFont);
  });

  // Detach the thread so it runs independently
  guiThread.detach();
}
```

--------------------------------

### Initialize and Populate IndexedDB in Electron Renderer Process

Source: https://github.com/electron/electron/blob/main/spec/fixtures/api/localstorage-and-indexeddb.html

This code demonstrates how to initialize an IndexedDB database named 'testdb', create an object store ('testdata'), and add an item. It handles database deletion for a clean start, manages upgrade needs, and ensures successful opening, notifying the main process via `ipcRenderer.send('indexeddb-ready')` upon successful data addition.

```javascript
const deleteRequest = window.indexedDB.deleteDatabase('testdb');
deleteRequest.onerror = deleteRequest.onsuccess = (event) => {
  const openRequest = window.indexedDB.open('testdb');
  openRequest.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.onerror = (event) => {
      console.error(event);
    };
    const objectStore = db.createObjectStore('testdata');
    objectStore.createIndex('test', '');
  };
  openRequest.onsuccess = (event) => {
    const db = event.target.result;
    const addRequest = db.transaction("testdata", "readwrite").objectStore("testdata").add("hello indexeddb", 'test');
    addRequest.onsuccess = () => {
      ipcRenderer.send('indexeddb-ready');
    };
  };
};
```

--------------------------------

### Electron API Documentation: Class, Instance Methods, and Properties Structure in Markdown

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

Illustrates the comprehensive structure for documenting API classes, including instance events, methods, and properties, within a module. This example uses the 'Session' and 'Cookies' classes from the 'session' module to demonstrate the required heading levels and grouping for class-specific documentation.

```markdown
# session

## Methods

### session.fromPartition(partition)

## Static Properties

### session.defaultSession

## Class: Session

### Instance Events

#### Event: 'will-download'

### Instance Methods

#### `ses.getCacheSize()`

### Instance Properties

#### `ses.cookies`

## Class: Cookies

### Instance Methods

#### `cookies.get(filter, callback)`
```

--------------------------------

### Install electron-installer-snap npm package

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

Install the electron-installer-snap module as a development dependency to build snap packages for Electron applications. This module simplifies the process of creating .snap files from packaged Electron applications.

```shell
npm install --save-dev electron-installer-snap
```

--------------------------------

### Generate and sign MSI installers with electron-wix-msi

Source: https://github.com/electron/electron/blob/main/docs/tutorial/code-signing.md

Instantiate MSICreator to configure installer details and signing parameters, then compile the MSI. Optional signing of support binaries is supported after template creation.

```javascript
import { MSICreator } from 'electron-wix-msi'

// Step 1: Instantiate the MSICreator
const msiCreator = new MSICreator({
  appDirectory: '/path/to/built/app',
  description: 'My amazing Kitten simulator',
  exe: 'kittens',
  name: 'Kittens',
  manufacturer: 'Kitten Technologies',
  version: '1.1.2',
  outputDirectory: '/path/to/output/folder',
  windowsSign: {
    signWithParams: '--my=custom --parameters',
    // If signtool.exe does not work for you, customize!
    signToolPath: 'C:\\Path\\To\\my-custom-tool.exe'
  }
})

// Step 2: Create a .wxs template file
const supportBinaries = await msiCreator.create()

// 🆕 Step 2a: optionally sign support binaries if you
// sign your binaries as part of your packaging script
for (const binary of supportBinaries) {
  // Binaries are the new stub executable and optionally
  // the Squirrel auto updater.
  await signFile(binary)
}

// Step 3: Compile the template to a .msi file
await msiCreator.compile()
```

--------------------------------

### Illustrate webkitdirectory file list changes

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Examples showing the change in FileList behavior for directory selection between Electron versions.

```console
folder
├── file1
├── file2
└── file3
```

```console
path/to/folder
```

```console
/path/to/folder/file3
/path/to/folder/file2
/path/to/folder/file1
```

--------------------------------

### Install WebdriverIO for Electron Testing

Source: https://github.com/electron/electron/blob/main/docs/tutorial/automated-testing.md

This command initializes WebdriverIO in your project, launching a configuration wizard. Ensure you select 'Desktop Testing - of Electron Applications' during the setup to correctly configure it for Electron.

```sh
npm init wdio@latest ./
```

--------------------------------

### ProxyBypassRules Pattern Examples

Source: https://github.com/electron/electron/blob/main/docs/api/structures/proxy-config.md

Practical examples demonstrating various proxyBypassRules patterns including hostname matching with wildcards, domain suffix matching, IP address literals, CIDR notation for IP ranges, and local address matching.

```text
foobar.com
*foobar.com
*.foobar.com
*foobar.com:99
https://x.*.y.com:99
.google.com
.com
http://.google.com
127.0.1
[0:0::1]
[::1]
http://[::1]:99
192.168.1.1/16
fefe:13::abc/33
<local>
```

--------------------------------

### Install Electron nightly builds

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Installs the latest experimental changes from the main branch for testing.

```sh
npm install electron-nightly --save-dev
```

--------------------------------

### Electron API Documentation: Module Title and Description in Markdown

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

Demonstrates how to title an API reference page using the module's actual object name and provide a concise, one-line description using a Markdown quote. This example uses the 'session' module to illustrate the required format for API module introductions.

```markdown
# session

> Manage browser sessions, cookies, cache, proxy settings, etc.
```

--------------------------------

### Recommended multi-monitor test pattern (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/development/multi-monitor-testing.md

Demonstrates a complete test structure including setup, creating multiple displays, a placeholder for test logic, and proper cleanup.

```js
describe('multi-monitor tests', () => {
  const virtualDisplay = require('@electron-ci/virtual-display')
  beforeEach(() => {
    virtualDisplay.forceCleanup()
  })

  it('should handle multiple displays', () => {
    const display1 = virtualDisplay.create({ width: 1920, height: 1080, x: 0, y: 0 })
    const display2 = virtualDisplay.create({ width: 2560, height: 1440, x: 1920, y: 0 })
    // Your test logic here
    virtualDisplay.destroy(display1)
    virtualDisplay.destroy(display2)
  })
})
```

--------------------------------

### Using the C++ Native Addon in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

Complete example showing how to import the addon, call methods, set up event listeners for GTK GUI interactions, and handle todo events from the native addon.

```javascript
// In your Electron main process or renderer process
import cppLinux from 'cpp-linux'

// Test the basic functionality
console.log(cppLinux.helloWorld('Hi!'))
// Output: "Hello from C++! You said: Hi!"

// Set up event listeners for GTK GUI interactions
cppLinux.on('todoAdded', (todo) => {
  console.log('New todo added:', todo)
  // todo: { id: "uuid-string", text: "Todo text", date: Date object }
})

cppLinux.on('todoUpdated', (todo) => {
  console.log('Todo updated:', todo)
})

cppLinux.on('todoDeleted', (todo) => {
  console.log('Todo deleted:', todo)
})

// Launch the native GTK GUI
cppLinux.helloGui()
```

--------------------------------

### WebContentsView Usage Example

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents-view.md

Complete example demonstrating how to create a BaseWindow with multiple WebContentsView instances, each displaying different web content in split-screen layout.

```APIDOC
## Example: Creating Multiple WebContentsViews

### Description
Demonstrates creating a window with two side-by-side WebContentsView instances, each loading different URLs.

### Implementation
```js
const { BaseWindow, WebContentsView } = require('electron')

// Create main window
const win = new BaseWindow({ width: 800, height: 400 })

// Create first view
const view1 = new WebContentsView()
win.contentView.addChildView(view1)
view1.webContents.loadURL('https://electronjs.org')
view1.setBounds({ x: 0, y: 0, width: 400, height: 400 })

// Create second view
const view2 = new WebContentsView()
win.contentView.addChildView(view2)
view2.webContents.loadURL('https://github.com/electron/electron')
view2.setBounds({ x: 400, y: 0, width: 400, height: 400 })
```

### Key Points
- WebContentsView must be created after the app 'ready' event
- Each view can load independent URLs
- Views can be positioned and sized using setBounds()
- Multiple views can coexist in a single window
```

--------------------------------

### GET downloadItem.getStartTime()

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

Retrieves the timestamp when the download was started, expressed as the number of seconds since the UNIX epoch (January 1, 1970).

```APIDOC
## GET downloadItem.getStartTime()

### Description
Returns the number of seconds since the UNIX epoch when the download was started.

### Method
GET

### Returns
- **Double** - Number of seconds since UNIX epoch (January 1, 1970)

### Response Example
```
1705318200.5
```

### Notes
Use this value to calculate download duration or track when downloads began.
```

--------------------------------

### Initialize and Run GTK Application Loop

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

Starts the GtkApplication main loop and ensures the main loop quits upon application exit.

```cpp
  static gboolean init_gtk_app(gpointer user_data)
  {
    auto *app = static_cast<GtkApplication *>(user_data);
    g_application_run(G_APPLICATION(app), 0, nullptr);
    g_object_unref(app);
    if (g_main_loop)
    {
      g_main_loop_quit(g_main_loop);
    }
    return G_SOURCE_REMOVE;
  }
```

--------------------------------

### app.getApplicationInfoForProtocol(url)

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Fetches detailed application information including icon, name, and installation path of the default handler for a given URL scheme.

```APIDOC
## app.getApplicationInfoForProtocol(url)

### Description
Returns a promise that contains the application name, icon and path of the default handler for the protocol (aka URI scheme) of a URL.

### Parameters
- **url** (string) - A URL with the protocol name to check. Accepts an entire URL, including `://` at a minimum (e.g. `https://`).

### Returns
- **Promise<Object>** - Resolves with an object containing:
  - `icon` (NativeImage) - The display icon of the app handling the protocol.
  - `path` (string) - Installation path of the app handling the protocol.
  - `name` (string) - Display name of the app handling the protocol.
```

--------------------------------

### Complete Main Process Notification Example with BrowserWindow

Source: https://github.com/electron/electron/blob/main/docs/tutorial/notifications.md

Full Electron application example demonstrating notification display in the main process. Includes window creation, app lifecycle management, and notification triggering when the app is ready. Shows proper handling of window-all-closed and activate events.

```javascript
const { app, BrowserWindow, Notification } = require('electron/main')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

const NOTIFICATION_TITLE = 'Basic Notification'
const NOTIFICATION_BODY = 'Notification from the Main process'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

app.whenReady().then(createWindow).then(showNotification)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
```

--------------------------------

### Set architecture and platform for Electron installation

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Use environment variables to override the default architecture or platform during installation.

```sh
# Inside an npm script or with npx
ELECTRON_INSTALL_ARCH=x64 electron .
```

```sh
# Inside an npm script or with npx
ELECTRON_INSTALL_PLATFORM=mas electron .
```

--------------------------------

### Set ELECTRON_INSTALL_PLATFORM for cross-platform npm install

Source: https://github.com/electron/electron/blob/main/docs/api/environment-variables.md

Override the platform detection during npm install to download Electron binaries for a different platform than the current system. Useful for cross-platform development setups.

```sh
ELECTRON_INSTALL_PLATFORM=darwin npm install
```

--------------------------------

### Install and Run Electron ChromeDriver for Selenium Testing

Source: https://github.com/electron/electron/blob/main/docs/tutorial/automated-testing.md

To use Selenium with Electron, first install `electron-chromedriver` as a development dependency. Then, execute the binary to start the ChromeDriver server, which listens on a specific port (e.g., 9515) for WebDriver commands.

```sh
npm install --save-dev electron-chromedriver
./node_modules/.bin/chromedriver
Starting ChromeDriver (v2.10.291558) on port 9515
Only local connections are allowed.
```

--------------------------------

### Run Electron Test Suite

Source: https://github.com/electron/electron/wiki/Build-Instructions-(Mac)

Executes the test suite for Electron to verify that the build was successful and all functionality is working correctly.

```bash
./script/test.py
```

--------------------------------

### Create sample Electron app with create-electron-app

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

Initialize a new Electron application project using the create-electron-app command-line tool. This sets up the basic project structure required for packaging with Snapcraft.

```shell
npx create-electron-app@latest my-app
```

--------------------------------

### Install Electron Forge CLI and Import Project

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-5-packaging.md

Installs the Electron Forge CLI as a development dependency and imports an existing Electron project into Forge's configuration. This prepares the project for packaging and distribution by adding necessary scripts and configuration files.

```sh
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

```sh
yarn add --dev @electron-forge/cli
yarn electron-forge import
```

--------------------------------

### Create Electron Tray Icon with Quit Context Menu (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tray.md

This example illustrates how to create a system tray icon in Electron and attach a context menu to it. It shows how to initialize a `Tray` instance with a `NativeImage` icon, build a `Menu` with a 'quit' role, and then assign this menu to the tray using `tray.setContextMenu()`. The `tray` object is stored globally to prevent garbage collection, and the setup is performed after the `app` is ready.

```javascript
const { nativeImage } = require('electron/common')
const { app, Tray, Menu } = require('electron/main')

// save a reference to the Tray object globally to avoid garbage collection
let tray

// 16x16 red circle data URL
const icon = nativeImage.createFromDataURL('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBpZKBCYAgEEV/TeAIjuIIbdQIuUGt0CS1gW1iZ2jIVaTnhw+Cvs8/OYDJA4Y8kR3ZR2/kmazxJbpUEfQ/Dm/UG7wVwHkjlQdMFfDdJMFaACebnjJGyDWgcnZu1/lrCrl6NCoEHJBrDwEr5NrT6ko/UV8xdLAC2N49mlc5CylpYh8wCwqrvbBGLoKGvz8Bfq0QPWEUo/EAAAAASUVORK5CYII=')

// The Tray can only be instantiated after the 'ready' event is fired
app.whenReady().then(() => {
  tray = new Tray(icon)
  const contextMenu = Menu.buildFromTemplate([
    { role: 'quit' }
  ])
  tray.setContextMenu(contextMenu)
})
```

--------------------------------

### Manually trigger Electron binary installation

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Use the install-electron script to download the binary on-demand when using --ignore-scripts.

```sh
npm install electron --save-dev --ignore-scripts
npx install-electron --no
```

--------------------------------

### Start service workers and send messages in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/service-workers.md

Demonstrates how to collect service worker scopes, ensure workers are started when browser windows are created, and send messages to them. This example shows practical usage of the experimental startWorkerForScope method with error handling.

```javascript
const { app, session } = require('electron')

const { serviceWorkers } = session.defaultSession

// Collect service workers scopes
const workerScopes = Object.values(serviceWorkers.getAllRunning()).map((info) => info.scope)

app.on('browser-window-created', async (event, window) => {
  for (const scope of workerScopes) {
    try {
      // Ensure worker is started
      const serviceWorker = await serviceWorkers.startWorkerForScope(scope)
      serviceWorker.send('window-created', { windowId: window.id })
    } catch (error) {
      console.error(`Failed to start service worker for ${scope}`)
      console.error(error)
    }
  }
})
```

--------------------------------

### GTK Application Initialization and UI Setup in C++

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

This C++ snippet defines the `init_gtk_app` function for running and quitting the GTK application, and the `activate_handler` which sets up application actions and constructs the UI using GtkBuilder from an embedded XML string.

```cpp
  static gboolean init_gtk_app(gpointer user_data)
  {
    auto *app = static_cast<GtkApplication *>(user_data);
    g_application_run(G_APPLICATION(app), 0, nullptr);
    g_object_unref(app);
    if (g_main_loop)
    {
      g_main_loop_quit(g_main_loop);
    }
    return G_SOURCE_REMOVE;
  }

  static void activate_handler(GtkApplication *app, gpointer user_data)
  {
    auto *builder = gtk_builder_new();

    const GActionEntry app_actions[] = {
        {"edit", edit_action, nullptr, nullptr, nullptr, {0, 0, 0}},
        {"delete", delete_action, nullptr, nullptr, nullptr, {0, 0, 0}}};
    g_action_map_add_action_entries(G_ACTION_MAP(app), app_actions,
                                    G_N_ELEMENTS(app_actions), builder);

    gtk_builder_add_from_string(builder,
                                "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
                                "<interface>"
                                "  <object class=\"GtkWindow\" id=\"window\">"
                                "    <property name=\"title\">Todo List</property>"
                                "    <property name=\"default-width\">400</property>"
                                "    <property name=\"default-height\">500</property>"
                                "    <child>"
                                "      <object class=\"GtkBox\">"
                                "        <property name=\"visible\">true</property>"
                                "        <property name=\"orientation\">vertical</property>"
                                "        <property name=\"spacing\">6</property>"
                                "        <property name=\"margin\">12</property>"
                                "        <child>"
                                "          <object class=\"GtkBox\">"
                                "            <property name=\"visible\">true</property>"
                                "            <property name=\"spacing\">6</property>"
                                "            <child>"
                                "              <object class=\"GtkEntry\" id=\"todo_entry\">"
                                "                <property name=\"visible\">true</property>"
                                "                <property name=\"hexpand\">true</property>"
                                "                <property name=\"placeholder-text\">Enter todo item...</property>"
                                "              </object>"
                                "            </child>"
                                "            <child>"
                                "              <object class=\"GtkCalendar\" id=\"todo_calendar\">"
                                "                <property name=\"visible\">true</property>"
                                "              </object>"
                                "            </child>"
                                "            <child>"
                                "              <object class=\"GtkButton\" id=\"add_button\">"
                                "                <property name=\"visible\">true</property>"
                                "                <property name=\"label\">Add</property>"
                                "              </object>"
                                "            </child>"
                                "          </object>"
                                "        </child>"
                                "        <child>"
                                "          <object class=\"GtkScrolledWindow\">"
                                "            <property name=\"visible\">true</property>"
                                "            <property name=\"vexpand\">true</property>"
                                "            <child>"
                                "              <object class=\"GtkListBox\" id=\"todo_list\">"
                                "                <property name=\"visible\">true</property>"
                                "                <property name=\"selection-mode\">single</property>"
                                "              </object>"
                                "            </child>"
                                "          </object>"
                                "        </child>"
```

--------------------------------

### Set up desktop capture handler in main process

Source: https://github.com/electron/electron/blob/main/docs/api/desktop-capturer.md

Configure the display media request handler in the main process to grant access to desktop sources. This example demonstrates setting up a session handler that automatically selects the first available screen source and enables the system picker if available.

```javascript
// main.js
const { app, BrowserWindow, desktopCapturer, session } = require('electron')

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow()

  session.defaultSession.setDisplayMediaRequestHandler((request, callback) => {
    desktopCapturer.getSources({ types: ['screen'] }).then((sources) => {
      // Grant access to the first screen found.
      callback({ video: sources[0], audio: 'loopback' })
    })
    // If true, use the system picker if available.
    // Note: this is currently experimental. If the system picker
    // is available, it will be used and the media request handler
    // will not be invoked.
  }, { useSystemPicker: true })

  mainWindow.loadFile('index.html')
})
```

--------------------------------

### Clone Electron Repository with Git

Source: https://github.com/electron/electron/wiki/Build-Instructions-(Mac)

Clones the Electron (atom-shell) repository from GitHub to the local machine. This is the first step in obtaining the source code for building Electron.

```bash
git clone https://github.com/atom/atom-shell.git
```

--------------------------------

### Promisification API Change Entry Example

Source: https://github.com/electron/electron/blob/main/docs/CLAUDE.md

Example YAML history entry for APIs that were converted to return Promises instead of using callback functions. These entries use the changes field with a description indicating the breaking change.

```yaml
changes:
  - pr-url: https://github.com/electron/electron/pull/17355
    description: "This method now returns a Promise instead of using a callback function."
```

--------------------------------

### Example project directory layout for local file loading

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents.md

Illustrates application directory structure when loading relative HTML assets. File paths in loadFile resolve relative to the app root.

```shell
| root
| - package.json
| - src
|   - main.js
|   - index.html
```

--------------------------------

### Install Latest Stable Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/electron-versioning.md

Use this command to install the most recent stable build of Electron into your project.

```sh
npm install --save-dev electron
```

--------------------------------

### Initialize main.js

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

The complete main process script for creating a window and loading content.

```js
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
```

--------------------------------

### Install GTK3 development dependencies on Linux

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

Commands to install build-essential, pkg-config, and GTK3 development headers on Ubuntu/Debian or Fedora/RHEL systems.

```sh
sudo apt-get install build-essential pkg-config libgtk-3-dev
```

```sh
sudo dnf install gcc-c++ pkgconfig gtk3-devel
```

--------------------------------

### Initialize npm project

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

Create a new directory and initialize the npm package configuration.

```sh
mkdir my-electron-app && cd my-electron-app
npm init
```

--------------------------------

### Download Electron binary on demand

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Runs the install-electron script to download the binary implementation without starting the application.

```sh
npx install-electron --no
```

--------------------------------

### Example of Xcode Incompatible Architecture Error on macOS Arm64

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-macos.md

This code snippet displays an example of an `xcrun` error indicating an incompatible architecture, typically occurring on macOS Arm64 systems when an x86_64 Xcode library is being used. It helps diagnose issues where the build script points to an incorrect Xcode version, often due to an older Xcode installation.

```sh
xcrun: error: unable to load libxcrun
(dlopen(/Users/<user>/.electron_build_tools/third_party/Xcode/Xcode.app/Contents/Developer/usr/lib/libxcrun.dylib (http://xcode.app/Contents/Developer/usr/lib/libxcrun.dylib), 0x0005):
 tried: '/Users/<user>/.electron_build_tools/third_party/Xcode/Xcode.app/Contents/Developer/usr/lib/libxcrun.dylib (http://xcode.app/Contents/Developer/usr/lib/libxcrun.dylib)'
 (mach-o file, but is an incompatible architecture (have (x86_64), need (arm64e))), '/Users/<user>/.electron_build_tools/third_party/Xcode/Xcode-11.1.0.app/Contents/Developer/usr/lib/libxcrun.dylib (http://xcode-11.1.0.app/Contents/Developer/usr/lib/libxcrun.dylib)' (mach-o file, but is an incompatible architecture (have (x86_64), need (arm64e)))).
```

--------------------------------

### Install Electron with unsafe-perm flag

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Use this command if EACCESS errors persist after standard permission fixes.

```sh
sudo npm install electron --unsafe-perm=true
```

--------------------------------

### Bootstrap Electron Build Dependencies

Source: https://github.com/electron/electron/wiki/Build-Instructions-(Mac)

Runs the bootstrap script to download all necessary build dependencies and generate build project files using the Ninja build system. This must be executed from the atom-shell directory after cloning.

```bash
cd atom-shell
./script/bootstrap.py
```

--------------------------------

### Run electron-installer-snap CLI command

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

Execute electron-installer-snap from the command line with the packaged Electron application source directory. The --src parameter specifies the location of the previously packaged application created with @electron/packager.

```shell
npx electron-installer-snap --src=out/myappname-linux-x64
```

--------------------------------

### Initialize and Run Win32 GUI Application in C++

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

This comprehensive snippet shows the full setup for a Win32 GUI, including DPI awareness, common controls initialization, window class registration, window and control creation, font handling, and the main message loop. The GUI runs in a detached thread.

```cpp
  void hello_gui() {
    // Launch GUI in a separate thread
    std::thread guiThread([]() {
      // Enable Per-Monitor DPI awareness
      SetProcessDpiAwarenessContext(DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2);

      // Initialize Common Controls
      INITCOMMONCONTROLSEX icex;
      icex.dwSize = sizeof(INITCOMMONCONTROLSEX);
      icex.dwICC = ICC_STANDARD_CLASSES | ICC_WIN95_CLASSES;
      InitCommonControlsEx(&icex);

      // Register window class
      WNDCLASSEXW wc = {};
      wc.cbSize = sizeof(WNDCLASSEXW);
      wc.lpfnWndProc = WindowProc;
      wc.hInstance = GetModuleHandle(nullptr);
      wc.lpszClassName = L"TodoApp";
      RegisterClassExW(&wc);

      // Get the DPI for the monitor
      UINT dpi = GetDpiForSystem();

      // Create window
      HWND hwnd = CreateWindowExW(
        0, L"TodoApp", L"Todo List",
        WS_OVERLAPPEDWINDOW,
        CW_USEDEFAULT, CW_USEDEFAULT,
        Scale(500, dpi), Scale(500, dpi),
        nullptr, nullptr,
        GetModuleHandle(nullptr), nullptr
      );

      if (hwnd == nullptr) {
        return;
      }

      // Create the modern font with DPI-aware size
      HFONT hFont = CreateFontW(
        -Scale(14, dpi),              // Height (scaled)
        0,                            // Width
        0,                            // Escapement
        0,                            // Orientation
        FW_NORMAL,                    // Weight
        FALSE,                        // Italic
        FALSE,                        // Underline
        FALSE,                        // StrikeOut
        DEFAULT_CHARSET,              // CharSet
        OUT_DEFAULT_PRECIS,           // OutPrecision
        CLIP_DEFAULT_PRECIS,          // ClipPrecision
        CLEARTYPE_QUALITY,            // Quality
        DEFAULT_PITCH | FF_DONTCARE,  // Pitch and Family
        L"Segoe UI"                   // Font face name
      );

      // Create input controls with scaled positions and sizes
      HWND hEdit = CreateWindowExW(0, WC_EDITW, L"",
        WS_CHILD | WS_VISIBLE | WS_BORDER | ES_AUTOHSCROLL,
        Scale(10, dpi), Scale(10, dpi),
        Scale(250, dpi), Scale(25, dpi),
        hwnd, (HMENU)1, GetModuleHandle(nullptr), nullptr);
      SendMessageW(hEdit, WM_SETFONT, (WPARAM)hFont, TRUE);

      // Create date picker
      HWND hDatePicker = CreateWindowExW(0, DATETIMEPICK_CLASSW, L"",
        WS_CHILD | WS_VISIBLE | DTS_SHORTDATECENTURYFORMAT,
        Scale(270, dpi), Scale(10, dpi),
        Scale(100, dpi), Scale(25, dpi),
        hwnd, (HMENU)4, GetModuleHandle(nullptr), nullptr);
      SendMessageW(hDatePicker, WM_SETFONT, (WPARAM)hFont, TRUE);

      HWND hButton = CreateWindowExW(0, WC_BUTTONW, L"Add",
        WS_CHILD | WS_VISIBLE | BS_PUSHBUTTON,
        Scale(380, dpi), Scale(10, dpi),
        Scale(50, dpi), Scale(25, dpi),
        hwnd, (HMENU)2, GetModuleHandle(nullptr), nullptr);
      SendMessageW(hButton, WM_SETFONT, (WPARAM)hFont, TRUE);

      HWND hListBox = CreateWindowExW(0, WC_LISTBOXW, L"",
        WS_CHILD | WS_VISIBLE | WS_BORDER | WS_VSCROLL | LBS_NOTIFY,
        Scale(10, dpi), Scale(45, dpi),
        Scale(460, dpi), Scale(400, dpi),
        hwnd, (HMENU)3, GetModuleHandle(nullptr), nullptr);
      SendMessageW(hListBox, WM_SETFONT, (WPARAM)hFont, TRUE);

      ShowWindow(hwnd, SW_SHOW);

      // Message loop
      MSG msg = {};
      while (GetMessage(&msg, nullptr, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
      }

      // Clean up
      DeleteObject(hFont);
    });

    // Detach the thread so it runs independently
    guiThread.detach();
  }
```

--------------------------------

### Initialize App on Ready

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

Trigger window creation once the application is ready.

```js
app.whenReady().then(() => {
  createWindow()
})
```

```diff
+ app.on('ready', () => {
- app.whenReady().then(() => {
  createWindow()
})
```

--------------------------------

### Create and load content in BrowserWindow using JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Must be executed in the main process after the app ready event has fired. Demonstrates initializing a window and loading either a remote URL or a local file.

```javascript
// In the main process.
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 600 })

// Load a remote URL
win.loadURL('https://github.com')

// Or load a local HTML file
win.loadFile('index.html')
```

--------------------------------

### Build Electron Release and Debug Targets

Source: https://github.com/electron/electron/wiki/Build-Instructions-(Mac)

Compiles both Release and Debug build targets for Electron. The build script uses Ninja as the build system. Compiled binaries are output to the out/Debug directory.

```bash
./script/build.py
```

--------------------------------

### Configure package.json for Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

The package.json file must define the main entry point and include the start script to execute the application.

```json
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jane Doe",
  "license": "MIT",
  "devDependencies": {
    "electron": "23.1.3"
  }
}
```

--------------------------------

### Create main.js entry point

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

A simple script to verify the main process environment by logging a message to the console.

```js
console.log('Hello from Electron 👋')
```

--------------------------------

### Get the value of a command line switch in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/command-line.md

This example shows how to retrieve the value associated with a Chromium command-line switch using `app.commandLine.getSwitchValue()`. It first appends a switch with a value and then logs the retrieved value. If the switch is not present or has no value, an empty string is returned, and this method is not for application-specific arguments.

```js
const { app } = require('electron')

app.commandLine.appendSwitch('remote-debugging-port', '8315')
const portValue = app.commandLine.getSwitchValue('remote-debugging-port')
console.log(portValue) // '8315'
```

--------------------------------

### contentTracing.startRecording(options)

Source: https://github.com/electron/electron/blob/main/docs/api/content-tracing.md

Initiates the recording of tracing data across all processes. Recording begins immediately locally and asynchronously on child processes. If a recording is already active, the returned Promise will resolve immediately without starting a new trace.

```APIDOC
## contentTracing.startRecording(options)

### Description
Start recording on all processes. Recording begins immediately locally and asynchronously on child processes as soon as they receive the EnableRecording request. If a recording is already running, the promise will be immediately resolved, as only one trace operation can be in progress at a time.

### Method
`contentTracing.startRecording()`

### Parameters
#### Request Body
- **options** (TraceConfig | TraceCategoriesAndOptions) - Required - Configuration for the tracing session.

### Response
#### Success Response
- **Returns** `Promise<void>` - resolved once all child processes have acknowledged the `startRecording` request.
```

--------------------------------

### Start and Stop Content Tracing in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/content-tracing.md

This snippet demonstrates how to start recording tracing data, wait for a period, and then stop recording, saving the trace to a file. Ensure the application is ready before initiating tracing operations.

```javascript
const { app, contentTracing } = require('electron')

app.whenReady().then(() => {
  (async () => {
    await contentTracing.startRecording({
      included_categories: ['*']
    })
    console.log('Tracing started')
    await new Promise(resolve => setTimeout(resolve, 5000))
    const path = await contentTracing.stopRecording()
    console.log('Tracing data recorded to ' + path)
  })()
})
```

--------------------------------

### new BrowserWindow([options])

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Instantiates a new browser window with configurable size, visibility, and display settings. Must be called after the app module emits the ready event.

```APIDOC
## new BrowserWindow([options])

### Description
Creates and controls a new browser window instance in the main process.

### Parameters
- **options** (Object) - Optional
  - **width** (Integer) - Optional - The window's width in pixels.
  - **height** (Integer) - Optional - The window's height in pixels.
  - **show** (Boolean) - Optional - Whether the window should be shown when created.
  - **backgroundColor** (String) - Optional - The window's background color.
  - **paintWhenInitiallyHidden** (Boolean) - Optional - Whether the renderer should paint when `show` is false.

### Example
```js
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 600, show: false, backgroundColor: '#2e2c29' })
```
```

--------------------------------

### Example Output Directory Structure for macOS Distributable

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-5-packaging.md

Illustrates the typical directory structure generated by Electron Forge after successfully running the `make` command on macOS. It shows where the packaged application and the final distributable zip file are located within the `out` directory.

```plain
out/
├── out/make/zip/darwin/x64/my-electron-app-darwin-x64-1.0.0.zip
├── ...
└── out/my-electron-app-darwin-x64/my-electron-app.app/Contents/MacOS/my-electron-app
```

--------------------------------

### Install prebuild-powered modules without building from source

Source: https://github.com/electron/electron/blob/main/docs/tutorial/using-native-node-modules.md

NPM installation command for modules using prebuild that have prebuilt binaries for Electron. Omit the --build-from-source flag to use prebuilt binaries instead of compiling from source, improving installation speed and reliability.

```bash
npm install
```

--------------------------------

### Get Electron Source Code

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Initialize a new directory, configure `gclient` to fetch the Electron repository, and synchronize all dependencies. This process downloads Chromium and other required components.

```sh
mkdir electron && cd electron
gclient config --name "src/electron" --unmanaged https://github.com/electron/electron
gclient sync --with_branch_heads --with_tags
```

--------------------------------

### Compile Electron App to AppX Package using electron-windows-store

Source: https://github.com/electron/electron/blob/main/docs/tutorial/windows-store-guide.md

This PowerShell command demonstrates how to use the `electron-windows-store` CLI to convert a packaged Electron application into a Windows Store `.appx` package. It specifies the input and output directories, the desired package version, and the package name, initiating the conversion process from a win32 executable to a UWP-compatible format.

```powershell
electron-windows-store `
    --input-directory C:\myelectronapp `
    --output-directory C:\output\myelectronapp `
    --package-version 1.0.0.0 `
    --package-name myelectronapp
```

--------------------------------

### Build Electron Debug Target Only

Source: https://github.com/electron/electron/wiki/Build-Instructions-(Mac)

Compiles only the Debug build target for Electron using the -c flag to specify the configuration. Useful for faster development builds without Release optimization.

```bash
./script/build.py -c Debug
```

--------------------------------

### Create virtual displays with safe sizes (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/development/multi-monitor-testing.md

Examples of creating virtual displays using common, safe resolutions like Full HD and 4K, adhering to size limits.

```js
// Safe sizes for testing
virtualDisplay.create({ width: 1920, height: 1080 }) // Full HD
virtualDisplay.create({ width: 3840, height: 2160 }) // 4K
```

--------------------------------

### Event: 'did-start-loading'

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Corresponds to the point in time when the spinner of the tab starts spinning.

```APIDOC
## Event: 'did-start-loading'

### Description
Corresponds to the points in time when the spinner of the tab starts spinning.
```

--------------------------------

### Create and configure a View in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/view.md

Initialize a BaseWindow and View, set background color and bounds, then add the view to the window's content view. Must be called after the app 'ready' event.

```javascript
const { BaseWindow, View } = require('electron')

const win = new BaseWindow()
const view = new View()

view.setBackgroundColor('red')
view.setBounds({ x: 0, y: 0, width: 100, height: 100 })
win.contentView.addChildView(view)
```

--------------------------------

### ELECTRON_DEBUG_MSIX_UPDATER sample output on Windows

Source: https://github.com/electron/electron/blob/main/docs/api/environment-variables.md

Example output from ELECTRON_DEBUG_MSIX_UPDATER showing MSIX update operations including package addition, deployment options, and completion status on Windows.

```sh
UpdateMsix called with URI: https://example.com/app.msix
DoUpdateMsix: Starting
Calling AddPackageByUriAsync... URI: https://example.com/app.msix
Update options - deferRegistration: true, developerMode: false, forceShutdown: false, forceTargetShutdown: false, forceUpdateFromAnyVersion: false
Waiting for deployment...
Deployment finished.
MSIX Deployment completed.
```

--------------------------------

### Install Xcode Command Line Tools for macOS Native Addons

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron.md

This command installs the necessary Xcode Command Line Tools on macOS, which include compilers (`clang`, `clang++`) and build tools (`make`) required for compiling native Node.js addons. It prompts the user for installation if the tools are not already present.

```sh
xcode-select --install
```

--------------------------------

### Event: 'did-start-navigation'

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Emitted when any frame (including main) starts navigating.

```APIDOC
### Event: 'did-start-navigation'

Emitted when any frame (including the main frame) begins navigation.

#### Event Properties
- `url` (string) - Target URL.
- `isInPlace` (boolean) - `true` for in-page navigations.
- `isMainFrame` (boolean) - `true` if navigation is in the main frame.
- `frameProcessId` (Integer) - Process ID of the navigating frame.
- `frameRoutingId` (Integer) - Routing ID of the navigating frame.
```

--------------------------------

### BrowserWindow Instance Methods - Sizing

Source: https://github.com/electron/electron/wiki/browser-window

Methods for getting and setting window dimensions including size and minimum size constraints.

```APIDOC
## BrowserWindow Instance Methods - Sizing

### BrowserWindow.setSize(width, height)

**Description:**
Resizes the window to the specified width and height.

**Method:**
PUT

**Parameters:**
- **width** (Integer) - Required - The new window width in pixels
- **height** (Integer) - Required - The new window height in pixels

**Response:**
Void

---

### BrowserWindow.getSize()

**Description:**
Returns an array that contains the window's width and height.

**Method:**
GET

**Response:**
- **Returns** (Array) - Array containing [width, height] in pixels

---

### BrowserWindow.setMinimumSize(width, height)

**Description:**
Sets the minimum size of window to the specified width and height.

**Method:**
PUT

**Parameters:**
- **width** (Integer) - Required - The minimum window width in pixels
- **height** (Integer) - Required - The minimum window height in pixels

**Response:**
Void

---

### BrowserWindow.getMinimumSize()

**Description:**
Returns an array that contains the window's minimum width and height.

**Method:**
GET

**Response:**
- **Returns** (Array) - Array containing [minimum_width, minimum_height] in pixels
```

--------------------------------

### Configuration Management Commands

Source: https://github.com/electron/electron/blob/main/CLAUDE.md

Commands for initializing and managing build configurations.

```bash
e init <name> --root=<path> --bootstrap testing
```

```bash
e use <name>
```

```bash
e show current
```

```bash
e show configs
```

--------------------------------

### Initialize Electron Crash Reporter in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/crash-reporter.md

This code snippet demonstrates how to start the Electron crash reporter. It requires the `electron` module and configures the `submitURL` where crash reports will be sent. This setup ensures that Electron automatically submits crash reports to a remote server upon application crashes.

```javascript
const { crashReporter } = require('electron')

crashReporter.start({ submitURL: 'https://your-domain.com/url-to-submit' })
```

--------------------------------

### Initialize and Coordinate Electron Shared Workers with IPC

Source: https://github.com/electron/electron/blob/main/spec/fixtures/api/shared-worker/shared-worker.html

This JavaScript snippet demonstrates the setup of two Shared Workers in an Electron renderer process. It starts their message ports, creates Promises that resolve upon receiving the first message from each worker, and then uses `Promise.all` to wait for both workers to signal readiness. Once both are ready, it sends an 'ready' IPC message to the main Electron process, indicating that the renderer and its workers are prepared.

```javascript
const { ipcRenderer } = require('electron')
const worker1 = new SharedWorker('./shared-worker1.js')
const worker2 = new SharedWorker('./shared-worker2.js')

worker1.port.start()
worker2.port.start()

const promise1 = new Promise(resolve => {
  worker1.port.onmessage = resolve
})
const promise2 = new Promise(resolve => {
  worker2.port.onmessage = resolve
})

Promise.all([promise1, promise2]).then(() => {
  ipcRenderer.send('ready')
})
```

--------------------------------

### autoUpdater.quitAndInstall()

Source: https://github.com/electron/electron/blob/main/docs/api/auto-updater.md

Restarts the app and installs the downloaded update. Closes all application windows and calls app.quit().

```APIDOC
### autoUpdater.quitAndInstall()

#### Description
Restarts the app and installs the update after it has been downloaded. It should only be called after `update-downloaded` has been emitted.

Under the hood calling `autoUpdater.quitAndInstall()` will close all application windows first, and automatically call `app.quit()` after all windows have been closed.
```

--------------------------------

### Install node-gyp globally using npm

Source: https://github.com/electron/electron/wiki/Build-native-modules

This command installs the `node-gyp` tool globally, which is essential for compiling native Node.js modules. It's a prerequisite for building native modules against Electron's specific V8 headers.

```bash
npm install -g node-gyp
```

--------------------------------

### Install Node.js Addon API and Bindings Dependencies

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron.md

This command installs two key dependencies for building Node.js native addons: `node-addon-api` (a C++ wrapper for the Node.js API) and `bindings` (a helper module for loading compiled native addons). These packages simplify the development and integration of native code.

```sh
npm install node-addon-api bindings
```

--------------------------------

### Monitor System Suspend Event with Power Monitor

Source: https://github.com/electron/electron/wiki/power-monitor

Listens for the 'suspend' event emitted when the system is entering sleep mode. This example demonstrates basic event listener setup using the power-monitor module in Electron's browser process. The callback function executes when the system begins suspending.

```javascript
require('power-monitor').on('suspend', function() {
  console.log('The system is going to sleep');
});
```

--------------------------------

### Event: 'media-started-playing'

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Emitted when media in the webview starts playing.

```APIDOC
### Event: 'media-started-playing'

Emitted when media starts playing in the guest page.
```

--------------------------------

### new Tray(image, [guid])

Source: https://github.com/electron/electron/blob/main/docs/api/tray.md

Creates a new tray icon associated with the provided image. The `guid` parameter can be used on Windows and macOS to identify the tray icon and persist its position.

```APIDOC
## new Tray(image, [guid])

### Description
Creates a new tray icon associated with the `image`. The `guid` parameter can be used on Windows and macOS to identify the tray icon and allow it to retain its position between relaunches.

### Method
Constructor

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Arguments
- **image** (NativeImage | string) - Required - The image to use for the tray icon.
- **guid** (string) - Optional - _Windows_ _macOS_ - A unique string used to identify the tray icon. Must adhere to UUID format. On Windows, if the executable is signed, the GUID is permanently associated with that signature. On macOS, it allows the tray icon to retain its position between relaunches.

### Request Example
```js
const { app, Tray } = require('electron')
let tray = null
app.whenReady().then(() => {
  tray = new Tray('/path/to/my/icon')
})
```

### Response
(None - constructor)
```

--------------------------------

### Initialize Electron checkout with Build Tools

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Bootstrap a local Electron checkout with the e init command, specifying a root directory and running initial sync and build. The --bootstrap flag automatically runs e sync and e build.

```sh
# The 'Hello, World!' of build-tools: get and build `main`
# Choose the directory where Electron's source and build files will reside.
# You can specify any path you like; this command defaults to `$PWD/electron`.
# If you're going to use multiple branches, you may want something like:
# `--root=~/electron/branch` (e.g. `~/electron-gn/main`)
e init --root=~/electron --bootstrap testing
```

--------------------------------

### Event: 'will-finish-launching'

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Emitted when the application has completed basic startup. Acts as the ready event on Windows and Linux, and corresponds to applicationWillFinishLaunching on macOS.

```APIDOC
## Event: 'will-finish-launching'

### Description
Emitted when the application has finished basic startup. On Windows and Linux, the `will-finish-launching` event is the same as the `ready` event; on macOS, this event represents the `applicationWillFinishLaunching` notification of `NSApplication`.

### Process
Main
```

--------------------------------

### Set ELECTRON_INSTALL_ARCH for cross-architecture npm install

Source: https://github.com/electron/electron/blob/main/docs/api/environment-variables.md

Override the architecture detection during npm install to download Electron binaries for a different architecture. Note that this will not work under Rosetta emulation.

```sh
ELECTRON_INSTALL_ARCH=arm64 npm install
```

--------------------------------

### Manually creating the default menu in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/application-menu.md

This example demonstrates how to manually construct a menu template that mimics Electron's default application menu. It uses `MenuItem` roles and conditional logic for macOS-specific menu items, then builds and sets the menu using `Menu.buildFromTemplate` and `Menu.setApplicationMenu`.

```javascript
const { shell } = require('electron/common')
const { app, Menu } = require('electron/main')

const isMac = process.platform === 'darwin'
const template = [
  // { role: 'appMenu' }
  ...(isMac
    ? [{
        label: app.name,
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ]
      }]
    : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac
        ? [
            { role: 'pasteAndMatchStyle' },
            { role: 'delete' },
            { role: 'selectAll' },
            { type: 'separator' },
            {
              label: 'Speech',
              submenu: [
                { role: 'startSpeaking' },
                { role: 'stopSpeaking' }
              ]
            }
          ]
        : [
            { role: 'delete' },
            { type: 'separator' },
            { role: 'selectAll' }
          ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac
        ? [
            { type: 'separator' },
            { role: 'front' },
            { type: 'separator' },
            { role: 'window' }
          ]
        : [
            { role: 'close' }
          ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
```

--------------------------------

### Append command line switches in main process

Source: https://github.com/electron/electron/blob/main/docs/api/command-line-switches.md

Use app.commandLine.appendSwitch() to add switches before the app ready event. This example enables remote debugging and sets host rules for localhost mapping.

```javascript
const { app } = require('electron')

app.commandLine.appendSwitch('remote-debugging-port', '8315')
app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1')

app.whenReady().then(() => {
  // Your code here
})
```

--------------------------------

### Install Selenium WebDriver for Electron Testing

Source: https://github.com/electron/electron/blob/main/docs/tutorial/automated-testing.md

Install the selenium-webdriver package as a development dependency. This is the first step to enable Selenium-based testing with Electron applications.

```shell
npm install --save-dev selenium-webdriver
```

--------------------------------

### Configure cross-platform installation via environment variables

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Replaces npm config flags with environment variables for specifying target platforms during the first run.

```sh
# before: pass npm config flag on install command
npm install --platform=mas electron --save-dev
# after: add env var when you first run the Electron command
npm install electron --save-dev
ELECTRON_INSTALL_PLATFORM=mas npx electron . --no
```

--------------------------------

### Run Electron Forge Make Command

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-5-packaging.md

Executes the `make` script defined in `package.json` to trigger the packaging and creation of distributable files for the Electron application using Electron Forge. This command bundles the app code and generates platform-specific installers or executables.

```sh
npm run make
```

--------------------------------

### Create a BrowserWindow instance in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Initializes a new BrowserWindow with specific dimensions and loads a target URL.

```javascript
const { BrowserWindow } = require('electron')
// In this example `win` is our instance
const win = new BrowserWindow({ width: 800, height: 600 })
win.loadURL('https://github.com')
```

--------------------------------

### Install `update-electron-app` Module for Electron Auto-Updates

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-6-publishing-updating.md

This command installs the `update-electron-app` module as a runtime dependency. This module simplifies the process of configuring auto-updates for Electron applications by abstracting the boilerplate required to connect to the `update.electronjs.org` service.

```sh
npm install update-electron-app
```

--------------------------------

### Install node-pre-gyp modules with build-from-source flag

Source: https://github.com/electron/electron/blob/main/docs/tutorial/using-native-node-modules.md

NPM installation command for node-pre-gyp modules when Electron-specific prebuilt binaries are unavailable. Pass --build-from-source flag or set npm_config_build_from_source environment variable to compile the module from source.

```bash
npm install --build-from-source
```

```bash
npm_config_build_from_source=true npm install
```

--------------------------------

### Handle Update Installation Events in Electron

Source: https://github.com/electron/electron/wiki/auto-updater

Listens for the 'will-install-update' event to manage the installation flow, allowing for pauses and manual continuation.

```javascript
autoUpdater.on('will-install-update', (event, version, continueUpdate) => {
  // Prevent the update from installing immediately
  event.preventDefault();

  console.log(`Update version ${version} is ready.`);

  // Call continueUpdate() when ready to proceed
  continueUpdate();
});
```

--------------------------------

### new BaseWindow([options])

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Constructs a new BaseWindow instance in the main process. It provides a flexible way to compose multiple web views in a single window and requires the app ready event before instantiation.

```APIDOC
## new BaseWindow([options])

### Description
Creates and controls a new `BaseWindow` instance. This module cannot be used until the `ready` event of the `app` module is emitted.

### Process
Main

### Parameters
- **options** (Object) - Optional
  - **width** (Integer) - Optional - The window's width in pixels.
  - **height** (Integer) - Optional - The window's height in pixels.
  - **parent** (BaseWindow) - Optional - Specify a parent window to make this a child window. The child window will always show on top of the parent window.
  - **modal** (Boolean) - Optional - Whether this is a modal window. A modal window is a child window that disables its parent window (requires `parent` to be set).

### Usage Example
```js
// In the main process.
const { BaseWindow, WebContentsView } = require('electron')

const win = new BaseWindow({ width: 800, height: 600 })

const leftView = new WebContentsView()
leftView.webContents.loadURL('https://electronjs.org')
win.contentView.addChildView(leftView)

const rightView = new WebContentsView()
rightView.webContents.loadURL('https://github.com/electron/electron')
win.contentView.addChildView(rightView)

leftView.setBounds({ x: 0, y: 0, width: 400, height: 600 })
rightView.setBounds({ x: 400, y: 0, width: 400, height: 600 })
```
```

--------------------------------

### Install Xcode Command Line Tools on macOS

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-macos.md

This command installs the Xcode Command Line Tools, which are essential for many development tasks on macOS, including building Electron. It provides compilers, debuggers, and other utilities necessary for native code compilation and system-level operations.

```sh
xcode -select --install
```

--------------------------------

### Install Electron Forge GitHub Publisher

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-6-publishing-updating.md

Install the GitHub Publisher plugin as a dev dependency in your Electron Forge project. This plugin enables automated publishing of packaged applications to GitHub releases.

```shell
npm install --save-dev @electron-forge/publisher-github
```

--------------------------------

### METHOD netLog.startLogging(path[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/net-log.md

Starts recording network events to a specified file path. This method can only be used after the app module's ready event.

```APIDOC
## METHOD netLog.startLogging(path[, options])

### Description
Starts recording network events to the provided file path. Logging continues until stopLogging is called or the app quits.

### Method
JS Method (Main Process)

### Endpoint
netLog.startLogging(path[, options])

### Parameters
#### Path Parameters
- **path** (string) - Required - File path where the network logs will be recorded.

#### Request Body
- **options** (Object) - Optional - Configuration for the logging session.
- **options.captureMode** (string) - Optional - Determines the level of detail. Options: `default` (metadata only), `includeSensitive` (cookies/auth), `everything` (all socket bytes).
- **options.maxFileSize** (number) - Optional - The maximum size in bytes for the log file. Logging stops automatically if reached.

### Request Example
{
  "path": "/path/to/net-log",
  "options": {
    "captureMode": "includeSensitive",
    "maxFileSize": 1024000
  }
}

### Response
#### Success Response (Promise<void>)
- Resolves when the network logging session has successfully started.
```

--------------------------------

### app.getVersion()

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Gets the version of the currently loaded application.

```APIDOC
## app.getVersion()

### Description
Returns the version of the loaded application. If no version is found in the application's `package.json` file, the version of the current bundle or executable is returned.

### Returns
- **string** - The version string of the loaded application.
```

--------------------------------

### Run Electron ad-hoc using npx

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Executes the current directory with Electron without requiring a local installation.

```sh
npx electron .
```

--------------------------------

### Enable Heap Profiling and Record Trace in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/content-tracing.md

This snippet demonstrates how to enable heap profiling and then start recording a trace with the necessary `disabled-by-default-memory-infra` category. It includes a delay before stopping the recording and retrieving the file path.

```javascript
const { contentTracing } = require('electron')

async function recordTrace () {
  await contentTracing.enableHeapProfiling()
  await contentTracing.startRecording({
    included_categories: ['disabled-by-default-memory-infra'],
    excluded_categories: ['*'],
    memory_dump_config: {
      triggers: [
        { mode: 'detailed', periodic_interval_ms: 1000 }
      ]
    }
  })

  await new Promise(resolve => setTimeout(resolve, 5000))

  const filePath = await contentTracing.stopRecording()
}
```

--------------------------------

### Start and Stop Network Logging in Electron Main Process

Source: https://github.com/electron/electron/blob/main/docs/api/net-log.md

This snippet demonstrates how to programmatically start recording network events to a specific file path and stop the process using the netLog module. It utilizes the app.whenReady() lifecycle hook to ensure the module is available before execution.

```javascript
const { app, netLog } = require('electron')

app.whenReady().then(async () => {
  await netLog.startLogging('/path/to/net-log')
  // After some network events
  const path = await netLog.stopLogging()
  console.log('Net-logs written to', path)
})
```

--------------------------------

### Managing Recent Documents in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/recent-documents.md

Complete example demonstrating how to create a window, add a recent document using app.addRecentDocument(), and clear recent documents when all windows are closed. This example creates a Markdown file and registers it as a recent document in the application.

```javascript
const { app, BrowserWindow } = require('electron/main')
const fs = require('node:fs')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

const fileName = 'recently-used.md'
fs.writeFile(fileName, 'Lorem Ipsum', () => {
  app.addRecentDocument(path.join(__dirname, fileName))
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.clearRecentDocuments()
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
```

--------------------------------

### Basic snapcraft.yaml Configuration for Electron App

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

A complete snapcraft.yaml configuration file that defines an Electron application snap with classic confinement. It includes parts for the application binary and electron-launch script, specifies stage packages for runtime dependencies, and configures the app command with environment variables for proper Chromium/Electron functionality.

```yaml
name: myApp
version: '2.0.0'
summary: A little description for the app.
description: |
 You know what? This app is amazing! It does all the things
 for you. Some say it keeps you young, maybe even happy.

grade: stable
confinement: classic

parts:
  slack:
    plugin: dump
    source: my-deb.deb
    source-type: deb
    after:
      - desktop-gtk3
    stage-packages:
      - libasound2
      - libnotify4
      - libnspr4
      - libnss3
      - libpcre3
      - libpulse0
      - libxss1
      - libxtst6
  electron-launch:
    plugin: dump
    source: files/
    prepare: |
      chmod +x bin/electron-launch

apps:
  myApp:
    command: bin/electron-launch $SNAP/usr/lib/myApp/myApp
    desktop: usr/share/applications/myApp.desktop
    environment:
      TMPDIR: $XDG_RUNTIME_DIR
```

--------------------------------

### <webview>.inspectElement(x, y)

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Starts inspecting an element at the specified coordinates in the guest page.

```APIDOC
### `<webview>.inspectElement(x, y)`

#### Description
Starts inspecting element at position (`x`, `y`) of guest page.

#### Parameters
- **x** (`Integer`) - Required. The horizontal coordinate.
- **y** (`Integer`) - Required. The vertical coordinate.
```

--------------------------------

### POST /BrowserWindow.inspectElement

Source: https://github.com/electron/electron/wiki/browser-window

Starts inspecting the element at the specified `x` and `y` coordinates.

```APIDOC
## POST /BrowserWindow.inspectElement

### Description
Starts inspecting element at position (`x`, `y`).

### Method
POST

### Endpoint
/BrowserWindow.inspectElement

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **x** (Integer) - Required - The X coordinate of the element to inspect.
- **y** (Integer) - Required - The Y coordinate of the element to inspect.

### Request Example
{
  "x": 100,
  "y": 50
}

### Response
#### Success Response (200)
(None)

#### Response Example
(None)
```

--------------------------------

### Electron Forge Scripts in package.json

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-5-packaging.md

Demonstrates the new `start`, `package`, and `make` scripts automatically added to the `package.json` file by Electron Forge after importing a project. These scripts streamline development, packaging, and distributable creation workflows.

```json
  //...
  "scripts": {
    "start": "electron-forge start",
    "package": "electron-forge package",
    "make": "electron-forge make"
  },
  //...
```

--------------------------------

### Complete Renderer Process Notification Example with DOM Update

Source: https://github.com/electron/electron/blob/main/docs/tutorial/notifications.md

Full example of displaying a notification from the renderer process with click handling that updates the DOM. Demonstrates using window.Notification API and updating an HTML element's text content when the notification is clicked.

```javascript
const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => { document.getElementById('output').innerText = CLICK_MESSAGE }
```

--------------------------------

### Configure custom mirrors for Electron downloads

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Set the base URL and directory structure for downloading Electron binaries from a mirror.

```shell
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
```

```shell
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
ELECTRON_CUSTOM_DIR="{{ version }}"
```

--------------------------------

### Event: will-install-update

Source: https://github.com/electron/electron/wiki/auto-updater

This event is emitted when an update has been found and is about to be installed. It provides an opportunity to pause or control the installation process.

```APIDOC
## Event will-install-update

### Description
This event is emitted when the update is found and going to be installed. Calling `event.preventDefault()` would pause it, and you can call `continueUpdate` to continue the update.

### Method
Event

### Endpoint
will-install-update

### Parameters
#### Event Parameters
- **event** (Event) - Required - The event object.
- **version** (String) - Required - The version of the update.
- **continueUpdate** (Function) - Required - A function to call to continue the update if `event.preventDefault()` was used.

### Request Example
```javascript
autoUpdater.on('will-install-update', (event, version, continueUpdate) => {
  console.log(`Update ${version} is about to be installed.`);
  // event.preventDefault(); // Pause the update
  // setTimeout(() => {
  //   continueUpdate(); // Continue after a delay
  // }, 5000);
});
```

### Response
#### Success Response (N/A)
- No direct return value. Triggers application behavior.

#### Response Example
{
  "status": "N/A",
  "description": "Event triggers internal application logic."
}
```

--------------------------------

### Handle Electron DownloadItem events and set save path

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

This example demonstrates how to intercept and manage file downloads in the Electron main process. It listens for the `will-download` event on a `webContents.session`, sets a custom save path for the download item, and monitors its progress and completion through `updated` and `done` events, logging various states like 'interrupted', 'progressing', 'paused', and 'completed'.

```js
// In the main process.
const { BrowserWindow } = require('electron')

const win = new BrowserWindow()
win.webContents.session.on('will-download', (event, item, webContents) => {
  // Set the save path, making Electron not to prompt a save dialog.
  item.setSavePath('/tmp/save.pdf')

  item.on('updated', (event, state) => {
    if (state === 'interrupted') {
      console.log('Download is interrupted but can be resumed')
    } else if (state === 'progressing') {
      if (item.isPaused()) {
        console.log('Download is paused')
      } else {
        console.log(`Received bytes: ${item.getReceivedBytes()}`)
      }
    }
  })
  item.once('done', (event, state) => {
    if (state === 'completed') {
      console.log('Download successfully')
    } else {
      console.log(`Download failed: ${state}`)
    }
  })
})
```

--------------------------------

### Initialize Electron Application in main.js

Source: https://github.com/electron/electron/wiki/Quick-start

The main entry point script that runs in the browser process, handling application lifecycle, window creation, and event management. It requires Electron modules to control the app, create native windows, and manage initialization. This script executes before any renderer processes and sets up the primary application window.

```javascript
var app = require('app');  // Module to control application life.
var delegate = require('atom_delegate');  // Delegate of Content API.
var Window = require('window');  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.terminate();
});

// This method will be called when atom-shell has done everything
// initialization and ready for creating browser windows.
delegate.browserMainParts.preMainMessageLoopRun = function() {
  // Create the browser window,
  mainWindow = new Window({ width: 800, height: 600 });
  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Catch the event when web page in the window changes its title.
  mainWindow.on('page-title-updated', function(event, title) {
    // Prevent the default behaviour of 'page-title-updated' event.
    event.preventDefault();

    // Add a prefix for the window's original title.
    this.setTitle('Atom Shell - ' + title);
  });

  // Hook to when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}
```

--------------------------------

### Create and embed BrowserView in BrowserWindow

Source: https://github.com/electron/electron/blob/main/docs/api/browser-view.md

Demonstrates how to create a BrowserView instance, attach it to a BrowserWindow, set its bounds, and load a URL. This example shows the basic workflow for embedding web content as a child view within a main window.

```javascript
// In the main process.
const { app, BrowserView, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 })

  const view = new BrowserView()
  win.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  view.webContents.loadURL('https://electronjs.org')
})
```

--------------------------------

### Initialize Electron Browser Window using atom-delegate (JavaScript)

Source: https://github.com/electron/electron/wiki/atom-delegate

This JavaScript example demonstrates how to use the `atom-delegate` module in Electron to create and load a new browser window when the application is ready. It overrides the `browserMainParts.preMainMessageLoopRun` method to instantiate a `BrowserWindow` and load an HTML file, ensuring the window persists by keeping a global reference.

```javascript
var delegate = require('atom-delegate');  // Delegate of Content API.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// This method will be called when atom-shell has done everything
// initialization and ready for creating browser windows.
delegate.browserMainParts.preMainMessageLoopRun = function() {
  // Create the browser window,
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
}
```

--------------------------------

### app.getName()

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Gets the current application's name as defined in package.json.

```APIDOC
## app.getName()

### Description
Returns the current application's name, which defaults to the name defined in the application's `package.json` file (or `productName` if specified).

### Returns
- **string** - The name of the current application.
```

--------------------------------

### Install Electron as a development dependency

Source: https://github.com/electron/electron/blob/main/README.md

Use npm to add Electron to your project's development dependencies.

```sh
npm install electron --save-dev
```

--------------------------------

### Build the native addon using npm

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Compiles the C++ and Objective-C source code into a Node.js binary.

```sh
npm run build
```

--------------------------------

### Create package.json for Electron Application

Source: https://github.com/electron/electron/wiki/Quick-start

Defines the application metadata and entry point for an Electron app. The package.json follows Node.js module format with a 'main' field specifying the startup script that runs in the browser process. This file is required for Electron to initialize and launch the application.

```json
{
  "name"    : "atom",
  "version" : "0.1.0",
  "main"    : "main.js"
}
```

--------------------------------

### Create and Display BrowserWindow in Electron

Source: https://github.com/electron/electron/wiki/browser-window

Demonstrates how to create a new BrowserWindow instance with basic configuration options, attach event listeners, load a URL, and display the window. This is the fundamental pattern for initializing browser windows in Electron applications.

```javascript
var BrowserWindow = require('browser-window');

var win = new BrowserWindow({ width: 800, height: 600, show: false });
win.on('destroyed', function() {
  win = null;
});

win.loadUrl('https://github.com');
win.show();
```

--------------------------------

### Electron local cache directory structure

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Example of how Electron binaries and checksums are organized within the local cache folder.

```sh
├── a91b089b5dc5b1279966511344b805ec84869b6cd60af44f800b363bba25b915
│   └── electron-v15.3.1-darwin-x64.zip
```

--------------------------------

### C++ Basic Setup and TodoItem Data Structure

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

This snippet includes necessary headers for GTK3 and standard library components, defines a `TodoCallback` type, and creates a `TodoItem` struct with UUID, text, timestamp, and methods for JSON serialization and date formatting. The `toJson()` method is crucial for serializing C++ objects for transmission to JavaScript.

```cpp
#include <gtk/gtk.h>
#include <string>
#include <functional>
#include <chrono>
#include <vector>
#include <uuid/uuid.h>
#include <ctime>
#include <thread>
#include <memory>

using TodoCallback = std::function<void(const std::string &)>;

namespace cpp_code
{
  // Basic functions
  std::string hello_world(const std::string &input)
  {
    return "Hello from C++! You said: " + input;
  }

  // Data structures
  struct TodoItem
  {
    uuid_t id;
    std::string text;
    int64_t date;

    std::string toJson() const
    {
      char uuid_str[37];
      uuid_unparse(id, uuid_str);
      return "{"
             "\"id\":\"" +
             std::string(uuid_str) + "\"," +
                                     "\"text\":\"" +
             text + "\"," +
                    "\"date\":
```

--------------------------------

### new BrowserWindow([options])

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Creates a new BrowserWindow instance with configurable parent-child relationships and window behavior.

```APIDOC
## new BrowserWindow([options])

### Description
Creates a new BrowserWindow instance. Options allow setting parent windows, creating modal windows, and controlling initial display state.

### Parameters
- **options** (Object) - Optional configuration settings for the window:
  - **parent** (BrowserWindow) - Optional - Sets the parent window. The child window will always show on top of the parent window.
  - **modal** (boolean) - Optional - Whether this is a modal window. A modal window is a child window that disables its parent window. Requires `parent` to be set.
  - **show** (boolean) - Optional - Whether the window should be shown when created.
  - **backgroundThrottling** (boolean) - Optional - If disabled, page visibility state remains visible even when the window is minimized, occluded, or hidden.

### Code Example
```js
const { BrowserWindow } = require('electron')

// Parent and child window
const top = new BrowserWindow()
const child = new BrowserWindow({ parent: top })
child.show()
top.show()

// Modal window
const modalChild = new BrowserWindow({ parent: top, modal: true, show: false })
modalChild.loadURL('https://github.com')
modalChild.once('ready-to-show', () => {
  modalChild.show()
})
```
```

--------------------------------

### Adjust Selection Range in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents.md

Shifts the starting and ending indices of the current text selection in the focused frame. Negative numbers move backwards toward the document start.

```javascript
const win = new BrowserWindow()

// Adjusts the beginning of the selection 1 letter forward,
// and the end of the selection 5 letters forward.
win.webContents.adjustSelection({ start: 1, end: 5 })

// Adjusts the beginning of the selection 2 letters forward,
// and the end of the selection 3 letters backward.
win.webContents.adjustSelection({ start: 2, end: -3 })
```

--------------------------------

### Event: 'ready'

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Emitted once when Electron has finished initializing. Provides launch notification information on macOS.

```APIDOC
## Event: 'ready'

### Description
Emitted once, when Electron has finished initializing. On macOS, `launchInfo` holds the `userInfo` of the `NSUserNotification` or information from `UNNotificationResponse` if launched from Notification Center.

### Process
Main

### Event Listener Parameters
- **event** (Event) - The event object.
- **launchInfo** (Record<string, any> | NotificationResponse) - _macOS_ - Notification information that opened the application.
```

--------------------------------

### GET inAppPurchase.getProducts

Source: https://github.com/electron/electron/blob/main/docs/api/in-app-purchase.md

Retrieves product descriptions for the specified product identifiers from the Mac App Store. Returns a promise that resolves with an array of Product objects containing pricing and other product information.

```APIDOC
## GET inAppPurchase.getProducts

### Description
Retrieves product descriptions and information for the specified product identifiers from the Mac App Store.

### Method
GET

### Signature
`inAppPurchase.getProducts(productIDs)`

### Parameters
#### Required Parameters
- **productIDs** (string[]) - Required - Array of product identifiers to retrieve information for

### Request Example
```javascript
const { inAppPurchase } = require('electron');

const productIds = [
  'com.example.product1',
  'com.example.product2',
  'com.example.product3'
];

const products = await inAppPurchase.getProducts(productIds);
console.log(products);
```

### Response
#### Success Response (200)
- **Returns** (Promise<Product[]>) - Resolves with an array of Product objects

#### Response Example
```javascript
[
  {
    productIdentifier: 'com.example.product1',
    localizedTitle: 'Product 1',
    localizedDescription: 'Description of product 1',
    price: 9.99,
    formattedPrice: '$9.99'
  },
  {
    productIdentifier: 'com.example.product2',
    localizedTitle: 'Product 2',
    localizedDescription: 'Description of product 2',
    price: 19.99,
    formattedPrice: '$19.99'
  }
]
```

### Notes
- Returns product descriptions and pricing information
- Use this to display product details to users before purchase
```

--------------------------------

### Clipboard Module Overview

Source: https://github.com/electron/electron/wiki/clipboard

Introduction to the Electron clipboard module with a basic example of writing text to the clipboard. This demonstrates how to require and use the clipboard module in an Electron application.

```APIDOC
## Clipboard Module Overview

### Description
The clipboard module provides methods for reading and writing data to the system clipboard in Electron applications.

### Basic Usage Example

```javascript
var clipboard = require('clipboard');
clipboard.writeText('Example String');
```

### Available Methods
- `readText()` - Read plain text from clipboard
- `writeText(text)` - Write plain text to clipboard
- `clear()` - Clear all clipboard contents
- `has(type)` - Check if clipboard contains data of specified type
- `read(type)` - Read data from clipboard of specified type
```

--------------------------------

### Initialize GTK Application in Separate Thread

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

Sets up GTK initialization, creates a main loop in a new thread, and registers the application activation handler. Checks for GTK availability and prevents multiple instances.

```cpp
void hello_gui()
{
  if (g_gtk_thread != nullptr)
  {
    g_print("GTK application is already running.\n");
    return;
  }

  if (!gtk_init_check(0, nullptr))
  {
    g_print("Failed to initialize GTK.\n");
    return;
  }

  g_gtk_main_context = g_main_context_new();
  g_main_loop = g_main_loop_new(g_gtk_main_context, FALSE);

  g_gtk_thread = new std::thread([](){
    GtkApplication* app = gtk_application_new("com.example.todo", G_APPLICATION_NON_UNIQUE);
    g_signal_connect(app, "activate", G_CALLBACK(activate_handler), nullptr);

    g_idle_add_full(G_PRIORITY_DEFAULT, init_gtk_app, app, nullptr);

    if (g_main_loop) {
      g_main_loop_run(g_main_loop);
    }
  });

  g_gtk_thread->detach();
}
```

--------------------------------

### Basic Addon Folder Structure

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

This snippet shows the recommended folder structure for a native Objective-C addon in Electron.

```txt
my-native-objc-addon/
├── binding.gyp
├── include/
│   └── objc_code.h
├── js/
│   └── index.js
├── package.json
└── src/
    ├── objc_addon.mm
    └── objc_code.mm
```

--------------------------------

### Collect Electron PGO profiles locally

Source: https://github.com/electron/electron/blob/main/script/pgo/README.md

Build an instrumented Electron binary and run the collection script. Linux environments require a virtual display like xvfb-run.

```sh
# 1. Build the instrumented Electron (example with build-tools)
e init pgo-instrument --root=$PWD --import pgo-instrument
e build

# 2. Collect (Linux needs a display, e.g. under xvfb-run)
xvfb-run -a -s "-screen 0 1280x1024x24" \
  node electron/script/pgo/collect-profile.js \
    --electron out/Release/electron \
    --output out/Release/electron.profdata
```

--------------------------------

### Use electron-installer-snap programmatically in Node.js

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

Call electron-installer-snap as a Node.js module within your build pipeline to create snap packages programmatically. The function accepts options and returns a promise that resolves with the path to the created snap file.

```javascript
const snap = require('electron-installer-snap')

snap(options)
  .then(snapPath => console.log(`Created snap at ${snapPath}!`))
```

--------------------------------

### Configure Windows Code Signing in electron-winstaller

Source: https://github.com/electron/electron/blob/main/docs/tutorial/code-signing.md

Include the windowsSign configuration within the createWindowsInstaller options to sign Squirrel.Windows installers.

```javascript
const electronInstaller = require('electron-winstaller')
// NB: Use this syntax within an async function, Node does not have support for
//     top-level await as of Node 12.
try {
  await electronInstaller.createWindowsInstaller({
    appDirectory: '/tmp/build/my-app-64',
    outputDirectory: '/tmp/build/installer64',
    authors: 'My App Inc.',
    exe: 'myapp.exe',
    windowsSign: {
      signWithParams: '--my=custom --parameters',
      // If signtool.exe does not work for you, customize!
      signToolPath: 'C:\\Path\\To\\my-custom-tool.exe'
    }
  })
  console.log('It worked!')
} catch (e) {
  console.log(`No dice: ${e.message}`)
}
```

--------------------------------

### Install Rosetta 2 on macOS for Arm64-specific dependencies

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-macos.md

This command installs Rosetta 2, which is recommended for macOS Arm64 systems when using dependencies that need to cross-compile between x64 and arm64 architectures. It ensures compatibility for various build tools and libraries by allowing x64 applications to run on Arm64 Macs.

```sh
softwareupdate --install-rosetta
```

--------------------------------

### app.name

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Gets or sets the current application name. Defaults to the name specified in the package.json file.

```APIDOC
### `app.name`

- **Type**: `string`

#### Description
A `string` property that indicates the current application's name, which is the name in the application's `package.json` file. Usually the `name` field of `package.json` is a short lowercase name, according to the npm modules spec. You should usually also specify a `productName` field, which is your application's full capitalized name, and which will be preferred over `name` by Electron.
```

--------------------------------

### app.applicationMenu

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Gets or sets the current application menu. Returns a Menu instance if set, or null otherwise.

```APIDOC
### `app.applicationMenu`

- **Type**: `Menu | null`

#### Description
A `Menu | null` property that returns `Menu` if one has been set and `null` otherwise. Users can pass a `Menu` to set this property.
```

--------------------------------

### Install Python certifi package to resolve SSL certificate errors

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-macos.md

This command installs the `certifi` Python package, which provides a curated bundle of default root certificates. Installing `certifi` can resolve `SSL: CERTIFICATE_VERIFY_FAILED` errors encountered during the Electron build process, especially when Python's default OpenSSL configuration is problematic, by ensuring proper certificate validation.

```sh
pip install certifi
```

--------------------------------

### Implement TodoWindowController initialization

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Initializes the controller without a nib file and prepares the internal todo array.

```objc
// Previous code...

// Controller for the main window
@implementation TodoWindowController

- (instancetype)init {
    self = [super initWithWindowNibName:@""];
    if (self) {
        // Create an array to store todos
        _todos = [NSMutableArray array];
        [self setupWindow];
    }
    return self;
}

// More code to follow later...
```

--------------------------------

### Objective-C++ Instance Method Implementation

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-swift-macos.md

Contains the logic for HelloWorld, HelloGui, On, and Destroy methods. Use this to handle JavaScript calls and manage persistent references.

```objc
// Previous code...

private:
    Napi::Env env_;
    Napi::ObjectReference emitter;
    Napi::ObjectReference callbacks;
    napi_threadsafe_function tsfn_;

    Napi::Value HelloWorld(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();

        if (info.Length() < 1 || !info[0].IsString()) {
            Napi::TypeError::New(env, "Expected string argument").ThrowAsJavaScriptException();
            return env.Null();
        }

        std::string input = info[0].As<Napi::String>();
        NSString* nsInput = [NSString stringWithUTF8String:input.c_str()];
        NSString* result = [SwiftBridge helloWorld:nsInput];

        return Napi::String::New(env, [result UTF8String]);
    }

    void HelloGui(const Napi::CallbackInfo& info) {
        [SwiftBridge helloGui];
    }

    Napi::Value On(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();

        if (info.Length() < 2 || !info[0].IsString() || !info[1].IsFunction()) {
            Napi::TypeError::New(env, "Expected (string, function) arguments").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        callbacks.Value().Set(info[0].As<Napi::String>(), info[1].As<Napi::Function>());
        return env.Undefined();
    }

    Napi::Value Destroy(const Napi::CallbackInfo& info) {
        callbacks.Reset();
        emitter.Reset();

        if (tsfn_ != nullptr) {
            napi_release_threadsafe_function(tsfn_, napi_tsfn_abort);
            tsfn_ = nullptr;
        }

        return info.Env().Undefined();
    }
};

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    return SwiftAddon::Init(env, exports);
}

NODE_API_MODULE(swift_addon, Init)
```

--------------------------------

### Initialize Objective-C++ implementation structure

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Sets up the basic imports and static callback variable in src/objc_code.mm.

```objc
#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>
#import <string>
#import <functional>
#import "../include/objc_code.h"

using TodoCallback = std::function<void(const std::string&)>;

static TodoCallback g_todoAddedCallback;

// More code to follow later...
```

--------------------------------

### <webview>.findInPage(text[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Starts a request to find all matches for the given text in the web page.

```APIDOC
## `<webview>.findInPage(text[, options])`

### Description
Starts a request to find all matches for the `text` in the web page. The result of the request can be obtained by subscribing to `found-in-page` event.

### Parameters
- **text** (`string`) - Required. Content to be searched, must not be empty.
- **options** (`Object`) - Optional
  - **forward** (`boolean`) - Optional. Whether to search forward or backward, defaults to `true`.
  - **findNext** (`boolean`) - Optional. Whether to begin a new text finding session with this request. Should be `true` for initial requests, and `false` for follow-up requests. Defaults to `false`.
  - **matchCase** (`boolean`) - Optional. Whether search should be case-sensitive, defaults to `false`.

### Return Value
- Returns `Integer` - The request id used for the request.
```

--------------------------------

### Using default OS menu roles in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/application-menu.md

This example demonstrates a more concise way to define an application menu by leveraging Electron's standard OS menu roles. It uses roles like `appMenu`, `fileMenu`, `editMenu`, `viewMenu`, and `windowMenu` to automatically generate common submenu structures, reducing verbosity.

```javascript
const { shell } = require('electron/common')
const { app, Menu } = require('electron/main')

const template = [
  ...(process.platform === 'darwin'
    ? [{ role: 'appMenu' }]
    : []),
  { role: 'fileMenu' },
  { role: 'editMenu' },
  { role: 'viewMenu' },
  { role: 'windowMenu' },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
```

--------------------------------

### Complete Objective-C N-API Addon Class Structure

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Presents the full `ObjcAddon` class, demonstrating N-API initialization, object wrapping, and the setup of a threadsafe function for asynchronous callbacks from native code to JavaScript.

```objc
#include <napi.h>
#include <string>
#include "../include/objc_code.h"

class ObjcAddon : public Napi::ObjectWrap<ObjcAddon> {
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports) {
        Napi::Function func = DefineClass(env, "ObjcMacosAddon", {
            InstanceMethod("helloWorld", &ObjcAddon::HelloWorld),
            InstanceMethod("helloGui", &ObjcAddon::HelloGui),
            InstanceMethod("on", &ObjcAddon::On),
            InstanceMethod("destroy", &ObjcAddon::Destroy)
        });

        Napi::FunctionReference* constructor = new Napi::FunctionReference();
        *constructor = Napi::Persistent(func);
        env.SetInstanceData(constructor);

        exports.Set("ObjcMacosAddon", func);
        return exports;
    }

    struct CallbackData {
        std::string eventType;
        std::string payload;
        ObjcAddon* addon;
    };

    ObjcAddon(const Napi::CallbackInfo& info)
        : Napi::ObjectWrap<ObjcAddon>(info)
        , env_(info.Env())
        , emitter(Napi::Persistent(Napi::Object::New(info.Env())))
        , callbacks(Napi::Persistent(Napi::Object::New(info.Env())))
        , tsfn_(nullptr) {

        napi_status status = napi_create_threadsafe_function(
            env_,
            nullptr,
            nullptr,
            Napi::String::New(env_, "ObjcCallback"),
            0,
            1,
            nullptr,
            nullptr,
            this,
            [](napi_env env, napi_value js_callback, void* context, void* data) {
                auto* callbackData = static_cast<CallbackData*>(data);
                if (!callbackData) return;

                Napi::Env napi_env(env);
                Napi::HandleScope scope(napi_env);

                auto addon = static_cast<ObjcAddon*>(context);
                if (!addon) {
                    delete callbackData;
                    return;
                }

                try {
                    auto callback = addon->callbacks.Value().Get(callbackData->eventType).As<Napi::Function>();
                    if (callback.IsFunction()) {
                        callback.Call(addon->emitter.Value(), {Napi::String::New(napi_env, callbackData->payload)});
                    }
                } catch (...) {}

                delete callbackData;
            },
            &tsfn_
        );

        if (status != napi_ok) {
            Napi::Error::New(env_, "Failed to create threadsafe function").ThrowAsJavaScriptException();
            return;
        }

        // Set up the callbacks
        auto makeCallback = [this](const std::string& eventType) {
            return [this, eventType](const std::string& payload) {
                if (tsfn_ != nullptr) {
                    auto* data = new CallbackData{
                        eventType,

```

--------------------------------

### contents.getZoomMode()

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents.md

Gets the current zoom mode of the web contents.

```APIDOC
## contents.getZoomMode()

### Description
Returns the current zoom mode.

### Return Value
- Returns `string` - The current zoom mode (`default`, `isolated`, `manual`, or `disabled`).
```

--------------------------------

### Initialize NSWindow and basic UI controls in Objective-C

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Creates a titled, resizable window and adds a text field, date picker, and button to the content view.

```objc
// Previous code...

- (void)setupWindow {
    // Create a window
    NSRect frame = NSMakeRect(0, 0, 400, 300);
    NSWindow *window = [[NSWindow alloc] initWithContentRect:frame
                                         styleMask:NSWindowStyleMaskTitled | NSWindowStyleMaskClosable | NSWindowStyleMaskResizable
                                         backing:NSBackingStoreBuffered
                                         defer:NO];
    [window setTitle:@"Todo List"];
    [window center];
    self.window = window;

    // Set up the content view with auto layout
    NSView *contentView = [window contentView];

    // Create text field
    _textField = [[NSTextField alloc] initWithFrame:NSMakeRect(20, 260, 200, 24)];
    [_textField setPlaceholderString:@"Enter a todo..."];
    [contentView addSubview:_textField];

    // Create date picker
    _datePicker = [[NSDatePicker alloc] initWithFrame:NSMakeRect(230, 260, 100, 24)];
    [_datePicker setDatePickerStyle:NSDatePickerStyleTextField];
    [_datePicker setDatePickerElements:NSDatePickerElementFlagYearMonthDay];
    [contentView addSubview:_datePicker];

    // Create add button
    _addButton = [[NSButton alloc] initWithFrame:NSMakeRect(340, 260, 40, 24)];
    [_addButton setTitle:@"Add"];
    [_addButton setBezelStyle:NSBezelStyleRounded];
    [_addButton setTarget:self];
    [_addButton setAction:@selector(addTodo:)];
    [contentView addSubview:_addButton];

    // More UI elements to follow in the next step...
}

// More code to follow later...
```

--------------------------------

### Handle Electron Application Lifecycle Events with app module

Source: https://github.com/electron/electron/blob/main/docs/tutorial/process-model.md

This example illustrates how to use Electron's `app` module to manage the application's lifecycle. Specifically, it shows how to listen for the `window-all-closed` event to quit the application automatically when all windows are closed, but only on non-macOS platforms, providing a more native user experience.

```js
// quitting the app when no windows are open on non-macOS platforms
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
```

--------------------------------

### Complete SwiftAddon Class Structure

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-swift-macos.md

Provides the full class definition including the Init static method and constructor. Essential for registering the addon and setting up thread-safe functions.

```objc
#import <Foundation/Foundation.h>
#import "SwiftBridge.h"
#include <napi.h>

class SwiftAddon : public Napi::ObjectWrap<SwiftAddon> {
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports) {
        Napi::Function func = DefineClass(env, "SwiftAddon", {
            InstanceMethod("helloWorld", &SwiftAddon::HelloWorld),
            InstanceMethod("helloGui", &SwiftAddon::HelloGui),
            InstanceMethod("on", &SwiftAddon::On),
            InstanceMethod("destroy", &SwiftAddon::Destroy)
        });

        Napi::FunctionReference* constructor = new Napi::FunctionReference();
        *constructor = Napi::Persistent(func);
        env.SetInstanceData(constructor);

        exports.Set("SwiftAddon", func);
        return exports;
    }

    struct CallbackData {
        std::string eventType;
        std::string payload;
        SwiftAddon* addon;
    };

    SwiftAddon(const Napi::CallbackInfo& info)
        : Napi::ObjectWrap<SwiftAddon>(info)
        , env_(info.Env())
        , emitter(Napi::Persistent(Napi::Object::New(info.Env())))
        , callbacks(Napi::Persistent(Napi::Object::New(info.Env())))
        , tsfn_(nullptr) {

        napi_status status = napi_create_threadsafe_function(
            env_,
            nullptr,
            nullptr,
            Napi::String::New(env_, "SwiftCallback"),
            0,
            1,
            nullptr,
            nullptr,
            this,
            [](napi_env env, napi_value js_callback, void* context, void* data) {
                auto* callbackData = static_cast<CallbackData*>(data);
                if (!callbackData) return;

                Napi::Env napi_env(env);
                Napi::HandleScope scope(napi_env);

                auto addon = static_cast<SwiftAddon*>(context);
                if (!addon) {
                    delete callbackData;
                    return;
                }

                try {

```

--------------------------------

### Example of SSL Certificate Verification Failure during Electron Build

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-macos.md

This code snippet shows an example of an SSL certificate verification error (`CERTIFICATE_VERIFY_FAILED`) that can occur during the Electron build process, specifically when downloading clang components. This issue often arises due to Python's handling of OpenSSL certificates and can prevent successful resource downloads.

```sh
________ running 'python3 src/tools/clang/scripts/update.py' in '/Users/<user>/electron'
Downloading https://commondatastorage.googleapis.com/chromium-browser-clang/Mac_arm64/clang-llvmorg-15-init-15652-g89a99ec9-1.tgz
<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:997)>
Retrying in 5 s ...
Downloading https://commondatastorage.googleapis.com/chromium-browser-clang/Mac_arm64/clang-llvmorg-15-init-15652-g89a99ec9-1.tgz
<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:997)>
Retrying in 10 s ...
Downloading https://commondatastorage.googleapis.com/chromium-browser-clang/Mac_arm64/clang-llvmorg-15-init-15652-g89a99ec9-1.tgz
<urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:997)>
Retrying in 20 s ...
```

--------------------------------

### Configure Swift Build in binding.gyp

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-swift-macos.md

This `binding.gyp` configuration defines actions to compile Swift code into a static library and copy it to the output directory, including fixing the library path for dynamic linking.

```json
{
  // ...other code
  "actions": [
    {
      "action_name": "build_swift",
      "inputs": [
        "src/SwiftCode.swift"
      ],
      "outputs": [
        "build_swift/libSwiftCode.a",
        "build_swift/swift_addon-Swift.h"
      ],
      "action": [
        "swiftc",
        "src/SwiftCode.swift",
        "-emit-objc-header-path", "./build_swift/swift_addon-Swift.h",
        "-emit-library", "-o", "./build_swift/libSwiftCode.a",
        "-emit-module", "-module-name", "swift_addon",
        "-module-link-name", "SwiftCode"
      ]
    },
    {
      "action_name": "copy_swift_lib",
      "inputs": [
        "<(module_root_dir)/build_swift/libSwiftCode.a"
      ],
      "outputs": [
        "<(PRODUCT_DIR)/libSwiftCode.a"
      ],
      "action": [
        "sh",
        "-c",
        "cp -f <(module_root_dir)/build_swift/libSwiftCode.a <(PRODUCT_DIR)/libSwiftCode.a && install_name_tool -id @rpath/libSwiftCode.a <(PRODUCT_DIR)/libSwiftCode.a"
      ]
    }
  ]
  // ...other code
}
```

--------------------------------

### Install Playwright Test Framework for Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/automated-testing.md

Install the @playwright/test package as a development dependency. Playwright is an end-to-end testing framework with experimental Electron support via Chrome DevTools Protocol (CDP). The tutorial uses version 1.52.0 or later.

```shell
npm install --save-dev @playwright/test
```

--------------------------------

### Configure custom user agent for webview

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Sets the guest page user agent before navigation starts. To alter it after load, call the setUserAgent method instead.

```html
<webview src="https://www.github.com/" useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"></webview>
```

--------------------------------

### Initialize GTK UI with GtkBuilder in C++

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

Loads UI components from XML markup and connects signals to event handlers.

```cpp
                                "      </object>"
                                "    </child>"
                                "  </object>"
                                "</interface>",
                                -1, nullptr);

    auto *window = GTK_WINDOW(gtk_builder_get_object(builder, "window"));
    auto *button = GTK_BUTTON(gtk_builder_get_object(builder, "add_button"));
    auto *list = GTK_LIST_BOX(gtk_builder_get_object(builder, "todo_list"));

    gtk_window_set_application(window, app);

    g_signal_connect(button, "clicked", G_CALLBACK(on_add_clicked), builder);
    g_signal_connect(list, "row-activated", G_CALLBACK(on_row_activated), nullptr);

    gtk_widget_show_all(GTK_WIDGET(window));
```

--------------------------------

### Inspect Basic GPU Info Response in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Example structure returned by app.getGPUInfo('basic') containing basic GPU device attributes and model version. The promise rejects if GPU acceleration is completely disabled.

```javascript
{
  auxAttributes:
   {
     amdSwitchable: true,
     canSupportThreadedTextureMailbox: false,
     directComposition: false,
     directRendering: true,
     glResetNotificationStrategy: 0,
     inProcessGpu: true,
     initializationTime: 0,
     jpegDecodeAcceleratorSupported: false,
     optimus: false,
     passthroughCmdDecoder: false,
     sandboxed: false,
     softwareRendering: false,
     supportsOverlays: false,
     videoDecodeAcceleratorFlags: 0
   },
  gpuDevice:
   [{ active: true, deviceId: 26657, vendorId: 4098 },
     { active: false, deviceId: 3366, vendorId: 32902 }],
  machineModelName: 'MacBookPro',
  machineModelVersion: '11.5'
}
```

--------------------------------

### Check for a command line switch in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/command-line.md

This example demonstrates how to use `app.commandLine.hasSwitch()` to determine if a specific command-line flag, such as `--disable-gpu`, is present in Electron's Chromium command line arguments. This allows for conditional application behavior based on startup flags. The method returns a boolean indicating the switch's presence.

```js
const { app } = require('electron')

app.commandLine.hasSwitch('disable-gpu')
```

--------------------------------

### Build and Development Loop Commands

Source: https://github.com/electron/electron/blob/main/CLAUDE.md

Commands for syncing source code, building targets, and running the application.

```bash
e sync
```

```bash
e sync --3
```

```bash
e build
```

```bash
e build -k 999
```

```bash
e build -t <target>
```

```bash
e start
```

```bash
e start --version
```

```bash
e test
```

```bash
e debug
```

--------------------------------

### app.getCurrentActivityType()

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Gets the activity type of the currently running macOS user activity.

```APIDOC
## app.getCurrentActivityType()

### Description
Returns the type of the currently running activity (macOS only).

### Returns
- **string** - The type of the currently running activity.
```

--------------------------------

### win.show()

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Shows and gives focus to the window.

```APIDOC
### `win.show()`

Shows and gives focus to the window.
```

--------------------------------

### Electron Launch Script Shell Implementation

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

A shell script that serves as the entry point for launching an Electron application from snapcraft. It executes the application binary with context information about the current working directory and process ID, redirecting output to suppress console messages.

```sh
#!/bin/sh

exec "$@" --executed-from="$(pwd)" --pid=$$ > /dev/null 2>&1 &
```

--------------------------------

### Define Default Menu Item Order in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/menus.md

This example demonstrates a basic Electron menu template where items are ordered sequentially based on their definition in the array. It illustrates the default behavior of `Menu.buildFromTemplate` without any explicit positioning attributes.

```js
[
  { id: '1', label: 'one' },
  { id: '2', label: 'two' },
  { id: '3', label: 'three' },
  { id: '4', label: 'four' }
]
```

```plaintext
- one
- two
- three
- four
```

--------------------------------

### tray.getGUID()

Source: https://github.com/electron/electron/blob/main/docs/api/tray.md

Returns the GUID used to uniquely identify the tray icon, or null if not set.

```APIDOC
## tray.getGUID()

### Description
Returns the GUID used to uniquely identify the tray icon and allow it to retain its position between relaunches, or null if none is set.

### Method Signature
`tray.getGUID()`

### Parameters
(None)

### Return Value
- **string | null** - The GUID used to uniquely identify the tray icon, or null if none is set.
```

--------------------------------

### GET /BrowserWindow.getTitle

Source: https://github.com/electron/electron/wiki/browser-window

Retrieves the title of the native window.

```APIDOC
## GET /BrowserWindow.getTitle

### Description
Returns the title of the native window.

**Note:** The title of web page can be different from the title of the native window.

### Method
GET

### Endpoint
/BrowserWindow.getTitle

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **title** (String) - The title of the native window.

#### Response Example
"My Electron App"
```

--------------------------------

### net.fetch(input[, init])

Source: https://github.com/electron/electron/blob/main/docs/api/net.md

Sends a request, similarly to how fetch() works in the renderer, using Chromium's network stack.

```APIDOC
## net.fetch(input[, init])

### Description
Sends a request, similarly to how fetch() works in the renderer, using Chromium's network stack. This differs from Node's fetch(), which uses Node.js's HTTP stack.

### Parameters
- **input** (string | GlobalRequest) - The resource you wish to fetch.
- **init** (RequestInit & { bypassCustomProtocolHandlers?: boolean }) - Optional. Options for the request, including standard RequestInit and an optional bypassCustomProtocolHandlers flag.

### Returns
- **Promise<GlobalResponse>** - A Promise that resolves to a Response object.

### Example
```js
async function example () {
  const response = await net.fetch('https://my.app')
  if (response.ok) {
    const body = await response.json()
    // ... use the result.
  }
}
```
```

--------------------------------

### ELECTRON_DEBUG_NOTIFICATIONS sample output on macOS

Source: https://github.com/electron/electron/blob/main/docs/api/environment-variables.md

Example output from ELECTRON_DEBUG_NOTIFICATIONS showing notification lifecycle events including creation, display, activation, and user interactions on macOS.

```sh
Notification created (com.github.Electron:notification:EAF7B87C-A113-43D7-8E76-F88EC9D73D44)
Notification displayed (com.github.Electron:notification:EAF7B87C-A113-43D7-8E76-F88EC9D73D44)
Notification activated (com.github.Electron:notification:EAF7B87C-A113-43D7-8E76-F88EC9D73D44)
Notification replied to (com.github.Electron:notification:EAF7B87C-A113-43D7-8E76-F88EC9D73D44)
```

--------------------------------

### Install and Rebuild Native Modules for Electron using @electron/rebuild

Source: https://github.com/electron/electron/blob/main/docs/tutorial/using-native-node-modules.md

This method demonstrates how to install the `@electron/rebuild` tool and use it to automatically recompile native Node.js modules for your Electron application. It simplifies the process by handling header downloads and rebuilding steps, making it suitable for both development and production builds.

```sh
npm install --save-dev @electron/rebuild

# Every time you run "npm install", run this:
./node_modules/.bin/electron-rebuild

# If you have trouble on Windows, try:
.\node_modules\.bin\electron-rebuild.cmd
```

--------------------------------

### GET inAppPurchase.getReceiptURL

Source: https://github.com/electron/electron/blob/main/docs/api/in-app-purchase.md

Retrieves the file path to the Mac App Store receipt. The receipt contains information about all purchases made through the application.

```APIDOC
## GET inAppPurchase.getReceiptURL

### Description
Retrieves the file path to the Mac App Store receipt for the application.

### Method
GET

### Signature
`inAppPurchase.getReceiptURL()`

### Parameters
None

### Request Example
```javascript
const { inAppPurchase } = require('electron');
const fs = require('fs');

const receiptPath = inAppPurchase.getReceiptURL();
console.log('Receipt path:', receiptPath);

// Read receipt file
const receiptData = fs.readFileSync(receiptPath);
console.log('Receipt data:', receiptData);
```

### Response
#### Success Response
- **Returns** (string) - The file path to the receipt

### Notes
- The receipt contains information about all purchases
- Can be used for server-side validation of purchases
- Receipt path is typically in the application's sandbox directory
```

--------------------------------

### Set up IPC handler in main.js

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-3-preload.md

Define the IPC handler using ipcMain.handle before creating the BrowserWindow to ensure the listener is ready for incoming requests.

```javascript
const { app, BrowserWindow, ipcMain } = require('electron/main')

const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
})
```

--------------------------------

### GET downloadItem.getState()

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

Retrieves the current state of the download. Returns one of four possible states: progressing, completed, cancelled, or interrupted.

```APIDOC
## GET downloadItem.getState()

### Description
Returns the current state of the download item.

### Method
GET

### Returns
- **string** - The current download state

### Possible Values
- `progressing` - Download is in progress
- `completed` - Download has completed successfully
- `cancelled` - Download was cancelled by user
- `interrupted` - Download was interrupted

### Response Example
```
"progressing"
```

### Notes
Use this method to determine the current status of a download and handle state transitions appropriately.
```

--------------------------------

### win.show()

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Displays the browser window.

```APIDOC
## win.show()

### Description
Shows and displays the browser window.

### Example
```js
win.show()
```
```

--------------------------------

### Create index.html

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

A basic HTML file to be rendered within the Electron window.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    >
    <meta
      http-equiv="X-Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    >
    <title>Hello from Electron renderer!</title>
  </head>
  <body>
    <h1>Hello from Electron renderer!</h1>
    <p>👋</p>
  </body>
</html>
```

--------------------------------

### contents.adjustSelection(options)

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents.md

Adjusts the starting and ending indices of the current text selection in the focused frame.

```APIDOC
## contents.adjustSelection(options)

### Description
Adjusts the current text selection starting and ending points in the focused frame by the given amounts. A negative amount moves the selection towards the beginning of the document, and a positive amount moves the selection towards the end of the document.

### Parameters
- **options** (Object)
  - **start** (Number) [optional] - Amount to shift the start index of the current selection.
  - **end** (Number) [optional] - Amount to shift the end index of the current selection.
```

--------------------------------

### Event: will-finish-launching

Source: https://github.com/electron/electron/wiki/app

Emitted during application startup before the main window is created. This is the appropriate place to setup crash reporter and auto updater.

```APIDOC
## Event: will-finish-launching

### Description
Setup crash reporter and auto updater here. This event is emitted early in the application startup sequence.

### Event Name
`will-finish-launching`

### Parameters
None

### Usage Example
```javascript
app.on('will-finish-launching', function() {
  // Setup crash reporter
  // Setup auto updater
});
```
```

--------------------------------

### Creating a basic tray menu

Source: https://github.com/electron/electron/blob/main/docs/api/tray.md

Initializes a basic Electron tray icon with a context menu when the application is ready. This snippet sets a tooltip and assigns a menu built from a template.

```javascript
const { app, Menu, Tray } = require('electron')

let tray = null
app.whenReady().then(() => {
  tray = new Tray('/path/to/my/icon')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})
```

--------------------------------

### Clone Electron Repository using Git

Source: https://github.com/electron/electron/wiki/Build-Instructions-(Windows)

This command clones the Electron (atom-shell) source code repository from GitHub to your local machine. It's the first step to obtaining the project files and requires Git to be installed and configured.

```bash
$ git clone https://github.com/atom/atom-shell.git
```

--------------------------------

### GET /api/usb/device

Source: https://github.com/electron/electron/blob/main/docs/api/structures/usb-device.md

Retrieves the metadata and configuration details for a specific USB device connected to the system.

```APIDOC
## GET /api/usb/device

### Description
Returns a USBDevice object containing hardware identifiers, version information, and the current configuration state of a paired USB device.

### Method
GET

### Endpoint
/api/usb/device

### Response
#### Success Response (200)
- **configuration** (Object) - Optional. Information about the currently selected USB configuration.
  - **configurationValue** (Integer) - The configuration value.
  - **configurationName** (string) - Description of the configuration.
  - **interfaces** (Object[]) - Array of USBInterface objects.
    - **interfaceNumber** (Integer) - The interface number.
    - **alternate** (Object) - Currently selected alternative configuration.
      - **alternateSetting** (Integer) - Alternate setting number.
      - **interfaceClass** (Integer) - Class code of the interface.
      - **interfaceSubclass** (Integer) - Subclass code of the interface.
      - **interfaceProtocol** (Integer) - Protocol supported by the interface.
      - **interfaceName** (string) - Optional name of the interface.
      - **endpoints** (Object[]) - Array of USBEndpoint objects.
        - **endpointNumber** (Integer) - Value from 1 to 15.
        - **direction** (string) - 'in' or 'out'.
        - **type** (string) - 'bulk', 'interrupt', or 'isochronous'.
        - **packetSize** (Integer) - Size of data packets.
- **configurations** (Object[]) - Array of all available USBConfiguration interfaces.
- **deviceClass** (Integer) - Communication interface class supported by the device.
- **deviceId** (string) - Unique identifier for the device.
- **deviceProtocol** (Integer) - Communication interface protocol.
- **deviceSubclass** (Integer) - Communication interface subclass.
- **deviceVersionMajor** (Integer) - Major version number of the device.
- **deviceVersionMinor** (Integer) - Minor version number of the device.
- **deviceVersionSubminor** (Integer) - Subminor version number of the device.
- **manufacturerName** (string) - Optional. Name of the device manufacturer.
- **productId** (Integer) - The USB product ID.
- **productName** (string) - Optional. The name of the device.
- **serialNumber** (string) - Optional. The USB device serial number.
- **usbVersionMajor** (Integer) - USB protocol major version.
- **usbVersionMinor** (Integer) - USB protocol minor version.
- **usbVersionSubminor** (Integer) - USB protocol subminor version.
- **vendorId** (Integer) - The USB vendor ID.

### Response Example
{
  "deviceId": "unique-device-id-001",
  "vendorId": 1234,
  "productId": 5678,
  "manufacturerName": "Electron Hardware",
  "productName": "USB Controller",
  "configuration": {
    "configurationValue": 1,
    "interfaces": [
      {
        "interfaceNumber": 0,
        "alternate": {
          "alternateSetting": 0,
          "interfaceClass": 255,
          "endpoints": [
            {
              "endpointNumber": 1,
              "direction": "in",
              "type": "bulk",
              "packetSize": 64
            }
          ]
        }
      }
    ]
  }
}
```

--------------------------------

### app.startAccessingSecurityScopedResource(bookmarkData)

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Starts accessing a security scoped resource using base64 encoded bookmark data, allowing Mac App Store packages to reach outside their sandbox. Returns a stop function that must be called when finished to prevent leaking kernel resources.

```APIDOC
## app.startAccessingSecurityScopedResource(bookmarkData)

### Platform
MAS (Mac App Store)

### Description
Start accessing a security scoped resource. With this method, Electron applications that are packaged for the Mac App Store may reach outside their sandbox to access files chosen by the user.

### Parameters
- **bookmarkData** (string) - The base64 encoded security scoped bookmark data returned by the `dialog.showOpenDialog` or `dialog.showSaveDialog` methods.

### Return Value
- Returns `Function` - This function **must** be called once you have finished accessing the security scoped file. If not called, kernel resources will be leaked and the app will lose access outside the sandbox until restarted.

### Usage Example
```js
const { app, dialog } = require('electron')
const fs = require('node:fs')

let filepath
let bookmark

dialog.showOpenDialog(null, { securityScopedBookmarks: true }).then(({ filePaths, bookmarks }) => {
  filepath = filePaths[0]
  bookmark = bookmarks[0]
  fs.readFileSync(filepath)
})

// ... restart app ...

const stopAccessingSecurityScopedResource = app.startAccessingSecurityScopedResource(bookmark)
fs.readFileSync(filepath)
stopAccessingSecurityScopedResource()
```
```

--------------------------------

### Create and display multiple WebContentsView instances in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents-view.md

Demonstrates how to create a BaseWindow and add multiple WebContentsView instances as child views, each displaying different web content at specified positions and sizes. This example shows loading different URLs into separate views positioned side-by-side within the main window.

```javascript
const { BaseWindow, WebContentsView } = require('electron')

const win = new BaseWindow({ width: 800, height: 400 })

const view1 = new WebContentsView()
win.contentView.addChildView(view1)
view1.webContents.loadURL('https://electronjs.org')
view1.setBounds({ x: 0, y: 0, width: 400, height: 400 })

const view2 = new WebContentsView()
win.contentView.addChildView(view2)
view2.webContents.loadURL('https://github.com/electron/electron')
view2.setBounds({ x: 400, y: 0, width: 400, height: 400 })
```

--------------------------------

### GET /BrowserWindow.getPosition

Source: https://github.com/electron/electron/wiki/browser-window

Retrieves the current `x` and `y` coordinates of the window.

```APIDOC
## GET /BrowserWindow.getPosition

### Description
Returns an array that contains window's current position.

### Method
GET

### Endpoint
/BrowserWindow.getPosition

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **position** (Array<Integer>) - The current X and Y coordinates of the window.

#### Response Example
[
  100,
  200
]
```

--------------------------------

### process.getSystemVersion()

Source: https://github.com/electron/electron/blob/main/docs/api/process.md

Returns the version of the host operating system.

```APIDOC
## process.getSystemVersion()\n\n### Description\nReturns the version of the host operating system.\n\n### Method\nprocess.getSystemVersion()\n\n### Response\n#### Success Response\n- **version** (string) - The version of the host operating system.\n\n### Request Example\nconst version = process.getSystemVersion()\n\n### Response Example\n\"10.13.6\"
```

--------------------------------

### Using webUtils.getPathForFile with Context Isolation in Electron (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/api/web-utils.md

This example demonstrates the recommended way to use `webUtils.getPathForFile` when context isolation is enabled. The renderer process calls an exposed API, which then uses `webUtils.getPathForFile` in the preload script to retrieve the file system path. This prevents direct exposure of file paths to web content.

```js
// After

// Renderer:

const file = document.querySelector('input[type=file]').files[0]
electronApi.doSomethingWithFile(file)
```

```js
// Preload script:

const { contextBridge, webUtils } = require('electron')

contextBridge.exposeInMainWorld('electronApi', {
  doSomethingWithFile (file) {
    const path = webUtils.getPathForFile(file)
    // Do something with the path, e.g., send it over IPC to the main process.
    // It's best not to expose the full file path to the web content if possible.
  }
})
```

--------------------------------

### GET /BrowserWindow.getMaximumSize

Source: https://github.com/electron/electron/wiki/browser-window

Retrieves the maximum width and height of the window.

```APIDOC
## GET /BrowserWindow.getMaximumSize

### Description
Returns an array that contains window's maximum width and height.

### Method
GET

### Endpoint
/BrowserWindow.getMaximumSize

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **dimensions** (Array<Integer>) - The maximum width and height of the window.

#### Response Example
[
  800,
  600
]
```

--------------------------------

### Build snap package with snapcraft command

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

Execute the snapcraft build command to compile and package the Electron application into a .snap file. This command reads the snapcraft.yaml configuration and produces the final distributable snap package.

```shell
snapcraft
```

--------------------------------

### Configure snapcraft.yaml for Electron packager

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

Define the Snapcraft configuration file that specifies application metadata, build process, dependencies, and runtime environment. This YAML file orchestrates the compilation and packaging of an Electron application into a snap file using @electron/packager.

```yaml
name: electron-packager-hello-world
version: '0.1'
summary: Hello World Electron app
description: |
  Simple Hello World Electron app as an example
base: core22
confinement: strict
grade: stable

apps:
  electron-packager-hello-world:
    command: my-app/my-app --no-sandbox
    extensions: [gnome]
    plugs:
    - browser-support
    - network
    - network-bind
    environment:
      TMPDIR: $XDG_RUNTIME_DIR

parts:
  my-app:
    plugin: nil
    source: .
    override-build: |
        npm install electron @electron/packager
        npx electron-packager . --overwrite --platform=linux --output=release-build --prune=true
        cp -rv ./my-app-linux-* $SNAPCRAFT_PART_INSTALL/my-app
    build-snaps:
    - node/14/stable
    build-packages:
    - unzip
    stage-packages:
    - libnss3
    - libnspr4
```

--------------------------------

### Open URL in Default Browser - Electron Shell

Source: https://github.com/electron/electron/wiki/Shell

Opens a given URL using the system's default browser or application. This example demonstrates opening a GitHub URL. The shell module must be required before use.

```javascript
var shell = require('shell');
shell.openExternal('https://github.com');
```

--------------------------------

### Set Windows on Arm build environment variable

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Configure environment for cross-compiling to Windows on Arm before running gclient sync. Use batch or PowerShell syntax depending on your shell.

```bat
set ELECTRON_BUILDING_WOA=1
gclient sync -f --with_branch_heads --with_tags
```

```powershell
$env:ELECTRON_BUILDING_WOA=1
gclient sync -f --with_branch_heads --with_tags
```

--------------------------------

### GET /BrowserWindow.isKiosk

Source: https://github.com/electron/electron/wiki/browser-window

Checks whether the window is currently in kiosk mode.

```APIDOC
## GET /BrowserWindow.isKiosk

### Description
Returns whether the window is in kiosk mode.

### Method
GET

### Endpoint
/BrowserWindow.isKiosk

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **inKioskMode** (Boolean) - `true` if the window is in kiosk mode, `false` otherwise.

#### Response Example
true
```

--------------------------------

### Access Linux selection clipboard

Source: https://github.com/electron/electron/blob/main/docs/api/clipboard.md

Demonstrates reading and writing to the Linux-specific selection clipboard using the clipboard.selection sub-namespace.

```js
const { clipboard } = require('electron')

async function run () {
  await clipboard.selection.writeText('Example string')
  console.log(await clipboard.selection.readText())
}

run()
```

--------------------------------

### Complete Objective-C Todo Application Implementation

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Full implementation of objc_code.mm with imports, callback typedef, TodoWindowController interface and implementation. Includes window setup with text field, date picker, add button, and table view for displaying todos. This is the complete file structure required for the native macOS UI integration.

```objc
#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>
#import <string>
#import <functional>
#import "../include/objc_code.h"

using TodoCallback = std::function<void(const std::string&)>;

static TodoCallback g_todoAddedCallback;

// Forward declaration of our custom classes
@interface TodoWindowController : NSWindowController
@property (strong) NSTextField *textField;
@property (strong) NSDatePicker *datePicker;
@property (strong) NSButton *addButton;
@property (strong) NSTableView *tableView;
@property (strong) NSMutableArray<NSDictionary*> *todos;
@end

// Controller for the main window
@implementation TodoWindowController

- (instancetype)init {
    self = [super initWithWindowNibName:@""];
    if (self) {
        // Create an array to store todos
        _todos = [NSMutableArray array];
        [self setupWindow];
    }
    return self;
}

- (void)setupWindow {
    // Create a window
    NSRect frame = NSMakeRect(0, 0, 400, 300);
    NSWindow *window = [[NSWindow alloc] initWithContentRect:frame
                                         styleMask:NSWindowStyleMaskTitled | NSWindowStyleMaskClosable | NSWindowStyleMaskResizable
                                         backing:NSBackingStoreBuffered
                                         defer:NO];
    [window setTitle:@"Todo List"];
    [window center];
    self.window = window;

    // Set up the content view with auto layout
    NSView *contentView = [window contentView];

    // Create text field
    _textField = [[NSTextField alloc] initWithFrame:NSMakeRect(20, 260, 200, 24)];
    [_textField setPlaceholderString:@"Enter a todo..."];
    [contentView addSubview:_textField];

    // Create date picker
    _datePicker = [[NSDatePicker alloc] initWithFrame:NSMakeRect(230, 260, 100, 24)];
    [_datePicker setDatePickerStyle:NSDatePickerStyleTextField];
    [_datePicker setDatePickerElements:NSDatePickerElementFlagYearMonthDay];
    [contentView addSubview:_datePicker];

    // Create add button
    _addButton = [[NSButton alloc] initWithFrame:NSMakeRect(340, 260, 40, 24)];
    [_addButton setTitle:@"Add"];
    [_addButton setBezelStyle:NSBezelStyleRounded];
    [_addButton setTarget:self];
    [_addButton setAction:@selector(addTodo:)];
    [contentView addSubview:_addButton];

    // Create a scroll view for the table
    NSScrollView *scrollView = [[NSScrollView alloc] initWithFrame:NSMakeRect(20, 20, 360, 230)];
    [scrollView setBorderType:NSBezelBorder];
    [scrollView setHasVerticalScroller:YES];
    [contentView addSubview:scrollView];

    // Create table view
    _tableView = [[NSTableView alloc] initWithFrame:NSMakeRect(0, 0, 360, 230)];

    // Add a column for the todo text
```

--------------------------------

### GET /BrowserWindow.isResizable

Source: https://github.com/electron/electron/wiki/browser-window

Checks whether the window can be manually resized by the user.

```APIDOC
## GET /BrowserWindow.isResizable

### Description
Returns whether the window can be manually resized by user.

### Method
GET

### Endpoint
/BrowserWindow.isResizable

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **resizable** (Boolean) - `true` if the window is resizable, `false` otherwise.

#### Response Example
true
```

--------------------------------

### Initialize New Node.js Package for Native Addon

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron.md

These commands create a new directory for the native addon project, navigate into it, and initialize a basic `package.json` file using `npm init -y`. This sets up the foundational structure for a new Node.js package.

```sh
mkdir my-native-addon
cd my-native-addon
npm init -y
```

--------------------------------

### Install `beforeunload` Event Handler in JavaScript

Source: https://github.com/electron/electron/blob/main/spec/fixtures/api/beforeunload-false-prevent3.html

This JavaScript function installs an event listener for the `window`'s `beforeunload` event. It prevents the page from unloading for a specified number of times, controlled by the `removeAfterNTimes` parameter. After the count is exceeded, the default unload behavior is allowed. This can be useful in Electron applications to prompt users before closing or navigating away.

```javascript
function installBeforeUnload(removeAfterNTimes) {
  let count = 0;
  window.addEventListener('beforeunload', function handler(e) {
    setTimeout(() => console.log('beforeunload'));
    if (++count <= removeAfterNTimes) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
  console.log('installed');
}
```

--------------------------------

### app.getLoginItemSettings([options])

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Retrieves login item settings for the application on macOS and Windows. Allows checking startup status, registration state, and launch items.

```APIDOC
## app.getLoginItemSettings([options]) _macOS_ _Windows_

### Description
Retrieves the application's login item settings on macOS and Windows.

### Parameters
- **options** (Object) - Optional
  - **type** (string) - Optional _macOS_ - Can be `mainAppService`, `agentService`, `daemonService`, or `loginItemService`. Defaults to `mainAppService`.
  - **serviceName** (string) - Optional _macOS_ - The name of the service. Required if `type` is non-default.
  - **path** (string) - Optional _Windows_ - The executable path to compare against. Defaults to `process.execPath`.
  - **args** (string[]) - Optional _Windows_ - The command-line arguments to compare against. Defaults to an empty array.

### Return Value
- **Object**
  - **openAtLogin** (boolean) - `true` if the app is set to open at login.
  - **wasOpenedAtLogin** (boolean) - _macOS_ - `true` if the app was opened at login automatically.
  - **status** (string) - _macOS_ - Can be `not-registered`, `enabled`, `requires-approval`, or `not-found`.
  - **executableWillLaunchAtLogin** (boolean) - _Windows_ - `true` if app is set to open at login and its run key is not deactivated.
  - **launchItems** (Object[]) - _Windows_
    - **name** (string) - _Windows_ - Name value of a registry entry.
    - **path** (string) - _Windows_ - The executable to an app that corresponds to a registry entry.
    - **args** (string[]) - _Windows_ - The command-line arguments to pass to the executable.
    - **scope** (string) - _Windows_ - Can be `user` or `machine`.
    - **enabled** (boolean) - _Windows_ - `true` if the app registry key is startup approved.
```

--------------------------------

### Install Native Modules for Electron using npm Environment Variables

Source: https://github.com/electron/electron/blob/main/docs/tutorial/using-native-node-modules.md

This approach allows you to use `npm` directly to install native modules by setting specific environment variables. These variables inform `npm` and `node-pre-gyp` about the target Electron version, architecture, header download URL, and runtime, ensuring modules are built correctly for Electron.

```sh
# Electron's version.
export npm_config_target=1.2.3
# The architecture of your machine
export npm_config_arch=x64
export npm_config_target_arch=x64
# Download headers for Electron.
export npm_config_disturl=https://electronjs.org/headers
# Tell node-pre-gyp that we are building for Electron.
export npm_config_runtime=electron
# Tell node-pre-gyp to build module from source code.
export npm_config_build_from_source=true
# Install all dependencies, and store cache to ~/.electron-gyp.
HOME=~/.electron-gyp npm install
```

--------------------------------

### POST /BrowserWindow.openDevTools

Source: https://github.com/electron/electron/wiki/browser-window

Opens the developer tools for the window.

```APIDOC
## POST /BrowserWindow.openDevTools

### Description
Opens the developer tools.

### Method
POST

### Endpoint
/BrowserWindow.openDevTools

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
(None)

#### Response Example
(None)
```

--------------------------------

### Create a Session Instance in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/session.md

Retrieves or creates a persistent session instance by partition name from the main process.

```js
const { session } = require('electron')

const ses = session.fromPartition('persist:name')
console.log(ses.getUserAgent())
```

--------------------------------

### protocol.uninterceptProtocol(scheme)

Source: https://github.com/electron/electron/blob/main/docs/api/protocol.md

Removes the interceptor installed for a scheme and restores its original handler. This method is deprecated in favor of protocol.handle.

```APIDOC
## protocol.uninterceptProtocol(scheme)

### Description
Remove the interceptor installed for scheme and restore its original handler. This method is deprecated.

### Method
ELECTRON_API

### Endpoint
protocol.uninterceptProtocol(scheme)

### Parameters
#### Arguments
- **scheme** (string) - Required - The protocol scheme to unintercept.

### Response
#### Success Response
- **result** (boolean) - Whether the protocol was successfully unintercepted.
```

--------------------------------

### Execute standard development workflow

Source: https://github.com/electron/electron/blob/main/CLAUDE.md

Commands for syncing, building, testing, and exporting patches for Chromium dependencies.

```bash
# 1. Ensure you're on the right config
e show current

# 2. Sync to get latest code
e sync

# 3. Make your changes in shell/ or lib/ or ../

# 4. Build
e build

# 5. Test your changes (Leave the user to do this, don't run these commands unless asked)
e start
e test

# 6. If you modified patched files in Chromium:
cd ..  # Go to Chromium repo
git add <files>
git commit -m "description of change"
cd electron
e patches chromium  # Export the patch
```

--------------------------------

### Importing Modules Using Electron's Process Aliases in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/tutorial/process-model.md

This JavaScript example demonstrates how to use Electron's process-specific module aliases to import modules. It shows importing the `shell` module, which is common to both main and renderer processes, and the `app` module, which is specific to the main process, leveraging the `electron/common` and `electron/main` subpaths respectively.

```javascript
const { shell } = require('electron/common')
const { app } = require('electron/main')
```

--------------------------------

### Configure lldbinit for Chromium source mapping

Source: https://github.com/electron/electron/blob/main/docs/development/debugging-on-macos.md

Setup the ~/.lldbinit configuration file to enable proper source mapping for Chromium code during debugging. This file adds the Electron LLDB tools directory to Python's system path and imports the lldbinit module for enhanced debugging capabilities.

```text
# e.g: ['~/electron/src/tools/lldb']
script sys.path[:0] = ['<...path/to/electron/src/tools/lldb>']
script import lldbinit
```

--------------------------------

### Win32 Todo Item Creation and Display

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

C++ Win32 code that creates a todo item with a GUID, stores it in a global list, formats it for display, adds it to a list box, and notifies a callback. Demonstrates Win32 GUI integration with data management.

```cpp
TodoItem todo;
CoCreateGuid(&todo.id);
todo.text = buffer;
todo.date = SystemTimeToMillis(st);

g_todos.push_back(todo);

std::wstring displayText = FormatTodoDisplay(buffer, st);
SendMessageW(hListBox, LB_ADDSTRING, 0, (LPARAM)displayText.c_str());

ResetControls(hwnd);
NotifyCallback(g_todoAddedCallback, todo.toJson());
```

--------------------------------

### <webview>.goForward()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Navigates the guest page forward in history.

```APIDOC
### `<webview>.goForward()`

#### Description
Makes the guest page go forward.
```

--------------------------------

### Reorder Electron Menu Items with `before` and `after` Attributes

Source: https://github.com/electron/electron/blob/main/docs/tutorial/menus.md

This example demonstrates using `before` and `after` attributes to precisely position individual menu items relative to others. It shows how items can be reordered even if defined out of sequence in the template, based on their specified `id` references, allowing fine-grained control over item order.

```js
[
  { id: '1', label: 'one', after: ['3'] },
  { id: '2', label: 'two', before: ['1'] },
  { id: '3', label: 'three' }
]
```

```plaintext
- ---
- three
- two
- one
```

--------------------------------

### Complete C++ Module with Includes and Callbacks

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Full C++ module implementation including Windows headers, standard library includes, pragma directives for linking, callback function type definitions, global callback storage, TodoItem struct with JSON serialization, and namespace-scoped utility functions for DPI scaling and time conversion.

```cpp
#include <windows.h>
#include <windowsx.h>
#include <string>
#include <functional>
#include <chrono>
#include <vector>
#include <commctrl.h>
#include <shellscalingapi.h>
#include <thread>

#pragma comment(lib, "comctl32.lib")
#pragma comment(linker, "\"/manifestdependency:type='win32' \
name='Microsoft.Windows.Common-Controls' version='6.0.0.0' \
processorArchitecture='*' publicKeyToken='6595b64144ccf1df' language='*'\"")

using TodoCallback = std::function<void(const std::string &)>;

static TodoCallback g_todoAddedCallback;
static TodoCallback g_todoUpdatedCallback;
static TodoCallback g_todoDeletedCallback;

struct TodoItem
{
  GUID id;
  std::wstring text;
  int64_t date;

  std::string toJson() const
  {
    OLECHAR *guidString;
    StringFromCLSID(id, &guidString);
    std::wstring widGuid(guidString);
    CoTaskMemFree(guidString);

    // Convert wide string to narrow for JSON
    std::string guidStr(widGuid.begin(), widGuid.end());
    std::string textStr(text.begin(), text.end());

    return "{"
           "\"id\":\"" + guidStr + "\","
           "\"text\":\"" + textStr + "\","
           "\"date\":" + std::to_string(date) +
           "}";
  }
};

namespace cpp_code
{

  std::string hello_world(const std::string &input)
  {
    return "Hello from C++! You said: " + input;
  }

  void setTodoAddedCallback(TodoCallback callback)
  {
    g_todoAddedCallback = callback;
  }

  void setTodoUpdatedCallback(TodoCallback callback)
  {
    g_todoUpdatedCallback = callback;
  }

  void setTodoDeletedCallback(TodoCallback callback)
  {
    g_todoDeletedCallback = callback;
  }

  LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);

  // Helper function to scale a value based on DPI
  int Scale(int value, UINT dpi)
  {
    return MulDiv(value, dpi, 96); // 96 is the default DPI
  }

  // Helper function to convert SYSTEMTIME to milliseconds since epoch
  int64_t SystemTimeToMillis(const SYSTEMTIME &st)
  {
    FILETIME ft;
    SystemTimeToFileTime(&st, &ft);
    ULARGE_INTEGER uli;
    uli.LowPart = ft.dwLowDateTime;
    uli.HighPart = ft.dwHighDateTime;
    return (uli.QuadPart - 116444736000000000ULL) / 10000;
  }

  void ResetControls(HWND hwnd)
  {
    HWND hEdit = GetDlgItem(hwnd, 1);
    HWND hDatePicker = GetDlgItem(hwnd, 4);
    HWND hAddButton = GetDlgItem(hwnd, 2);

    // Clear text
    SetWindowTextW(hEdit, L"");
```

--------------------------------

### <webview>.adjustSelection(options)

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Adjusts the current text selection starting and ending points in the focused frame by the given amounts.

```APIDOC
## `<webview>.adjustSelection(options)`

### Description
Adjusts the current text selection starting and ending points in the focused frame by the given amounts. A negative amount moves the selection towards the beginning of the document, and a positive amount moves the selection towards the end of the document.

### Parameters
- **options** (`Object`) - Required
  - **start** (`Number`) - Optional. Amount to shift the start index of the current selection.
  - **end** (`Number`) - Optional. Amount to shift the end index of the current selection.
```

--------------------------------

### Run Electron test suite

Source: https://github.com/electron/electron/blob/main/CLAUDE.md

Executes the full test suite for the project.

```bash
e test                    # Run full test suite
```

--------------------------------

### Strict Confinement snapcraft.yaml with desktop-launch

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

A snapcraft.yaml app configuration for strict confinement mode using the desktop-launch command instead of a custom electron-launch script. It sets environment variables for TMPDIR and PATH to ensure proper Chromium/Electron functionality and resource access within the confined snap environment.

```yaml
apps:
  myApp:
    command: env TMPDIR=$XDG_RUNTIME_DIR PATH=/usr/local/bin:${PATH} ${SNAP}/bin/desktop-launch $SNAP/myApp/desktop
    desktop: usr/share/applications/desktop.desktop
```

--------------------------------

### Instantiate a BaseWindow in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Creates a new BaseWindow instance with specified dimensions.

```javascript
const { BaseWindow } = require('electron')
// In this example `win` is our instance
const win = new BaseWindow({ width: 800, height: 600 })
```

--------------------------------

### <webview>.openDevTools()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Opens the DevTools window for the guest page.

```APIDOC
### `<webview>.openDevTools()`

#### Description
Opens a DevTools window for guest page.
```

--------------------------------

### GET /BrowserWindow.isAlwaysOnTop

Source: https://github.com/electron/electron/wiki/browser-window

Checks whether the window is currently set to always be on top of other windows.

```APIDOC
## GET /BrowserWindow.isAlwaysOnTop

### Description
Returns whether the window is always on top of other windows.

### Method
GET

### Endpoint
/BrowserWindow.isAlwaysOnTop

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **alwaysOnTop** (Boolean) - `true` if the window is always on top, `false` otherwise.

#### Response Example
true
```

--------------------------------

### Migrate protocol registration to protocol.handle

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Replace legacy protocol registration methods with the unified protocol.handle API.

```javascript
// Deprecated in Electron 25
protocol.registerBufferProtocol('some-protocol', () => {
  callback({ mimeType: 'text/html', data: Buffer.from('<h5>Response</h5>') })
})

// Replace with
protocol.handle('some-protocol', () => {
  return new Response(
    Buffer.from('<h5>Response</h5>'), // Could also be a string or ReadableStream.
    { headers: { 'content-type': 'text/html' } }
  )
})
```

```javascript
// Deprecated in Electron 25
protocol.registerHttpProtocol('some-protocol', () => {
  callback({ url: 'https://electronjs.org' })
})

// Replace with
protocol.handle('some-protocol', () => {
  return net.fetch('https://electronjs.org')
})
```

```javascript
// Deprecated in Electron 25
protocol.registerFileProtocol('some-protocol', () => {
  callback({ filePath: '/path/to/my/file' })
})

// Replace with
protocol.handle('some-protocol', () => {
  return net.fetch('file:///path/to/my/file')
})
```

--------------------------------

### GET touchBarSpacer.size

Source: https://github.com/electron/electron/blob/main/docs/api/touch-bar-spacer.md

Retrieves the size property of a TouchBarSpacer instance. Returns a string representing the spacer size: small, large, or flexible.

```APIDOC
## Property: touchBarSpacer.size

### Description
Gets the size of the spacer. Returns a string representing the current size configuration.

### Property Type
string (read-only)

### Possible Values
- `small` - Small space between items
- `large` - Large space between items
- `flexible` - Takes up all available space

### Response Example
```javascript
const { TouchBarSpacer } = require('electron');

const spacer = new TouchBarSpacer({ size: 'large' });
console.log(spacer.size); // Output: 'large'
```
```

--------------------------------

### Handle and Invoke IPC Messages in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/ipc-main.md

This example demonstrates the request-response pattern using ipcMain.handle in the main process and ipcRenderer.invoke in the renderer process. It allows for asynchronous communication where the renderer process can await a result from the main process.

```javascript
ipcMain.handle('my-invokable-ipc', async (event, ...args) => {
  const result = await somePromise(...args)
  return result
})
```

```javascript
async () => {
  const result = await ipcRenderer.invoke('my-invokable-ipc', arg1, arg2)
  // ...
}
```

--------------------------------

### Implement HelloWorld and HelloGui C++ Functions

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

This snippet shows the C++ implementation of `HelloWorld` and `HelloGui` methods for a Node.js addon. `HelloWorld` validates a string argument, calls a C++ function, and returns a string. `HelloGui` directly calls a C++ UI function without arguments.

```cpp
Napi::Value HelloWorld(const Napi::CallbackInfo &info)
{
  Napi::Env env = info.Env();

  if (info.Length() < 1 || !info[0].IsString())
  {
    Napi::TypeError::New(env, "Expected string argument").ThrowAsJavaScriptException();
    return env.Null();
  }

  std::string input = info[0].As<Napi::String>();
  std::string result = cpp_code::hello_world(input);

  return Napi::String::New(env, result);
}

void HelloGui(const Napi::CallbackInfo &info)
{
  cpp_code::hello_gui();
}

// On() method implementation will go here
```

--------------------------------

### Attach lldb debugger to Electron application

Source: https://github.com/electron/electron/blob/main/docs/development/debugging-on-macos.md

Start an lldb debugging session by launching the debugger with a non-release build of Electron as a parameter. This command creates a target for the Electron.app executable and sets it as the current debugging target for step-through debugging.

```shell
$ lldb ./out/Testing/Electron.app
(lldb) target create "./out/Testing/Electron.app"
Current executable set to './out/Testing/Electron.app' (x86_64).
```

--------------------------------

### Electron API Documentation: Method Signature and Argument Description in Markdown

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

Provides the standard Markdown format for documenting a method's signature, including required and optional parameters, along with their types and descriptions. It specifies the use of `objectName.methodName` and square brackets for optional arguments, ensuring consistent parameter documentation.

```markdown
### `objectName.methodName(required[, optional]))`

* `required` string - A parameter description.
* `optional` Integer (optional) - Another parameter description.

...
```

--------------------------------

### Capture and display desktop media in renderer process

Source: https://github.com/electron/electron/blob/main/docs/api/desktop-capturer.md

Implement UI controls in the renderer process to start and stop desktop media capture using getDisplayMedia API. The captured stream is displayed in a video element with specified dimensions and frame rate.

```javascript
// renderer.js
const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')
const video = document.querySelector('video')

startButton.addEventListener('click', () => {
  navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: {
      width: 320,
      height: 240,
      frameRate: 30
    }
  }).then(stream => {
    video.srcObject = stream
    video.onloadedmetadata = (e) => video.play()
  }).catch(e => console.log(e))
})

stopButton.addEventListener('click', () => {
  video.pause()
})
```

--------------------------------

### POST inAppPurchase.restoreCompletedTransactions

Source: https://github.com/electron/electron/blob/main/docs/api/in-app-purchase.md

Restores previously completed transactions. This is useful for installing purchases on additional devices or restoring purchases for an application that was deleted and reinstalled.

```APIDOC
## POST inAppPurchase.restoreCompletedTransactions

### Description
Restores finished transactions from the Mac App Store. This method can be called to install purchases on additional devices or to restore purchases for an application that the user deleted and reinstalled.

### Method
POST

### Signature
`inAppPurchase.restoreCompletedTransactions()`

### Parameters
None

### Request Example
```javascript
const { inAppPurchase } = require('electron');

// Listen for restored transactions
inAppPurchase.on('transactions-updated', (event, transactions) => {
  transactions.forEach(transaction => {
    console.log('Restored transaction:', transaction);
  });
});

// Restore completed transactions
await inAppPurchase.restoreCompletedTransactions();
```

### Response
#### Success Response
- Triggers `transactions-updated` event for each restored transaction
- Each transaction includes a copy of the original transaction

### Notes
- The payment queue delivers a new transaction for each previously completed transaction that can be restored
- Listen for the `transactions-updated` event to handle restored transactions
- Useful for multi-device purchase synchronization
```

--------------------------------

### Create a WebSocket connection in the main process using net.WebSocket

Source: https://github.com/electron/electron/blob/main/docs/api/net.md

Use this class to establish WHATWG-compatible WebSocket connections through Chromium's network stack. This property is only available in the main process.

```javascript
const { app, net } = require('electron')

app.whenReady().then(() => {
  const ws = new net.WebSocket('wss://echo.websocket.events')
  ws.onmessage = (event) => console.log(event.data)
})
```

--------------------------------

### Load Secure Content via HTTPS in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/security.md

Enforce the use of secure protocols like HTTPS and WSS to ensure data integrity and encryption. This example shows the correct way to load URLs and external scripts in both the Main and Renderer processes to prevent man-in-the-middle attacks.

```javascript
// Bad
browserWindow.loadURL('http://example.com')

// Good
browserWindow.loadURL('https://example.com')
```

```html
<!-- Bad -->
<script crossorigin src="http://example.com/react.js"></script>
<link rel="stylesheet" href="http://example.com/style.css">

<!-- Good -->
<script crossorigin src="https://example.com/react.js"></script>
<link rel="stylesheet" href="https://example.com/style.css">
```

--------------------------------

### SwiftUI: Implementing `helloGui` for macOS Window

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-swift-macos.md

This code implements the `helloGui` method, which creates and displays a native macOS window using SwiftUI. It bridges SwiftUI views with AppKit via `NSHostingView` and sets up callbacks for todo item changes.

```swift
// Other code...

@objc
public class SwiftCode: NSObject {
    // Other code...

        @objc
    public static func helloGui() -> Void {
        let contentView = NSHostingView(rootView: ContentView(
            onTodoAdded: { todo in
                if let jsonString = encodeToJson(todo) {
                    todoAddedCallback?(jsonString)
                }
            },
            onTodoUpdated: { todo in
                if let jsonString = encodeToJson(todo) {
                    todoUpdatedCallback?(jsonString)
                }
            },
            onTodoDeleted: { todoId in
                todoDeletedCallback?(todoId.uuidString)
            }
        ))
        let window = NSWindow(
            contentRect: NSRect(x: 0, y: 0, width: 500, height: 500),
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered,
            defer: false
        )

        window.title = "Todo List"
        window.contentView = contentView
        window.center()

        windowController = NSWindowController(window: window)
        windowController?.showWindow(nil)

        NSApp.activate(ignoringOtherApps: true)
    }
}
```

--------------------------------

### contents.findInPage(text[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents.md

Starts an asynchronous search request for text matches within the web page and returns an integer request ID.

```APIDOC
### contents.findInPage(text[, options])

Starts a request to find all matches for the `text` in the web page. The result of the request can be obtained by subscribing to the `found-in-page` event.

#### Parameters
- `text` (string) - Content to be searched, must not be empty.
- `options` (Object, optional)
  - `forward` (boolean, optional) - Whether to search forward or backward, defaults to `true`.
  - `findNext` (boolean, optional) - Whether to begin a new text finding session with this request. Should be `true` for initial requests, and `false` for follow-up requests. Defaults to `false`.
  - `matchCase` (boolean, optional) - Whether search should be case-sensitive, defaults to `false`.

#### Returns
- `Integer` - The request id used for the request.
```

--------------------------------

### Write WebdriverIO Test for Keyboard Input in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/automated-testing.md

This example demonstrates how to write a WebdriverIO test to simulate keyboard input using `browser.keys()` and assert the resulting text content of an element using `expect($('element')).toHaveText()`. It showcases basic interaction and assertion within an Electron app.

```js
import { browser, $, expect } from '@wdio/globals'

describe('keyboard input', () => {
  it('should detect keyboard input', async () => {
    await browser.keys(['y', 'o'])
    await expect($('keypress-count')).toHaveText('YO')
  })
})
```

--------------------------------

### Event: 'will-frame-navigate'

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Emitted when a user or the page attempts to start navigation in the webview or its embedded frames. It does not fire for programmatic navigation or in-page navigation.

```APIDOC
### Event: 'will-frame-navigate'

Emitted when a user or the page wants to start navigation anywhere in the `<webview>` or any frames embedded within.

#### Event Properties
- `url` (string) - The destination URL.
- `isMainFrame` (boolean) - Whether the navigation is occurring in the main frame.
- `frameProcessId` (Integer) - Process ID of the frame initiating navigation.
- `frameRoutingId` (Integer) - Routing ID of the frame initiating navigation.

#### Remarks
- Not emitted for programmatic navigations (e.g., `<webview>.loadURL`, `<webview>.back`).
- Not emitted during in-page navigation (use `did-navigate-in-page`).
- Calling `event.preventDefault()` does NOT have any effect.
```

--------------------------------

### PipeWire Environment Variables Configuration

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

Environment variable configuration for enabling PipeWire support in an Electron application snap. These variables direct the application to use the bundled PipeWire libraries and configuration files within the snap environment for proper desktop capture functionality.

```yaml
    environment:
      SPA_PLUGIN_DIR: $SNAP/usr/lib/$CRAFT_ARCH_TRIPLET/spa-0.2
      PIPEWIRE_CONFIG_NAME: $SNAP/usr/share/pipewire/pipewire.conf
      PIPEWIRE_MODULE_DIR: $SNAP/usr/lib/$CRAFT_ARCH_TRIPLET/pipewire-0.3
```

--------------------------------

### Native addon project directory structure

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

Standard layout for a C++ native addon project including source, include, and JavaScript interface directories.

```txt
cpp-linux/
├── binding.gyp          # Configuration file for node-gyp to build the native addon
├── include/
│   └── cpp_code.h       # Header file with declarations for our C++ native code
├── js/
│   └── index.js         # JavaScript interface that loads and exposes our native addon
├── package.json         # Node.js package configuration and dependencies
└── src/
    ├── cpp_addon.cc     # C++ code that bridges Node.js/Electron with our native code
    └── cpp_code.cc      # Implementation of our native C++ functionality using GTK3
```

--------------------------------

### Get effective system appearance in Electron (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/api/system-preferences.md

This snippet demonstrates how to import the `systemPreferences` module from Electron and use its `getEffectiveAppearance()` method to retrieve the current system appearance setting. This method returns a string indicating the system's current theme, such as 'dark' or 'light', which can be used to adapt the application's UI accordingly.

```javascript
const { systemPreferences } = require('electron')

console.log(systemPreferences.getEffectiveAppearance())
```

--------------------------------

### GET downloadItem.getLastModifiedTime()

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

Retrieves the Last-Modified header value from the HTTP response, indicating when the downloaded resource was last modified on the server.

```APIDOC
## GET downloadItem.getLastModifiedTime()

### Description
Returns the Last-Modified header value from the response.

### Method
GET

### Returns
- **string** - Last-Modified header value

### Response Example
```
"Mon, 15 Jan 2024 10:30:00 GMT"
```

### Notes
This value indicates when the resource was last modified on the server.
```

--------------------------------

### Deferring Module Loading and File I/O in Node.js

Source: https://github.com/electron/electron/blob/main/docs/tutorial/performance.md

Compare eager loading of dependencies and synchronous disk access with lazy loading and asynchronous operations to improve startup performance.

```javascript
const fs = require('node:fs')

const fooParser = require('foo-parser')

class Parser {
  constructor () {
    this.files = fs.readdirSync('.')
  }

  getParsedFiles () {
    return fooParser.parse(this.files)
  }
}

const parser = new Parser()

module.exports = { parser }
```

```javascript
// "fs" is likely already being loaded, so the `require()` call is cheap
const fs = require('node:fs')

class Parser {
  async getFiles () {
    // Touch the disk as soon as `getFiles` is called, not sooner.
    // Also, ensure that we're not blocking other operations by using
    // the asynchronous version.
    this.files = this.files || await fs.promises.readdir('.')

    return this.files
  }

  async getParsedFiles () {
    // Our fictitious foo-parser is a big and expensive module to load, so
    // defer that work until we actually need to parse files.
    // Since `require()` comes with a module cache, the `require()` call
    // will only be expensive once - subsequent calls of `getParsedFiles()`
    // will be faster.
    const fooParser = require('foo-parser')
    const files = await this.getFiles()

    return fooParser.parse(files)
  }
}

// This operation is now a lot cheaper than in our previous example
const parser = new Parser()

module.exports = { parser }
```

--------------------------------

### Create HTML interface for desktop capture controls

Source: https://github.com/electron/electron/blob/main/docs/api/desktop-capturer.md

Build an HTML page with start/stop buttons and a video element to display captured desktop content. Includes content security policy configuration and references the renderer script.

```html
<!-- index.html -->
<html>
<meta http-equiv="content-security-policy" content="script-src 'self' 'unsafe-inline'" />
  <body>
    <button id="startButton" class="button">Start</button>
    <button id="stopButton" class="button">Stop</button>
    <video width="320" height="240" autoplay></video>
    <script src="renderer.js"></script>
  </body>
</html>
```

--------------------------------

### GET downloadItem.getURLChain()

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

Retrieves the complete URL chain of the download item, including any HTTP redirects that occurred during the download process.

```APIDOC
## GET downloadItem.getURLChain()

### Description
Returns the complete URL chain of the item including any redirects.

### Method
GET

### Returns
- **string[]** - Array of URLs representing the complete chain with redirects

### Response Example
```
[
  "https://example.com/download",
  "https://cdn.example.com/files/document.pdf"
]
```

### Notes
Useful for tracking redirect chains and understanding the final download source.
```

--------------------------------

### Enable PGO Instrumentation

Source: https://github.com/electron/electron/blob/main/script/pgo/README.md

Set this GN argument to build an instrumented version of Electron.

```gn
chrome_pgo_phase = 1
```

--------------------------------

### GET downloadItem.getContentDisposition()

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

Retrieves the Content-Disposition field from the HTTP response header. This typically contains information about how the content should be displayed or saved.

```APIDOC
## GET downloadItem.getContentDisposition()

### Description
Returns the Content-Disposition field value from the response header.

### Method
GET

### Returns
- **string** - The Content-Disposition header value

### Response Example
```
"attachment; filename=\"document.pdf\""
```

### Notes
This header typically indicates whether content should be displayed inline or downloaded as an attachment.
```

--------------------------------

### Control Electron Menu Item Grouping with `beforeGroupContaining` and `afterGroupContaining`

Source: https://github.com/electron/electron/blob/main/docs/tutorial/menus.md

This example illustrates how to use `beforeGroupContaining` and `afterGroupContaining` to control the placement of menu item groups. It demonstrates reordering items and groups, including separators, based on references to other item IDs, affecting the overall menu structure.

```js
[
  { id: '1', label: 'one' },
  { type: 'separator' },
  { id: '3', label: 'three', beforeGroupContaining: ['1'] },
  { id: '4', label: 'four', afterGroupContaining: ['2'] },
  { type: 'separator' },
  { id: '2', label: 'two' }
]
```

```plaintext
- three
- four
- ---
- one
- ---
- two
```

--------------------------------

### GET inAppPurchase.canMakePayments

Source: https://github.com/electron/electron/blob/main/docs/api/in-app-purchase.md

Checks whether the user is able to make payments on the Mac App Store. Returns a boolean indicating payment capability.

```APIDOC
## GET inAppPurchase.canMakePayments

### Description
Determines whether a user can make payments on the Mac App Store.

### Method
GET

### Signature
`inAppPurchase.canMakePayments()`

### Parameters
None

### Request Example
```javascript
const { inAppPurchase } = require('electron');

if (inAppPurchase.canMakePayments()) {
  console.log('User can make payments');
} else {
  console.log('User cannot make payments');
}
```

### Response
#### Success Response
- **Returns** (boolean) - `true` if the user can make payments, `false` otherwise

### Notes
- Check this before attempting to initiate a purchase
- Returns false if parental controls or other restrictions are in place
```

--------------------------------

### globalShortcut.registerAll(accelerators, callback)

Source: https://github.com/electron/electron/blob/main/docs/api/global-shortcut.md

Registers multiple global shortcut accelerators with a single callback function. The callback is invoked when any of the registered shortcuts are pressed.

```APIDOC
## globalShortcut.registerAll(accelerators, callback)

### Description
Registers a global shortcut of all `accelerator` items in `accelerators`. The `callback` is called when any of the registered shortcuts are pressed by the user.

### Parameters
- **accelerators** (`string[]`) - An array of accelerator shortcuts.
- **callback** (`Function`) - The callback invoked when any registered shortcut is pressed.
```

--------------------------------

### app.userAgentFallback

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Gets or sets the global fallback user agent string used by Electron. Applied when no user agent is set at the webContents or session level.

```APIDOC
### `app.userAgentFallback`

- **Type**: `string`

#### Description
A `string` which is the user agent string Electron will use as a global fallback. This is the user agent that will be used when no user agent is set at the `webContents` or `session` level. It is useful for ensuring that your entire app has the same user agent. Set to a custom value as early as possible in your app's initialization to ensure that your overridden value is used.
```

--------------------------------

### Complete Electron Playwright Test with Assertions and Screenshot

Source: https://github.com/electron/electron/blob/main/docs/tutorial/automated-testing.md

This comprehensive example combines launching an Electron app, evaluating main process properties, and interacting with a `BrowserWindow`. It includes an assertion using `expect` to verify the `isPackaged` status and captures a screenshot of the first window. This demonstrates a typical end-to-end test flow for an Electron application.

```js
import { test, expect, _electron as electron } from '@playwright/test'

test('example test', async () => {
  const electronApp = await electron.launch({ args: ['.'] })
  const isPackaged = await electronApp.evaluate(async ({ app }) => {
    // This runs in Electron's main process, parameter here is always
    // the result of the require('electron') in the main app script.
    return app.isPackaged
  })

  expect(isPackaged).toBe(false)

  // Wait for the first BrowserWindow to open
  // and return its Page object
  const window = await electronApp.firstWindow()
  await window.screenshot({ path: 'intro.png' })

  // close app
  await electronApp.close()
})
```

--------------------------------

### Set Application Menu After Ready Event in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/recent-documents.md

Demonstrates how to build and set the application menu from a template after the 'ready' event in Electron. This ensures menu items are properly enabled and the application is fully initialized before the menu is displayed.

```javascript
const { app, Menu } = require('electron')

const template = [
  // Menu template here
]
const menu = Menu.buildFromTemplate(template)

app.whenReady().then(() => {
  Menu.setApplicationMenu(menu)
})
```

--------------------------------

### GET downloadItem.getPercentComplete()

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

Retrieves the current download completion percentage. Returns an integer value representing the progress of the download from 0 to 100.

```APIDOC
## GET downloadItem.getPercentComplete()

### Description
Returns the download completion percentage as an integer value.

### Method
GET

### Returns
- **Integer** - The download completion in percent (0-100)

### Response Example
```
45
```

### Notes
Use this method to track download progress and update UI elements accordingly.
```

--------------------------------

### Link native module with delay-load hook using link.exe

Source: https://github.com/electron/electron/blob/main/docs/tutorial/using-native-node-modules.md

Command-line invocation for linking a native module (.node file) with the delay-load hook on Windows. This example shows the required flags and object files needed to properly link against node.lib from Electron and enable the delay-load mechanism for node.exe.

```plaintext
link.exe /OUT:"foo.node" "...\node.lib" delayimp.lib /DELAYLOAD:node.exe /DLL "my_addon.obj" "win_delay_load_hook.obj"
```

--------------------------------

### Bootstrap Electron Build Dependencies with Python

Source: https://github.com/electron/electron/wiki/Build-Instructions-(Windows)

Navigate into the cloned `atom-shell` directory and then execute the Python bootstrap script. This script downloads all necessary build dependencies and generates project files for `ninja`, preparing the project for compilation.

```bash
$ cd atom-shell
$ python script/bootstrap.py
```

--------------------------------

### Attach Debugger and Monitor Network Requests in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/debugger.md

Demonstrates how to attach a debugger to a BrowserWindow's webContents, listen for detach events, monitor network requests, and send debugger commands. This example shows error handling for attach failures and conditional detachment based on network URL patterns.

```javascript
const { BrowserWindow } = require('electron')

const win = new BrowserWindow()

try {
  win.webContents.debugger.attach('1.1')
} catch (err) {
  console.log('Debugger attach failed : ', err)
}

win.webContents.debugger.on('detach', (event, reason) => {
  console.log('Debugger detached due to : ', reason)
})

win.webContents.debugger.on('message', (event, method, params) => {
  if (method === 'Network.requestWillBeSent') {
    if (params.request.url === 'https://www.github.com') {
      win.webContents.debugger.detach()
    }
  }
})

win.webContents.debugger.sendCommand('Network.enable')
```

--------------------------------

### GET touchBarPopover.icon

Source: https://github.com/electron/electron/blob/main/docs/api/touch-bar-popover.md

Retrieves the current button icon of the popover. This property represents the icon displayed on the popover button in the touch bar.

```APIDOC
## Property: touchBarPopover.icon

### Description
Gets or sets the popover's current button icon. Changing this value immediately updates the popover in the touch bar.

### Type
NativeImage

### Access
Read/Write

### Request Example
```javascript
const { nativeImage } = require('electron');

const currentIcon = touchBarPopover.icon;
console.log(currentIcon); // Outputs current icon
```

### Response Example
```javascript
// Getting the icon
const icon = touchBarPopover.icon;
// Returns: NativeImage object

// Setting the icon
const newIcon = nativeImage.createFromPath('/path/to/icon.png');
touchBarPopover.icon = newIcon;
// The touch bar updates immediately
```

### Notes
- Changes to this property are reflected immediately in the touch bar
- Must be a valid NativeImage object
- Set to null or undefined to remove the icon
```

--------------------------------

### PipeWire Configuration Part for Desktop Capture

Source: https://github.com/electron/electron/blob/main/docs/tutorial/snapcraft.md

A snapcraft part definition that bundles PipeWire library support for desktop capture functionality on Wayland-based Linux systems. It includes build and stage packages for PipeWire and specifies which library files to include in the final snap package.

```yaml
  pipewire:
    plugin: nil
    build-packages: [libpipewire-0.3-dev]
    stage-packages: [pipewire]
    prime:
      - usr/lib/*/pipewire-*
      - usr/lib/*/spa-*
      - usr/lib/*/libpipewire*.so*
      - usr/share/pipewire
```

--------------------------------

### Implement Electron In-App Purchase Logic in Main Process (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/in-app-purchases.md

This JavaScript code demonstrates integrating in-app purchases into an Electron app's main process. It shows how to listen for `transactions-updated` events, process various transaction states (purchased, failed, restored), retrieve product details, and initiate product purchases. The example also includes obtaining the receipt URL for server-side validation.

```js
// Main process
const { inAppPurchase } = require('electron')

const PRODUCT_IDS = ['id1', 'id2']

// Listen for transactions as soon as possible.
inAppPurchase.on('transactions-updated', (event, transactions) => {
  if (!Array.isArray(transactions)) {
    return
  }

  // Check each transaction.
  for (const transaction of transactions) {
    const payment = transaction.payment

    switch (transaction.transactionState) {
      case 'purchasing':
        console.log(`Purchasing ${payment.productIdentifier}...`)
        break

      case 'purchased': {
        console.log(`${payment.productIdentifier} purchased.`)

        // Get the receipt url.
        const receiptURL = inAppPurchase.getReceiptURL()

        console.log(`Receipt URL: ${receiptURL}`)

        // Submit the receipt file to the server and check if it is valid.
        // @see https://developer.apple.com/library/content/releasenotes/General/ValidateAppStoreReceipt/Chapters/ValidateRemotely.html
        // ...
        // If the receipt is valid, the product is purchased
        // ...

        // Finish the transaction.
        inAppPurchase.finishTransactionByDate(transaction.transactionDate)

        break
      }

      case 'failed':

        console.log(`Failed to purchase ${payment.productIdentifier}.`)

        // Finish the transaction.
        inAppPurchase.finishTransactionByDate(transaction.transactionDate)

        break
      case 'restored':

        console.log(`The purchase of ${payment.productIdentifier} has been restored.`)

        break
      case 'deferred':

        console.log(`The purchase of ${payment.productIdentifier} has been deferred.`)

        break
      default:
        break
    }
  }
})

// Check if the user is allowed to make in-app purchase.
if (!inAppPurchase.canMakePayments()) {
  console.log('The user is not allowed to make in-app purchase.')
}

// Retrieve and display the product descriptions.
inAppPurchase.getProducts(PRODUCT_IDS).then(products => {
  // Check the parameters.
  if (!Array.isArray(products) || products.length <= 0) {
    console.log('Unable to retrieve the product information.')
    return
  }

  // Display the name and price of each product.
  for (const product of products) {
    console.log(`The price of ${product.localizedTitle} is ${product.formattedPrice}.`)
  }

  // Ask the user which product they want to purchase.
  const selectedProduct = products[0]
  const selectedQuantity = 1

  // Purchase the selected product.
inAppPurchase.purchaseProduct(selectedProduct.productIdentifier, selectedQuantity).then(isProductValid => {
    if (!isProductValid) {
      console.log('The product is not valid.')
      return
    }

    console.log('The payment has been added to the payment queue.')
  })
})
```

--------------------------------

### Electron API Documentation: Module Methods and Events Structure in Markdown

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

Shows the organizational structure for documenting methods and events of non-class modules, such as 'autoUpdater', by grouping them under dedicated '## Events' and '## Methods' chapters with appropriate sub-headings. This ensures clarity and ease of navigation for module functionalities.

```markdown
# autoUpdater

## Events

### Event: 'error'

## Methods

### `autoUpdater.setFeedURL(options)`
```

--------------------------------

### Append a command line argument in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/command-line.md

This example illustrates how to add a raw argument to Chromium's command line using `app.commandLine.appendArgument()`. It's suitable for enabling experimental features or other specific Chromium flags. Arguments are correctly quoted, and this method does not modify `process.argv`.

```js
const { app } = require('electron')

app.commandLine.appendArgument('--enable-experimental-web-platform-features')
```

--------------------------------

### Implement Win32 Helper Functions and Callbacks in C++

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Provides utility functions for DPI scaling and time conversion between Windows and JavaScript formats. Includes a setter for the todo addition callback.

```cpp
namespace cpp_code
{
  std::string hello_world(const std::string &input)
  {
    return "Hello from C++! You said: " + input;
  }

  void setTodoAddedCallback(TodoCallback callback)
  {
    g_todoAddedCallback = callback;
  }

  // Window procedure function that handles window messages
  // hwnd: Handle to the window
  // uMsg: Message code
  // wParam: Additional message-specific information
  // lParam: Additional message-specific information
  LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam);

  // Helper function to scale a value based on DPI
  int Scale(int value, UINT dpi)
  {
    return MulDiv(value, dpi, 96); // 96 is the default DPI
  }

  // Helper function to convert SYSTEMTIME to milliseconds since epoch
  int64_t SystemTimeToMillis(const SYSTEMTIME &st)
  {
    FILETIME ft;
    SystemTimeToFileTime(&st, &ft);
    ULARGE_INTEGER uli;
    uli.LowPart = ft.dwLowDateTime;
    uli.HighPart = ft.dwHighDateTime;
    return (uli.QuadPart - 116444736000000000ULL) / 10000;
  }

  // More code to follow later...
}
```

--------------------------------

### GET touchBarPopover.label

Source: https://github.com/electron/electron/blob/main/docs/api/touch-bar-popover.md

Retrieves the current button text of the popover. This property represents the label displayed on the popover button in the touch bar.

```APIDOC
## Property: touchBarPopover.label

### Description
Gets or sets the popover's current button text. Changing this value immediately updates the popover in the touch bar.

### Type
string

### Access
Read/Write

### Request Example
```javascript
const currentLabel = touchBarPopover.label;
console.log(currentLabel); // Outputs current button text
```

### Response Example
```javascript
// Getting the label
const label = touchBarPopover.label;
// Returns: "Popover"

// Setting the label
touchBarPopover.label = 'New Label';
// The touch bar updates immediately
```

### Notes
- Changes to this property are reflected immediately in the touch bar
- Accepts any string value
```

--------------------------------

### Create and Manage Electron Browser Windows

Source: https://github.com/electron/electron/blob/main/docs/tutorial/process-model.md

This snippet demonstrates how to create a new application window using Electron's `BrowserWindow` module in the main process. It shows how to load a URL into the window and access its `webContents` object, which represents the content of the web page and its associated renderer process.

```js
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 1500 })
win.loadURL('https://github.com')

const contents = win.webContents
console.log(contents)
```

--------------------------------

### GET /gpu-feature-status

Source: https://github.com/electron/electron/blob/main/docs/api/structures/gpu-feature-status.md

Retrieves the current status of GPU-related features within the Electron environment, indicating whether hardware acceleration is enabled or disabled for specific components.

```APIDOC
## GET /gpu-feature-status

### Description
Returns an object representing the status of various GPU features such as WebGL, video decoding, and compositing.

### Method
GET

### Endpoint
/gpu-feature-status

### Parameters
None

### Response
#### Success Response (200)
- **2d_canvas** (string) - Canvas status.
- **flash_3d** (string) - Flash status.
- **flash_stage3d** (string) - Flash Stage3D status.
- **flash_stage3d_baseline** (string) - Flash Stage3D Baseline profile status.
- **gpu_compositing** (string) - Compositing status.
- **multiple_raster_threads** (string) - Multiple Raster Threads status.
- **native_gpu_memory_buffers** (string) - Native GpuMemoryBuffers status.
- **rasterization** (string) - Rasterization status.
- **video_decode** (string) - Video Decode status.
- **video_encode** (string) - Video Encode status.
- **vpx_decode** (string) - VPx Video Decode status.
- **webgl** (string) - WebGL status.
- **webgl2** (string) - WebGL2 status.

#### Possible Status Values
- **disabled_software** - Software only. Hardware acceleration disabled (yellow)
- **disabled_off** - Disabled (red)
- **disabled_off_ok** - Disabled (yellow)
- **unavailable_software** - Software only, hardware acceleration unavailable (yellow)
- **unavailable_off** - Unavailable (red)
- **unavailable_off_ok** - Unavailable (yellow)
- **enabled_readback** - Hardware accelerated but at reduced performance (yellow)
- **enabled_force** - Hardware accelerated on all pages (green)
- **enabled** - Hardware accelerated (green)
- **enabled_on** - Enabled (green)
- **enabled_force_on** - Force enabled (green)

#### Response Example
{
  "2d_canvas": "enabled",
  "gpu_compositing": "enabled",
  "webgl": "enabled",
  "video_decode": "enabled_readback"
}
```

--------------------------------

### GET downloadItem.getETag()

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

Retrieves the ETag header value from the HTTP response. ETags are used for cache validation and identifying specific versions of resources.

```APIDOC
## GET downloadItem.getETag()

### Description
Returns the ETag header value from the response.

### Method
GET

### Returns
- **string** - ETag header value

### Response Example
```
"\"33a64df551425fcc55e4d42a148795d9f25f89d4\""
```

### Notes
ETags are useful for cache validation and identifying specific resource versions.
```

--------------------------------

### Create Tray and BrowserWindow with image file paths

Source: https://github.com/electron/electron/blob/main/docs/api/native-image.md

Pass image file paths directly as strings when creating a Tray or setting a BrowserWindow icon. This is the simplest approach for basic icon usage.

```javascript
const { BrowserWindow, Tray } = require('electron')

const tray = new Tray('/Users/somebody/images/icon.png')
const win = new BrowserWindow({ icon: '/Users/somebody/images/window.png' })
```

--------------------------------

### window.open(url[, frameName][, features])

Source: https://github.com/electron/electron/blob/main/docs/api/window-open.md

Opens a new window with the specified URL, frame name, and features. Features are a comma-separated list of key-value pairs that can include BrowserWindowConstructorOptions and specific WebPreferences.

```APIDOC
## window.open(url[, frameName][, features])

### Description
Opens a new window. Electron parses a subset of BrowserWindowConstructorOptions and WebPreferences from the features string.

### Parameters
- **url** (string) - Required - The URL to open.
- **frameName** (string) - Optional - The name of the frame.
- **features** (string) - Optional - A comma-separated key-value list of window features.

### Returns
- **Window | null** - Returns the Window object or null if the operation failed.

### Example
```js
window.open('https://github.com', '_blank', 'top=500,left=200,frame=false,nodeIntegration=no')
```
```

--------------------------------

### Create Context Menu with Spellchecker Suggestions in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/spellchecker.md

This example demonstrates how to build a custom context menu that incorporates spellchecker suggestions and an 'Add to dictionary' option. It listens for the `context-menu` event on `webContents`, iterating through `params.dictionarySuggestions` to create menu items for corrections and providing a way to add `params.misspelledWord` to the user's dictionary. This enhances user interaction with spellcheck results.

```javascript
const { Menu, MenuItem } = require('electron')

myWindow.webContents.on('context-menu', (event, params) => {
  const menu = new Menu()

  // Add each spelling suggestion
  for (const suggestion of params.dictionarySuggestions) {
    menu.append(new MenuItem({
      label: suggestion,
      click: () => myWindow.webContents.replaceMisspelling(suggestion)
    }))
  }

  // Allow users to add the misspelled word to the dictionary
  if (params.misspelledWord) {
    menu.append(
      new MenuItem({
        label: 'Add to dictionary',
        click: () => myWindow.webContents.session.addWordToSpellCheckerDictionary(params.misspelledWord)
      })
    )
  }

  menu.popup()
})
```

--------------------------------

### Configure Blink Features in Electron BrowserWindow

Source: https://github.com/electron/electron/blob/main/docs/tutorial/security.md

Demonstrates the secure way to initialize a BrowserWindow by avoiding unnecessary Blink features. Disabling features like 'ExecCommandInJavaScript' reduces the potential attack surface of the renderer process.

```javascript
// Bad
const mainWindow = new BrowserWindow({
  webPreferences: {
    enableBlinkFeatures: 'ExecCommandInJavaScript'
  }
})

// Good
const mainWindow = new BrowserWindow()
```

--------------------------------

### crashReporter.getUploadToServer()

Source: https://github.com/electron/electron/blob/main/docs/api/crash-reporter.md

Returns a boolean indicating whether crash reports should be submitted to the server. This value is set through the start method or setUploadToServer method. Only available in the main process.

```APIDOC
## crashReporter.getUploadToServer()

### Description
Returns whether reports should be submitted to the server. Set through the `start` method or `setUploadToServer`.

### Method
GET

### Return Type
`boolean` - True if reports should be uploaded to server, false otherwise

### Response Example
```json
true
```

### Notes
- This method is only available in the main process
- Deprecated in the renderer process as of Electron PR #23265
- The value is controlled by user preferences and the crashReporter configuration
```

--------------------------------

### Complete initial structure of objc_code.mm

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

The combined implementation file including imports, interface declaration, and initial implementation logic.

```objc
#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>
#import <string>
#import <functional>
#import "../include/objc_code.h"

using TodoCallback = std::function<void(const std::string&)>;

static TodoCallback g_todoAddedCallback;

// Forward declaration of our custom classes
@interface TodoWindowController : NSWindowController
@property (strong) NSTextField *textField;
@property (strong) NSDatePicker *datePicker;
@property (strong) NSButton *addButton;
@property (strong) NSTableView *tableView;
@property (strong) NSMutableArray<NSDictionary*> *todos;
@end

// Controller for the main window
@implementation TodoWindowController

- (instancetype)init {
    self = [super initWithWindowNibName:@""];
    if (self) {
        // Create an array to store todos
        _todos = [NSMutableArray array];
        [self setupWindow];
    }
    return self;
}

// More code to follow later...
```

--------------------------------

### app.badgeCount

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Gets or sets the badge count for the current application. Setting the count to 0 hides the badge, while any non-zero integer displays the badge count on supported platforms.

```APIDOC
### `app.badgeCount`

- **Type**: `Integer`
- **Platforms**: Linux, macOS

#### Description
An `Integer` property that returns the badge count for current app. Setting the count to `0` will hide the badge. Setting this with any nonzero integer shows the count on the Dock icon on macOS, or on the launcher on Linux.
```

--------------------------------

### Generate V8 builtins profiles using d8 and JetStream 2

Source: https://github.com/electron/electron/blob/main/script/pgo/README.md

Build an instrumented d8, run the JetStream 2 benchmark, and convert the resulting log into block hints for V8.

```sh
# 1. Build instrumented d8
e init pgo-builtins --root=$PWD --import pgo-builtins-instrument
e build --target v8:d8

# 2. Run JetStream 2 under d8 and convert to block hints
git clone --depth 1 https://github.com/WebKit/JetStream.git /tmp/jetstream
cd /tmp/jetstream
<out>/d8 --no-sandbox-prohibit-insecure-mode \
  --turbo-profiling-output=/tmp/v8.builtins.log cli.js
python3 <src>/v8/tools/builtins-pgo/get_hints.py \
  /tmp/v8.builtins.log electron-v8-x64.profile
```

--------------------------------

### Main Process ESM Entry Point with Top-Level Await

Source: https://github.com/electron/electron/blob/main/docs/tutorial/esm.md

Demonstrates proper usage of top-level await in Electron's main process to ensure asynchronous imports complete before the app's ready event. This pattern prevents race conditions where the app becomes ready before setup code executes.

```javascript
// add an await call here to guarantee that path setup will finish before `ready`
await import('./set-up-paths.mjs')

app.whenReady().then(() => {
  console.log('This code may execute before the above import')
})
```

--------------------------------

### Bidirectional Communication between Main and Utility Processes

Source: https://github.com/electron/electron/blob/main/docs/api/parent-port.md

This example shows how to fork a utility process from the main process and establish a message exchange. The main process sends a message to the child, which then processes the data and sends a response back using process.parentPort.

```javascript
// Main process
const child = utilityProcess.fork(path.join(__dirname, 'test.js'))
child.postMessage({ message: 'hello' })
child.on('message', (data) => {
  console.log(data) // hello world!
})

// Child process (test.js)
process.parentPort.on('message', (e) => {
  process.parentPort.postMessage(`${e.data} world!`)
})
```

--------------------------------

### Create and write a multi-format ClipboardItem

Source: https://github.com/electron/electron/blob/main/docs/api/clipboard-item.md

Demonstrates constructing a ClipboardItem with various MIME types including text, HTML, image data, and a custom bookmark format.

```javascript
// Each `ClipboardItem` describes one clipboard entry with one or more
// MIME-typed representations. The bookmark custom format takes a structured
// `{ title, url }` object instead of a Blob.
const { clipboard, ClipboardItem, nativeImage } = require('electron')

const png = nativeImage.createFromPath('/path/to/icon.png').toPNG()

clipboard.write([
  new ClipboardItem({
    'text/plain': 'hello',
    'text/html': '<b>hello</b>',
    'image/png': new Blob([png], { type: 'image/png' }),
    'electron application/bookmark': {
      title: 'Electron',
      url: 'https://electronjs.org'
    }
  })
])
```

--------------------------------

### Configure Node.js Addon Build with Swift in binding.gyp

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-swift-macos.md

This `binding.gyp` configuration sets up the build process for a Node.js addon integrating Swift on macOS. It specifies source files, include directories, dependencies, and crucial Xcode settings for Swift compilation and Objective-C bridging.

```json
{
  "targets": [{
    "target_name": "swift_addon",
    "conditions": [
      ['OS=="mac"', {
        "sources": [
          "src/swift_addon.mm",
          "src/SwiftBridge.m",
          "src/SwiftCode.swift"
        ],
        "include_dirs": [
          "<!@(node -p \"require('node-addon-api').include\")",
          "include",
          "build_swift"
        ],
        "dependencies": [
          "<!(node -p \"require('node-addon-api').gyp\")"
        ],
        "libraries": [
          "<(PRODUCT_DIR)/libSwiftCode.a"
        ],
        "cflags!": [ "-fno-exceptions" ],
        "cflags_cc!": [ "-fno-exceptions" ],
        "xcode_settings": {
          "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
          "CLANG_ENABLE_OBJC_ARC": "YES",
          "SWIFT_OBJC_BRIDGING_HEADER": "include/SwiftBridge.h",
          "SWIFT_VERSION": "5.0",
          "SWIFT_OBJC_INTERFACE_HEADER_NAME": "swift_addon-Swift.h",
          "MACOSX_DEPLOYMENT_TARGET": "11.0",
          "OTHER_CFLAGS": [
            "-ObjC++",
            "-fobjc-arc"
          ],
          "OTHER_LDFLAGS": [
            "-Wl,-rpath,@loader_path",
            "-Wl,-install_name,@rpath/libSwiftCode.a"
          ],
          "HEADER_SEARCH_PATHS": [
            "$(SRCROOT)/include",
            "$(CONFIGURATION_BUILD_DIR)",
            "$(SRCROOT)/build/Release",
            "$(SRCROOT)/build_swift"
          ]
        },
        "actions": []
      }]
    ]
  }]
}
```

--------------------------------

### GET downloadItem.getEndTime()

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

Retrieves the timestamp when the download ended, expressed as the number of seconds since the UNIX epoch. Returns 0 if the download is still in progress.

```APIDOC
## GET downloadItem.getEndTime()

### Description
Returns the number of seconds since the UNIX epoch when the download ended.

### Method
GET

### Returns
- **Double** - Number of seconds since UNIX epoch (January 1, 1970)

### Response Example
```
1705318350.2
```

### Notes
Returns 0 if the download is still in progress. Use with getStartTime() to calculate total download duration.
```

--------------------------------

### Evaluate Main Process Modules in Electron with Playwright

Source: https://github.com/electron/electron/blob/main/docs/tutorial/automated-testing.md

This example shows how to interact with the Electron main process using `electronApp.evaluate()`. It retrieves the `isPackaged` property from the Electron `app` module, which runs in the main process context. This allows testing main process logic and state within your Playwright tests.

```js
import { test, _electron as electron } from '@playwright/test'

test('get isPackaged', async () => {
  const electronApp = await electron.launch({ args: ['.'] })
  const isPackaged = await electronApp.evaluate(async ({ app }) => {
    // This runs in Electron's main process, parameter here is always
    // the result of the require('electron') in the main app script.
    return app.isPackaged
  })
  console.log(isPackaged) // false (because we're in development mode)
  // close app
  await electronApp.close()
})
```

--------------------------------

### Configure Electron Forge for OS-Specific Code Signing

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-5-packaging.md

These code examples demonstrate how to configure `forge.config.js` for code signing and notarization in Electron applications. The macOS configuration uses `osxSign` and `osxNotarize` with environment variables for Apple ID and team details, while the Windows configuration specifies a `certificateFile` and `certificatePassword` for the Squirrel maker. Proper configuration ensures applications are trusted by the operating system and can utilize features like auto-updates.

```js
module.exports = {
  packagerConfig: {
    osxSign: {},
    // ...
    osxNotarize: {
      tool: 'notarytool',
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_PASSWORD,
      teamId: process.env.APPLE_TEAM_ID
    }
    // ...
  }
}
```

```js
module.exports = {
  // ...
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: process.env.CERTIFICATE_PASSWORD
      }
    }
  ]
  // ...
}
```

--------------------------------

### <webview>.goToIndex(index)

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Navigates the guest page to a specified absolute history index.

```APIDOC
### `<webview>.goToIndex(index)`

#### Description
Navigates to the specified absolute index.

#### Parameters
- **index** (`Integer`) - Required. The absolute index in the navigation history.
```

--------------------------------

### Event: 'ready-to-show'

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Emitted when the renderer process has rendered the page for the first time without the window being shown yet.

```APIDOC
## Event: 'ready-to-show'

### Description
Emitted when the web page has rendered for the first time, allowing the window to be shown gracefully without a visual flash.

### Example
```js
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ show: false })
win.once('ready-to-show', () => {
  win.show()
})
```
```

--------------------------------

### Create BrowserWindow from Renderer Process using Electron Remote Module

Source: https://github.com/electron/electron/wiki/remote

This example demonstrates how to use the `remote` module to access browser-side modules like `browser-window` directly from the renderer process. It shows the creation of a new `BrowserWindow` instance and loading a URL, effectively performing a browser-process operation from the renderer.

```javascript
var remote = require('remote');
var BrowserWindow = remote.require('browser-window');
var win = new BrowserWindow({ width: 800, height: 600 });
win.loadUrl('https://github.com');
```

--------------------------------

### LanguageModelUtility.create(options)

Source: https://github.com/electron/electron/blob/main/docs/api/language-model-utility.md

Creates a new `LanguageModelUtility` instance with the provided options.

```APIDOC
## LanguageModelUtility.create(options)

### Description
Creates a new `LanguageModelUtility` with the provided `options`.

### Type
Static Method

### Signature
`LanguageModelUtility.create(options)`

### Parameters
- **options** ([LanguageModelCreateOptions](structures/language-model-create-options.md)) - Options for creating the language model utility.

### Returns
`Promise<LanguageModelUtility>` - A promise that resolves to a new `LanguageModelUtility` instance.
```

--------------------------------

### Manage Delayed Updates on Quit in Electron

Source: https://github.com/electron/electron/wiki/auto-updater

Handles the 'ready-for-update-on-quit' event, which is triggered when a user chooses to install an update upon exiting the application.

```javascript
autoUpdater.on('ready-for-update-on-quit', (event, version, quitAndUpdate) => {
  console.log(`Installing version ${version} on quit.`);
  
  // Quit the app and install the update
  quitAndUpdate();
});
```

--------------------------------

### Create a frameless and transparent BrowserWindow

Source: https://github.com/electron/electron/blob/main/docs/fiddles/windows/manage-windows/frameless-window/index.html

Configure a new window instance with frame set to false and transparent set to true to remove window chrome and background.

```javascript
var win = new BrowserWindow({
  transparent: true,
  frame: false
})
```

--------------------------------

### Electron IPC Renderer Setup and Module Import

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/service-worker/badge-index.html

Initializes the Electron IPC renderer module to enable inter-process communication between the renderer process and main process. This is the foundation for sending messages from the renderer to the main Electron process.

```javascript
const ipcRenderer = require('electron').ipcRenderer;
```

--------------------------------

### crashReporter.setUploadToServer(uploadToServer)

Source: https://github.com/electron/electron/blob/main/docs/api/crash-reporter.md

Sets whether crash reports should be submitted to the server. This is normally controlled by user preferences and has no effect if called before the start method is called. Only available in the main process.

```APIDOC
## crashReporter.setUploadToServer(uploadToServer)

### Description
Set whether reports should be submitted to the server. This would normally be controlled by user preferences.

### Method
POST

### Parameters
#### Request Body
- **uploadToServer** (boolean) - Required - Whether reports should be submitted to the server

### Request Example
```json
{
  "uploadToServer": true
}
```

### Notes
- This method is only available in the main process
- Deprecated in the renderer process as of Electron PR #23265
- Has no effect if called before `crashReporter.start()` is called
- Controlled by user preferences in typical usage
```

--------------------------------

### Complete binding.gyp Configuration for Windows Addon

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

This configuration ensures the addon is compiled only on Windows, includes necessary Windows libraries (`comctl32.lib`, `shcore.lib`), and sets compiler flags for exception handling and debugging, along with defining Windows version macros.

```json
{
  "targets": [
    {
      "target_name": "cpp_addon",
      "conditions": [
        ['OS=="win"', {
          "sources": [
            "src/cpp_addon.cc",
            "src/cpp_code.cc"
          ],
          "include_dirs": [
            "<!@(node -p \"require('node-addon-api').include\")",
            "include"
          ],
          "libraries": [
            "comctl32.lib",
            "shcore.lib"
          ],
          "dependencies": [
            "<!(node -p \"require('node-addon-api').gyp\")"
          ],
          "msvs_settings": {
            "VCCLCompilerTool": {
              "ExceptionHandling": 1,
              "DebugInformationFormat": "OldStyle",
              "AdditionalOptions": [
                "/FS"
              ]
            },
            "VCLinkerTool": {
              "GenerateDebugInformation": "true"
            }
          },
          "defines": [
            "NODE_ADDON_API_CPP_EXCEPTIONS",
            "WINVER=0x0A00",
            "_WIN32_WINNT=0x0A00"
          ]
        }]
      ]
    }
  ]
}
```

--------------------------------

### Securely Exposing Electron APIs to Web Content in Preload Scripts (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/security.md

This snippet demonstrates how to safely expose Electron APIs to untrusted web content using `contextBridge` in preload scripts. It highlights common pitfalls, such as directly exposing `ipcRenderer.on` or passing callbacks that provide access to the `IpcRendererEvent` object, which can leak the `ipcRenderer` instance. The 'Good' example shows how to wrap the IPC event handler to only pass necessary data to the renderer process, preventing unauthorized access to Electron's internal APIs.

```javascript
// Bad
contextBridge.exposeInMainWorld('electronAPI', {
  on: ipcRenderer.on
})

// Also bad
contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', callback)
})

// Good
contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, value) => callback(value))
})
```

--------------------------------

### Create and use MessageChannelMain for inter-process communication in Electron (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/api/message-channel-main.md

This example demonstrates how to establish a communication channel between the main and renderer processes using Electron's `MessageChannelMain`. It creates two `MessagePortMain` objects, sends one to the renderer process, and then uses them to exchange messages. This enables secure and efficient message passing between different parts of an Electron application.

```javascript
// Main process
const { BrowserWindow, MessageChannelMain } = require('electron')

const w = new BrowserWindow()
const { port1, port2 } = new MessageChannelMain()
w.webContents.postMessage('port', null, [port2])
port1.postMessage({ some: 'message' })

// Renderer process
const { ipcRenderer } = require('electron')

ipcRenderer.on('port', (e) => {
  // e.ports is a list of ports sent along with this message
  e.ports[0].onmessage = (messageEvent) => {
    console.log(messageEvent.data)
  }
})
```

--------------------------------

### Native Win32 Addon Folder Structure

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Defines the recommended folder structure for a native Windows C++ addon for Electron, including source, include, and JavaScript files.

```text
my-native-win32-addon/
├── binding.gyp
├── include/
│   └── cpp_code.h
├── js/
│   └── index.js
├── package.json
└── src/
    ├── cpp_addon.cc
    └── cpp_code.cc
```

--------------------------------

### net.request(options)

Source: https://github.com/electron/electron/blob/main/docs/api/net.md

Creates a ClientRequest instance using the provided options which are directly forwarded to the ClientRequest constructor.

```APIDOC
## net.request(options)

### Description
Creates a ClientRequest instance using the provided options which are directly forwarded to the ClientRequest constructor. The net.request method is used to issue both secure and insecure HTTP requests according to the specified protocol scheme in the options object.

### Parameters
- **options** (ClientRequestConstructorOptions | string) - The ClientRequest constructor options.

### Returns
- **ClientRequest** - An instance of ClientRequest.
```

--------------------------------

### Get Display Nearest to Point

Source: https://github.com/electron/electron/blob/main/docs/api/screen.md

Retrieves the display nearest to a specified point. Takes a Point parameter and returns the Display structure of the display closest to that coordinate.

```javascript
screen.getDisplayNearestPoint(point)
```

--------------------------------

### Create Window Filling Available Screen Area

Source: https://github.com/electron/electron/blob/main/docs/api/screen.md

Creates a BrowserWindow that fills the primary display's available work area. Uses screen.getPrimaryDisplay() to get the primary display dimensions and creates a window with matching width and height. Requires the app to be ready before execution.

```javascript
const { app, BrowserWindow, screen } = require('electron/main')

let mainWindow = null

app.whenReady().then(() => {
  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  mainWindow = new BrowserWindow({ width, height })
  mainWindow.loadURL('https://electronjs.org')
})
```

--------------------------------

### Get All Loaded Extensions

Source: https://github.com/electron/electron/blob/main/docs/api/extensions-api.md

Returns an array of all currently loaded extensions in the session. Useful for iterating over active extensions or checking the total number of loaded extensions.

```javascript
const allExtensions = extensions.getAllExtensions()
```

--------------------------------

### Build Electron with Ninja

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Compile the Electron project using Ninja for either the testing or release configuration. This process builds the core Electron framework and its dependencies.

```sh
ninja -C out/Testing electron
```

```sh
ninja -C out/Release electron
```

--------------------------------

### Build Application Menu from Template

Source: https://github.com/electron/electron/wiki/menu

Creates an application menu using Menu.buildFromTemplate() with a structured template array. Includes multiple menu sections (File, Edit, View, Window) with keyboard accelerators, selectors for macOS actions, and click handlers for custom functionality.

```javascript
var template = [
  {
    label: 'Atom Shell',
    submenu: [
      {
        label: 'About Atom Shell',
        selector: 'orderFrontStandardAboutPanel:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Hide Atom Shell',
        accelerator: 'Command+H',
        selector: 'hide:'
      },
      {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:'
      },
      {
        label: 'Show All',
        selector: 'unhideAllApplications:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function() { app.quit(); }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:'
      },
      {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:'
      },
      {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:'
      },
      {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'Command+R',
        click: function() { BrowserWindow.getFocusedWindow().reloadIgnoringCache(); }
      },
      {
        label: 'Toggle DevTools',
        accelerator: 'Alt+Command+I',
        click: function() { BrowserWindow.getFocusedWindow().toggleDevTools(); }
      }
    ]
  },
  {
    label: 'Window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:'
      },
      {
        label: 'Close',
        accelerator: 'Command+W',
        selector: 'performClose:'
      },
      {
        type: 'separator'
      },
      {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:'
      }
    ]
  }
];

menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
```

--------------------------------

### Configure Protocol Handler in Electron Forge

Source: https://github.com/electron/electron/blob/main/docs/tutorial/launch-app-from-url-in-another-app.md

Set up custom protocol handlers using Electron Forge configuration. This example shows the minimum required configuration to register a custom scheme (electron-fiddle) for macOS support via packagerConfig and Linux support via makers configuration with MIME type handling.

```json
{
  "config": {
    "forge": {
      "packagerConfig": {
        "protocols": [
          {
            "name": "Electron Fiddle",
            "schemes": ["electron-fiddle"]
          }
        ]
      },
      "makers": [
        {
          "name": "@electron-forge/maker-deb",
          "config": {
            "mimeType": ["x-scheme-handler/electron-fiddle"]
          }
        }
      ]
    }
  }
}
```

--------------------------------

### GET /update/darwin/{version}

Source: https://github.com/electron/electron/blob/main/docs/tutorial/updates.md

Retrieves update information for Squirrel.Mac clients. If an update is available, it returns a JSON object with details. If no update is available, the server should respond with a 204 No Content status.

```APIDOC
## GET /update/darwin/{version}

### Description
Retrieves update information for Squirrel.Mac clients. If an update is available, it returns a JSON object with details. If no update is available, the server should respond with a 204 No Content status.

### Method
GET

### Endpoint
/update/darwin/{version}

### Parameters
#### Path Parameters
- **version** (string) - Required - The current version of the application for which to check updates.

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(No request body for GET)

### Response
#### Success Response (200) - Update Available
- **url** (string) - Required - The URL to the ZIP archive of the app update.
- **name** (string) - Optional - The version name of the update.
- **notes** (string) - Optional - Release notes for the update.
- **pub_date** (string) - Optional - The publication date of the update in ISO 8601 format.

#### No Content Response (204) - No Update Available

#### Response Example (200)
```json
{
    "url": "https://your-static.storage/your-app-1.2.3-darwin.zip",
    "name": "1.2.3",
    "notes": "These are some release notes innit",
    "pub_date": "2024-09-18T12:29:53+01:00"
}
```
```

--------------------------------

### Basic WebSocket Connection and Message Handling in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/web-socket.md

Use this snippet to establish a basic WebSocket connection in the main process and handle incoming messages. Ensure the application has emitted the 'ready' event before creating the WebSocket.

```js
const { app, net } = require('electron')

app.whenReady().then(() => {
  const ws = new net.WebSocket('wss://echo.websocket.events')
  ws.onopen = () => ws.send('hello')
  ws.onmessage = (event) => {
    console.log('received', event.data)
    ws.close()
  }
})
```

--------------------------------

### <webview>.goBack()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Navigates the guest page backward in history.

```APIDOC
### `<webview>.goBack()`

#### Description
Makes the guest page go back.
```

--------------------------------

### Event: 'enter-html-full-screen'

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Fired when the guest page enters fullscreen mode triggered by the HTML API.

```APIDOC
## Event: 'enter-html-full-screen'

### Description
Fired when page enters fullscreen triggered by HTML API.
```

--------------------------------

### Crash Reporter Configuration

Source: https://github.com/electron/electron/wiki/crash-reporter

Initialize and configure the crash reporter module for your Electron application. This example demonstrates how to set up automatic crash reporting with company information and a submission endpoint.

```APIDOC
## Crash Reporter Setup

### Description
Initialize the crash reporter module and configure automatic crash submission to a remote server.

### Example
```javascript
crashReporter = require('crash-reporter');
crashReporter.setCompanyName('YourCompany');
crashReporter.setSubmissionUrl('https://your-domain.com/url-to-submit');
crashReporter.setAutoSubmit(true);
```

### Usage
This configuration enables automatic crash reporting for your Electron application, sending crash data to your specified server endpoint.
```

--------------------------------

### app.showAboutPanel()

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Displays the application's about panel asynchronously. Options shown in the panel can be customized beforehand using app.setAboutPanelOptions.

```APIDOC
## app.showAboutPanel()

### Description
Show the app's about panel options. These options can be overridden with `app.setAboutPanelOptions(options)`. This function runs asynchronously.
```

--------------------------------

### Get WebFrame Resource Usage

Source: https://github.com/electron/electron/blob/main/docs/api/web-frame.md

Retrieves an object detailing the memory usage of Blink's internal caches for the current web frame. The second code block shows the expected structure of the returned object.

```javascript
const { webFrame } = require('electron')

console.log(webFrame.getResourceUsage())
```

```javascript
{
  images: {
    count: 22,
    size: 2549,
    liveSize: 2542
  },
  cssStyleSheets: { /* same with "images" */ },
  xslStyleSheets: { /* same with "images" */ },
  fonts: { /* same with "images" */ },
  other: { /* same with "images" */ }
}
```

--------------------------------

### Set up Git Cache Path

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Configure a Git cache directory to speed up subsequent `gclient` operations when checking out multiple Electron repositories. This command sets an environment variable and creates the directory.

```sh
export GIT_CACHE_PATH="${HOME}/.git_cache"
mkdir -p "${GIT_CACHE_PATH}"
```

--------------------------------

### Get Primary Display Information

Source: https://github.com/electron/electron/blob/main/docs/api/screen.md

Retrieves the primary display object containing information about the main display. Returns a Display structure with properties like workAreaSize, bounds, and scaleFactor.

```javascript
screen.getPrimaryDisplay()
```

--------------------------------

### Build native module using npm for Electron

Source: https://github.com/electron/electron/wiki/Build-native-modules

This sequence of commands configures npm to build native modules against Electron's specific headers. It sets environment variables for the distribution URL, target Node.js version, and architecture, then uses `npm install` to download and compile a specified module, ensuring compatibility with Electron's V8 version.

```bash
export npm_config_disturl=https://gh-contractor-zcbenz.s3.amazonaws.com/atom-shell/dist
export npm_config_target=0.10.5
export npm_config_arch=ia32
HOME=~/.atom-shell-gyp npm install module-name
```

--------------------------------

### Adding ARM64 Components to Visual Studio 2017

Source: https://github.com/electron/electron/blob/main/docs/tutorial/windows-arm.md

This PowerShell command line is used to modify an existing Visual Studio 2017 installation, adding essential components for ARM64 cross-compilation. It ensures that the necessary tools for building native modules for Windows on ARM are available, including native desktop workload and specific ARM64 compiler tools.

```powershell
vs_installer.exe ^
--add Microsoft.VisualStudio.Workload.NativeDesktop ^
--add Microsoft.VisualStudio.Component.VC.ATLMFC ^
--add Microsoft.VisualStudio.Component.VC.Tools.ARM64 ^
--add Microsoft.VisualStudio.Component.VC.MFC.ARM64 ^
--includeRecommended
```

--------------------------------

### Start Message Queue Processing with MessagePortMain

Source: https://github.com/electron/electron/blob/main/docs/api/message-port-main.md

Initiates the sending of queued messages on a MessagePortMain port. Messages are buffered until this method is called, allowing control over when communication begins.

```javascript
port.start();
```

--------------------------------

### Exposing APIs with ContextBridge in Electron Preload Script (TypeScript)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/context-isolation.md

This TypeScript example shows how to expose an API using `contextBridge.exposeInMainWorld` in a `preload.ts` script. This API will later be typed for use in the renderer process.

```typescript
contextBridge.exposeInMainWorld('electronAPI', {
  loadPreferences: () => ipcRenderer.invoke('load-prefs')
})
```

--------------------------------

### GET /update/win32/{version}/RELEASES

Source: https://github.com/electron/electron/blob/main/docs/tutorial/updates.md

Retrieves the RELEASES artifact for Squirrel.Windows clients to check for and download updates. The server should always return a response, even if no update is available, allowing the client to perform the comparison.

```APIDOC
## GET /update/win32/{version}/RELEASES

### Description
Retrieves the RELEASES artifact for Squirrel.Windows clients to check for and download updates. The server should always return a response, even if no update is available, allowing the client to perform the comparison.

### Method
GET

### Endpoint
/update/win32/{version}/RELEASES

### Parameters
#### Path Parameters
- **version** (string) - Required - The current version of the application for which to check updates.

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(No request body for GET)

### Response
#### Success Response (200)
- **RELEASES_content** (string) - Plaintext content of the RELEASES file, typically containing a SHA1 hash, download URL for the full package, and file size.

#### Response Example
```plaintext
B0892F3C7AC91D72A6271FF36905FEF8FE993520 https://your-static.storage/your-app-1.2.3-full.nupkg 103298365
```
```

--------------------------------

### Implement HelloGui Method for Win32 Window Launch

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Adds a HelloGui method that calls the C++ hello_gui function to launch a Win32 GUI window in a separate thread. This method takes no arguments and returns void.

```cpp
// ... previous code

class CppAddon : public Napi::ObjectWrap<CppAddon> {
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports) {
        Napi::Function func = DefineClass(env, "CppWin32Addon", {
            InstanceMethod("helloWorld", &CppAddon::HelloWorld),
            InstanceMethod("helloGui", &CppAddon::HelloGui),
        });

        // ... rest of Init function
    }

    // ... constructor

private:
    // ... HelloWorld method

    void HelloGui(const Napi::CallbackInfo& info) {
        cpp_code::hello_gui();
    }
};

// ... rest of the file
```

--------------------------------

### Get Display Matching Rectangle

Source: https://github.com/electron/electron/blob/main/docs/api/screen.md

Retrieves the display that most closely intersects the provided rectangular bounds. Takes a Rectangle parameter and returns the Display structure that best matches the specified area.

```javascript
screen.getDisplayMatching(rect)
```

--------------------------------

### Implement Drag and Drop in Renderer Process

Source: https://github.com/electron/electron/blob/main/docs/fiddles/native-ui/drag-and-drop/index.html

Captures the dragstart event on a DOM element and notifies the main process to initiate the drag operation.

```javascript
const {ipcRenderer} = require('electron')

const dragFileLink = document.getElementById('drag-file-link')

dragFileLink.addEventListener('dragstart', (event) => {
  event.preventDefault()
  ipcRenderer.send('ondragstart', __filename)
})
```

--------------------------------

### package.json for Native Win32 Addon

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Configuration for the native Windows C++ addon, including build scripts for `electron-rebuild` and `node-gyp`, and dependencies for Node.js and Electron.

```json
{
  "name": "cpp-win32",
  "version": "1.0.0",
  "description": "A demo module that exposes C++ code to Electron",
  "main": "js/index.js",
  "author": "Your Name",
  "scripts": {
    "clean": "rm -rf build_swift && rm -rf build",
    "build-electron": "electron-rebuild",
    "build": "node-gyp configure && node-gyp build"
  },
  "license": "MIT",
  "dependencies": {
    "bindings": "^1.5.0",
    "node-addon-api": "^8.3.0"
  }
}
```

--------------------------------

### Open File/Directory Selection Dialog (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/api/dialog.md

Displays an open dialog attached to a `BaseWindow`, allowing users to select both files and directories. The promise resolves with cancellation status and selected file paths, or rejects on error.

```javascript
dialog.showOpenDialog(mainWindow, {
  properties: ['openFile', 'openDirectory']
}).then(result => {
  console.log(result.canceled)
  console.log(result.filePaths)
}).catch(err => {
  console.log(err)
})
```

--------------------------------

### Electron Renderer Process: Open Window and Send Data via IPC

Source: https://github.com/electron/electron/blob/main/spec/fixtures/api/native-window-open-file.html

This JavaScript snippet, intended for an Electron renderer process, opens a new child window (`native-window-open-child.html`). Once the child window loads, it queries an `h1` element, extracts its text content, and then uses `ipcRenderer.send()` to transmit this content to the Electron main process under the 'answer' channel. This demonstrates basic window management and IPC communication.

```javascript
const {ipcRenderer} = require('electron')
const popup = window.open('native-window-open-child.html')
popup.onload = () => {
  const content = popup.document.querySelector('h1').innerText
  ipcRenderer.send('answer', content)
}
```

--------------------------------

### Import Electron Modules

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

Importing app and BrowserWindow modules using CommonJS syntax.

```js
const { app, BrowserWindow } = require('electron')
```

```js
const { app, BrowserWindow } = require('electron/main')
```

--------------------------------

### Write and Read text/uri-list with ClipboardItem

Source: https://github.com/electron/electron/blob/main/docs/api/clipboard-item.md

Demonstrates writing file paths as a URI list to the clipboard and reading them back as a list of file URIs.

```javascript
const { clipboard, ClipboardItem } = require('electron')
const { pathToFileURL } = require('node:url')

// Write two files to the clipboard so they can be pasted into the OS file
// manager.
clipboard.write([
  new ClipboardItem({
    'text/uri-list': [
      pathToFileURL('/path/to/first.txt').href,
      pathToFileURL('/path/to/second.txt').href
    ].join('\r\n')
  })
])

// Read the files currently on the clipboard.
async function readFiles () {
  const [item] = await clipboard.read()
  if (item.types.includes('text/uri-list')) {
    const blob = await item.getType('text/uri-list')
    if (blob instanceof Blob) {
      const uriList = await blob.text()
      return uriList.split(/\r?\n/).filter(Boolean)
    }
  }
  return []
}
```

--------------------------------

### Markdown Platform-Specific Argument Documentation

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

Denotes platform-specific arguments or methods using space-delimited italicized list following the datatype. Supports macOS, Windows, and Linux platform indicators for conditional functionality.

```markdown
* `animate` boolean (optional) _macOS_ _Windows_ - Animate the thing.
```

--------------------------------

### Get All Available Displays

Source: https://github.com/electron/electron/blob/main/docs/api/screen.md

Retrieves an array of all currently available displays. Returns an array of Display structures, each containing information about a connected display including bounds, work area, and scale factor.

```javascript
screen.getAllDisplays()
```

--------------------------------

### app.getJumpListSettings()

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Retrieves Windows Jump List settings including minimum items count and removed items.

```APIDOC
## app.getJumpListSettings()

### Description
Retrieves Jump List settings on Windows including the minimum number of items to display and items removed by the user.

### Platform Support
- Windows

### Returns
- **Object**:
  - `minItems` (Integer) - The minimum number of items that will be shown in the Jump List.
  - `removedItems` (JumpListItem[]) - Array of `JumpListItem` objects corresponding to items that the user has explicitly removed from custom categories in the Jump List.
```

--------------------------------

### dialog.showOpenDialogSync([window, ]options)

Source: https://github.com/electron/electron/blob/main/docs/api/dialog.md

Synchronously displays a native open file or directory dialog. It allows users to select files or directories with various customization options, returning the chosen paths or `undefined` if cancelled.

```APIDOC
## Method: `dialog.showOpenDialogSync`

### Description
Synchronously displays a native open file or directory dialog. It allows users to select files or directories with various customization options, returning the chosen paths or `undefined` if cancelled.

### Method Signature
`dialog.showOpenDialogSync([window, ]options)`

### Parameters
- **window** ([BaseWindow](base-window.md)) - Optional - Allows the dialog to attach itself to a parent window, making it modal.
- **options** (Object) - Required
  - **title** (string) - Optional - Title for the dialog.
  - **defaultPath** (string) - Optional - Absolute directory path, absolute file path, or file name to use by default. If not provided, the dialog will default to the user's Downloads folder, or their home directory if Downloads doesn't exist.
  - **buttonLabel** (string) - Optional - Custom label for the confirmation button, when left empty the default label will be used.
  - **filters** ([FileFilter[]](structures/file-filter.md)) - Optional - Array of file types that can be displayed or selected. For example: `[{ name: 'Images', extensions: ['jpg', 'png'] }]`.
  - **properties** (string[]) - Optional - Contains which features the dialog should use. Supported values:
    - `openFile` - Allow files to be selected.
    - `openDirectory` - Allow directories to be selected.
    - `multiSelections` - Allow multiple paths to be selected.
    - `showHiddenFiles` _macOS_ _Windows_ - Show hidden files in dialog.
    - `createDirectory` _macOS_ - Allow creating new directories from dialog.
    - `promptToCreate` _Windows_ - Prompt for creation if the file path entered in the dialog does not exist.
    - `noResolveAliases` _macOS_ - Disable the automatic alias (symlink) path resolution.
    - `treatPackageAsDirectory` _macOS_ - Treat packages, such as `.app` folders, as a directory instead of a file.
    - `dontAddToRecent` _Windows_ - Do not add the item being opened to the recent documents list.
  - **message** (string) - Optional _macOS_ - Message to display above input boxes.
  - **securityScopedBookmarks** (boolean) - Optional _macOS_ _mas_ - Create [security scoped bookmarks](https://developer.apple.com/documentation/professional-video-applications/enabling-security-scoped-bookmark-and-url-access) when packaged for the Mac App Store.

### Returns
`string[] | undefined` - The file paths chosen by the user; if the dialog is cancelled it returns `undefined`.

### Example Usage
```js
const { dialog } = require('electron')

console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
```

```js
dialog.showOpenDialogSync(mainWindow, {
  properties: ['openFile', 'openDirectory']
})
```

### Return Example
```json
[
  "/path/to/selected/file1.txt",
  "/path/to/selected/file2.txt"
]
```
Or `undefined` if the dialog is cancelled.
```

--------------------------------

### Migrate app single instance handling

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Replace the deprecated makeSingleInstance method with requestSingleInstanceLock and the second-instance event.

```js
// Deprecated
app.makeSingleInstance((argv, cwd) => {
  /* ... */
})
// Replace with
app.requestSingleInstanceLock()
app.on('second-instance', (event, argv, cwd) => {
  /* ... */
})
```

--------------------------------

### Markdown Property Documentation Structure

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

Standard format for documenting properties in Electron API documentation. Property chapter includes property name with module or class context using appropriate heading levels.

```markdown
### session.defaultSession
```

--------------------------------

### process.takeHeapSnapshot(filePath)

Source: https://github.com/electron/electron/blob/main/docs/api/process.md

Takes a V8 heap snapshot and saves it to a file.

```APIDOC
## process.takeHeapSnapshot(filePath)\n\n### Description\nTakes a V8 heap snapshot and saves it to filePath.\n\n### Method\nprocess.takeHeapSnapshot(filePath)\n\n### Parameters\n#### Arguments\n- **filePath** (string) - Required - Path to the output file.\n\n### Response\n#### Success Response\n- **success** (boolean) - Indicates whether the snapshot has been created successfully.
```

--------------------------------

### Setting a Custom Dock Menu in Electron (macOS)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/macos-dock.md

This JavaScript code snippet demonstrates how to create and assign a custom context menu to the application's Dock icon on macOS using Electron. It utilizes `app.whenReady()` to ensure the application is fully initialized before calling `app.dock.setMenu()`, which accepts a `Menu` instance built from a template. The example includes a menu item to open a new `BrowserWindow`.

```javascript
const { app, BrowserWindow, Menu } = require('electron/main')

// dock.setMenu only works after the 'ready' event is fired
app.whenReady().then(() => {
  const dockMenu = Menu.buildFromTemplate([
    {
      label: 'New Window',
      click: () => { const win = new BrowserWindow() }
    }
    // add more menu options to the array
  ])

  // Dock is undefined on platforms outside of macOS
  app.dock?.setMenu(dockMenu)
})
```

--------------------------------

### Show Open Dialog Sync with File and Directory Selection in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/dialog.md

This snippet demonstrates how to synchronously display an open dialog attached to a parent window, allowing selection of both files and directories. On Windows and Linux, this will prioritize directory selection.

```js
dialog.showOpenDialogSync(mainWindow, {
  properties: ['openFile', 'openDirectory']
})
```

--------------------------------

### NPM Lint Command for API History Validation

Source: https://github.com/electron/electron/blob/main/docs/CLAUDE.md

Command to validate API history YAML blocks against the schema defined in docs/api-history.schema.json. Used to ensure proper formatting and compliance with documentation standards.

```bash
npm run lint:api-history
```

--------------------------------

### Get Cursor Screen Point

Source: https://github.com/electron/electron/blob/main/docs/api/screen.md

Retrieves the current absolute position of the mouse pointer as a device-independent pixel (DIP) point. Returns a Point structure representing cursor coordinates. Not supported on Wayland (Linux).

```javascript
screen.getCursorScreenPoint()
```

--------------------------------

### BrowserWindow Constructor

Source: https://github.com/electron/electron/wiki/browser-window

Creates a new BrowserWindow instance with specified options. This is the primary method for instantiating browser windows in Electron applications with customizable properties like dimensions, positioning, and behavior.

```APIDOC
## new BrowserWindow(options)

### Description
Creates a new BrowserWindow with native properties set by the options object. Usually you only need to set the width and height, other properties will have decent default values.

### Method
Constructor

### Parameters
#### Constructor Options
- **x** (Integer) - Optional - Window's left offset to screen
- **y** (Integer) - Optional - Window's top offset to screen
- **center** (Boolean) - Optional - Show window in the center of the screen
- **min-width** (Integer) - Optional - Minimum width
- **min-height** (Integer) - Optional - Minimum height
- **max-width** (Integer) - Optional - Maximum width
- **max-height** (Integer) - Optional - Maximum height
- **resizable** (Boolean) - Optional - Whether window is resizable
- **always-on-top** (Boolean) - Optional - Whether the window should always stay on top of other windows
- **fullscreen** (Boolean) - Optional - Whether the window should show in fullscreen
- **kiosk** (Boolean) - Optional - The kiosk mode
- **title** (String) - Optional - Default window title
- **show** (Boolean) - Optional - Whether window should be shown when created

### Request Example
```javascript
var BrowserWindow = require('browser-window');
var win = new BrowserWindow({ width: 800, height: 600, show: false });
win.on('destroyed', function() {
  win = null;
});
win.loadUrl('https://github.com');
win.show();
```

### Response
Returns a new BrowserWindow instance that is an EventEmitter.
```

--------------------------------

### Constructor: new TouchBar(options)

Source: https://github.com/electron/electron/blob/main/docs/api/touch-bar.md

Creates a new TouchBar instance with specified items for native macOS applications. This instance can then be attached to a BrowserWindow using `BrowserWindow.setTouchBar`.

```APIDOC
## CONSTRUCTOR new TouchBar(options)

### Description
Creates a new touch bar with the specified items. Use `BrowserWindow.setTouchBar` to add the `TouchBar` to a window.
This API is currently experimental.

### Method
CONSTRUCTOR

### Endpoint
new TouchBar(options)

### Parameters
#### Constructor Parameters
- **options** (Object) - Required - Configuration options for the TouchBar instance.
  - **items** (Array<TouchBarButton | TouchBarColorPicker | TouchBarGroup | TouchBarLabel | TouchBarPopover | TouchBarScrubber | TouchBarSegmentedControl | TouchBarSlider | TouchBarSpacer>) - Optional - An array of TouchBar items to display on the TouchBar.
  - **escapeItem** (TouchBarButton | TouchBarColorPicker | TouchBarGroup | TouchBarLabel | TouchBarPopover | TouchBarScrubber | TouchBarSegmentedControl | TouchBarSlider | TouchBarSpacer | null) - Optional - An item to replace the default "esc" button on the TouchBar.

### Request Example
```json
{
  "options": {
    "items": [
      // Example: new TouchBarButton({ label: 'Hello' })
    ],
    "escapeItem": null
  }
}
```

### Response
#### Returns
- **TouchBar instance** (Object) - A new instance of the TouchBar class.

#### Response Example
```json
{
  "instance": "TouchBar"
}
```

### Static Properties
The following static properties provide references to the various TouchBar item classes:
- **TouchBarButton** (typeof TouchBarButton) - Reference to the `TouchBarButton` class.
- **TouchBarColorPicker** (typeof TouchBarColorPicker) - Reference to the `TouchBarColorPicker` class.
- **TouchBarGroup** (typeof TouchBarGroup) - Reference to the `TouchBarGroup` class.
- **TouchBarLabel** (typeof TouchBarLabel) - Reference to the `TouchBarLabel` class.
- **TouchBarPopover** (typeof TouchBarPopover) - Reference to the `TouchBarPopover` class.
- **TouchBarScrubber** (typeof TouchBarScrubber) - Reference to the `TouchBarScrubber` class.
- **TouchBarSegmentedControl** (typeof TouchBarSegmentedControl) - Reference to the `TouchBarSegmentedControl` class.
- **TouchBarSlider** (typeof TouchBarSlider) - Reference to the `TouchBarSlider` class.
- **TouchBarSpacer** (typeof TouchBarSpacer) - Reference to the `TouchBarSpacer` class.
- **TouchBarOtherItemsProxy** (typeof TouchBarOtherItemsProxy) - Reference to the `TouchBarOtherItemsProxy` class.

### Instance Properties
The following properties are available on instances of `TouchBar`:
- **touchBar.escapeItem** (TouchBarItem) - A `TouchBarItem` that will replace the "esc" button on the touch bar when set. Setting to `null` restores the default "esc" button. Changing this value immediately updates the escape item in the touch bar.
```

--------------------------------

### Handle all notification activations globally

Source: https://github.com/electron/electron/blob/main/docs/api/notification.md

Register a callback to handle notification clicks, replies, and action button presses regardless of whether the original Notification object is still in memory. Useful for handling cold starts and notifications persisted after app restart.

```javascript
const { Notification, app } = require('electron')

app.whenReady().then(() => {
  // Register handler for all notification activations
  Notification.handleActivation((details) => {
    console.log('Notification activated:', details.type)
    if (details.type === 'reply') {
      console.log('User reply:', details.reply)
    } else if (details.type === 'action') {
      console.log('Action index:', details.actionIndex)
    }
  })
})
```

--------------------------------

### Electron Renderer Process Garbage Collection Invocation

Source: https://github.com/electron/electron/blob/main/spec/fixtures/api/sandbox.html

This asynchronous function repeatedly invokes the `window.gc()` method ten times with a 100ms interval. It's designed to encourage garbage collection

--------------------------------

### Call desktopCapturer.getSources() with options

Source: https://github.com/electron/electron/blob/main/docs/api/desktop-capturer.md

Retrieve available desktop media sources by calling getSources() with configuration options. This method returns a Promise that resolves with an array of DesktopCapturerSource objects representing screens and windows available for capture.

```javascript
desktopCapturer.getSources({
  types: ['screen', 'window'],
  thumbnailSize: { width: 150, height: 150 },
  fetchWindowIcons: true
}).then((sources) => {
  // sources is an array of DesktopCapturerSource objects
  console.log(sources)
})
```

--------------------------------

### Initialize Electron Default App

Source: https://github.com/electron/electron/blob/main/default_app/index.html

This snippet initializes the default Electron application. It is typically used to set up the main process or renderer process environment.

```JavaScript
window.electronDefaultApp.initialize()
```

--------------------------------

### Markdown Event Documentation Structure

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

Standard format for documenting events in Electron API documentation. Events chapter includes event name, return values with type annotations, and follows same argument rules as methods.

```markdown
### Event: 'wake-up'

Returns:

* `time` string
```

--------------------------------

### Retrieve and Display All History Entries

Source: https://github.com/electron/electron/blob/main/docs/tutorial/navigation-history.md

Get all browsing history entries and iterate through them to display page titles and URLs. Each entry contains metadata about a visited page, indexed sequentially from earliest (index 0) to most recent (index N).

```javascript
const entries = navigationHistory.getAllEntries()

entries.forEach((entry) => {
  console.log(`${entry.title}: ${entry.url}`)
})
```

--------------------------------

### dialog.showOpenDialog([window, ]options)

Source: https://github.com/electron/electron/blob/main/docs/api/dialog.md

Displays a modal dialog for selecting files and/or directories. This method returns a Promise that resolves with the user's selection or cancellation status.

```APIDOC
## Method: dialog.showOpenDialog

### Description
Displays a modal dialog for selecting files and/or directories. This method returns a Promise that resolves with the user's selection or cancellation status.

### Signature
`dialog.showOpenDialog([window, ]options)`

### Parameters
- **window** ([BaseWindow](base-window.md)) - Optional - Parent window to attach the dialog to, making it modal.
- **options** (Object) - Required
    - **title** (string) - Optional - Title of the dialog window.
    - **defaultPath** (string) - Optional - Absolute directory path, absolute file path, or file name to use by default. If not provided, the dialog will default to the user's Downloads folder, or their home directory if Downloads doesn't exist.
    - **buttonLabel** (string) - Optional - Custom label for the confirmation button. When left empty, the default label will be used.
    - **filters** ([FileFilter[]](structures/file-filter.md)) - Optional - Specifies an array of file types that can be displayed or selected when you want to limit the user to a specific type.
    - **properties** (string[]) - Optional - Contains which features the dialog should use. Supported values: `openFile`, `openDirectory`, `multiSelections`, `showHiddenFiles` (macOS, Windows), `createDirectory` (macOS), `promptToCreate` (Windows), `noResolveAliases` (macOS), `treatPackageAsDirectory` (macOS), `dontAddToRecent` (Windows).
    - **message** (string) - Optional - _macOS_ - Message to display above input boxes.
    - **securityScopedBookmarks** (boolean) - Optional - _macOS_ _mas_ - Create security scoped bookmarks when packaged for the Mac App Store.

### Returns
`Promise<Object>` - Resolves with an object containing the following:

#### Return Object Fields
- **canceled** (boolean) - Whether or not the dialog was canceled.
- **filePaths** (string[]) - An array of file paths chosen by the user. If the dialog is cancelled this will be an empty array.
- **bookmarks** (string[]) - Optional - _macOS_ _mas_ - An array matching the `filePaths` array of base64 encoded strings which contains security scoped bookmark data. `securityScopedBookmarks` must be enabled for this to be populated.

### Example Usage
```js
dialog.showOpenDialog(mainWindow, {
  properties: ['openFile', 'openDirectory']
}).then(result => {
  console.log(result.canceled)
  console.log(result.filePaths)
}).catch(err => {
  console.log(err)
})
```

### Example Return Value
```json
{
  "canceled": false,
  "filePaths": ["/Users/username/Documents/my_document.txt"],
  "bookmarks": []
}
```
```

--------------------------------

### Manage Electron App Lifecycle and Dark Mode Logic in Main Process

Source: https://github.com/electron/electron/blob/main/docs/tutorial/dark-mode.md

This `main.js` file represents the main process of the Electron application, handling window creation, lifecycle events, and the core dark mode logic. It sets up `ipcMain` handlers to respond to requests from the renderer process, manipulating the `nativeTheme` object to toggle between dark/light modes or reset to the system theme, and returning the current theme status.

```js
const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')

const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

--------------------------------

### Initialize Win32 GUI Thread and DPI Awareness in C++

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Sets up a dedicated thread for the Win32 message loop to prevent blocking the Node.js event loop. Configures per-monitor DPI awareness and initializes common control classes.

```cpp
void hello_gui() {
  // Launch GUI in a separate thread
  std::thread guiThread([]() {
    // Enable Per-Monitor DPI awareness
    SetProcessDpiAwarenessContext(DPI_AWARENESS_CONTEXT_PER_MONITOR_AWARE_V2);

    // Initialize Common Controls
    INITCOMMONCONTROLSEX icex;
    icex.dwSize = sizeof(INITCOMMONCONTROLSEX);
    icex.dwICC = ICC_STANDARD_CLASSES | ICC_WIN95_CLASSES;
    InitCommonControlsEx(&icex);

    // Register window class
    WNDCLASSEXW wc = {};
    wc.cbSize = sizeof(WNDCLASSEXW);
```

--------------------------------

### Execute Debug Build of Electron with PowerShell

Source: https://github.com/electron/electron/blob/main/docs/development/debugging-on-windows.md

Start a debugging session by running the debug build of Electron from PowerShell or CMD with an application path as a parameter. This launches the Electron process that can be attached to with Visual Studio debugger for step-through debugging.

```powershell
$ ./out/Testing/electron.exe ~/my-electron-app/
```

--------------------------------

### contents.downloadURL(url[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents.md

Initiates a download of the resource at the specified URL without navigating.

```APIDOC
## `contents.downloadURL(url[, options])`

### Description
Initiates a download of the resource at `url` without navigating. The `will-download` event of `session` will be triggered.

### Parameters
- **url** (`string`) - Required. The URL of the resource to download.
- **options** (`Object`) - Optional.
  - **headers** (`Record<string, string>`) - Optional. HTTP request headers.
```

--------------------------------

### Unregistering a Global Keyboard Shortcut in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/keyboard-shortcuts.md

This example illustrates how to unregister a previously registered global keyboard shortcut using `globalShortcut.unregister`. By calling this function with the same accelerator, the shortcut will no longer trigger its associated action. It depends on the `globalShortcut` module from 'electron/main'.

```js
const { globalShortcut } = require('electron/main')

globalShortcut.unregister('CommandOrControl+Alt+R')
```

--------------------------------

### Access ServiceWorkers and retrieve all running workers in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/service-workers.md

Demonstrates how to access the ServiceWorkers instance from a session and retrieve all currently running service workers. This example shows basic initialization and logging of service worker information.

```javascript
const { session } = require('electron')

// Get all service workers.
console.log(session.defaultSession.serviceWorkers.getAllRunning())
```

--------------------------------

### Customize window creation with setWindowOpenHandler

Source: https://github.com/electron/electron/blob/main/docs/api/window-open.md

Configures window creation logic in the main process to allow or deny requests and override window options.

```javascript
// main.js
const mainWindow = new BrowserWindow()

// In this example, only windows with the `about:blank` url will be created.
// All other urls will be blocked.
mainWindow.webContents.setWindowOpenHandler(({ url }) => {
  if (url === 'about:blank') {
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        frame: false,
        fullscreenable: false,
        backgroundColor: 'black',
        webPreferences: {
          preload: 'my-child-window-preload-script.js'
        }
      }
    }
  }
  return { action: 'deny' }
})
```

--------------------------------

### Configure VS Code Debugging for Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

Create a launch.json file in the .vscode directory to enable simultaneous debugging of main and renderer processes.

```json
{
  "version": "0.2.0",
  "compounds": [
    {
      "name": "Main + renderer",
      "configurations": ["Main", "Renderer"],
      "stopAll": true
    }
  ],
  "configurations": [
    {
      "name": "Renderer",
      "port": 9222,
      "request": "attach",
      "type": "chrome",
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "Main",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": [".", "--remote-debugging-port=9222"],
      "outputCapture": "std",
      "console": "integratedTerminal"
    }
  ]
}
```

--------------------------------

### Illustrating contextBridge API Change with a Patch

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

This patch snippet illustrates a modification to how `ipcRenderer` is exposed via `contextBridge.exposeInMainWorld`. It shows the removal of direct `ipcRenderer` exposure and its replacement with a wrapped event handler, demonstrating the behavioral change.

```patch
  contextBridge.exposeInMainWorld('app', {
-   ipcRenderer,
+   onEvent: (cb) => ipcRenderer.on('foo', (e, ...args) => cb(args))
  })
```

--------------------------------

### Create Application Menu Using Template Helper

Source: https://github.com/electron/electron/blob/main/docs/tutorial/menus.md

Build an application menu using Menu.buildFromTemplate() with a configuration array. This approach reduces boilerplate by accepting MenuItem constructor options in a single array rather than appending each item separately. The resulting menu is set as the application menu.

```javascript
const menu = Menu.buildFromTemplate([{
  label: 'Menu',
  submenu: [
    { label: 'Hello' },
    { type: 'separator' },
    { label: 'Electron', type: 'checkbox', checked: true }
  ]
}])
Menu.setApplicationMenu(menu)
```

--------------------------------

### Set AppUserModelId for Windows Notifications

Source: https://github.com/electron/electron/blob/main/docs/tutorial/notifications.md

Configures the AppUserModelID for Windows notifications during development. This method must be called in the main process to enable notifications on Windows when not using Squirrel installer. Required for proper notification display on Windows platform.

```javascript
app.setAppUserModelId(process.execPath)
```

--------------------------------

### Attach preload script in main.js

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-3-preload.md

Configures the BrowserWindow to use the preload script by specifying its path in the webPreferences object.

```javascript
const { app, BrowserWindow } = require('electron')

const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
```

--------------------------------

### Electron mirror URL composition logic

Source: https://github.com/electron/electron/blob/main/docs/tutorial/installation.md

Shows how @electron/get constructs the download URL using mirror environment variables.

```js
url = ELECTRON_MIRROR + ELECTRON_CUSTOM_DIR + '/' + ELECTRON_CUSTOM_FILENAME
```

--------------------------------

### Set User Tasks for JumpList in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/windows-taskbar.md

Configure custom user tasks that appear in the Windows taskbar JumpList context menu. Tasks are executed with specified arguments when clicked by users. This example sets a single task to create a new window.

```javascript
const { app } = require('electron')

app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new window'
  }
])
```

--------------------------------

### <webview>.goToOffset(offset)

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Navigates the guest page to a specified offset relative to the current entry.

```APIDOC
### `<webview>.goToOffset(offset)`

#### Description
Navigates to the specified offset from the "current entry".

#### Parameters
- **offset** (`Integer`) - Required. Offset from current entry.
```

--------------------------------

### Communicate with a UtilityProcess using MessagePortMain

Source: https://github.com/electron/electron/blob/main/docs/api/utility-process.md

Establish a communication channel between the main process and a spawned utility process by transferring a MessagePortMain instance.

```javascript
// Main process
const { port1, port2 } = new MessageChannelMain()
const child = utilityProcess.fork(path.join(__dirname, 'test.js'))
child.postMessage({ message: 'hello' }, [port1])

// Child process
process.parentPort.once('message', (e) => {
  const [port] = e.ports
  // ...
})
```

--------------------------------

### <webview>.downloadURL(url[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Initiates a download of the resource at the specified URL without navigating the webview.

```APIDOC
### `<webview>.downloadURL(url[, options])`

#### Description
Initiates a download of the resource at `url` without navigating.

#### Parameters
- **url** (`string`) - Required. The URL to download.
- **options** (`Object`) - Optional.
  - **headers** (`Record<string, string>`) - Optional. HTTP request headers.
```

--------------------------------

### Configure TraceConfig for Chrome DevTools Compatibility in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/structures/trace-config.md

This example demonstrates a TraceConfig object configured to capture performance data similar to Chrome DevTools. It includes specific timeline and V8 categories while excluding all others to minimize noise.

```js
{
  recording_mode: 'record-until-full',
  included_categories: [
    'devtools.timeline',
    'disabled-by-default-devtools.timeline',
    'disabled-by-default-devtools.timeline.frame',
    'disabled-by-default-devtools.timeline.stack',
    'v8.execute',
    'blink.console',
    'blink.user_timing',
    'latencyInfo',
    'disabled-by-default-v8.cpu_profiler',
    'disabled-by-default-v8.cpu_profiler.hires'
  ],
  excluded_categories: ['*']
}
```

--------------------------------

### Configure package.json for native Linux addons

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

Defines build scripts for node-gyp and electron-rebuild while specifying node-addon-api and bindings as dependencies.

```json
{
  "name": "cpp-linux",
  "version": "1.0.0",
  "description": "A demo module that exposes C++ code to Electron",
  "main": "js/index.js",
  "scripts": {
    "clean": "rm -rf build",
    "build-electron": "electron-rebuild",
    "build": "node-gyp configure && node-gyp build"
  },
  "license": "MIT",
  "dependencies": {
    "node-addon-api": "^8.3.0",
    "bindings": "^1.5.0"
  }
}
```

--------------------------------

### Copy Electron Library as Node Library on Windows

Source: https://github.com/electron/electron/blob/main/docs/development/testing.md

Copies 'electron.lib' to 'node.lib' within the build output directory, a necessary step for unit testing on Windows.

```powershell
cd out\Testing
mkdir gen\node_headers\Release
copy electron.lib gen\node_headers\Release\node.lib
```

--------------------------------

### Starter Code for Custom Title Bar

Source: https://github.com/electron/electron/blob/main/docs/tutorial/custom-title-bar.md

This is the initial Fiddle code to begin the custom title bar tutorial.

```javascript
fiddle docs/fiddles/features/window-customization/custom-title-bar/starter-code
```

--------------------------------

### Send IPC Message from Renderer Process in Electron

Source: https://github.com/electron/electron/blob/main/spec/fixtures/api/preload.html

This script defines a function to send a message to the main process via ipcRenderer.send. It ensures the window.test property is initialized and optionally waits for the window's load event if window.delayed is truthy.

```JavaScript
const send = () => {
  if (!window.test) window.test = 'window';
  require('electron').ipcRenderer.send('answer', window.test);
};

if (window.delayed) {
  window.addEventListener('load', send);
} else {
  send();
}
```

--------------------------------

### win.focus()

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Brings focus to the window.

```APIDOC
### `win.focus()`

Focuses on the window.
```

--------------------------------

### Accessing Typed Electron API in Renderer Process (TypeScript)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/context-isolation.md

This TypeScript example demonstrates how to access the `electronAPI` exposed via `contextBridge` in the renderer process. With the declaration file in place, TypeScript provides full type safety and auto-completion for the custom API.

```typescript
window.electronAPI.loadPreferences()
```

--------------------------------

### BrowserWindow Instance Methods - Fullscreen

Source: https://github.com/electron/electron/wiki/browser-window

Methods for managing fullscreen mode of the window.

```APIDOC
## BrowserWindow Instance Methods - Fullscreen

### BrowserWindow.setFullScreen(flag)

**Description:**
Sets whether the window should be in fullscreen mode.

**Method:**
PUT

**Parameters:**
- **flag** (Boolean) - Required - True to enable fullscreen, false to disable

**Response:**
Void

---

### BrowserWindow.isFullScreen()

**Description:**
Returns whether the window is in fullscreen mode.

**Method:**
GET

**Response:**
- **Returns** (Boolean) - True if the window is in fullscreen mode, false otherwise
```

--------------------------------

### Create Project Directory Structure for Native Addon

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron.md

This command-line snippet creates the essential directory structure for a native Node.js addon project. It sets up `src/` for C++ source files, `include/` for header files, and `js/` for JavaScript wrapper files.

```shell
mkdir src
mkdir include
mkdir js
```

--------------------------------

### `new WebSocket(url[, protocols])`

Source: https://github.com/electron/electron/blob/main/docs/api/web-socket.md

Creates a new `WebSocket` instance to establish a connection to the specified URL. It supports standard WebSocket protocols and an Electron-specific options object.

```APIDOC
## Constructor: `new WebSocket(url[, protocols])`

### Description
Initializes a new WebSocket connection to the given URL. The scheme must be `ws:` or `wss:`. `http:` and `https:` are accepted and rewritten to their WebSocket equivalents.

### Parameters
- **url** (string) - Required - The URL to connect to.
- **protocols** (string | string[] | WebSocketOptions) - Optional - One or more WebSocket subprotocols, or an Electron-specific options object. Passing an options object is an Electron extension.
```

--------------------------------

### Query all cookies using Electron Session API

Source: https://github.com/electron/electron/blob/main/docs/api/cookies.md

Retrieves all cookies from the default session using the Cookies.get() method. Demonstrates promise-based error handling for cookie retrieval operations. This example shows how to access the cookies property from a session instance.

```javascript
const { session } = require('electron')

// Query all cookies.
session.defaultSession.cookies.get({})
  .then((cookies) => {
    console.log(cookies)
  }).catch((error) => {
    console.log(error)
  })
```

--------------------------------

### Get JavaScript-Based Overlay Properties in Electron

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/overlay.html

Retrieves titlebar area geometry directly from the Window Controls Overlay API using the getTitlebarAreaRect() method. Returns an object containing x, y, width, and height coordinates of the titlebar area.

```javascript
function getJSOverlayProperties() {
  const {x, y, width, height} = navigator.windowControlsOverlay.getTitlebarAreaRect();
  return {x, y, width, height};
}
```

--------------------------------

### win.restore()

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Restores the window to its previous state from a minimized state.

```APIDOC
### `win.restore()`

Restores the window from minimized state to its previous state.
```

--------------------------------

### Add Todo Action Method in Objective-C

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Handles adding new todos from UI elements. Gets text from text field, creates a unique ID, stores the todo in an array, reloads the table, and clears the input field. Call this method when the Add button is clicked.

```objc
// Previous code...

// Action method for the Add button
- (void)addTodo:(id)sender {
    NSString *text = [_textField stringValue];
    if ([text length] > 0) {
        NSDate *date = [_datePicker dateValue];

        // Create a unique ID
        NSUUID *uuid = [NSUUID UUID];

        // Create a dictionary to store the todo
        NSDictionary *todo = @{
            @"id": [uuid UUIDString],
            @"text": text,
            @"date": date
        };

        // Add to our array
        [_todos addObject:todo];

        // Reload the table
        [_tableView reloadData];

        // Reset the text field
        [_textField setStringValue:@""];

        // Next, we'll notify our JavaScript world here...
    }
}

// More code to follow later...
```

--------------------------------

### webUtils.getPathForFile()

Source: https://github.com/electron/electron/blob/main/docs/api/web-utils.md

Retrieves the file system path from a web File object. This method is used in renderer processes to get the actual file path that a File object points to. Returns an empty string if the File object was constructed in JavaScript without a backing file on disk.

```APIDOC
## webUtils.getPathForFile(file)

### Description
Returns the file system path that a web File object points to. This method supersedes the previous augmentation to the File object with the path property.

### Method
Function

### Parameters
#### Arguments
- **file** (File) - Required - A web File object from the DOM File API

### Return Value
- **string** - The file system path. Returns an empty string if the File object was constructed in JavaScript and is not backed by a file on disk. Throws an exception if the passed object is not a File object.

### Request Example
```js
const file = document.querySelector('input[type=file]').files[0]
const path = webUtils.getPathForFile(file)
```

### Response Example
```js
// Returns file system path
"/Users/username/Documents/example.txt"
```

### Usage with Context Isolation
```js
// Preload script:
const { contextBridge, webUtils } = require('electron')

contextBridge.exposeInMainWorld('electronApi', {
  doSomethingWithFile (file) {
    const path = webUtils.getPathForFile(file)
    // Do something with the path, e.g., send it over IPC to the main process
  }
})

// Renderer:
const file = document.querySelector('input[type=file]').files[0]
electronApi.doSomethingWithFile(file)
```

### Notes
- This API must be called from the renderer process
- When context isolation is enabled, place the API call in your preload script and expose it using contextBridge
- It is best practice not to expose the full file path to web content if possible
- This method replaces the deprecated File.path property augmentation
```

--------------------------------

### Configure GTK Application Actions and UI Builder

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

Registers application-level actions and begins defining the UI structure using GtkBuilder XML.

```cpp
  static void activate_handler(GtkApplication *app, gpointer user_data)
  {
    auto *builder = gtk_builder_new();

    const GActionEntry app_actions[] = {
        {"edit", edit_action, nullptr, nullptr, nullptr, {0, 0, 0}},
        {"delete", delete_action, nullptr, nullptr, nullptr, {0, 0, 0}}};
    g_action_map_add_action_entries(G_ACTION_MAP(app), app_actions,
                                    G_N_ELEMENTS(app_actions), builder);

    gtk_builder_add_from_string(builder,
                                "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
                                "<interface>"
                                "  <object class=\"GtkWindow\" id=\"window\">"
                                "    <property name=\"title\">Todo List</property>"
                                "    <property name=\"default-width\">400</property>"
                                "    <property name=\"default-height\">500</property>"
                                "    <child>"
                                "      <object class=\"GtkBox\">"
                                "        <property name=\"visible\">true</property>"
                                "        <property name=\"orientation\">vertical</property>"
                                "        <property name=\"spacing\">6</property>"
                                "        <property name=\"margin\">12</property>"
                                "        <child>"
                                "          <object class=\"GtkBox\">"
```

--------------------------------

### Display an Electron Notification with show()

Source: https://github.com/electron/electron/blob/main/docs/api/notification.md

This snippet shows how to instantiate a new Electron Notification and explicitly display it to the user using the `show()` method.

```js
const { Notification, app } = require('electron')

app.whenReady().then(() => {
  const n = new Notification({
    title: 'Title!',
    subtitle: 'Subtitle!',
    body: 'Body!'
  })

  n.show()
})
```

--------------------------------

### process.crashReporter API (Node Child Processes)

Source: https://github.com/electron/electron/blob/main/docs/api/crash-reporter.md

The crashReporter API available in Node child processes through the process object. Since require('electron') is not available in child processes, these methods provide access to crash reporting functionality. Includes start, getParameters, addExtraParameter, and removeExtraParameter methods.

```APIDOC
## process.crashReporter API (Node Child Processes)

### Description
Since `require('electron')` is not available in Node child processes, the following APIs are available on the `process` object in Node child processes.

### Available Methods

#### process.crashReporter.start(options)
See `crashReporter.start()` for full documentation.

**Note:** If the crash reporter is started in the main process, it will automatically monitor child processes. Only use this method if the main process does not initialize the crash reporter.

#### process.crashReporter.getParameters()
See `crashReporter.getParameters()` for full documentation.

Returns `Record<string, string>` - The current 'extra' parameters of the crash reporter.

#### process.crashReporter.addExtraParameter(key, value)
See `crashReporter.addExtraParameter(key, value)` for full documentation.

**Parameters:**
- **key** (string) - Parameter key, must be no longer than 39 bytes
- **value** (string) - Parameter value, must be no longer than 127 bytes

#### process.crashReporter.removeExtraParameter(key)
See `crashReporter.removeExtraParameter(key)` for full documentation.

**Parameters:**
- **key** (string) - Parameter key, must be no longer than 39 bytes

### Notes
- These methods mirror the main crashReporter API
- Child process crash reporter should only be initialized if main process does not initialize it
- Parameters are process-specific to the child process
```

--------------------------------

### Add NSTableView and NSScrollView to Objective-C window

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Extends the setupWindow method to include a scrollable table view with columns for text and dates, setting the data source and delegate.

```objc
// Previous code...

- (void)setupWindow {
  // Previous setupWindow() code...

  // Create a scroll view for the table
    NSScrollView *scrollView = [[NSScrollView alloc] initWithFrame:NSMakeRect(20, 20, 360, 230)];
    [scrollView setBorderType:NSBezelBorder];
    [scrollView setHasVerticalScroller:YES];
    [contentView addSubview:scrollView];

    // Create table view
    _tableView = [[NSTableView alloc] initWithFrame:NSMakeRect(0, 0, 360, 230)];

    // Add a column for the todo text
    NSTableColumn *textColumn = [[NSTableColumn alloc] initWithIdentifier:@"text"];
    [textColumn setWidth:240];
    [textColumn setTitle:@"Todo"];
    [_tableView addTableColumn:textColumn];

    // Add a column for the date
    NSTableColumn *dateColumn = [[NSTableColumn alloc] initWithIdentifier:@"date"];
    [dateColumn setWidth:100];
    [dateColumn setTitle:@"Date"];
    [_tableView addTableColumn:dateColumn];

    // Set the table's delegate and data source
    [_tableView setDataSource:self];
    [_tableView setDelegate:self];

    // Add the table to the scroll view
    [scrollView setDocumentView:_tableView];
}

// More code to follow later...
```

--------------------------------

### JavaScript Promise-based Timeout Utility

Source: https://github.com/electron/electron/blob/main/spec/fixtures/api/sandbox.html

This asynchronous utility function creates a Promise that resolves after a specified number of milliseconds. It's commonly used to introduce delays in `async/await` functions, ensuring non-blocking execution while waiting for a period.

```javascript
function timeout(ms) { return new Promise((resolve) => { setTimeout(resolve, ms) }) }
```

--------------------------------

### Configure Electron Build Files in `filenames.gni`

Source: https://github.com/electron/electron/blob/main/docs/development/creating-api.md

This snippet shows how to integrate new API source and header files into Electron's GN build configuration by appending them to `lib_sources` arrays. It demonstrates how to specify platform-specific files for Windows, macOS, and Linux, ensuring they are compiled by the Ninja build system.

```gn
lib_sources = [
    "path/to/api/api_name.cc",
    "path/to/api/api_name.h",
]

lib_sources_mac = [
    "path/to/api/api_name_mac.h",
    "path/to/api/api_name_mac.mm",
]

lib_sources_win = [
    "path/to/api/api_name_win.cc",
    "path/to/api/api_name_win.h",
]

lib_sources_linux = [
    "path/to/api/api_name_linux.cc",
    "path/to/api/api_name_linux.h",
]
```

--------------------------------

### Accessing Undefined API in Electron Renderer Process (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/process-model.md

This code shows the result of attempting to access an API that was incorrectly exposed from a preload script (as in the previous example). Because of `contextIsolation`, `window.myAPI` will be `undefined` in the renderer's main context, demonstrating the security feature in action.

```js
console.log(window.myAPI)
// => undefined
```

--------------------------------

### Package Electron as a Distributable Zip

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Create a distributable zip file of the Electron build using Ninja. This command is typically run after a successful release build.

```sh
ninja -C out/Release electron:electron_dist_zip
```

--------------------------------

### Menu.setApplicationMenu(menu)

Source: https://github.com/electron/electron/blob/main/docs/api/menu.md

Sets the application menu for the app. On macOS, it's the application menu; on Windows and Linux, it's the window's top menu. Passing `null` suppresses the default menu.

```APIDOC
## PUT /Menu/applicationMenu

### Description
Sets `menu` as the application menu on macOS. On Windows and Linux, the `menu` will be set as each window's top menu. Passing `null` will suppress the default menu.

### Method
PUT

### Endpoint
/Menu/applicationMenu

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **menu** (Menu | null) - Required - The menu instance to set as the application menu.

### Request Example
{
  "menu": {
    "type": "Menu",
    "items": []
  }
}

### Response
#### Success Response (200)
(None)

#### Response Example
(None)
```

--------------------------------

### Secure Electron BrowserWindow Configuration with Preload Script (Good Practice)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/security.md

This JavaScript snippet illustrates a secure configuration for an Electron `BrowserWindow`. By omitting `contextIsolation` (which defaults to `true` since Electron 12.0.0) and using a `preload` script, it ensures that Node.js APIs are not directly exposed to the renderer process. The `preload` script can safely expose necessary APIs to remotely loaded content via `contextBridge`, maintaining strong isolation and preventing malicious scripts from accessing Node.js primitives or modifying global objects.

```js
// Good
const mainWindow = new BrowserWindow({
  webPreferences: {
    preload: path.join(app.getAppPath(), 'preload.js')
  }
})

mainWindow.loadURL('https://example.com')
```

--------------------------------

### Documenting contextBridge API History with YAML

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

This YAML block demonstrates how to document a breaking change for the `contextBridge` API. It specifies the pull request URL, a description of the change, and a header reference for the breaking change, indicating that `ipcRenderer` can no longer be sent over the `contextBridge`.

```YAML
changes:
  - pr-url: https://github.com/electron/electron/pull/40330
    description: "`ipcRenderer` can no longer be sent over the `contextBridge`"
    breaking-changes-header: behavior-changed-ipcrenderer-can-no-longer-be-sent-over-the-contextbridge
```

--------------------------------

### C++ Namespace Functions with GCD Main Thread Dispatch

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Implements hello_world, callback registration, and hello_gui functions. The hello_gui function uses dispatch_async to safely create and display UI on the main thread, which is required for all macOS/iOS UI operations. A static reference prevents premature deallocation of the window controller.

```objc
// Previous code...

namespace objc_code {

std::string hello_world(const std::string& input) {
    return "Hello from Objective-C! You said: " + input;
}

void setTodoAddedCallback(TodoCallback callback) {
    g_todoAddedCallback = callback;
}

void hello_gui() {
    // Create and run the GUI on the main thread
    dispatch_async(dispatch_get_main_queue(), ^{
        // Create our window controller
        TodoWindowController *windowController = [[TodoWindowController alloc] init];

        // Show the window
        [windowController showWindow:nil];

        // Keep a reference to prevent it from being deallocated
        // Note: in a real app, you'd store this reference more carefully
        static TodoWindowController *staticController = nil;
        staticController = windowController;
    });
}

} // namespace objc_code
```

--------------------------------

### Create Dynamic Context Menu with MenuItem Objects

Source: https://github.com/electron/electron/wiki/menu

Demonstrates creating a menu dynamically by appending MenuItem objects and displaying it as a context menu on right-click. Uses the Menu and MenuItem classes to construct menu items with labels, separators, and click handlers.

```javascript
var Menu = require('menu');
var MenuItem = require('menu-item');

var menu = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1', click: function() { console.log('item 1clicked'); } }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', clicked: true }));

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup();
}, false);
```

--------------------------------

### Constructor with Threadsafe Function Setup

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Implements the ObjcAddon constructor that creates an N-API threadsafe function for safe callbacks from Objective-C threads. Includes callback registration and destructor for resource cleanup. The threadsafe function bridges thread boundaries between Objective-C UI events and the JavaScript event loop.

```cpp
ObjcAddon(const Napi::CallbackInfo& info)
    : Napi::ObjectWrap<ObjcAddon>(info)
    , env_(info.Env())
    , emitter(Napi::Persistent(Napi::Object::New(info.Env())))
    , callbacks(Napi::Persistent(Napi::Object::New(info.Env())))
    , tsfn_(nullptr) {

    napi_status status = napi_create_threadsafe_function(
        env_,
        nullptr,
        nullptr,
        Napi::String::New(env_, "ObjcCallback"),
        0,
        1,
        nullptr,
        nullptr,
        this,
        [](napi_env env, napi_value js_callback, void* context, void* data) {
            auto* callbackData = static_cast<CallbackData*>(data);
            if (!callbackData) return;

            Napi::Env napi_env(env);
            Napi::HandleScope scope(napi_env);

            auto addon = static_cast<ObjcAddon*>(context);
            if (!addon) {
                delete callbackData;
                return;
            }

            try {
                auto callback = addon->callbacks.Value().Get(callbackData->eventType).As<Napi::Function>();
                if (callback.IsFunction()) {
                    callback.Call(addon->emitter.Value(), {Napi::String::New(napi_env, callbackData->payload)});
                }
            } catch (...) {}

            delete callbackData;
        },
        &tsfn_
    );

    if (status != napi_ok) {
        Napi::Error::New(env_, "Failed to create threadsafe function").ThrowAsJavaScriptException();
        return;
    }

    // Set up the callbacks
    auto makeCallback = [this](const std::string& eventType) {
        return [this, eventType](const std::string& payload) {
            if (tsfn_ != nullptr) {
                auto* data = new CallbackData{
                    eventType,
                    payload,
                    this
                };
                napi_call_threadsafe_function(tsfn_, data, napi_tsfn_blocking);
            }
        };
    };

    objc_code::setTodoAddedCallback(makeCallback("todoAdded"));
}

~ObjcAddon() {
    if (tsfn_ != nullptr) {
        napi_release_threadsafe_function(tsfn_, napi_tsfn_release);
        tsfn_ = nullptr;
    }
}

private:
    Napi::Env env_;
    Napi::ObjectReference emitter;
    Napi::ObjectReference callbacks;
    napi_threadsafe_function tsfn_;
```

--------------------------------

### utilityProcess.fork(modulePath[, args][, options])

Source: https://github.com/electron/electron/blob/main/docs/api/utility-process.md

Launches a child process with Node.js and Message ports enabled using Chromium's Services API.

```APIDOC
## utilityProcess.fork(modulePath[, args][, options])

### Description
Launches a child process with Node.js and Message ports enabled using Chromium's Services API. This is the equivalent of Node.js's `child_process.fork` but uses Chromium's Services API instead.

### Signature
`utilityProcess.fork(modulePath[, args][, options])`

### Parameters
- **modulePath** (string) - Path to the script that should run as entrypoint in the child process.
- **args** (string[]) - *Optional* - List of string arguments that will be available as `process.argv` in the child process.
- **options** (Object) - *Optional*
  - **env** (Object) - *Optional* - Environment key-value pairs. Default is `process.env`.
  - **execArgv** (string[]) - *Optional* - List of string arguments passed to the executable.
  - **cwd** (string) - *Optional* - Current working directory of the child process.
  - **session** (Session) - *Optional* - Sets the session used by the process for network requests. Setting a session enables HTTP caching and other session-specific network features.
  - **partition** (string) - *Optional* - Sets the session used by the process according to the session's partition string. If it starts with `persist:`, a persistent session is used; otherwise, an in-memory session is used. Ignored if `session` is set.
  - **stdio** (string[] | string) - *Optional* - Configures the mode for `stdout` and `stderr` of the child process. Default is `inherit`. Supported values: `pipe`, `ignore`, `inherit`.
  - **serviceName** (string) - *Optional* - Name of the process that will appear in the `name` property of `ProcessMetric`. Default is `Node Utility Process`.
  - **allowLoadingUnsignedLibraries** (boolean) - *Optional* - *macOS* - If true, launches via the `Electron Helper (Plugin).app` helper executable to allow loading unsigned libraries. Default is `false`.
  - **disclaim** (boolean) - *Optional* - *macOS* - If true, the utility process will disclaim responsibility for the child process. Default is `false`.
  - **respondToAuthRequestsFromMainProcess** (boolean) - *Optional* - If true, allows responding to HTTP 401 and 407 network requests via the `login` event. Default is `false`.

### Returns
- **UtilityProcess** - The created utility process instance.
```

--------------------------------

### Flash Taskbar Button for User Attention in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/windows-taskbar.md

Highlight the taskbar button to attract user attention when the window requires focus. Use flashFrame(true) to start flashing and flashFrame(false) to stop. Typically called when the window loses focus and stopped when it regains focus.

```javascript
const { BrowserWindow } = require('electron')

const win = new BrowserWindow()

win.once('focus', () => win.flashFrame(false))
win.flashFrame(true)
```

--------------------------------

### menu.popup([options])

Source: https://github.com/electron/electron/blob/main/docs/api/menu.md

Displays this menu as a context menu in the specified window. Options allow control over position and associated window/frame, and a callback for when the menu closes.

```APIDOC
## POST /menu/{menuId}/popup

### Description
Pops up this menu as a context menu in the `BaseWindow`. Options allow control over position, associated window/frame, and callback on close.

### Method
POST

### Endpoint
/menu/{menuId}/popup

### Parameters
#### Path Parameters
- **menuId** (string) - Required - The ID of the menu instance.

#### Query Parameters
(None)

#### Request Body
- **window** (BaseWindow) - Optional - The window to pop up the menu in. Default is the focused window.
- **frame** (WebFrameMain) - Optional - The relevant frame for OS-level features.
- **x** (number) - Optional - X coordinate for positioning. Must be declared if `y` is declared.
- **y** (number) - Optional - Y coordinate for positioning. Must be declared if `x` is declared.
- **positioningItem** (number) - Optional - _macOS_ - Index of the menu item to position under the cursor. Default is -1.
- **sourceType** (string) - Optional - _Windows_ _Linux_ - Maps to `menuSourceType` from `context-menu` event.
- **callback** (Function) - Optional - Called when menu is closed.

### Request Example
{
  "window": { "id": 123 },
  "x": 100,
  "y": 200
}

### Response
#### Success Response (200)
(None)

#### Response Example
(None)
```

--------------------------------

### Add Sublabels to Electron Menu Items on macOS

Source: https://github.com/electron/electron/blob/main/docs/tutorial/menus.md

This example shows how to add a `sublabel` to an Electron `MenuItem`, providing additional descriptive text directly below the main label. This feature is specific to macOS 14.4 and above, enhancing menu clarity with secondary information without requiring a separate tooltip.

```js
const { MenuItem } = require('electron/main')

const item = new MenuItem({
  label: 'Log Message',
  sublabel: 'This will use the console.log utility',
  click: () => { console.log('Logging via menu...') }
})
```

--------------------------------

### Launch Electron Application with Playwright

Source: https://github.com/electron/electron/blob/main/docs/tutorial/automated-testing.md

This snippet demonstrates how to launch an Electron application using Playwright's `_electron.launch` API. It initializes an `ElectronApp` instance, which represents the running Electron application, and then closes it. The `args: ['.']` parameter typically points to the main process entry point.

```js
import { test, _electron as electron } from '@playwright/test'

test('launch app', async () => {
  const electronApp = await electron.launch({ args: ['.'] })
  // close app
  await electronApp.close()
})
```

--------------------------------

### <webview>.print([options])

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Prints the webview's web page with optional print settings.

```APIDOC
## `<webview>.print([options])`

### Description
Prints `webview`'s web page. Same as `webContents.print([options])`.

### Parameters
- `options` (Object, optional):
  - `silent` (boolean, optional) - Don't ask user for print settings. Default is `false`.
  - `printBackground` (boolean, optional) - Prints the background color and image of the web page. Default is `false`.
  - `deviceName` (string, optional) - Set the printer device name to use. Must be the system-defined name.
  - `color` (boolean, optional) - Set whether the printed web page will be in color or grayscale. Default is `true`.
  - `margins` (Object, optional):
    - `marginType` (string, optional) - Can be `default`, `none`, `printableArea`, or `custom`.
    - `top` (number, optional) - The top margin of the printed web page, in pixels.
    - `bottom` (number, optional) - The bottom margin of the printed web page, in pixels.
    - `left` (number, optional) - The left margin of the printed web page, in pixels.
    - `right` (number, optional) - The right margin of the printed web page, in pixels.
  - `landscape` (boolean, optional) - Whether the web page should be printed in landscape mode. Default is `false`.
  - `scaleFactor` (number, optional) - The scale factor of the web page.
  - `pagesPerSheet` (number, optional) - The number of pages to print per page sheet.
  - `collate` (boolean, optional) - Whether the web page should be collated.
  - `copies` (number, optional) - The number of copies of the web page to print.
  - `pageRanges` (Object[], optional) - The page range to print.
    - `from` (number) - Index of the first page to print (0-based).
    - `to` (number) - Index of the last page to print (inclusive) (0-based).
  - `duplexMode` (string, optional) - Set the duplex mode of the printed web page. Can be `simplex`, `shortEdge`, or `longEdge`.
  - `dpi` (Record<string, number>, optional):
    - `horizontal` (number, optional) - The horizontal dpi.
    - `vertical` (number, optional) - The vertical dpi.
  - `header` (string, optional) - String to be printed as page header.
  - `footer` (string, optional) - String to be printed as page footer.
  - `pageSize` (string | Size, optional) - Specify page size of the printed document. Can be `A3`, `A4`, `A5`, `Legal`, `Letter`, `Tabloid` or an Object containing `height` in microns.
  - `usePrinterDefaultPageSize` (boolean, optional) - Whether to use the system's default page size. Default is `false`.

### Returns
- `Promise<void>`
```

--------------------------------

### Auth server whitelist flag

Source: https://github.com/electron/electron/blob/main/docs/api/command-line-switches.md

Comma-separated list of servers for integrated authentication. Use * prefix for wildcard matching; without it, URLs must match exactly.

```shell
--auth-server-whitelist='*example.com, *foobar.com, *baz'
```

--------------------------------

### app.moveToApplicationsFolder([options])

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Moves the application to the system Applications folder on macOS and prompts a relaunch on success. Allows custom conflict handling if an app with the same name exists.

```APIDOC
## app.moveToApplicationsFolder([options])

### Platform
macOS

### Description
Moves the running application to the system Applications folder. If successful, the application will quit and relaunch. Throws an error if anything other than the user causes the move to fail (e.g. failing to copy).

### Parameters
- **options** (Object, optional)
  - **conflictHandler** (Function<boolean>, optional) - A handler for potential conflicts during move failure.
    - Parameter: `conflictType` (string) - Can be `exists` (app of same name exists in Applications directory) or `existsAndRunning` (app exists and is currently running).
    - Returns: `boolean` - `false` ensures no further action is taken; `true` continues default resolution behavior.

### Return Value
- Returns `boolean` - Whether the move was successful. Returns `false` if user cancels authorization.

### Usage Example
```js
const { app, dialog } = require('electron')

app.moveToApplicationsFolder({
  conflictHandler: (conflictType) => {
    if (conflictType === 'exists') {
      return dialog.showMessageBoxSync({
        type: 'question',
        buttons: ['Halt Move', 'Continue Move'],
        defaultId: 0,
        message: 'An app of this name already exists'
      }) === 1
    }
  }
})
```
```

--------------------------------

### YAML API History Block Format

Source: https://github.com/electron/electron/blob/main/docs/CLAUDE.md

Template for placing YAML history blocks in Electron API documentation. The block should be positioned directly after the markdown header and before parameter descriptions. Supports added, deprecated, and changes fields with PR URLs and descriptions.

```markdown
### `module.method(args)`

<!--
```YAML history
added:
  - pr-url: https://github.com/electron/electron/pull/XXXXX
```
-->

* `arg` type - Description.
```

--------------------------------

### Create a virtual display (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/development/multi-monitor-testing.md

Creates a virtual display, either with default settings or custom width, height, and position. Returns a unique display ID.

```js
const virtualDisplay = require('@electron-ci/virtual-display')
// Default: 1920×1080 at origin (0, 0)
const displayId = virtualDisplay.create()
```

```js
const virtualDisplay = require('@electron-ci/virtual-display')
// Custom options (all parameters optional and have default values)
const displayId = virtualDisplay.create({
  width: 2560, // Display width in pixels
  height: 1440, // Display height in pixels
  x: 1920, // X position (top-left corner)
  y: 0 // Y position (top-left corner)
})
```

--------------------------------

### Get CSS-Based Overlay Properties in Electron

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/overlay.html

Retrieves titlebar area dimensions by reading computed CSS styles from DOM elements. Extracts top, height, left, and width values from the titleBarContainer and titleBar elements using the Typed OM computedStyleMap() API.

```javascript
function getCssOverlayProperties() {
  const cssOverlayProps = {};
  const titleBarContainer = document.getElementById('titleBarContainer');
  const titleBar = document.getElementById('titleBar');
  cssOverlayProps.y = titleBarContainer.computedStyleMap().get('top').value;
  cssOverlayProps.height = titleBarContainer.computedStyleMap().get('height').value;
  cssOverlayProps.x = titleBar.computedStyleMap().get('left').value;
  cssOverlayProps.width = titleBar.computedStyleMap().get('width').value;
  return cssOverlayProps;
}
```

--------------------------------

### Retrieve host operating system version using process.getSystemVersion

Source: https://github.com/electron/electron/blob/main/docs/api/process.md

Returns the actual operating system version. On macOS, this differs from os.release() by returning the OS version instead of the kernel version.

```javascript
const version = process.getSystemVersion()
console.log(version)
// On macOS -> '10.13.6'
// On Windows -> '10.0.17763'
// On Linux -> '4.15.0-45-generic'
```

--------------------------------

### Basic Node.js Addon Skeleton in C++

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

This snippet provides the minimal structure required for a Node.js addon using `node-addon-api`, defining the entry point for native code loading.

```cpp
#include <napi.h>
#include <string>
#include "cpp_code.h"

// Class to wrap our C++ code will go here

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  // We'll add code here later
  return exports;
}

NODE_API_MODULE(cpp_addon, Init)
```

--------------------------------

### BaseWindow.getAllWindows()

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Returns an array containing all opened browser windows in the application.

```APIDOC
## BaseWindow.getAllWindows()

### Description
Returns an array of all opened browser windows.

### Returns
- `BaseWindow[]` - An array of all opened browser windows.
```

--------------------------------

### Enable network access entitlements

Source: https://github.com/electron/electron/blob/main/docs/tutorial/mac-app-store-submission-guide.md

Add these keys to your entitlements file to permit outgoing or incoming network connections.

```xml
<key>com.apple.security.network.client</key>
<true/>
```

```xml
<key>com.apple.security.network.server</key>
<true/>
```

--------------------------------

### package.json configuration for Swift native addon

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-swift-macos.md

Package configuration for a Swift-based native Electron addon with build scripts and dependencies for node-gyp compilation and electron-rebuild support.

```json
{
  "name": "swift-macos",
  "version": "1.0.0",
  "description": "A demo module that exposes Swift code to Electron",
  "main": "js/index.js",
  "scripts": {
    "clean": "rm -rf build",
    "build-electron": "electron-rebuild",
    "build": "node-gyp configure && node-gyp build"
  },
  "license": "MIT",
  "dependencies": {
    "bindings": "^1.5.0",
    "node-addon-api": "^8.3.0"
  },
  "devDependencies": {
    "node-gyp": "^11.1.0"
  }
}
```

--------------------------------

### Test Native Addon Functionality in Node.js

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron.md

Simple test script that loads the native addon module and verifies the helloWorld function works correctly. Demonstrates basic addon invocation and output validation for development and debugging purposes.

```javascript
// Load our addon
const myAddon = require('./js')

// Try the helloWorld function
const result = myAddon.helloWorld('This is a test')

// Should print: "Hello from C++! You said: This is a test"
console.log(result)
```

--------------------------------

### new Notification([options])

Source: https://github.com/electron/electron/blob/main/docs/api/notification.md

Creates a new native notification instance. The notification can be customized with various options including title, body, icon, actions, and platform-specific settings. Use the returned instance to show the notification and listen to user interaction events.

```APIDOC
## Constructor: new Notification([options])

### Description
Creates a new Notification instance that can be displayed to the user as a native system notification.

### Parameters

#### options (Object, optional)
- **id** (string, optional) _macOS_ _Windows_ - A unique identifier for the notification. On macOS, maps to `UNNotificationRequest`'s `identifier` property. On Windows, maps to the toast notification's `Tag` property. Defaults to a random UUID if not provided or if an empty string is passed. Use this identifier with `Notification.remove()` to remove specific delivered notifications, or with `Notification.getHistory()` to identify them.
- **groupId** (string, optional) _macOS_ _Windows_ - A string identifier used to visually group notifications together in Notification Center / Action Center. On macOS, maps to `UNNotificationContent`'s `threadIdentifier` property. On Windows, maps to the toast notification's `Group` property. Use this identifier with `Notification.removeGroup()` to remove all notifications in a group.
- **groupTitle** (string, optional) _Windows_ - A title for the notification group header. When both `groupId` and `groupTitle` are specified, Windows will display a header above the notification that groups related notifications together.
- **title** (string, optional) - A title for the notification, which will be displayed at the top of the notification window when it is shown.
- **subtitle** (string, optional) _macOS_ - A subtitle for the notification, which will be displayed below the title.
- **body** (string, optional) - The body text of the notification, which will be displayed below the title or subtitle.
- **silent** (boolean, optional) - Whether or not to suppress the OS notification noise when showing the notification.
- **icon** (string | NativeImage, optional) - An icon to use in the notification. If a string is passed, it must be a valid path to a local icon file.
- **hasReply** (boolean, optional) _macOS_ _Windows_ - Whether or not to add an inline reply option to the notification.
- **timeoutType** (string, optional) _Linux_ _Windows_ - The timeout duration of the notification. Can be 'default' or 'never'.
- **replyPlaceholder** (string, optional) _macOS_ _Windows_ - The placeholder to write in the inline reply input field.
- **sound** (string, optional) _macOS_ - The name of the sound file to play when the notification is shown.
- **urgency** (string, optional) _Linux_ _Windows_ - The urgency level of the notification. Can be 'normal', 'critical', or 'low'.
- **actions** (NotificationAction[], optional) _macOS_ _Windows_ - Actions to add to the notification. Please read the available actions and limitations in the `NotificationAction` documentation.
- **closeButtonText** (string, optional) _macOS_ - A custom title for the close button of an alert. An empty string will cause the default localized text to be used.
- **toastXml** (string, optional) _Windows_ - A custom description of the Notification on Windows superseding all properties above. Provides full customization of design and behavior of the notification.

### Returns
Notification - A new Notification instance

### Example
```js
const { Notification, app } = require('electron')

app.whenReady().then(() => {
  const notification = new Notification({
    title: 'Title!',
    subtitle: 'Subtitle!',
    body: 'Body!'
  })
  notification.show()
})
```

### Notes
On Windows, `urgency` type 'critical' sorts the notification higher in Action Center (above default priority notifications), but does not prevent auto-dismissal. To prevent auto-dismissal, you should also set `timeoutType` to 'never'.
```

--------------------------------

### Configure win_delay_load_hook in binding.gyp

Source: https://github.com/electron/electron/blob/main/docs/tutorial/using-native-node-modules.md

Set the win_delay_load_hook variable to true in the binding.gyp configuration file for node-gyp projects to enable proper native module loading on Windows in Electron 4.x and higher. This ensures the delay-load hook is installed and the module correctly redirects node.dll references to the Electron executable.

```plaintext
'win_delay_load_hook': 'true'
```

--------------------------------

### app.on('session-created', listener)

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Emitted when Electron has created a new session instance.

```APIDOC
## Event: 'session-created'

### Description
Emitted when Electron has created a new `session`.

### Parameters
- **session** (Session) - The newly created session instance.

### Example
```js
const { app } = require('electron')

app.on('session-created', (session) => {
  console.log(session)
})
```
```

--------------------------------

### contentTracing.enableHeapProfiling([options])

Source: https://github.com/electron/electron/blob/main/docs/api/content-tracing.md

Enables heap profiling for MemoryInfra traces. This is equivalent to the --memlog switch in Chrome and only takes effect if the disabled-by-default-memory-infra category is included. It must be called before contentTracing.startRecording().

```APIDOC
## contentTracing.enableHeapProfiling([options])

### Description
Enables heap profiling for MemoryInfra traces. This is equivalent to the --memlog switch in Chrome and only takes effect if the disabled-by-default-memory-infra category is included. It must be called before contentTracing.startRecording().

### Parameters
- **options** (EnableHeapProfilingOptions) - Optional - Configuration options for heap profiling.

### Returns
Promise<void> - Resolves once heap profiling has been enabled.

### Usage Example
```js
const { contentTracing } = require('electron')

async function recordTrace () {
  await contentTracing.enableHeapProfiling()
  await contentTracing.startRecording({
    included_categories: ['disabled-by-default-memory-infra'],
    excluded_categories: ['*'],
    memory_dump_config: {
      triggers: [
        { mode: 'detailed', periodic_interval_ms: 1000 }
      ]
    }
  })

  await new Promise(resolve => setTimeout(resolve, 5000))

  const filePath = await contentTracing.stopRecording()
}
```
```

--------------------------------

### Run Electron Forge Publish Command

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-6-publishing-updating.md

Execute the publish command to run configured makers and publish output distributables to a new GitHub release. By default publishes for the host operating system and architecture.

```shell
npm run publish
```

--------------------------------

### Menu.getApplicationMenu()

Source: https://github.com/electron/electron/blob/main/docs/api/menu.md

Retrieves the currently set application menu. Returns `null` if no menu is set. Note that the returned instance does not support dynamic item addition or removal.

```APIDOC
## GET /Menu/applicationMenu

### Description
Returns the application menu, if set, or `null`, if not set. The returned `Menu` instance doesn't support dynamic addition or removal of menu items.

### Method
GET

### Endpoint
/Menu/applicationMenu

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **Menu** (Menu | null) - The application menu instance or `null`.

#### Response Example
{
  "menu": {
    "type": "Menu",
    "items": []
  }
}
```

--------------------------------

### Examples of WebRequest URL Filter Patterns (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/api/web-request.md

This snippet provides a collection of valid URL patterns that can be used within the `filter` object for `WebRequest` methods like `onBeforeRequest` or `onBeforeSendHeaders`. These patterns allow precise control over which URLs a `WebRequest` listener will apply to, supporting wildcards and specific protocols.

```javascript
'<all_urls>'
'http://foo:1234/'
'http://foo.com/'
'http://foo:1234/bar'
'*://*/*'
'*://example.com/*'
'*://example.com/foo/*'
'http://*.foo:1234/'
'file://foo:1234/bar'
'http://foo:*/'
'*://www.foo.com/'
```

--------------------------------

### Session Event: 'extension-ready'

Source: https://github.com/electron/electron/blob/main/docs/api/session.md

Emitted after an extension is loaded and initial browser state is configured for its background page.

```APIDOC
### Event: 'extension-ready'

**Description**:
Emitted after an extension is loaded and all necessary browser state is initialized to support the start of the extension's background page.

**Event Listener Signature**:
`session.on('extension-ready', (event, extension) => {})`

**Parameters**:
- `event` (Event)
- `extension` (Extension)
```

--------------------------------

### Open window on activation for macOS

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

Handle the activate event within the whenReady promise to ensure a window is created if none exist when the app is launched or focused.

```javascript
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
```

--------------------------------

### Implement HelloWorld Method with Input Validation

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Adds a HelloWorld method to the NAPI class that validates string input, calls the C++ function, and returns the result to JavaScript. Throws a TypeError if the argument is not a string.

```cpp
// ... previous code

class CppAddon : public Napi::ObjectWrap<CppAddon> {
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports) {
        Napi::Function func = DefineClass(env, "CppWin32Addon", {
            InstanceMethod("helloWorld", &CppAddon::HelloWorld),
        });

        // ... rest of Init function
    }

    CppAddon(const Napi::CallbackInfo& info)
        : Napi::ObjectWrap<CppAddon>(info) {
        // Constructor logic will go here
    }

private:
    Napi::Value HelloWorld(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();

        if (info.Length() < 1 || !info[0].IsString()) {
            Napi::TypeError::New(env, "Expected string argument").ThrowAsJavaScriptException();
            return env.Null();
        }

        std::string input = info[0].As<Napi::String>();
        std::string result = cpp_code::hello_world(input);

        return Napi::String::New(env, result);
    }
};

// ... rest of the file
```

--------------------------------

### CALL dock.show()

Source: https://github.com/electron/electron/blob/main/docs/api/dock.md

Shows the application icon in the macOS dock.

```APIDOC
## CALL dock.show()

### Description
Shows the dock icon in the macOS dock.

### Method
CALL

### Endpoint
dock.show()

### Response
#### Success Response (200)
- **promise** (Promise<void>) - Resolves when the dock icon is shown.
```

--------------------------------

### Cross-compile x86 target with GN

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Generate a build configuration for x86 architecture from an x64 host using GN arguments.

```sh
$ gn gen out/Testing-x86 --args='... target_cpu = "x86"'
```

--------------------------------

### Git Commands for API History Tracking

Source: https://github.com/electron/electron/blob/main/docs/CLAUDE.md

Collection of git commands used to find when APIs were added, trace implementation history, and verify PR information. These commands help locate the first commit introducing a method, trace C++ implementation changes, and verify PR targets.

```bash
git log --all --reverse --oneline -S "methodName" -- docs/api/file.md
```

```bash
git log --reverse -L :FunctionName:path/to/source.cc
```

```bash
git log --grep="keyword" --oneline
```

```bash
gh pr view <number> --repo electron/electron --json baseRefName
```

```bash
git blame docs/breaking-changes.md
```

--------------------------------

### Format Todo Display String

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Converts todo text and a system timestamp into a formatted wide string for display in the UI.

```cpp
  std::wstring FormatTodoDisplay(const std::wstring &text, const SYSTEMTIME &st)
  {
    wchar_t dateStr[64];
    GetDateFormatW(LOCALE_USER_DEFAULT, DATE_SHORTDATE, &st, nullptr, dateStr, 64);
    return text + L" - " + dateStr;
  }
```

--------------------------------

### Define Electron App UI with HTML

Source: https://github.com/electron/electron/blob/main/docs/tutorial/dark-mode.md

This HTML file sets up the basic user interface for the Electron application. It includes a title, content security policy, a link to the stylesheet, a display for the current theme source, and two buttons to control dark mode functionality.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
    <link rel="stylesheet" type="text/css" href="./styles.css">
</head>
<body>
    <h1>Hello World!</h1>
    <p>Current theme source: <strong id="theme-source">System</strong></p>

    <button id="toggle-dark-mode">Toggle Dark Mode</button>
    <button id="reset-to-system">Reset to System Theme</button>

    <script src="renderer.js"></script>
</body>
</html>
```

--------------------------------

### Set Spellchecker Languages and Get Available Languages in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/spellchecker.md

This snippet illustrates how to programmatically manage spellchecker languages for Windows and Linux. It shows how to set specific languages using `setSpellCheckerLanguages` and how to retrieve a list of all `availableSpellCheckerLanguages`. Note that on macOS, language detection is automatic via native APIs and cannot be configured using these methods.

```javascript
// Sets the spellchecker to check English US and French
myWindow.webContents.session.setSpellCheckerLanguages(['en-US', 'fr'])

// An array of all available language codes
const possibleLanguages = myWindow.webContents.session.availableSpellCheckerLanguages
```

--------------------------------

### Unsafe API Exposure using ContextBridge in Electron Preload Script

Source: https://github.com/electron/electron/blob/main/docs/tutorial/context-isolation.md

This example illustrates an insecure way to expose an API using `contextBridge`. Directly exposing a powerful API like `ipcRenderer.send` without argument filtering allows any website to send arbitrary IPC messages, posing a significant security risk.

```javascript
// ❌ Bad code
contextBridge.exposeInMainWorld('myAPI', {
  send: ipcRenderer.send
})
```

--------------------------------

### Use LanguageModel API in Renderer Process (index.html)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/local-ai-handler.md

This renderer script demonstrates how to interact with the registered local AI handler using the global LanguageModel API. It creates a model instance, sends a prompt, and displays the response.

```html
<script>
async function askAI () {
  const model = await LanguageModel.create()
  const response = await model.prompt('What is Electron?')
  document.getElementById('response').textContent = response
}
</script>

<button onclick="askAI()">Ask AI</button>
<p id="response"></p>
```

--------------------------------

### Event: finish-launching

Source: https://github.com/electron/electron/wiki/app

Emitted when the application has finished basic startup. This is the appropriate place to create browser windows and perform final initialization.

```APIDOC
## Event: finish-launching

### Description
Do final startup like creating browser window here. This event is emitted after the application has completed its basic initialization.

### Event Name
`finish-launching`

### Parameters
None

### Usage Example
```javascript
app.on('finish-launching', function() {
  // Create browser windows
  // Perform final initialization
});
```
```

--------------------------------

### Compose multiple views in a BaseWindow with JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Must be run in the main process after the app 'ready' event has emitted. Adds and positions multiple WebContentsViews within a single window's contentView.

```javascript
// In the main process.
const { BaseWindow, WebContentsView } = require('electron')

const win = new BaseWindow({ width: 800, height: 600 })

const leftView = new WebContentsView()
leftView.webContents.loadURL('https://electronjs.org')
win.contentView.addChildView(leftView)

const rightView = new WebContentsView()
rightView.webContents.loadURL('https://github.com/electron/electron')
win.contentView.addChildView(rightView)

leftView.setBounds({ x: 0, y: 0, width: 400, height: 600 })
rightView.setBounds({ x: 400, y: 0, width: 400, height: 600 })
```

--------------------------------

### Markdown API History YAML Block Format

Source: https://github.com/electron/electron/blob/main/docs/development/style-guide.md

YAML code block encapsulated in HTML comments for documenting API additions, changes, and deprecations with pull request links. Placed directly after Markdown headers for classes or methods. Uses two-space indentation and requires descriptions wrapped in double quotes.

```markdown
#### `win.setTrafficLightPosition(position)` _macOS_

<!--
```YAML history
added:
  - pr-url: https://github.com/electron/electron/pull/22533
changes:
  - pr-url: https://github.com/electron/electron/pull/26789
    description: "Made `trafficLightPosition` option work for `customButtonOnHover` window."
deprecated:
  - pr-url: https://github.com/electron/electron/pull/37094
    breaking-changes-header: deprecated-browserwindowsettrafficlightpositionposition
```
-->

* `position` [Point](structures/point.md)

Set a custom position for the traffic light buttons. Can only be used with `titleBarStyle` set to `hidden`.
```

--------------------------------

### Handle HTTP authentication in a utility process

Source: https://github.com/electron/electron/blob/main/docs/api/utility-process.md

Listen to the 'login' event on a utilityProcess instance to handle HTTP 401 or 407 authentication challenges. Requires setting respondToAuthRequestsFromMainProcess and a session.

```javascript
const { session, utilityProcess } = require('electron')

const ses = session.defaultSession
const child = utilityProcess.fork('./worker.js', [], {
  session: ses,
  respondToAuthRequestsFromMainProcess: true
})

child.on('login', (authenticationResponseDetails, authInfo, callback) => {
  callback('username', 'password')
})
```

--------------------------------

### Simulate Click Event with JavaScript

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/webview-will-navigate.html

This JavaScript snippet defines an `onload` function that executes once the page has fully loaded. It retrieves an HTML element using its ID 'test_link' and then programmatically triggers a click event on that element. This technique is commonly used for automated testing, dynamic content loading, or user interface automation.

```javascript
onload = function() { var a = document.getElementById('test_link'); a.click(); }
```

--------------------------------

### app.on('second-instance', listener)

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Emitted in the primary application instance when a second instance executes and requests a single instance lock.

```APIDOC
## Event: 'second-instance'

### Description
This event will be emitted inside the primary instance of your application when a second instance has been executed and calls `app.requestSingleInstanceLock()`. Guaranteed to be emitted after the `ready` event of `app`.

### Parameters
- **event** (Event) - Standard event object.
- **argv** (string[]) - An array of the second instance's command line arguments.
- **workingDirectory** (string) - The second instance's working directory.
- **additionalData** (unknown) - A JSON object of additional data passed from the second instance.
```

--------------------------------

### session.fromPartition(partition[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/session.md

Retrieves or creates a Session instance corresponding to the specified partition string. Supports persistent or in-memory sessions depending on the partition prefix.

```APIDOC
## session.fromPartition(partition[, options])

### Description
Returns a `Session` instance from the specified `partition` string. If an existing `Session` shares the partition, it is returned; otherwise, a new `Session` instance is created using the provided `options`.

### Parameters
- **partition** (string) - Required - The partition identifier. If it starts with `persist:`, the session is persistent across app pages with the same partition. If omitted/no prefix, an in-memory session is used. If empty, the default session is returned.
- **options** (Object) - Optional
  - **cache** (boolean) - Optional - Whether to enable cache. Default is `true` unless the `--disable-http-cache` switch is used.

### Returns
- **Session** - A session instance matching the partition string.
```

--------------------------------

### Intercepting Keyboard Events in Electron Main Process

Source: https://github.com/electron/electron/blob/main/docs/tutorial/keyboard-shortcuts.md

This example demonstrates how to intercept keyboard events in the main process using the `before-input-event` event on `webContents`. It allows for handling custom shortcuts, such as 'Ctrl+I', before they are dispatched to the renderer process. The `event.preventDefault()` call prevents the default behavior for the intercepted shortcut. It requires the `app` and `BrowserWindow` modules from 'electron/main'.

```js
const { app, BrowserWindow } = require('electron/main')

app.whenReady().then(() => {
  const win = new BrowserWindow()

  win.loadFile('index.html')
  win.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.key.toLowerCase() === 'i') {
      console.log('Pressed Control+I')
      event.preventDefault()
    }
  })
})
```

--------------------------------

### app.setDesktopName(name)

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Sets the .desktop filename on Linux for application identity and desktop integration. Must be called before the ready event.

```APIDOC
## app.setDesktopName(name)

### Description
Sets the `.desktop` filename on Linux. This must match the base filename of the app's installed `.desktop` file. The `.desktop` suffix is optional. Must be called before the `ready` event.

### Platform
Linux

### Parameters
- **name** (string) - The `.desktop` filename (e.g. `'com.example.MyApp.desktop'`).

### Return Value
void
```

--------------------------------

### CONSTRUCTOR new TouchBarButton(options)

Source: https://github.com/electron/electron/blob/main/docs/api/touch-bar-button.md

Creates a new button instance for the macOS Touch Bar with configurable properties including labels, icons, and event handlers.

```APIDOC
## CONSTRUCTOR new TouchBarButton(options)

### Description
Creates a button in the touch bar for native macOS applications. This class is not exported directly from the 'electron' module but is available as a return value of other methods.

### Method
CONSTRUCTOR

### Endpoint
new TouchBarButton(options)

### Parameters
#### Request Body
- **label** (string) - Optional - Button text.
- **accessibilityLabel** (string) - Optional - A short description of the button for use by screenreaders like VoiceOver.
- **backgroundColor** (string) - Optional - Button background color in hex format, i.e `#ABCDEF`.
- **icon** (NativeImage | string) - Optional - Button icon.
- **iconPosition** (string) - Optional - Can be `left`, `right` or `overlay`. Defaults to `overlay`.
- **click** (Function) - Optional - Function to call when the button is clicked.
- **enabled** (boolean) - Optional - Whether the button is in an enabled state. Default is `true`.

### Request Example
{
  "label": "Submit",
  "backgroundColor": "#007AFF",
  "iconPosition": "left",
  "enabled": true
}

### Response
#### Success Response (200)
- **TouchBarButton** (Object) - Returns a new instance of the TouchBarButton class.
```

--------------------------------

### <webview>.selectAll()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Executes the editing command selectAll in the page.

```APIDOC
## `<webview>.selectAll()`

### Description
Executes editing command `selectAll` in page.
```

--------------------------------

### new MenuItem(options)

Source: https://github.com/electron/electron/blob/main/docs/api/menu-item.md

Creates a new MenuItem instance with the specified options. The MenuItem can be configured with click handlers, predefined roles, types, labels, icons, accelerators, and various other properties to customize its appearance and behavior in menus.

```APIDOC
## new MenuItem(options)

### Description
Creates a new MenuItem instance for use in application menus and context menus.

### Constructor
```
new MenuItem(options)
```

### Parameters

#### options (Object)

**click** (Function, optional)
- Callback function invoked when the menu item is clicked
- Signature: `click(menuItem, window, event)`
  - `menuItem` [MenuItem](menu-item.md)
  - `window` [BaseWindow](base-window.md) | undefined - Undefined if no window is open
  - `event` [KeyboardEvent](structures/keyboard-event.md)

**role** (string, optional)
- Defines a predefined action for the menu item. When specified, the `click` property is ignored.
- Possible values: `undo`, `redo`, `cut`, `copy`, `paste`, `pasteAndMatchStyle`, `delete`, `selectAll`, `reload`, `forceReload`, `toggleDevTools`, `resetZoom`, `zoomIn`, `zoomOut`, `toggleSpellChecker`, `togglefullscreen`, `window`, `minimize`, `close`, `help`, `about`, `services`, `hide`, `hideOthers`, `unhide`, `quit`, `showSubstitutions`, `toggleSmartQuotes`, `toggleSmartDashes`, `toggleTextReplacement`, `startSpeaking`, `stopSpeaking`, `zoom`, `front`, `appMenu`, `fileMenu`, `editMenu`, `viewMenu`, `shareMenu`, `recentDocuments`, `toggleTabBar`, `selectNextTab`, `selectPreviousTab`, `showAllTabs`, `mergeAllWindows`, `clearRecentDocuments`, `moveTabToNewWindow`, `windowMenu`

**type** (string, optional)
- Specifies the type of menu item
- Possible values: `normal`, `separator`, `submenu`, `checkbox`, `radio`, `header` (macOS 14+), `palette` (macOS 14+)

**label** (string, optional)
- The text label displayed for the menu item

**accessibilityLabel** (string, optional)
- Accessibility label for the menu item (macOS only)

**sublabel** (string, optional)
- Secondary text label displayed below the main label (macOS >= 14.4)

**toolTip** (string, optional)
- Hover text displayed for this menu item (macOS only)

**accelerator** (string, optional)
- Keyboard shortcut for the menu item. See Accelerator documentation for format.

**icon** ([NativeImage](native-image.md) | string, optional)
- Icon for the menu item. Can be a NativeImage instance or file path to an icon.

**enabled** (boolean, optional)
- If false, the menu item will be greyed out and unclickable. Defaults to true.

**acceleratorWorksWhenHidden** (boolean, optional)
- macOS only. If false, prevents the accelerator from triggering the item when not visible. Defaults to true.

**visible** (boolean, optional)
- If false, the menu item will be entirely hidden. Defaults to true.

**checked** (boolean, optional)
- Should only be specified for `checkbox` or `radio` type menu items.

**registerAccelerator** (boolean, optional)
- Linux and Windows only. If false, the accelerator won't be registered with the system but will still be displayed. Defaults to true.

**sharingItem** ([SharingItem](structures/sharing-item.md), optional)
- macOS only. The item to share when the `role` is `shareMenu`.

**submenu** ([MenuItemConstructorOptions][] | [Menu](menu.md), optional)
- For `submenu` type menu items. If specified, `type: 'submenu'` can be omitted. If not a Menu instance, it will be automatically converted using `Menu.buildFromTemplate`.

**id** (string, optional)
- Unique identifier within a single menu. Can be used as a reference for positioning.

**before** (string[], optional)
- Inserts this item before the item with the specified id. If the referenced item doesn't exist, the item is inserted at the end of the menu.

**after** (string[], optional)
- Inserts this item after the item with the specified id. If the referenced item doesn't exist, the item is inserted at the end of the menu.

**beforeGroupContaining** (string[], optional)
- Declares the placement of this item's containing group before the containing group of the item with the specified id.

**afterGroupContaining** (string[], optional)
- Declares the placement of this item's containing group after the containing group of the item with the specified id.

### Returns
- [MenuItem](menu-item.md) - A new MenuItem instance

### Example
```javascript
const { MenuItem } = require('electron');

const menuItem = new MenuItem({
  label: 'Click me',
  click: () => {
    console.log('Item clicked');
  },
  accelerator: 'CmdOrCtrl+K'
});
```
```

--------------------------------

### Setup Worker Process with MessageChannels in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/message-ports.md

Configures a hidden BrowserWindow as a worker process and establishes direct MessagePort communication between main and worker windows. The main process creates a MessageChannelMain, sends one port to the worker and another to the main window, enabling direct inter-process communication without main process relay overhead.

```javascript
const { BrowserWindow, app, ipcMain, MessageChannelMain } = require('electron')

app.whenReady().then(async () => {
  const worker = new BrowserWindow({
    show: false,
    webPreferences: { nodeIntegration: true }
  })
  await worker.loadFile('worker.html')

  const mainWindow = new BrowserWindow({
    webPreferences: { nodeIntegration: true }
  })
  mainWindow.loadFile('app.html')

  mainWindow.webContents.mainFrame.ipc.on('request-worker-channel', (event) => {
    const { port1, port2 } = new MessageChannelMain()
    worker.webContents.postMessage('new-client', null, [port1])
    event.senderFrame.postMessage('provide-worker-channel', null, [port2])
  })
})
```

--------------------------------

### Use Native Addon in Electron Main Process

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron.md

Demonstrates importing and using a native addon module within an Electron main process. Shows the standard require pattern for accessing native addon functions from Electron's Node.js-enabled main process.

```javascript
// In your main process
const myAddon = require('my-native-addon')

console.log(myAddon.helloWorld('Electron'))
```

--------------------------------

### Minimal Node.js Addon Structure with NAPI

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Basic skeleton for a Node.js addon using node-addon-api. The Init function is called when the addon loads, and NODE_API_MODULE registers the initializer.

```cpp
#include <napi.h>
#include <string>
#include "cpp_code.h"

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    // We'll add code here later
    return exports;
}

NODE_API_MODULE(cpp_addon, Init)
```

--------------------------------

### Set Represented File and Document Edited State in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/represented-file.md

Creates an Electron BrowserWindow and sets a represented file (home directory) with edited state indicator. The represented file icon appears in the macOS title bar, and Command/Control-clicking shows a popup with the file path. This example demonstrates the setRepresentedFilename and setDocumentEdited APIs for macOS applications.

```javascript
const { app, BrowserWindow } = require('electron/main')
const os = require('node:os')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.setRepresentedFilename(os.homedir())
  win.setDocumentEdited(true)

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

--------------------------------

### safeStorage.setUsePlainTextEncryption(usePlainText)

Source: https://github.com/electron/electron/blob/main/docs/api/safe-storage.md

Configures plain text encryption fallback on Linux.

```APIDOC
## safeStorage.setUsePlainTextEncryption(usePlainText)

### Description
Forces the use of an in-memory password for encryption on Linux when no OS password manager is available. This is a no-op on Windows and macOS.

### Parameters
- **usePlainText** (boolean) - Whether to use plain text encryption.
```

--------------------------------

### Method: downloadItem.resume()

Source: https://github.com/electron/electron/blob/main/docs/api/download-item.md

Resumes a previously paused download.

```APIDOC
## Method: downloadItem.resume()

### Description
Resumes a download that has been paused. Note that resumable downloads require the server to support range requests and provide `Last-Modified` and `ETag` headers.

### Parameters
(None)

### Returns
(void)
```

--------------------------------

### Configure index.html for renderer script

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-3-preload.md

Adds an element with the id 'info' and attaches the renderer.js script.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    >
    <meta
      http-equiv="X-Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    >
    <title>Hello from Electron renderer!</title>
  </head>
  <body>
    <h1>Hello from Electron renderer!</h1>
    <p>👋</p>
    <p id="info"></p>
  </body>
  <script src="./renderer.js"></script>
</html>
```

--------------------------------

### Manage localStorage in Electron Renderer Process with IPC

Source: https://github.com/electron/electron/blob/main/spec/fixtures/api/localstorage-and-indexeddb.html

This snippet shows how to set a value in `localStorage` and then retrieve it upon an IPC message (`get-localstorage`), sending the result back to the main process via `ipcRenderer.send('result-localstorage')`. It demonstrates basic client-side key-value storage and inter-process communication within an Electron application.

```javascript
const {ipcRenderer} = require('electron');
window.localStorage.setItem('test', 'hello localstorage');
ipcRenderer.on('get-localstorage', () => {
  const result = window.localStorage.getItem('test');
  ipcRenderer.send('result-localstorage', result);
});
```

--------------------------------

### Configure Selenium WebDriver with ChromeDriver for Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/automated-testing.md

Set up a Selenium WebDriver instance to connect to ChromeDriver on port 9515 and specify the path to your Electron application binary. This enables automated testing of Electron apps using Selenium. The example demonstrates building a driver, navigating to a URL, performing searches, and waiting for page state changes.

```javascript
const webdriver = require('selenium-webdriver')

const driver = new webdriver.Builder()
  // The "9515" is the port opened by ChromeDriver.
  .usingServer('http://localhost:9515')
  .withCapabilities({
    'goog:chromeOptions': {
      // Here is the path to your Electron binary.
      binary: '/Path-to-Your-App.app/Contents/MacOS/Electron'
    }
  })
  .forBrowser('chrome') // note: use .forBrowser('electron') for selenium-webdriver <= 3.6.0
  .build()
driver.get('https://www.google.com')
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver')
driver.findElement(webdriver.By.name('btnG')).click()
driver.wait(() => {
  return driver.getTitle().then((title) => {
    return title === 'webdriver - Google Search'
  })
}, 1000)
driver.quit()
```

--------------------------------

### Modify User-Agent Header for Requests (Electron/JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/api/web-request.md

This example demonstrates how to use the `onBeforeSendHeaders` event of the `WebRequest` API to intercept outgoing requests and modify their `User-Agent` header. A filter is applied to target specific URLs, ensuring the modification only affects requests matching the defined patterns. The listener receives request details and a callback to provide the modified headers.

```javascript
const { session } = require('electron')

// Modify the user agent for all requests to the following urls.
const filter = {
  urls: ['https://*.github.com/*', '*://electron.github.io/*']
}

session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
  details.requestHeaders['User-Agent'] = 'MyAgent'
  callback({ requestHeaders: details.requestHeaders })
})
```

--------------------------------

### Compile Node Headers for Electron on Windows

Source: https://github.com/electron/electron/blob/main/docs/development/testing.md

Compiles Node.js headers for the Electron build configuration, a prerequisite for unit testing on Windows.

```powershell
ninja -C out\Testing electron:node_headers
```

--------------------------------

### Illustrate PrinterInfo Object Structure and Options (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/api/structures/printer-info.md

This JavaScript snippet demonstrates the structure of a `PrinterInfo` object, including its core properties like `name`, `displayName`, `description`, and the nested `options` object. The `options` object showcases various platform-specific printer settings and attributes, such as `device-uri`, `printer-state`, and `printer-make-and-model`, providing a concrete example of the data available.

```js
{
  name: 'Austin_4th_Floor_Printer___C02XK13BJHD4',
  displayName: 'Austin 4th Floor Printer @ C02XK13BJHD4',
  description: 'TOSHIBA ColorMFP',
  options: {
    copies: '1',
    'device-uri': 'dnssd://Austin%204th%20Floor%20Printer%20%40%20C02XK13BJHD4._ipps._tcp.local./?uuid=71687f1e-1147-3274-6674-22de61b110bd',
    finishings: '3',
    'job-cancel-after': '10800',
    'job-hold-until': 'no-hold',
    'job-priority': '50',
    'job-sheets': 'none,none',
    'marker-change-time': '0',
    'number-up': '1',
    'printer-commands': 'ReportLevels,PrintSelfTestPage,com.toshiba.ColourProfiles.update,com.toshiba.EFiling.update,com.toshiba.EFiling.checkPassword',
    'printer-info': 'Austin 4th Floor Printer @ C02XK13BJHD4',
    'printer-is-accepting-jobs': 'true',
    'printer-is-shared': 'false',
    'printer-is-temporary': 'false',
    'printer-location': '',
    'printer-make-and-model': 'TOSHIBA ColorMFP',
    'printer-state': '3',
    'printer-state-change-time': '1573472937',
    'printer-state-reasons': 'offline-report,com.toshiba.snmp.failed',
    'printer-type': '10531038',
    'printer-uri-supported': 'ipp://localhost/printers/Austin_4th_Floor_Printer___C02XK13BJHD4',
    system_driverinfo: 'T'
  }
}
```

--------------------------------

### BrowserWindow Instance Methods - Visibility

Source: https://github.com/electron/electron/wiki/browser-window

Methods for controlling window visibility including showing, hiding, and managing minimized/maximized states.

```APIDOC
## BrowserWindow Instance Methods - Visibility

### BrowserWindow.show()

**Description:**
Shows the window.

**Method:**
POST

**Response:**
Void

---

### BrowserWindow.hide()

**Description:**
Hides the window.

**Method:**
POST

**Response:**
Void

---

### BrowserWindow.maximize()

**Description:**
Maximizes the window.

**Method:**
POST

**Response:**
Void

---

### BrowserWindow.unmaximize()

**Description:**
Unmaximizes the window.

**Method:**
POST

**Response:**
Void

---

### BrowserWindow.minimize()

**Description:**
Minimizes the window. On some platforms the minimized window will be shown in the Dock.

**Method:**
POST

**Response:**
Void

---

### BrowserWindow.restore()

**Description:**
Restores the window from minimized state to its previous state.

**Method:**
POST

**Response:**
Void
```

--------------------------------

### Implement Electron API Methods and `ObjectTemplateBuilder` in C++ Source

Source: https://github.com/electron/electron/blob/main/docs/development/creating-api.md

This C++ source file snippet implements the `gin::DeprecatedWrapperInfo` and `gin::ObjectTemplateBuilder` for an Electron API class, exposing C++ methods to JavaScript. It demonstrates how to register methods like `methodName` and initializes the API module within the V8 context, making it available to the Electron renderer process.

```cpp
#include "shell/browser/api/electron_api_safe_storage.h"

#include "shell/browser/browser.h"
#include "shell/common/gin_converters/base_converter.h"
#include "shell/common/gin_converters/callback_converter.h"
#include "shell/common/gin_helper/dictionary.h"
#include "shell/common/gin_helper/object_template_builder.h"
#include "shell/common/node_includes.h"
#include "shell/common/platform_util.h"

namespace electron {

namespace api {

gin::DeprecatedWrapperInfo ApiName::kWrapperInfo = {gin::kEmbedderNativeGin};

gin::ObjectTemplateBuilder ApiName::GetObjectTemplateBuilder(
    v8::Isolate* isolate) {
  return gin::ObjectTemplateBuilder(isolate)
      .SetMethod("methodName", &ApiName::methodName);
}

const char* ApiName::GetTypeName() {
  return "ApiName";
}

// static
gin::Handle<ApiName> ApiName::Create(v8::Isolate* isolate) {
  return gin::CreateHandle(isolate, new ApiName());
}

} // namespace api

} // namespace electron

namespace {

void Initialize(v8::Local<v8::Object> exports,
                v8::Local<v8::Value> unused,
                v8::Local<v8::Context> context,
                void* priv) {
  v8::Isolate* const isolate = v8::Isolate::GetCurrent();
  gin_helper::Dictionary dict(isolate, exports);
  dict.Set("apiName", electron::api::ApiName::Create(isolate));
}

}  // namespace
```

--------------------------------

### languageModelUtility.clone(options)

Source: https://github.com/electron/electron/blob/main/docs/api/language-model-utility.md

Clones the `LanguageModelUtility` instance, preserving its context and initial prompt.

```APIDOC
## languageModelUtility.clone(options)

### Description
Clones the `LanguageModelUtility` such that the context and initial prompt should be preserved.

### Type
Instance Method

### Signature
`languageModelUtility.clone(options)`

### Parameters
- **options** ([LanguageModelCloneOptions](structures/language-model-clone-options.md)) - Options for cloning the utility.

### Returns
`Promise<LanguageModelUtility>` - A promise that resolves to a new, cloned `LanguageModelUtility` instance.
```

--------------------------------

### Register Service Worker and Setup IPC Communication in Electron

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/service-worker/custom-scheme-index.html

Registers a service worker and establishes IPC communication between the renderer process and main process using Electron's ipcRenderer. Handles XMLHttpRequest through the service worker with error and success callbacks that send responses back to the main process via IPC channels.

```javascript
const ipcRenderer = require('electron').ipcRenderer;
navigator.serviceWorker.register('service-worker.js', {scope: './'}).then(() => {
  if (navigator.serviceWorker.controller) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'sw://dummy/echo');
    xhr.setRequestHeader('X-Mock-Response', 'yes');
    xhr.addEventListener('error', error => {
      ipcRenderer.send('error', `${error.message}\n${error.stack}`);
    })
    xhr.addEventListener('load', () => {
      ipcRenderer.send('response', xhr.responseText);
    });
    xhr.send();
  } else {
    ipcRenderer.send('reload');
  }
}).catch(error => {
  ipcRenderer.send('error', `${error.message}\n${error.stack}`);
})
```

--------------------------------

### Complete src/cpp_code.cc file

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

This comprehensive C++ file combines GTK UI elements with native C++ logic for an Electron addon, managing Todo items, UI updates, and inter-process communication via callbacks.

```cpp
#include <gtk/gtk.h>
#include <string>
#include <functional>
#include <chrono>
#include <vector>
#include <uuid/uuid.h>
#include <ctime>
#include <thread>
#include <memory>

using TodoCallback = std::function<void(const std::string &)>;

namespace cpp_code
{

  // Basic functions
  std::string hello_world(const std::string &input)
  {
    return "Hello from C++! You said: " + input;
  }

  // Data structures
  struct TodoItem
  {
    uuid_t id;
    std::string text;
    int64_t date;

    std::string toJson() const
    {
      char uuid_str[37];
      uuid_unparse(id, uuid_str);
      return "{" + 
             "\"id\":\"" + std::string(uuid_str) + "\"," + 
             "\"text\":\"" + text + "\"," + 
             "\"date\":
```

--------------------------------

### Prevent Unsafe Native Node.js Module Loading in Web Workers

Source: https://github.com/electron/electron/blob/main/docs/tutorial/multithreading.md

This code snippet illustrates a method to prevent the unsafe loading of native Node.js modules after Web Workers have started. It overrides the `process.dlopen` function to throw an error, ensuring that any subsequent attempts to load native modules will fail, thereby mitigating potential crashes or memory corruptions in a multi-threaded environment.

```js
process.dlopen = () => {
  throw new Error('Load native module is not safe')
}
const worker = new Worker('script.js')
```

--------------------------------

### Configure Login Item Settings with Squirrel on Windows in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Sets the launch path to Squirrel's stub application located one directory above the current executable to ensure the latest version launches at login. Useful when integrating with Electron's autoUpdater on Windows.

```javascript
const { app } = require('electron')

const path = require('node:path')

const appFolder = path.dirname(process.execPath)
const ourExeName = path.basename(process.execPath)
const stubLauncher = path.resolve(appFolder, '..', ourExeName)

app.setLoginItemSettings({
  openAtLogin: true,
  path: stubLauncher,
  args: [
    // You might want to pass a parameter here indicating that this
    // app was launched via login, but you don't have to
  ]
})
```

--------------------------------

### Cancel ClientRequest Authentication by Providing Empty Credentials in Electron

Source: https://github.com/electron/electron/blob/main/docs/api/client-request.md

This snippet shows how to handle the 'login' event on an Electron `ClientRequest` object to cancel an authentication request. By calling the `callback` function without any arguments, the request will be cancelled, and an authentication error will be reported on the response object. It also includes an example of handling the 'response' event to log status and errors.

```javascript
request.on('response', (response) => {
  console.log(`STATUS: ${response.statusCode}`)
  response.on('error', (error) => {
    console.log(`ERROR: ${JSON.stringify(error)}`)
  })
})
request.on('login', (authInfo, callback) => {
  callback()
})
```

--------------------------------

### Migrate desktopCapturer.getSources to Main Process

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Use IPC to bridge the desktopCapturer functionality from the main process to the renderer process after its removal from the renderer.

```javascript
// Main process
const { ipcMain, desktopCapturer } = require('electron')

ipcMain.handle(
  'DESKTOP_CAPTURER_GET_SOURCES',
  (event, opts) => desktopCapturer.getSources(opts)
)
```

```javascript
// Renderer process
const { ipcRenderer } = require('electron')

const desktopCapturer = {
  getSources: (opts) => ipcRenderer.invoke('DESKTOP_CAPTURER_GET_SOURCES', opts)
}
```

--------------------------------

### BaseWindowConstructorOptions Object

Source: https://github.com/electron/electron/blob/main/docs/api/structures/base-window-options.md

Configuration object used when creating a new `BrowserWindow` instance in Electron. These options control various aspects of the window's appearance and behavior.

```APIDOC
## Object: BaseWindowConstructorOptions

### Description
This object defines the configuration options available when constructing a new `BrowserWindow` instance in Electron. These options control various aspects of the window's appearance, behavior, and platform-specific features.

### Properties
- `vibrancy` (string) - Optional - _macOS_ - Adds a type of vibrancy effect to the window.
  - Possible values: `appearance-based`, `titlebar`, `selection`, `menu`, `popover`, `sidebar`, `header`, `sheet`, `window`, `hud`, `fullscreen-ui`, `tooltip`, `content`, `under-window`, `under-page`.
- `backgroundMaterial` (string) - Optional - _Windows_ - Sets the window's system-drawn background material, including behind the non-client area.
  - Possible values: `auto`, `none`, `mica`, `acrylic`, `tabbed`.
  - See: `win.setBackgroundMaterial` for more information.
- `zoomToPageWidth` (boolean) - Optional - _macOS_ - Controls the behavior when option-clicking the green stoplight button or using the Window > Zoom menu item. If `true`, the window grows to the preferred width of the web page; `false` zooms to screen width. Also affects `maximize()`. Default is `false`.
- `tabbingIdentifier` (string) - Optional - _macOS_ - Tab group name, allowing the window to open as a native tab. Windows with the same identifier are grouped. Adds a native new tab button and enables `new-window-for-tab` event.
- `type` (string) - Optional - Sets the window's type, which is platform dependent.
  - **On Linux**:
    - `desktop`: Places window at desktop background level (`kCGDesktopWindowLevel - 1`). Does not receive focus, keyboard, or mouse events. Use `globalShortcut` for input.
    - `dock`: Creates a dock-like window behavior.
    - `toolbar`: Creates a window with a toolbar appearance.
    - `splash`: Behaves specifically; not draggable even with `-webkit-app-region: drag`. Commonly used for splash screens.
    - `notification`: Creates a window that behaves like a system notification.
  - **On macOS**:
    - `desktop`: Places window at desktop background level (`kCGDesktopWindowLevel - 1`). Does not receive focus, keyboard, or mouse events. Use `globalShortcut` for input.
    - `textured`: Adds metal gradient appearance. **Deprecated**.
    - `panel`: Enables the window to float on top of full-screened apps (`NSWindowStyleMaskNonactivatingPanel`). Appears on all spaces.
  - **On Windows**:
    - `toolbar`: Possible type.
```

--------------------------------

### Get Current Position with Electron IPC Error Handler

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/permissions/geolocation.html

Uses the Geolocation API's getCurrentPosition method to retrieve the user's current location. On success, an empty callback is executed; on error, the error message is sent to the main Electron process via ipcRenderer. This pattern enables communication between renderer and main processes for handling geolocation failures.

```javascript
navigator.geolocation.getCurrentPosition(() => {}, (err) => { require('electron').ipcRenderer.send('message', err.message); });
```

--------------------------------

### Run project linting commands

Source: https://github.com/electron/electron/blob/main/CLAUDE.md

Commands to execute various linting tools for JavaScript, TypeScript, and C++ codebases.

```bash
npm run lint              # Run all linters
npm run lint:js           # Run oxlint over all JS/TS/MJS sources
npm run lint:clang-format # C++ formatting
npm run lint:api-history  # Validate API history YAML blocks in docs
```

--------------------------------

### Manage Electron Webview Zoom and In-Page Navigation with IPC

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/webview-in-page-navigate.html

This snippet demonstrates how to interact with an Electron `webview` to set its zoom level, retrieve zoom factors, and communicate this information to the main process using `ipcRenderer`. It also handles `dom-ready` and `did-navigate-in-page` events to manage initial setup and subsequent in-page navigations, including executing JavaScript within the webview.

```javascript
const {ipcRenderer, webFrame} = require('electron')
const view = document.getElementById('view')
let finalNavigation = false

function SendZoomLevel() {
  return new Promise((resolve, reject) => {
    const zoomLevel = view.getZoomLevel()
    const zoomFactor = view.getZoomFactor()
    ipcRenderer.send('webview-zoom-in-page', zoomLevel, zoomFactor, finalNavigation)
    resolve()
  })
}

view.addEventListener('dom-ready', () => {
  view.setZoomLevel(2.0)
  SendZoomLevel().then(() => {
    if (!finalNavigation) {
      finalNavigation = true
      view.executeJavaScript('window.location.hash=123')
    }
  })
})

view.addEventListener('did-navigate-in-page', () => {
  SendZoomLevel()
})
```

--------------------------------

### Define Window Creation Function

Source: https://github.com/electron/electron/blob/main/docs/tutorial/tutorial-2-first-app.md

A reusable function to instantiate a new BrowserWindow and load the local HTML file.

```js
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}
```

--------------------------------

### Handling Deep Links and Single Instance on Windows/Linux in Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/launch-app-from-url-in-another-app.md

This code manages deep link handling and ensures only a single instance of the Electron app runs on Windows and Linux. It uses `requestSingleInstanceLock` to prevent multiple instances and listens for the `second-instance` event to process deep link URLs from subsequent launches, focusing the existing window. It also checks for deep links on initial cold start.

```js
const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
    // the commandLine is array of strings in which last element is deep link url
    dialog.showErrorBox('Welcome Back', `You arrived from: ${commandLine.pop()}`)
  })

  // Create mainWindow, load the rest of the app, etc...
  app.whenReady().then(() => {
    createWindow()
    // Check for deep link on cold start
    if (process.argv.length >= 2) {
      const lastArg = process.argv[process.argv.length - 1]
      if (lastArg.startsWith('electron-fiddle://')) {
        dialog.showErrorBox('Welcome Back', `You arrived from: ${lastArg}`)
      }
    }
  })
}
```

--------------------------------

### app.setLoginItemSettings(settings)

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Sets the application's login item settings on macOS and Windows. Allows configuring whether the application launches automatically on system startup along with platform-specific options.

```APIDOC
## app.setLoginItemSettings(settings)

### Description
Set the app's login item settings for macOS and Windows.

### Parameters
- **settings** (Object)
  - **openAtLogin** (boolean, optional) - `true` to open the app at login, `false` to remove the app as a login item. Defaults to `false`.
  - **type** (string, optional) _macOS_ - The type of service to add as a login item. Defaults to `mainAppService`. Values include `mainAppService`, `agentService`, `daemonService`, and `loginItemService`.
  - **serviceName** (string, optional) _macOS_ - The name of the service. Required if `type` is non-default.
  - **path** (string, optional) _Windows_ - The executable to launch at login. Defaults to `process.execPath`.
  - **args** (string[], optional) _Windows_ - The command-line arguments to pass to the executable. Defaults to an empty array.
  - **enabled** (boolean, optional) _Windows_ - `true` will change the startup approved registry key and enable/disable the app in Task Manager and Windows Settings. Defaults to `true`.
  - **name** (string, optional) _Windows_ - Value name to write into registry. Defaults to the app's AppUserModelId().

### Example
```js
const { app } = require('electron')
const path = require('node:path')

const appFolder = path.dirname(process.execPath)
const ourExeName = path.basename(process.execPath)
const stubLauncher = path.resolve(appFolder, '..', ourExeName)

app.setLoginItemSettings({
  openAtLogin: true,
  path: stubLauncher,
  args: []
})
```
```

--------------------------------

### Build Native Addon with node-gyp

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron.md

Shell command to compile C++ native addon code into a loadable .node binary file. Runs node-gyp configure and build steps to generate platform-specific bindings.

```shell
npm run build
```

--------------------------------

### Retrieve Data from IndexedDB in Electron Renderer Process with IPC

Source: https://github.com/electron/electron/blob/main/spec/fixtures/api/localstorage-and-indexeddb.html

This snippet shows how to open an existing IndexedDB database and retrieve a specific item from an object store upon receiving an IPC message (`get-indexeddb`). It includes error handling and checks for the existence of the object store before attempting to retrieve data, sending the result back to the main process via `ipcRenderer.send('result-indexeddb')`.

```javascript
ipcRenderer.on('get-indexeddb', () => {
  const openRequest = window.indexedDB.open('testdb');
  openRequest.onerror = (event) => {
    console.error(event);
  };
  openRequest.onsuccess = (event) => {
    const db = event.target.result;
    if (!db.objectStoreNames.contains('testdata')) {
      ipcRenderer.send('result-indexeddb', undefined);
      return;
    }
    const getRequest = db.transaction('testdata', 'readonly').objectStore('testdata').get('test');
    getRequest.onsuccess = (event) => {
      ipcRenderer.send('result-indexeddb', event.target.result);
    };
  };
});
```

--------------------------------

### desktopCapturer.getSources

Source: https://github.com/electron/electron/blob/main/docs/api/desktop-capturer.md

Retrieves a list of available desktop media sources (screens or windows) that can be used for capturing audio and video.

```APIDOC
## desktopCapturer.getSources

### Description
Retrieves a list of available desktop media sources (screens or windows) that can be used for capturing audio and video. This method returns a Promise that resolves with an array of `DesktopCapturerSource` objects.

### Method Type
Module Method

### Method Signature
desktopCapturer.getSources(options)

### Parameters
#### Options Object
- **options** (Object) - Required - An object containing configuration for source retrieval.
  - **types** (string[]) - Required - An array of strings that lists the types of desktop sources to be captured. Available types are `screen` and `window`.
  - **thumbnailSize** ([Size](structures/size.md)) - Optional - The size that the media source thumbnail should be scaled to. Default is `150` x `150`. Set width or height to 0 when you do not need thumbnails to save processing time.
  - **fetchWindowIcons** (boolean) - Optional - Set to `true` to enable fetching window icons. The default value is `false`. When `false`, the `appIcon` property of the sources will be `null`.

### Request Example
```javascript
desktopCapturer.getSources({
  types: ['screen', 'window'],
  thumbnailSize: { width: 150, height: 150 },
  fetchWindowIcons: true
}).then(sources => {
  console.log(sources);
}).catch(error => {
  console.error('Failed to get sources:', error);
});
```

### Response
#### Success Response (Promise<DesktopCapturerSource[]>)
- **Promise<DesktopCapturerSource[]>** - Resolves with an array of `DesktopCapturerSource` objects. Each object represents a screen or an individual window that can be captured.

#### Response Example
```json
[
  {
    "id": "screen:0:0",
    "name": "Entire Screen",
    "thumbnail": {
      "toDataURL": "function",
      "isEmpty": false,
      "width": 150,
      "height": 150
    },
    "display_id": "0"
  },
  {
    "id": "window:12345",
    "name": "Electron",
    "thumbnail": {
      "toDataURL": "function",
      "isEmpty": false,
      "width": 150,
      "height": 150
    },
    "appIcon": {
      "toDataURL": "function",
      "isEmpty": false,
      "width": 64,
      "height": 64
    }
  }
]
```
```

--------------------------------

### <webview>.insertCSS(css)

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Injects CSS into the guest page and returns a unique key for removing the stylesheet.

```APIDOC
### `<webview>.insertCSS(css)`

#### Description
Injects CSS into the current web page and returns a unique key for the inserted stylesheet.

#### Parameters
- **css** (`string`) - Required. CSS text to inject.

#### Return Value
- Returns `Promise<string>` - A promise that resolves with a key for the inserted CSS that can later be used to remove the CSS via `<webview>.removeInsertedCSS(key)`.
```

--------------------------------

### Renderer Process ESM Import Limitations (HTML)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/esm.md

This example demonstrates that `import` statements within a renderer process's `<script type="module">` tag cannot directly access Node.js built-in modules like `fs` or npm packages. This is due to the renderer process running in a Chromium context which uses Chromium's ESM loader, not Node.js's. For npm packages, a bundler is recommended.

```html
<script type="module">
    import { exists } from 'node:fs' // ❌ will not work!
</script>
```

--------------------------------

### Generate Release Build Configuration

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Generate the build files for a release configuration of Electron using GN. This command creates an `out/Release` directory with the necessary build arguments.

```sh
gn gen out/Release --args="import("//electron/build/args/release.gn")"
```

```cmd
gn gen out/Release --args="import("//electron/build/args/release.gn")"
```

```powershell
gn gen out/Release --args="import(\`"//electron/build/args/release.gn\`")"
```

--------------------------------

### Open a blank window from the renderer

Source: https://github.com/electron/electron/blob/main/docs/api/window-open.md

Opens a blank window from the renderer process and injects content into it.

```javascript
// renderer process (mainWindow)
const childWindow = window.open('', 'modal')
childWindow.document.write('<h1>Hello</h1>')
```

--------------------------------

### Restore window.open resizability

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Use setWindowOpenHandler to explicitly control resizability for popups to match previous behavior.

```js
webContents.setWindowOpenHandler((details) => {
  return {
    action: 'allow',
    overrideBrowserWindowOptions: {
      resizable: details.features.includes('resizable=yes')
    }
  }
})
```

--------------------------------

### Configure GTK version via command line

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Work around GTK version conflicts by specifying the version flag when launching the application.

```shell
$ electron --gtk-version=3   # or --gtk-version=2
```

--------------------------------

### Configure Electron Window Security and Load Event (JavaScript)

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/base-page-security-onload-message.html

This snippet configures an Electron window by enabling security warnings and attaching an event listener to the window's 'load' event. Enabling `ELECTRON_ENABLE_SECURITY_WARNINGS` is a best practice for Electron applications, and the load event listener demonstrates how to execute code once the window content has fully loaded.

```javascript
window.ELECTRON_ENABLE_SECURITY_WARNINGS = true
window.addEventListener('load', () => console.log('loaded'));
```

--------------------------------

### win.loadFile(filePath)

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Loads a local HTML file path into the browser window.

```APIDOC
## win.loadFile(filePath)

### Description
Loads a local HTML file into the browser window instance.

### Parameters
- **filePath** (String) - Required - The path to the local HTML file.

### Example
```js
win.loadFile('index.html')
```
```

--------------------------------

### Main Process Dialog Handling

Source: https://github.com/electron/electron/blob/main/docs/fiddles/native-ui/dialogs/open-file-or-directory/index.html

Listens for the IPC message and invokes the native open dialog.

```javascript
const {ipcMain, dialog} = require('electron')  ipcMain.on('open-file-dialog', (event) => {   dialog.showOpenDialog({     properties: ['openFile', 'openDirectory']   }, (files) => {     if (files) {       event.sender.send('selected-directory', files)     }   }) })
```

--------------------------------

### app.enableSandbox()

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Enables full sandbox mode on the application, forcing all renderers to be launched sandboxed. This method can only be invoked before the app is ready.

```APIDOC
## app.enableSandbox()

### Description
Enables full sandbox mode on the app. This means that all renderers will be launched sandboxed, regardless of the value of the `sandbox` flag in `WebPreferences`.

### Limitations
- This method can only be called before app is ready.
```

--------------------------------

### win.moveTop()

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Moves the window to the top of the z-order regardless of whether it currently has focus.

```APIDOC
## `win.moveTop()`

### Description
Moves window to top(z-order) regardless of focus.
```

--------------------------------

### Generate Testing Build Configuration

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Generate the build files for a testing configuration of Electron using GN. This command creates an `out/Testing` directory with the necessary build arguments.

```sh
gn gen out/Testing --args="import("//electron/build/args/testing.gn")"
```

```cmd
gn gen out/Testing --args="import("//electron/build/args/testing.gn")"
```

```powershell
gn gen out/Testing --args="import(\`"//electron/build/args/testing.gn\`")"
```

--------------------------------

### Menu.buildFromTemplate(template)

Source: https://github.com/electron/electron/blob/main/docs/api/menu.md

Constructs a new `Menu` instance from a given template, which is an array of options for `MenuItem`. This provides a convenient way to define complex menus.

```APIDOC
## POST /Menu/buildFromTemplate

### Description
Constructs a new `Menu` instance from a given template. The `template` is generally an array of `options` for constructing a `MenuItem`.

### Method
POST

### Endpoint
/Menu/buildFromTemplate

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **template** (array) - Required - An array of `MenuItemConstructorOptions` or `MenuItem` objects.

### Request Example
{
  "template": [
    { "label": "File", "submenu": [ { "label": "Open" } ] },
    { "label": "Edit", "submenu": [ { "label": "Cut" } ] }
  ]
}

### Response
#### Success Response (200)
- **Menu** (Menu) - The constructed Menu instance.

#### Response Example
{
  "menu": {
    "type": "Menu",
    "items": [
      { "label": "File" },
      { "label": "Edit" }
    ]
  }
}
```

--------------------------------

### ShareMenu Constructor

Source: https://github.com/electron/electron/blob/main/docs/api/share-menu.md

Creates a new ShareMenu instance with a sharing item. This constructor initializes the share menu for macOS with the specified item to be shared.

```APIDOC
## Constructor: new ShareMenu(sharingItem)

### Description
Creates a new share menu instance on macOS for sharing information from the current context.

### Parameters
#### Constructor Parameters
- **sharingItem** (SharingItem) - Required - The item to share

### Request Example
```javascript
const { ShareMenu } = require('electron');
const sharingItem = { urls: ['https://example.com'] };
const shareMenu = new ShareMenu(sharingItem);
```

### Notes
- Process: Main
- Platform: macOS only
- Electron's built-in classes cannot be subclassed in user code
```

--------------------------------

### Initialize C++ N-API Addon Constructor and Destructor

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Initializes CppAddon class members in the constructor, including persistent N-API object references, and defines a destructor to properly release the threadsafe function resource.

```cpp
// ... previous code

class CppAddon : public Napi::ObjectWrap<CppAddon> {
public:
    // CallbackData struct to pass data between threads
    struct CallbackData {
        std::string eventType;
        std::string payload;
        CppAddon* addon;
    };

    CppAddon(const Napi::CallbackInfo& info)
        : Napi::ObjectWrap<CppAddon>(info)
        , env_(info.Env())
        , emitter(Napi::Persistent(Napi::Object::New(info.Env())))
        , callbacks(Napi::Persistent(Napi::Object::New(info.Env())))
        , tsfn_(nullptr) {

        // We'll add threadsafe function setup here in the next step
    }

    // Add destructor to clean up
    ~CppAddon() {
        if (tsfn_ != nullptr) {
            napi_release_threadsafe_function(tsfn_, napi_tsfn_release);
            tsfn_ = nullptr;
        }
    }

    // ... rest of the class
};

// ... rest of the file
```

--------------------------------

### globalShortcut.register(accelerator, callback)

Source: https://github.com/electron/electron/blob/main/docs/api/global-shortcut.md

Registers a global keyboard shortcut with the operating system. Returns a boolean indicating whether registration was successful.

```APIDOC
## globalShortcut.register(accelerator, callback)

### Description
Registers a global keyboard shortcut with the operating system.

### Process
Main

### Parameters
- **accelerator** (string) - Required - The shortcut accelerator string to bind.
- **callback** (Function) - Required - The callback executed when the shortcut is pressed.

### Return Value
- (boolean) - Returns `true` if the shortcut is registered successfully, or `false` if registration failed.

### Example
```js
const ret = globalShortcut.register('CommandOrControl+X', () => {
  console.log('CommandOrControl+X is pressed')
})
```
```

--------------------------------

### Create Application Menu Using Constructor

Source: https://github.com/electron/electron/blob/main/docs/tutorial/menus.md

Build an application menu by instantiating Menu and MenuItem objects directly, then appending items to the menu. This approach allows for programmatic menu construction with full control over each item. The menu is set as the application menu using Menu.setApplicationMenu().

```javascript
const submenu = new Menu()
submenu.append(new MenuItem({ label: 'Hello' }))
submenu.append(new MenuItem({ type: 'separator' }))
submenu.append(new MenuItem({ label: 'Electron', type: 'checkbox', checked: true }))
const menu = new Menu()
menu.append(new MenuItem({ label: 'Menu', submenu }))
Menu.setApplicationMenu(menu)
```

--------------------------------

### Set initial window background color in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Sets a placeholder background color to prevent flash of white when showing windows immediately for complex applications.

```javascript
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ backgroundColor: '#2e2c29' })
win.loadURL('https://github.com')
```

--------------------------------

### package.json configuration for Objective-C addon

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

This `package.json` defines the project metadata, scripts for cleaning and building the Electron addon, and necessary dependencies like `bindings` and `node-addon-api`.

```json
{
  "name": "objc-macos",
  "version": "1.0.0",
  "description": "A demo module that exposes Objective-C code to Electron",
  "main": "js/index.js",
  "author": "Your Name",
  "scripts": {
    "clean": "rm -rf build",
    "build-electron": "electron-rebuild",
    "build": "node-gyp configure && node-gyp build"
  },
  "license": "MIT",
  "dependencies": {
    "bindings": "^1.5.0",
    "node-addon-api": "^8.3.0"
  }
}
```

--------------------------------

### Open a new window with features

Source: https://github.com/electron/electron/blob/main/docs/api/window-open.md

Opens a new window with specific dimensions and window features defined in the features string.

```javascript
window.open('https://github.com', '_blank', 'top=500,left=200,frame=false,nodeIntegration=no')
```

--------------------------------

### win.getContentSize()

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Retrieves the width and height of the window's client area.

```APIDOC
## `win.getContentSize()`

### Description
Returns the width and height of the window's client area.

### Returns
- `Integer[]` - Contains the window's client area's width and height.
```

--------------------------------

### Configure PGO Data Paths in GN

Source: https://github.com/electron/electron/blob/main/script/pgo/README.md

Set the paths for C++ binary and V8 builtins profiles in the GN configuration. Ensure the V8 profile path is in-tree for remote-exec builds.

```gn
# C++ binary profile
pgo_data_path = "//path/to/electron-<platform>-<arch>-....profdata"

# V8 builtins profile (must be an in-tree path for remote-exec builds)
v8_builtins_profiling_log_file = "//v8/tools/builtins-pgo/profiles/electron-v8-x64.profile"
```

--------------------------------

### BrowserWindow.getAllWindows()

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Returns an array containing all opened browser windows in the application.

```APIDOC
### `BrowserWindow.getAllWindows()`

#### Description
Returns an array of all opened browser windows.

#### Returns
- `BrowserWindow[]` - An array of all opened browser windows.
```

--------------------------------

### shell.showItemInFolder(fullPath)

Source: https://github.com/electron/electron/wiki/Shell

Shows the given file in the system's file manager. If possible, the file will be selected.

```APIDOC
## shell.showItemInFolder(fullPath)

### Description
Show the given file in a file manager. If possible, select the file.

### Method
Function Call

### Endpoint
shell.showItemInFolder(fullPath)

### Parameters
#### Arguments
- **fullPath** (String) - Required - The full path to the file or folder.

### Request Example
```javascript
const { shell } = require('electron');
shell.showItemInFolder('/path/to/file.txt');
```
```

--------------------------------

### EnableHeapProfilingOptions Configuration

Source: https://github.com/electron/electron/blob/main/docs/api/structures/enable-heap-profiling-options.md

Configuration object for heap profiling options in Electron. Specifies which processes to profile, sampling rates, and stack metadata recording types. All properties are optional with sensible defaults.

```APIDOC
## EnableHeapProfilingOptions Object

### Description
Configuration object for enabling heap profiling in Electron. Controls which processes are profiled, the sampling interval, and the type of metadata recorded for each allocation.

### Properties

#### mode (string, optional)
Controls which processes are profiled. Equivalent to `--memlog` in Chrome. Default is `all`.

**Allowed Values:**
- `all` - Profile all processes.
- `browser` - Profile only the browser process.
- `gpu` - Profile only the GPU process.
- `minimal` - Profile only the browser and GPU processes.
- `renderer-sampling` - Profile at most 1 renderer process. Each renderer process has a fixed probability of being profiled when the renderer process is started or, for existing processes, when heap profiling is enabled.
- `all-renderers` - Profile all renderer processes.
- `utility-sampling` - Each utility process has a fixed probability of being profiled.
- `all-utilities` - Profile all utility processes.
- `utility-and-browser` - Profile all utility processes and the browser process.

#### samplingRate (number, optional)
Controls the sampling interval in bytes. The lower the interval, the more precise the profile is. However it comes at the cost of performance. Default is `100000` (100KB). That is enough to observe allocation sites that make allocations >500KB total, where total equals to a single allocation size times the number of such allocations at the same call site. Equivalent to `--memlog-sampling-rate` in Chrome. Must be an integer between `1000` and `10000000`.

#### stackMode (string, optional)
Controls the type of metadata recorded for each allocation. Equivalent to `--memlog-stack-mode` in Chrome. Default is `native`.

**Allowed Values:**
- `native` - Instruction addresses from unwinding the stack.
- `native-with-thread-names` - Instruction addresses from unwinding the stack. Includes the thread name as the first frame.

### Example Configuration
```json
{
  "mode": "all",
  "samplingRate": 100000,
  "stackMode": "native"
}
```
```

--------------------------------

### crashReporter.start(options)

Source: https://github.com/electron/electron/blob/main/docs/api/crash-reporter.md

Initializes the crash reporter and begins monitoring for application crashes. This method must be called before any other crashReporter methods.

```APIDOC
## POST [submitURL]

### Description
When a crash occurs, the crash reporter sends a POST request to the configured `submitURL` containing the crash minidump and metadata.

### Method
POST

### Endpoint
[submitURL]

### Parameters
#### Configuration (options)
- **submitURL** (string) - Required - The URL where crash reports will be sent via POST.
- **productName** (string) - Optional - The name of the product, defaults to app.name.
- **companyName** (string) - Optional - The name of the company.
- **uploadToServer** (boolean) - Optional - Whether to upload reports to the server. Defaults to true.

#### Request Body (Multipart/Form-Data)
- **upload_file_minidump** (file) - Required - The minidump file in Breakpad/Crashpad format.
- **process_type** (string) - Optional - The type of process that crashed (e.g., 'renderer' or 'browser').

### Request Example
```javascript
const { crashReporter } = require('electron')

crashReporter.start({
  submitURL: 'https://your-domain.com/url-to-submit',
  uploadToServer: true
})
```

### Response
#### Success Response (200)
- **status** (string) - The server should return a success status code to acknowledge receipt of the crash report.

### Response Example
{
  "status": "success",
  "id": "crash_id_12345"
}
```

--------------------------------

### POST /BrowserWindow.focusOnWebView

Source: https://github.com/electron/electron/wiki/browser-window

Focuses on the web view within the window.

```APIDOC
## POST /BrowserWindow.focusOnWebView

### Description
Focuses on the web view within the window.

### Method
POST

### Endpoint
/BrowserWindow.focusOnWebView

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
(None)

#### Response Example
(None)
```

--------------------------------

### globalShortcut.register(accelerator, callback)

Source: https://github.com/electron/electron/blob/main/docs/api/global-shortcut.md

Registers a global keyboard shortcut accelerator with a callback function that is invoked when the shortcut is pressed. Returns a boolean indicating success.

```APIDOC
## globalShortcut.register(accelerator, callback)

### Description
Registers a global shortcut of `accelerator`. The `callback` is called when the registered shortcut is pressed by the user.

### Parameters
- **accelerator** (`string`) - An accelerator shortcut.
- **callback** (`Function`) - The callback invoked when the shortcut is triggered.

### Return Value
- **boolean** - Whether or not the shortcut was registered successfully.
```

--------------------------------

### Migrate systemPreferences to nativeTheme

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

System preference methods for color schemes are deprecated. Use nativeTheme properties instead.

```js
// Removed in Electron 13
systemPreferences.isDarkMode()
// Replace with
nativeTheme.shouldUseDarkColors

// Removed in Electron 13
systemPreferences.isInvertedColorScheme()
// Replace with
nativeTheme.shouldUseInvertedColorScheme

// Removed in Electron 13
systemPreferences.isHighContrastColorScheme()
// Replace with
nativeTheme.shouldUseHighContrastColors
```

--------------------------------

### Spawn Electron from a Node.js script

Source: https://github.com/electron/electron/blob/main/README.md

Require the electron package in a Node.js environment to retrieve the binary path and spawn the process.

```javascript
const electron = require('electron')
const proc = require('node:child_process')

// will print something similar to /Users/maf/.../Electron
console.log(electron)

// spawn Electron
const child = proc.spawn(electron)
```

--------------------------------

### Configure custom entitlements with @electron/osx-sign

Source: https://github.com/electron/electron/blob/main/docs/tutorial/mac-app-store-submission-guide.md

Use the optionsForFile callback to dynamically assign entitlement files based on the file path during the signing process.

```javascript
const { signAsync } = require('@electron/osx-sign')

function getEntitlementsForFile (filePath) {
  if (filePath.startsWith('my-path-1')) {
    return './my-path-1.plist'
  } else {
    return './alternate.plist'
  }
}

signAsync({
  optionsForFile: (filePath) => ({
    // Ensure you return the right entitlements path here based on the file being signed.
    entitlements: getEntitlementsForFile(filePath)
  })
})
```

--------------------------------

### WebContentsView Constructor

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents-view.md

Creates a new WebContentsView instance with optional configuration for web preferences and existing WebContents. The WebContentsView must be created after the app ready event is emitted.

```APIDOC
## Constructor: new WebContentsView([options])

### Description
Creates a new WebContentsView instance that displays web content within an Electron window.

### Method
Constructor

### Parameters
#### Constructor Options
- **options** (Object) - Optional - Configuration object for the WebContentsView
  - **webPreferences** (WebPreferences) - Optional - Settings of web page's features
  - **webContents** (WebContents) - Optional - If present, the given WebContents will be adopted by the WebContentsView. A WebContents may only be presented in one WebContentsView at a time

### Request Example
```js
const { BaseWindow, WebContentsView } = require('electron')

const win = new BaseWindow({ width: 800, height: 400 })
const view = new WebContentsView({
  webPreferences: {
    nodeIntegration: false
  }
})
win.contentView.addChildView(view)
```

### Response
#### Success Response
- **WebContentsView** (Object) - A new WebContentsView instance with inherited View properties and WebContents property
```

--------------------------------

### app.getVersion()

Source: https://github.com/electron/electron/wiki/app

Returns the version string of the current application bundle or executable.

```APIDOC
## app.getVersion()

### Description
Returns the version of current bundle or executable.

### Method
GET

### Endpoint
app.getVersion()

### Parameters
None

### Return Value
- (String) - The version string

### Usage Example
```javascript
var version = app.getVersion();
console.log('App version:', version);
```
```

--------------------------------

### Set up NSTableView columns and delegates in Objective-C

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

Initializes two table columns (text and date) with specified widths and titles, then configures the table view's data source and delegate. The table is added to a scroll view for display.

```objective-c
NSTableColumn *textColumn = [[NSTableColumn alloc] initWithIdentifier:@"text"];
    [textColumn setWidth:240];
    [textColumn setTitle:@"Todo"];
    [_tableView addTableColumn:textColumn];

    // Add a column for the date
    NSTableColumn *dateColumn = [[NSTableColumn alloc] initWithIdentifier:@"date"];
    [dateColumn setWidth:100];
    [dateColumn setTitle:@"Date"];
    [_tableView addTableColumn:dateColumn];

    // Set the table's delegate and data source
    [_tableView setDataSource:self];
    [_tableView setDelegate:self];

    // Add the table to the scroll view
    [scrollView setDocumentView:_tableView];
```

--------------------------------

### Open Hidden Window with window.open in JavaScript

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/window-open-hide.html

Demonstrates opening a window with the 'show=no' feature to prevent it from being displayed immediately. Includes logic to check if the window reference is valid or null, which is useful for verifying if the window was successfully created.

```javascript
var w = window.open('http://host', '', 'show=no');
if (w == null) {
  console.log('null');
} else {
  console.log('window');
}
```

--------------------------------

### process.getCreationTime()

Source: https://github.com/electron/electron/blob/main/docs/api/process.md

Returns the creation time of the application in milliseconds since epoch.

```APIDOC
## process.getCreationTime()\n\n### Description\nIndicates the creation time of the application. Returns the number of milliseconds since epoch, or null if the information is unavailable.\n\n### Method\nprocess.getCreationTime()\n\n### Response\n#### Success Response\n- **creationTime** (number | null) - The number of milliseconds since epoch, or null if unavailable.
```

--------------------------------

### win.minimize()

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Minimizes the window. On supported platforms, the window is shown in the Dock.

```APIDOC
### `win.minimize()`

Minimizes the window. On some platforms the minimized window will be shown in the Dock.
```

--------------------------------

### JavaScript: Send 'Ready' Signal to Opener Window

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/window-open-postMessage.html

This JavaScript snippet shows how a child window can send a simple 'ready' message to its opener. This is often used to signal that the child window has loaded and is prepared to receive or send further communications. The `*` target origin allows communication with any opener, suitable for Electron's inter-window scenarios.

```javascript
window.opener.postMessage("ready", "*")
```

--------------------------------

### nativeImage.createThumbnailFromPath(path, size)

Source: https://github.com/electron/electron/blob/main/docs/api/native-image.md

Creates a thumbnail preview image from a file path.

```APIDOC
## nativeImage.createThumbnailFromPath(path, size)

### Description
Creates a thumbnail preview image from a file path.

### Method
`nativeImage.createThumbnailFromPath(path, size)`

### Parameters
- **path** (string) - Required - Path to a file that we intend to construct a thumbnail out of.
- **size** ([Size](structures/size.md)) - Required - The desired width and height (positive numbers) of the thumbnail.

### Returns
- (`Promise<NativeImage>`) - Fulfilled with the file's thumbnail preview image, which is a [NativeImage](native-image.md).

### Notes
Windows implementation will ignore `size.height` and scale the height according to `size.width`.
```

--------------------------------

### BaseWindowConstructorOptions Object Definition

Source: https://github.com/electron/electron/blob/main/docs/api/structures/base-window-options.md

This object defines the configuration options available when creating a new Electron browser window. These options control various aspects of the window's appearance and behavior.

```APIDOC
## BaseWindowConstructorOptions Object

### Description
This object defines the configuration options available when creating a new Electron browser window. These options control various aspects of the window's appearance and behavior, such as size, position, resizability, and more.

### Properties
- **width** (Integer, optional) - Window's width in pixels. Default is `800`.
- **height** (Integer, optional) - Window's height in pixels. Default is `600`.
- **x** (Integer, optional) - (**required** if y is used) Window's left offset from screen. Default is to center the window.
- **y** (Integer, optional) - (**required** if x is used) Window's top offset from screen. Default is to center the window.
- **useContentSize** (boolean, optional) - The `width` and `height` would be used as web page's size, which means the actual window's size will include window frame's size and be slightly larger. Default is `false`.
- **center** (boolean, optional) - Show window in the center of the screen. Default is `false`.
- **minWidth** (Integer, optional) - Window's minimum width. Default is `0`.
- **minHeight** (Integer, optional) - Window's minimum height. Default is `0`.
- **maxWidth** (Integer, optional) - Window's maximum width. Default is no limit.
- **maxHeight** (Integer, optional) - Window's maximum height. Default is no limit.
- **resizable** (boolean, optional) - Whether window is resizable. Default is `true`.
- **movable** (boolean, optional) _macOS_ _Windows_ - Whether window is movable. This is not implemented on Linux. Default is `true`.
- **minimizable** (boolean, optional) _macOS_ _Windows_ - Whether window is minimizable. This is not implemented on Linux. Default is `true`.
- **maximizable** (boolean, optional) _macOS_ _Windows_ - Whether window is maximizable. This is not implemented on Linux. Default is `true`.
- **closable** (boolean, optional) _macOS_ _Windows_ - Whether window is closable. This is not implemented on Linux. Default is `true`.
- **focusable** (boolean, optional) - Whether the window can be focused. Default is `true`. On Windows setting `focusable: false` also implies setting `skipTaskbar: true`. On Linux setting `focusable: false` makes the window stop interacting with wm, so the window will always stay on top in all workspaces.
- **alwaysOnTop** (boolean, optional) - Whether the window should always stay on top of other windows. Default is `false`. Not supported on Wayland (Linux).
- **fullscreen** (boolean, optional) - Whether the window should show in fullscreen. When explicitly set to `false` the fullscreen button will be hidden or disabled on macOS. Default is `false`.
- **fullscreenable** (boolean, optional) - Whether the window can be put into fullscreen mode. On macOS, also whether the maximize/zoom button should toggle full screen mode or maximize window. Default is `true`.
- **simpleFullscreen** (boolean, optional) _macOS_ - Use pre-Lion fullscreen on macOS. Default is `false`.
- **skipTaskbar** (boolean, optional) _macOS_ _Windows_ - Whether to show the window in taskbar. Default is `false`.
- **hiddenInMissionControl** (boolean, optional) _macOS_ - Whether window should be hidden when the user toggles into mission control.
- **kiosk** (boolean, optional) - Whether the window is in kiosk mode. Default is `false`.
- **name** (string, optional) - A unique identifier for the window, used internally by Electron to enable features such as state persistence. Each window must have a distinct name. It can only be reused after the corresponding window has been destroyed. An error is thrown if the name is already in use. This is not the visible title shown to users on the title bar.
- **windowStatePersistence** ([WindowStatePersistence](window-state-persistence.md) | boolean, optional) - Configures or enables the persistence of window state (position, size, maximized state, etc.) across application restarts. Has no effect if window `name` is not provided. Automatically disabled when there is no available display. _Experimental_
- **title** (string, optional) - Default window title. Default is `"Electron"`. If the HTML tag `<title>` is defined in the HTML file loaded by `loadURL()`, this property will be ignored.
- **icon** ([NativeImage](../native-image.md) | string, optional) - The window icon. On Windows it is recommended to use `ICO` icons to get best visual effects, you can also leave it undefined so the executable's icon will be used.
- **show** (boolean, optional) - Whether window should be shown when created. Default is `true`.
- **frame** (boolean, optional) - Specify `false` to create a [frameless window](../../tutorial/custom-window-styles.md#frameless-windows). Default is `true`.
- **parent** (BaseWindow, optional) - Specify parent window. Default is `null`.
- **modal** (boolean, optional) - Whether this is a modal window. This only works when the window is a child window. Default is `false`.
- **acceptFirstMouse** (boolean, optional) _macOS_ - Whether clicking an inactive window will also click through to the web contents. Default is `false` on macOS. This option is not configurable on other platforms.
- **disableAutoHideCursor** (boolean, optional) - Whether to hide cursor when typing. Default is `false`.
```

--------------------------------

### BrowserWindow Instance Methods - Window Lifecycle

Source: https://github.com/electron/electron/wiki/browser-window

Methods for controlling the window lifecycle including closing, destroying, and managing window focus state.

```APIDOC
## BrowserWindow Instance Methods - Lifecycle

### BrowserWindow.destroy()

**Description:**
Destroy the window and free the memory without closing it. Usually you should always call `Window.close()` to close the window, which will emit `beforeunload` and `unload` events for DOM. Only use `Window.destroy()` when the window gets into a very bad state and you want to force closing it.

**Method:**
DELETE

**Response:**
Void

---

### BrowserWindow.close()

**Description:**
Try to close the window, this has the same effect as user manually clicking the close button of the window. The web page may cancel the close though.

**Method:**
POST

**Response:**
Void

---

### BrowserWindow.focus()

**Description:**
Focus on the window.

**Method:**
POST

**Response:**
Void

---

### BrowserWindow.isFocused()

**Description:**
Returns whether the window is focused.

**Method:**
GET

**Response:**
- **Returns** (Boolean) - True if the window is focused, false otherwise
```

--------------------------------

### VCLinkerTool Settings in binding.gyp

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Configures Visual C++ linker settings within `binding.gyp` to generate debug information, which is crucial for source-level debugging and obtaining human-readable stack traces in case of addon crashes.

```json
"VCLinkerTool": {
  "GenerateDebugInformation": "true"
}
```

--------------------------------

### Expose API from Preload to Renderer using contextBridge

Source: https://github.com/electron/electron/blob/main/docs/api/context-bridge.md

Demonstrates how to use contextBridge.exposeInMainWorld to safely expose an API from an isolated preload script to the renderer's main world. The preload script requires electron module and exposes an object with a doThing method that communicates via ipcRenderer. The renderer can then access this API through window.electron.

```javascript
// Preload (Isolated World)
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    doThing: () => ipcRenderer.send('do-a-thing')
  }
)
```

```javascript
// Renderer (Main World)

window.electron.doThing()
```

--------------------------------

### Event: 'resume'

Source: https://github.com/electron/electron/blob/main/docs/api/power-monitor.md

Emitted when system is resuming.

```APIDOC
## Event: 'resume'

### Description
Emitted when system is resuming.

### Method
Event

### Endpoint
'resume'

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(Not applicable)

### Response
#### Success Response (Event)
(No explicit return value, event listener)

#### Response Example
(Not applicable)
```

--------------------------------

### Visualize patch system flow

Source: https://github.com/electron/electron/blob/main/CLAUDE.md

Diagram showing the relationship between patch files, the sync process, and target repository commits.

```text
patches/{target}/*.patch  →  [e sync --3]  →  target repo commits
                          ←  [e patches]   ←
```

--------------------------------

### POST /BrowserWindow.flashFrame

Source: https://github.com/electron/electron/wiki/browser-window

Flashes the window to attract the user's attention.

```APIDOC
## POST /BrowserWindow.flashFrame

### Description
Flashes the window to attract user's attention.

### Method
POST

### Endpoint
/BrowserWindow.flashFrame

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
(None)

#### Response Example
(None)
```

--------------------------------

### Partial Window Procedure (WM_COMMAND Handling) in C++

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

This snippet shows a fragment of a WindowProc function, specifically handling the WM_COMMAND message. It demonstrates retrieving text from an edit control and the date from a date picker when an 'Add' button is clicked.

```cpp
  LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
  {
    switch (uMsg)
    {
      case WM_COMMAND:
      {
        HWND hListBox = GetDlgItem(hwnd, 3);
        int cmd = LOWORD(wParam);

        switch (cmd)
        {
          case 2: // Add button
          {
            wchar_t buffer[256];
            GetDlgItemTextW(hwnd, 1, buffer, 256);

            if (wcslen(buffer) > 0)
            {
              SYSTEMTIME st;
              HWND hDatePicker = GetDlgItem(hwnd, 4);
              DateTime_GetSystemtime(hDatePicker, &st);

```

--------------------------------

### shell.openItem(fullPath)

Source: https://github.com/electron/electron/wiki/Shell

Opens the specified file in the desktop's default manner (e.g., opening a .txt file in the default text editor).

```APIDOC
## shell.openItem(fullPath)

### Description
Open the given file in the desktop's default manner.

### Method
Function Call

### Endpoint
shell.openItem(fullPath)

### Parameters
#### Arguments
- **fullPath** (String) - Required - The full path to the file.

### Request Example
```javascript
const { shell } = require('electron');
shell.openItem('/path/to/file.txt');
```
```

--------------------------------

### Configure Electron BrowserWindow to Load Preload Script (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/tutorial/process-model.md

This code snippet demonstrates how to configure an Electron `BrowserWindow` instance to load a preload script. The `preload` option within `webPreferences` specifies the path to the script that will execute before the web content loads, enabling access to Node.js APIs in a controlled environment.

```js
const { BrowserWindow } = require('electron')
// ...
const win = new BrowserWindow({
  webPreferences: {
    preload: 'path/to/preload.js'
  }
})
// ...
```

--------------------------------

### Enable sandbox globally

Source: https://github.com/electron/electron/blob/main/docs/tutorial/sandbox.md

Force sandboxing for all renderer processes. This API must be called before the app's ready event and overrides any sandbox: false configurations.

```javascript
app.enableSandbox()
app.whenReady().then(() => {
  // any sandbox:false calls are overridden since `app.enableSandbox()` was called.
  const win = new BrowserWindow()
  win.loadURL('https://google.com')
})
```

--------------------------------

### Create and Open Electron App in VSCode

Source: https://github.com/electron/electron/blob/main/docs/tutorial/debugging-vscode.md

Initialize a new Electron application using create-electron-app and open it in VSCode. This command creates a basic Electron project structure and launches the VSCode editor in the project directory.

```shell
$ npx create-electron-app@latest my-app
$ code my-app
```

--------------------------------

### win.setContentSize(width, height[, animate])

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Resizes the window's client area (e.g. the web page) to the specified width and height. Supports optional animation on macOS.

```APIDOC
## `win.setContentSize(width, height[, animate])`

### Description
Resizes the window's client area (e.g. the web page) to `width` and `height`.

### Parameters
- `width` (Integer) - The target width of the client area.
- `height` (Integer) - The target height of the client area.
- `animate` (boolean, optional) - *macOS* Whether to animate the transition.
```

--------------------------------

### BrowserWindow.fromWebContents(webContents)

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Finds and returns the BrowserWindow instance that owns the specified WebContents.

```APIDOC
### `BrowserWindow.fromWebContents(webContents)`

#### Description
Finds the window that owns the given `webContents`.

#### Parameters
- **webContents** (WebContents) - The webContents instance.

#### Returns
- `BrowserWindow | null` - The window that owns the given `webContents` or `null` if the contents are not owned by a window.
```

--------------------------------

### Open Local File with Node Integration in Electron

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/window-opener-no-node-integration.html

Opens a local file URL in a new window with nodeIntegration enabled and forwards messages back to the opener. Ensure the windowUrl is properly sanitized before use.

```javascript
var windowUrl = decodeURIComponent(window.location.search.substring(3)) var opened = window.open('file://' + windowUrl, '', 'nodeIntegration=yes,show=no') window.addEventListener('message', function (event) { try { opened.close() } finally { window.opener.postMessage(event.data, '\*') } })
```

--------------------------------

### <webview>.pasteAndMatchStyle()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Executes the editing command pasteAndMatchStyle in the page.

```APIDOC
## `<webview>.pasteAndMatchStyle()`

### Description
Executes editing command `pasteAndMatchStyle` in page.
```

--------------------------------

### Update GPU info retrieval

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Note that getGPUInfo('complete') now behaves like 'basic' on macOS.

```js
app.getGPUInfo('complete')
// Now behaves the same with `basic` on macOS
app.getGPUInfo('basic')
```

--------------------------------

### Event: 'context-menu'

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Emitted when there is a new context menu that needs to be handled on the webview element. Provides detailed parameters about the target node, media, selection, and available edit actions.

```APIDOC
## Event: 'context-menu'

### Description
Emitted when there is a new context menu that needs to be handled.

### Event Parameters

- **params** (Object)
  - **x** (Integer) - x coordinate.
  - **y** (Integer) - y coordinate.
  - **linkURL** (string) - URL of the link that encloses the node the context menu was invoked on.
  - **linkText** (string) - Text associated with the link. May be an empty string if the contents of the link are an image.
  - **pageURL** (string) - URL of the top level page that the context menu was invoked on.
  - **frameURL** (string) - URL of the subframe that the context menu was invoked on.
  - **srcURL** (string) - Source URL for the element that the context menu was invoked on. Elements with source URLs are images, audio and video.
  - **mediaType** (string) - Type of the node the context menu was invoked on. Can be `none`, `image`, `audio`, `video`, `canvas`, `file` or `plugin`.
  - **hasImageContents** (boolean) - Whether the context menu was invoked on an image which has non-empty contents.
  - **isEditable** (boolean) - Whether the context is editable.
  - **selectionText** (string) - Text of the selection that the context menu was invoked on.
  - **titleText** (string) - Title text of the selection that the context menu was invoked on.
  - **altText** (string) - Alt text of the selection that the context menu was invoked on.
  - **suggestedFilename** (string) - Suggested filename to be used when saving file through 'Save Link As' option of context menu.
  - **selectionRect** (Rectangle) - Rect representing the coordinates in the document space of the selection.
  - **selectionStartOffset** (number) - Start position of the selection text.
  - **referrerPolicy** (Referrer) - The referrer policy of the frame on which the menu is invoked.
  - **misspelledWord** (string) - The misspelled word under the cursor, if any.
  - **dictionarySuggestions** (string[]) - An array of suggested words to show the user to replace the `misspelledWord`. Only available if there is a misspelled word and spellchecker is enabled.
  - **frameCharset** (string) - The character encoding of the frame on which the menu was invoked.
  - **formControlType** (string) - The source that the context menu was invoked on. Possible values include `none`, `button-button`, `field-set`, `input-button`, `input-checkbox`, `input-color`, `input-date`, `input-datetime-local`, `input-email`, `input-file`, `input-hidden`, `input-image`, `input-month`, `input-number`, `input-password`, `input-radio`, `input-range`, `input-reset`, `input-search`, `input-submit`, `input-telephone`, `input-text`, `input-time`, `input-url`, `input-week`, `output`, `reset-button`, `select-list`, `select-multiple`, `select-one`, `submit-button`, and `text-area`.
  - **spellcheckEnabled** (boolean) - If the context is editable, whether or not spellchecking is enabled.
  - **menuSourceType** (string) - Input source that invoked the context menu. Can be `none`, `mouse`, `keyboard`, `touch`, `touchMenu`, `longPress`, `longTap`, `touchHandle`, `stylus`, `adjustSelection`, or `adjustSelectionReset`.
  - **mediaFlags** (Object) - The flags for the media element the context menu was invoked on.
    - **inError** (boolean) - Whether the media element has crashed.
    - **isPaused** (boolean) - Whether the media element is paused.
    - **isMuted** (boolean) - Whether the media element is muted.
    - **hasAudio** (boolean) - Whether the media element has audio.
    - **isLooping** (boolean) - Whether the media element is looping.
    - **isControlsVisible** (boolean) - Whether the media element's controls are visible.
    - **canToggleControls** (boolean) - Whether the media element's controls are toggleable.
    - **canPrint** (boolean) - Whether the media element can be printed.
    - **canSave** (boolean) - Whether or not the media element can be downloaded.
    - **canShowPictureInPicture** (boolean) - Whether the media element can show picture-in-picture.
    - **isShowingPictureInPicture** (boolean) - Whether the media element is currently showing picture-in-picture.
    - **canRotate** (boolean) - Whether the media element can be rotated.
    - **canLoop** (boolean) - Whether the media element can be looped.
  - **editFlags** (Object) - These flags indicate whether the renderer believes it is able to perform the corresponding action.
    - **canUndo** (boolean) - Whether the renderer believes it can undo.
    - **canRedo** (boolean) - Whether the renderer believes it can redo.
    - **canCut** (boolean) - Whether the renderer believes it can cut.
    - **canCopy** (boolean) - Whether the renderer believes it can copy.
    - **canPaste** (boolean) - Whether the renderer believes it can paste.
    - **canDelete** (boolean) - Whether the renderer believes it can delete.
    - **canSelectAll** (boolean) - Whether the renderer believes it can select all.
    - **canEditRichly** (boolean) - Whether the renderer believes it can edit text richly.
```

--------------------------------

### win.center()

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Positions the window at the center of the screen.

```APIDOC
## `win.center()`

### Description
Moves window to the center of the screen.
```

--------------------------------

### contents.loadFile(filePath[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents.md

Loads a local HTML file in the window relative to the root of the application.

```APIDOC
## `contents.loadFile(filePath[, options])`

### Description
Loads the given file in the window. `filePath` should be a path to an HTML file relative to the root of your application.

### Parameters
- **filePath** (`string`) - Required. Path to the HTML file relative to app root.
- **options** (`Object`) - Optional.
  - **query** (`Record<string, string>`) - Optional. Passed to `url.format()`.
  - **search** (`string`) - Optional. Passed to `url.format()`.
  - **hash** (`string`) - Optional. Passed to `url.format()`.

### Returns
`Promise<void>` - Resolves when the page has finished loading and rejects if the page fails to load.

### Example
```js
const win = new BrowserWindow()
win.loadFile('src/index.html')
```
```

--------------------------------

### Write custom format to clipboard

Source: https://github.com/electron/electron/blob/main/docs/api/clipboard.md

Demonstrates writing a custom web format to the system clipboard using ClipboardItem and Blob.

```js
const { clipboard, ClipboardItem } = require('electron')

async function writeClipboard () {
  await clipboard.write([
    new ClipboardItem({
      'web application/x.my-app-clip': new Blob(['arbitrary payload'])
    })
  ])
}

writeClipboard()
```

--------------------------------

### Observe macOS display repositioning to eliminate gaps (JavaScript)

Source: https://github.com/electron/electron/blob/main/docs/development/multi-monitor-testing.md

Shows how macOS snaps displays together to eliminate gaps between them, adjusting the requested position.

```js
// Requested: gap between displays
const display1 = virtualDisplay.create({ width: 1920, height: 1080, x: 0, y: 0 })
const display2 = virtualDisplay.create({ width: 1920, height: 1080, x: 2000, y: 0 })
// macOS snaps display2 to x: 1920 (eliminates 80px gap)
```

--------------------------------

### Swift: Basic `SwiftCode` Class Structure and Callbacks

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-swift-macos.md

This snippet defines the foundational `SwiftCode` class, enabling Objective-C interoperability. It includes a `helloWorld` method, setters for todo operation callbacks, and a utility for JSON encoding Swift objects.

```swift
import Foundation
import SwiftUI

@objc
public class SwiftCode: NSObject {
    private static var windowController: NSWindowController?
    private static var todoAddedCallback: ((String) -> Void)?
    private static var todoUpdatedCallback: ((String) -> Void)?
    private static var todoDeletedCallback: ((String) -> Void)?

    @objc
    public static func helloWorld(_ input: String) -> String {
        return "Hello from Swift! You said: \(input)"
    }

    @objc
    public static func setTodoAddedCallback(_ callback: @escaping (String) -> Void) {
        todoAddedCallback = callback
    }

    @objc
    public static func setTodoUpdatedCallback(_ callback: @escaping (String) -> Void) {
        todoUpdatedCallback = callback
    }

    @objc
    public static func setTodoDeletedCallback(_ callback: @escaping (String) -> Void) {
        todoDeletedCallback = callback
    }

    private static func encodeToJson<T: Encodable>(_ item: T) -> String? {
        let encoder = JSONEncoder()

        // Encode date as milliseconds since 1970, which is what the JS side expects
        encoder.dateEncodingStrategy = .custom { date, encoder in
            let milliseconds = Int64(date.timeIntervalSince1970 * 1000)
            var container = encoder.singleValueContainer()
            try container.encode(milliseconds)
        }

        guard let jsonData = try? encoder.encode(item),
              let jsonString = String(data: jsonData, encoding: .utf8) else {
            return nil
        }
        return jsonString
    }

    // More code to follow...
}
```

--------------------------------

### win.focus()

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Focuses on the window. On Linux Wayland, the desktop environment may show a notification or flash the app icon if not already focused.

```APIDOC
## win.focus()

### Description
Focuses on the window. On Wayland (Linux), the desktop environment may show a notification or flash the app icon if the window or app is not already focused.

### Signature
`win.focus()`

### Parameters
None.

### Returns
`void`
```

--------------------------------

### Configure window options with setWindowOpenHandler

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Explicitly define window options using setWindowOpenHandler instead of relying on parent window inheritance.

```javascript
webContents.setWindowOpenHandler((details) => {
  return {
    action: 'allow',
    overrideBrowserWindowOptions: {
      // ...
    }
  }
})
```

--------------------------------

### Configure macOS `plist` for Electron Custom Protocol Handling

Source: https://github.com/electron/electron/blob/main/docs/fiddles/system/protocol-handler/launch-app-from-URL-in-another-app/index.html

This XML configuration snippet is used in macOS applications to register a custom URL scheme (e.g., `electron-api-demos`). When packaging an Electron app, this `plist` entry ensures the operating system recognizes the app as a handler for the specified protocol, allowing it to be launched from web links or other applications. It's essential for the `app.setAsDefaultProtocol` functionality to work correctly on macOS.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
        <plist version="1.0">
            <dict>
                <key>CFBundleURLTypes</key>
                <array>
                    <dict>
                        <key>CFBundleURLSchemes</key>
                        <array>
                            <string>electron-api-demos</string>
                        </array>
                        <key>CFBundleURLName</key>
                        <string>Electron API Demos Protocol</string>
                    </dict>
                </array>
                <key>ElectronTeamID</key>
                <string>VEKTX9H2N7</string>
            </dict>
        </plist>
```

--------------------------------

### Create NativeImage instances from file paths

Source: https://github.com/electron/electron/blob/main/docs/api/native-image.md

Use nativeImage.createFromPath() to generate NativeImage instances before passing them to Tray or BrowserWindow. This allows for more explicit image handling and potential reuse.

```javascript
const { BrowserWindow, nativeImage, Tray } = require('electron')

const trayIcon = nativeImage.createFromPath('/Users/somebody/images/icon.png')
const appIcon = nativeImage.createFromPath('/Users/somebody/images/window.png')
const tray = new Tray(trayIcon)
const win = new BrowserWindow({ icon: appIcon })
```

--------------------------------

### process.getSystemMemoryInfo()

Source: https://github.com/electron/electron/blob/main/docs/api/process.md

Returns memory usage statistics about the entire system in Kilobytes.

```APIDOC
## process.getSystemMemoryInfo()\n\n### Description\nReturns an object giving memory usage statistics about the entire system. All statistics are reported in Kilobytes.\n\n### Method\nprocess.getSystemMemoryInfo()\n\n### Response\n#### Success Response\n- **total** (Integer) - Total physical memory available to the system.\n- **free** (Integer) - Memory not being used by applications or disk cache.\n- **available** (Integer) - Linux: Kernel's estimate of memory available for allocation.\n- **fileBacked** (Integer) - macOS: Memory paged out to storage.\n- **purgeable** (Integer) - macOS: Memory marked as purgeable.\n- **swapTotal** (Integer) - Windows/Linux: Total swap memory available.\n- **swapFree** (Integer) - Windows/Linux: Free swap memory available.
```

--------------------------------

### ses.downloadURL(url[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/session.md

Initiates a file download for the resource at the specified URL without performing origin security checks.

```APIDOC
### `ses.downloadURL(url[, options])`

#### Description
Initiates a download of the resource at `url`. The API will generate a `DownloadItem` that can be accessed with the `will-download` event. Note: This does not perform any security checks that relate to a page's origin.

#### Parameters
- **url** (`string`) - URL of the resource to download.
- **options** (`Object`, optional)
  - **headers** (`Record<string, string>`, optional) - HTTP request headers.

#### Returns
`void`
```

--------------------------------

### Run Built Electron Executable

Source: https://github.com/electron/electron/blob/main/docs/development/build-instructions-gn.md

Execute the compiled Electron application from the testing build directory. The command varies slightly depending on the operating system.

```sh
./out/Testing/Electron.app/Contents/MacOS/Electron
```

```sh
./out/Testing/electron.exe
```

```sh
./out/Testing/electron
```

--------------------------------

### Create a child window using BaseWindow in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Sets the parent option when instantiating a BaseWindow so that the child window always displays on top of the parent.

```javascript
const { BaseWindow } = require('electron')

const parent = new BaseWindow()
const child = new BaseWindow({ parent })
```

--------------------------------

### Migrate File.path usage to webUtils.getPathForFile

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Replace direct access to the nonstandard File.path property with the secure webUtils.getPathForFile method via contextBridge.

```javascript
// Before (renderer)

const file = document.querySelector('input[type=file]').files[0]
alert(`Uploaded file path was: ${file.path}`)
```

```javascript
// After (renderer)

const file = document.querySelector('input[type=file]').files[0]
electron.showFilePath(file)

// (preload)
const { contextBridge, webUtils } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  showFilePath (file) {
    // It's best not to expose the full file path to the web content if
    // possible.
    const path = webUtils.getPathForFile(file)
    alert(`Uploaded file path was: ${path}`)
  }
})
```

--------------------------------

### session.fromPath(path[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/session.md

Retrieves or creates a Session instance from the specified absolute file path. Throws an error if the path is not absolute or is an empty string.

```APIDOC
## session.fromPath(path[, options])

### Description
Returns a `Session` instance from the absolute path specified by the `path` string. If an existing `Session` shares the path, it is returned; otherwise, a new `Session` instance is created using `options`. Throws an error if the path is not an absolute path or is empty.

### Parameters
- **path** (string) - Required - Absolute path string for the session.
- **options** (Object) - Optional
  - **cache** (boolean) - Optional - Whether to enable cache. Default is `true` unless the `--disable-http-cache` switch is used.

### Returns
- **Session** - A session instance matching the specified path.
```

--------------------------------

### <webview>.isLoading()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Checks whether the guest page is actively loading resources.

```APIDOC
### `<webview>.isLoading()`

#### Description
Returns whether the guest page is still loading resources.

#### Return Value
- Returns `boolean` - Whether guest page is still loading resources.
```

--------------------------------

### Open Dialog for Multiple File Selection in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/dialog.md

Use this snippet to display a native open file dialog that allows users to select multiple files. It requires the `dialog` module from Electron.

```js
const { dialog } = require('electron')

console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
```

--------------------------------

### Execute Native Addon Test

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron.md

Shell command to run the test script and verify native addon functionality. Outputs the result from the helloWorld function to confirm proper compilation and binding.

```shell
node test.js
```

--------------------------------

### win.setFullScreen(flag)

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Sets whether the window should enter or leave fullscreen mode. Note that transitions occur asynchronously on macOS.

```APIDOC
### `win.setFullScreen(flag)`

Sets whether the window should be in fullscreen mode.

#### Parameters
- **flag** (`boolean`) - Required - Whether to enable fullscreen mode.

> **Note:** On macOS, fullscreen transitions take place asynchronously. If further actions depend on the fullscreen state, use the 'enter-full-screen' or 'leave-full-screen' events.
```

--------------------------------

### Handle Extension Ready Event

Source: https://github.com/electron/electron/blob/main/docs/api/extensions-api.md

Listens for the 'extension-ready' event emitted after an extension is fully loaded and all necessary browser state is initialized to support the extension's background page.

```javascript
extensions.on('extension-ready', (event, extension) => {
  // Extension is fully ready to use
})
```

--------------------------------

### Run Electron Tests with Python

Source: https://github.com/electron/electron/wiki/Build-Instructions-(Windows)

This command executes the Python test script to run the automated tests for the Electron project. It verifies the functionality and stability of the built application, ensuring changes haven't introduced regressions.

```bash
$ python script/test.py
```

--------------------------------

### <webview>.executeJavaScript(code[, userGesture])

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Evaluates JavaScript in the guest page context with an optional user gesture flag.

```APIDOC
### `<webview>.executeJavaScript(code[, userGesture])`

#### Description
Evaluates `code` in page. If `userGesture` is set, it will create the user gesture context in the page. HTML APIs like `requestFullScreen`, which require user action, can take advantage of this option for automation.

#### Parameters
- **code** (`string`) - Required. JavaScript code to evaluate.
- **userGesture** (`boolean`) - Optional. Default `false`. Sets user gesture context.

#### Return Value
- Returns `Promise<any>` - A promise that resolves with the result of the executed code or is rejected if the result of the code is a rejected promise.
```

--------------------------------

### Communicate with Opener Window in Electron

Source: https://github.com/electron/electron/blob/main/spec/fixtures/pages/window-opener.html

This snippet demonstrates how a child window can send a message back to its opener. It uses `window.postMessage` for web-standard communication if an opener exists, otherwise it falls back to Electron's `ipcRenderer`.

```javascript
if (window.opener !== null) window.opener.postMessage(typeof window.opener, '*'); else require('electron').ipcRenderer.send('opener', window.opener);
```

--------------------------------

### Complete src/cpp_addon.cc N-API Addon Implementation

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

This snippet provides the full C++ code for `src/cpp_addon.cc`, demonstrating how to create an N-API addon that wraps C++ functionality, defines methods callable from JavaScript, and implements thread-safe callbacks for asynchronous events.

```cpp
#include <napi.h>
#include <string>
#include "cpp_code.h"

class CppAddon : public Napi::ObjectWrap<CppAddon>
{
public:
  static Napi::Object Init(Napi::Env env, Napi::Object exports)
  {
    Napi::Function func = DefineClass(env, "CppLinuxAddon", {
      InstanceMethod("helloWorld", &CppAddon::HelloWorld),
      InstanceMethod("helloGui", &CppAddon::HelloGui),
      InstanceMethod("on", &CppAddon::On),
      InstanceMethod("destroy", &CppAddon::Destroy)
    });

    Napi::FunctionReference *constructor = new Napi::FunctionReference();
    *constructor = Napi::Persistent(func);
    env.SetInstanceData(constructor);

    exports.Set("CppLinuxAddon", func);
    return exports;
  }

  struct CallbackData
  {
    std::string eventType;
    std::string payload;
    CppAddon *addon;
  };

  CppAddon(const Napi::CallbackInfo &info)
      : Napi::ObjectWrap<CppAddon>(info),
        env_(info.Env()),
        emitter(Napi::Persistent(Napi::Object::New(info.Env()))),
        callbacks(Napi::Persistent(Napi::Object::New(info.Env()))),
        tsfn_(nullptr)
  {
    napi_status status = napi_create_threadsafe_function(
        env_,
        nullptr,
        nullptr,
        Napi::String::New(env_, "CppCallback"),
        0,
        1,
        nullptr,
        nullptr,
        this,
        [](napi_env env, napi_value js_callback, void *context, void *data)
        {
          auto *callbackData = static_cast<CallbackData *>(data);
          if (!callbackData)
            return;

          Napi::Env napi_env(env);
          Napi::HandleScope scope(napi_env);

          auto addon = static_cast<CppAddon *>(context);
          if (!addon)
          {
            delete callbackData;
            return;
          }

          try
          {
            auto callback = addon->callbacks.Value().Get(callbackData->eventType).As<Napi::Function>();
            if (callback.IsFunction())
            {
              callback.Call(addon->emitter.Value(), {Napi::String::New(napi_env, callbackData->payload)});
            }
          }
          catch (...)
          {
          }

          delete callbackData;
        },
        &tsfn_);

    if (status != napi_ok)
    {
      Napi::Error::New(env_, "Failed to create threadsafe function").ThrowAsJavaScriptException();
      return;
    }

    // Set up the callbacks here
    auto makeCallback = [this](const std::string &eventType)
    {
      return [this, eventType](const std::string &payload)
      {
        if (tsfn_ != nullptr)
        {
          auto *data = new CallbackData{
              eventType,
              payload,
              this};
          napi_call_threadsafe_function(tsfn_, data, napi_tsfn_blocking);
        }
      };
    };

    cpp_code::setTodoAddedCallback(makeCallback("todoAdded"));
    cpp_code::setTodoUpdatedCallback(makeCallback("todoUpdated"));
    cpp_code::setTodoDeletedCallback(makeCallback("todoDeleted"));
  }

  ~CppAddon()
  {
    if (tsfn_ != nullptr)
    {
      napi_release_threadsafe_function(tsfn_, napi_tsfn_release);
      tsfn_ = nullptr;
    }
  }

private:
  Napi::Env env_;
  Napi::ObjectReference emitter;
  Napi::ObjectReference callbacks;
  napi_threadsafe_function tsfn_;

  Napi::Value HelloWorld(const Napi::CallbackInfo &info)
  {
    Napi::Env env = info.Env();

    if (info.Length() < 1 || !info[0].IsString())
    {
      Napi::TypeError::New(env, "Expected string argument").ThrowAsJavaScriptException();
      return env.Null();
    }

    std::string input = info[0].As<Napi::String>();
    std::string result = cpp_code::hello_world(input);

    return Napi::String::New(env, result);
  }

  void HelloGui(const Napi::CallbackInfo &info)
  {
    cpp_code::hello_gui();
  }

  Napi::Value On(const Napi::CallbackInfo &info)
  {
    Napi::Env env = info.Env();

    if (info.Length() < 2 || !info[0].IsString() || !info[1].IsFunction())
    {
      Napi::TypeError::New(env, "Expected (string, function) arguments").ThrowAsJavaScriptException();
      return env.Undefined();
    }

    callbacks.Value().Set(info[0].As<Napi::String>(), info[1].As<Napi::Function>());
    return env.Undefined();
  }

  Napi::Value Destroy(const Napi::CallbackInfo &info)
  {
    callbacks.Reset();
    emitter.Reset();

    if (tsfn_ != nullptr)
    {
      napi_release_threadsafe_function(tsfn_, napi_tsfn_abort);
      tsfn_ = nullptr;
    }

    return info.Env().Undefined();
  }
};

Napi::Object Init(Napi::Env env, Napi::Object exports)
{
  return CppAddon::Init(env, exports);
}

NODE_API_MODULE(cpp_addon, Init)
```

--------------------------------

### Create Electron Main Process Window with Connection Status

Source: https://github.com/electron/electron/blob/main/docs/tutorial/online-offline-events.md

Main process file that initializes the Electron application and creates a BrowserWindow displaying the connection status indicator. Handles app lifecycle events including ready, activate, and window-all-closed.

```javascript
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const onlineStatusWindow = new BrowserWindow()

  onlineStatusWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

--------------------------------

### app.getSystemLocale()

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Returns the current system locale from the underlying OS. Must be called after the ready event is emitted.

```APIDOC
## app.getSystemLocale()

### Description
Returns the current system locale. On Windows and Linux, it is fetched using Chromium's `i18n` library; on macOS, `[NSLocale currentLocale]` is used. Must be called after the `ready` event is emitted.

### Parameters
None

### Return Value
- `string` - The current system locale.
```

--------------------------------

### Handle Drag Operation in Main Process

Source: https://github.com/electron/electron/blob/main/docs/fiddles/native-ui/drag-and-drop/index.html

Listens for the drag request and executes the startDrag method with the specified file path and icon.

```javascript
const {ipcMain} = require('electron') const path = require('path')  ipcMain.on('ondragstart', (event, filepath) => {   const iconName = 'codeIcon.png'   event.sender.startDrag({     file: filepath,     icon: path.join(__dirname, iconName)   }) })
```

--------------------------------

### POST /BrowserWindow.center

Source: https://github.com/electron/electron/wiki/browser-window

Moves the window to the center of the screen.

```APIDOC
## POST /BrowserWindow.center

### Description
Moves window to the center of the screen.

### Method
POST

### Endpoint
/BrowserWindow.center

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
(None)

#### Response Example
(None)
```

--------------------------------

### Add UI Controls to C++ Window

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Creates DPI-aware UI elements including an edit box, date picker, button, and list box using Win32 API.

```cpp
void hello_gui() {
    // ...
    // All the code above "Controls go here!"

    // Create the modern font with DPI-aware size
    HFONT hFont = CreateFontW(
      -Scale(14, dpi),              // Height (scaled)
      0,                            // Width
      0,                            // Escapement
      0,                            // Orientation
      FW_NORMAL,                    // Weight
      FALSE,                        // Italic
      FALSE,                        // Underline
      FALSE,                        // StrikeOut
      DEFAULT_CHARSET,              // CharSet
      OUT_DEFAULT_PRECIS,           // OutPrecision
      CLIP_DEFAULT_PRECIS,          // ClipPrecision
      CLEARTYPE_QUALITY,            // Quality
      DEFAULT_PITCH | FF_DONTCARE,  // Pitch and Family
      L"Segoe UI"                   // Font face name
    );

    // Create input controls with scaled positions and sizes
    HWND hEdit = CreateWindowExW(0, WC_EDITW, L"",
      WS_CHILD | WS_VISIBLE | WS_BORDER | ES_AUTOHSCROLL,
      Scale(10, dpi), Scale(10, dpi),
      Scale(250, dpi), Scale(25, dpi),
      hwnd, (HMENU)1, GetModuleHandle(nullptr), nullptr);
    SendMessageW(hEdit, WM_SETFONT, (WPARAM)hFont, TRUE);

    // Create date picker
    HWND hDatePicker = CreateWindowExW(0, DATETIMEPICK_CLASSW, L"",
      WS_CHILD | WS_VISIBLE | DTS_SHORTDATECENTURYFORMAT,
      Scale(270, dpi), Scale(10, dpi),
      Scale(100, dpi), Scale(25, dpi),
      hwnd, (HMENU)4, GetModuleHandle(nullptr), nullptr);
    SendMessageW(hDatePicker, WM_SETFONT, (WPARAM)hFont, TRUE);

    HWND hButton = CreateWindowExW(0, WC_BUTTONW, L"Add",
      WS_CHILD | WS_VISIBLE | BS_PUSHBUTTON,
      Scale(380, dpi), Scale(10, dpi),
      Scale(50, dpi), Scale(25, dpi),
      hwnd, (HMENU)2, GetModuleHandle(nullptr), nullptr);
    SendMessageW(hButton, WM_SETFONT, (WPARAM)hFont, TRUE);

    HWND hListBox = CreateWindowExW(0, WC_LISTBOXW, L"",
      WS_CHILD | WS_VISIBLE | WS_BORDER | WS_VSCROLL | LBS_NOTIFY,
      Scale(10, dpi), Scale(45, dpi),
      Scale(460, dpi), Scale(400, dpi),
      hwnd, (HMENU)3, GetModuleHandle(nullptr), nullptr);
    SendMessageW(hListBox, WM_SETFONT, (WPARAM)hFont, TRUE);

    // Store menu handle in window's user data
    SetWindowLongPtr(hwnd, GWLP_USERDATA, (LONG_PTR)hContextMenu);

    // All the code below "Controls go here!"
    // ...
}
```

--------------------------------

### C++ Header for GTK3 GUI and Callback Definitions

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-linux.md

This header defines core functions like `hello_world` and `hello_gui`, along with callback types and setters for Todo operations. It establishes the public interface for the C++ addon.

```cpp
#pragma once
#include <string>
#include <functional>

namespace cpp_code {

std::string hello_world(const std::string& input);
void hello_gui();

// Callback function types
using TodoCallback = std::function<void(const std::string&)>;

// Callback setters
void setTodoAddedCallback(TodoCallback callback);
void setTodoUpdatedCallback(TodoCallback callback);
void setTodoDeletedCallback(TodoCallback callback);

} // namespace cpp_code
```

--------------------------------

### POST inAppPurchase.purchaseProduct

Source: https://github.com/electron/electron/blob/main/docs/api/in-app-purchase.md

Initiates a purchase for a product on the Mac App Store. Returns a promise that resolves to true if the product is valid and added to the payment queue. The transactions-updated event should be listened to before calling this method.

```APIDOC
## POST inAppPurchase.purchaseProduct

### Description
Initiates a purchase for a product on the Mac App Store. Returns a promise indicating whether the product was successfully added to the payment queue.

### Method
POST

### Signature
`inAppPurchase.purchaseProduct(productID[, opts])`

### Parameters
#### Required Parameters
- **productID** (string) - Required - The identifier of the product to purchase

#### Optional Parameters
- **opts** (Integer | Object) - Optional - Purchase options
  - **quantity** (Integer) - Optional - The number of items the user wants to purchase
  - **username** (string) - Optional - The string that associates the transaction with a user account on your service (applicationUsername)

### Request Example
```javascript
const { inAppPurchase } = require('electron');

// Simple purchase
await inAppPurchase.purchaseProduct('com.example.product');

// Purchase with quantity
await inAppPurchase.purchaseProduct('com.example.product', { quantity: 5 });

// Purchase with username
await inAppPurchase.purchaseProduct('com.example.product', { 
  quantity: 2,
  username: 'user@example.com'
});
```

### Response
#### Success Response
- **Returns** (Promise<boolean>) - Resolves to `true` if the product is valid and added to the payment queue

### Important Notes
- Listen for the `transactions-updated` event before calling this method
- This method returns a Promise (not callback-based)
- The actual transaction completion is handled through the `transactions-updated` event
```

--------------------------------

### Enable Electron Logging

Source: https://github.com/electron/electron/blob/main/docs/api/environment-variables.md

Enables Chromium's internal logging to the console by setting the ELECTRON_ENABLE_LOGGING environment variable before launching Electron.

```sh
$ export ELECTRON_ENABLE_LOGGING=true
$ electron
```

```powershell
> set ELECTRON_ENABLE_LOGGING=true
> electron
```

--------------------------------

### win.setMaximumSize(width, height)

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Sets the maximum allowable dimensions for the window.

```APIDOC
## `win.setMaximumSize(width, height)`

### Description
Sets the maximum size of window to `width` and `height`.

### Parameters
- `width` (Integer) - The maximum width.
- `height` (Integer) - The maximum height.
```

--------------------------------

### Troubleshoot Symbol Loading Issues in Windbg

Source: https://github.com/electron/electron/blob/main/docs/development/debugging-with-symbol-server.md

These Windbg commands are used for diagnosing issues when symbols fail to load. `!sym noisy` enables verbose symbol loading output, and `.reload /f electron.exe` forces a full reload of symbols for the `electron.exe` process, displaying detailed error messages.

```powershell
!sym noisy
.reload /f electron.exe
```

--------------------------------

### contents.print([options], [callback])

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents.md

Prints the window's web page. When silent is set to true, Electron picks the system default printer if deviceName is empty and uses default print settings.

```APIDOC
### Signature
`contents.print([options], [callback])`

### Description
Prints window's web page. When `silent` is set to `true`, Electron will pick the system's default printer if `deviceName` is empty and the default settings for printing.

### Parameters
- **options** (Object, optional)
  - **silent** (boolean, optional) - Don't ask user for print settings. Default is `false`.
  - **printBackground** (boolean, optional) - Prints the background color and image of the web page. Default is `false`.
  - **deviceName** (string, optional) - Set the printer device name to use. Must be the system-defined name and not the 'friendly' name, e.g. 'Brother_QL_820NWB' and not 'Brother QL-820NWB'.
  - **color** (boolean, optional) - Set whether the printed web page will be in color or grayscale. Default is `true`.
  - **margins** (Object, optional)
    - **marginType** (string, optional) - Can be `default`, `none`, `printableArea`, or `custom`. If `custom` is chosen, `top`, `bottom`, `left`, and `right` must also be specified.
    - **top** (number, optional) - The top margin of the printed web page, in pixels.
    - **bottom** (number, optional) - The bottom margin of the printed web page, in pixels.
    - **left** (number, optional) - The left margin of the printed web page, in pixels.
    - **right** (number, optional) - The right margin of the printed web page, in pixels.
  - **landscape** (boolean, optional) - Whether the web page should be printed in landscape mode. Default is `false`.
  - **scaleFactor** (number, optional) - The scale factor of the web page.
  - **pagesPerSheet** (number, optional) - The number of pages to print per page sheet.
  - **collate** (boolean, optional) - Whether the web page should be collated.
  - **copies** (number, optional) - The number of copies of the web page to print.
  - **pageRanges** (Object[], optional) - The page range to print. On macOS, only one range is honored.
    - **from** (number) - Index of the first page to print (0-based).
    - **to** (number) - Index of the last page to print (inclusive) (0-based).
  - **duplexMode** (string, optional) - Set the duplex mode of the printed web page. Can be `simplex`, `shortEdge`, or `longEdge`.
  - **dpi** (Record<string, number>, optional)
    - **horizontal** (number, optional) - The horizontal dpi.
    - **vertical** (number, optional) - The vertical dpi.
  - **header** (string, optional) - String to be printed as page header.
  - **footer** (string, optional) - String to be printed as page footer.
  - **pageSize** (string | Size, optional) - Specify page size of the printed document. Can be `A0`, `A1`, `A2`, `A3`, `A4`, `A5`, `A6`, `Legal`, `Letter`, `Tabloid` or an Object containing `height` and `width`.
  - **usePrinterDefaultPageSize** (boolean, optional) - Whether to use a given printer's default page size. Default is `false`. Cannot be combined with `pageSize`.
- **callback** (Function, optional)
  - **success** (boolean) - Indicates success of the print call.
  - **failureReason** (string) - Error description called back if the print fails (e.g., "Invalid printer settings", "Print job canceled", "Print job failed").

### Usage Example
```js
const win = new BrowserWindow()
const options = {
  silent: true,
  deviceName: 'My-Printer',
  pageRanges: [{
    from: 0,
    to: 1
  }]
}
win.webContents.print(options, (success, errorType) => {
  if (!success) console.log(errorType)
})
```
```

--------------------------------

### win.getOpacity()

Source: https://github.com/electron/electron/blob/main/docs/api/browser-window.md

Retrieves the current opacity level of the window.

```APIDOC
## win.getOpacity()

### Description
Returns the current opacity of the window.

### Return Value
- Returns `number` - between 0.0 (fully transparent) and 1.0 (fully opaque).
```

--------------------------------

### ClientRequest Constructor

Source: https://github.com/electron/electron/blob/main/docs/api/client-request.md

Creates a new ClientRequest instance for making HTTP/HTTPS requests. Accepts either a URL string or a configuration object with detailed request parameters including method, headers, session, credentials, and redirect handling.

```APIDOC
## Constructor: new ClientRequest(options)

### Description
Creates a new HTTP/HTTPS request that implements the Writable Stream interface and EventEmitter.

### Method
Constructor

### Parameters

#### Constructor Parameters
- **options** (Object | string) - Required - Either a URL string or configuration object for the request

#### Options Object Properties
- **method** (string) - Optional - HTTP request method. Defaults to GET
- **url** (string) - Optional - Request URL in absolute form with protocol scheme (http or https)
- **headers** (Record<string, string | string[]>) - Optional - Headers to send with the request
- **session** (Session) - Optional - Session instance associated with the request
- **partition** (string) - Optional - Partition name associated with the request. Defaults to empty string. Superseded by session option
- **bypassCustomProtocolHandlers** (boolean) - Optional - When true, custom protocol handlers are bypassed. Defaults to false
- **credentials** (string) - Optional - Can be 'include', 'omit', or 'same-origin'. Controls credential sending behavior
- **useSessionCookies** (boolean) - Optional - Whether to send cookies from the session. Defaults to false
- **protocol** (string) - Optional - Protocol scheme: 'http:' or 'https:'. Defaults to 'http:'
- **host** (string) - Optional - Server host as 'hostname:port'
- **hostname** (string) - Optional - Server host name
- **port** (Integer) - Optional - Server listening port number
- **path** (string) - Optional - Path part of the request URL
- **redirect** (string) - Optional - Can be 'follow', 'error', or 'manual'. Defaults to 'follow'
- **origin** (string) - Optional - Origin URL of the request
- **referrerPolicy** (string) - Optional - Referrer policy. Defaults to 'strict-origin-when-cross-origin'
- **cache** (string) - Optional - Can be 'default', 'no-store', 'reload', 'no-cache', 'force-cache', or 'only-if-cached'
- **priority** (string) - Optional - Can be 'throttled', 'idle', 'lowest', 'low', 'medium', or 'highest'. Defaults to 'idle'
- **priorityIncremental** (boolean) - Optional - HTTP extensible priorities flag (RFC 9218). Defaults to true

### Request Example
```js
const request = net.request({
  method: 'GET',
  protocol: 'https:',
  hostname: 'github.com',
  port: 443,
  path: '/'
})
```

### Alternative Example (String URL)
```js
const request = net.request('https://github.com')
```
```

--------------------------------

### Updating Tray Context Menu on Linux

Source: https://github.com/electron/electron/blob/main/docs/api/tray.md

Demonstrates how to update a tray's context menu on Linux. After modifying individual `MenuItem`s, `setContextMenu` must be called again for changes to take effect.

```javascript
const { app, Menu, Tray } = require('electron')

let appIcon = null
app.whenReady().then(() => {
  appIcon = new Tray('/path/to/my/icon')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' }
  ])

  // Make a change to the context menu
  contextMenu.items[1].checked = false

  // Call this again for Linux because we modified the context menu
  appIcon.setContextMenu(contextMenu)
})
```

--------------------------------

### win.setMinimumSize(width, height)

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Sets the minimum allowable dimensions for the window.

```APIDOC
## `win.setMinimumSize(width, height)`

### Description
Sets the minimum size of window to `width` and `height`.

### Parameters
- `width` (Integer) - The minimum width.
- `height` (Integer) - The minimum height.
```

--------------------------------

### BrowserWindow Class Methods

Source: https://github.com/electron/electron/wiki/browser-window

Static methods available on the BrowserWindow class for querying and managing windows across the application.

```APIDOC
## BrowserWindow Class Methods

### BrowserWindow.getFocusedWindow()

**Description:**
Returns the window that is focused in this application.

**Method:**
GET

**Response:**
- **Returns** (BrowserWindow) - The focused BrowserWindow instance or null if no window is focused

---

### BrowserWindow.fromProcessIdAndRoutingId(processId, routingId)

**Description:**
Find a window according to its processId and routingId.

**Method:**
GET

**Parameters:**
- **processId** (Integer) - Required - The process ID
- **routingId** (Integer) - Required - The routing ID

**Response:**
- **Returns** (BrowserWindow) - The BrowserWindow instance matching the process and routing IDs, or null if not found
```

--------------------------------

### Menu Constructor

Source: https://github.com/electron/electron/blob/main/docs/api/menu.md

Creates a new Menu instance. This constructor is used to initialize an empty menu object to which menu items can be appended.

```APIDOC
## POST /Menu

### Description
Creates a new menu instance.

### Method
POST

### Endpoint
/Menu

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
(None)

### Request Example
(None)

### Response
#### Success Response (200)
- **Menu** (object) - A new Menu instance.

#### Response Example
(None)
```

--------------------------------

### Complete N-API C++ Addon Implementation

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

This snippet provides the full source code for a C++ N-API addon, including class definition, method exposure, and thread-safe callback handling for asynchronous events.

```cpp
#include <napi.h>
#include <string>
#include "cpp_code.h"

class CppAddon : public Napi::ObjectWrap<CppAddon> {
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports) {
        Napi::Function func = DefineClass(env, "CppWin32Addon", {
            InstanceMethod("helloWorld", &CppAddon::HelloWorld),
            InstanceMethod("helloGui", &CppAddon::HelloGui),
            InstanceMethod("on", &CppAddon::On)
        });

        Napi::FunctionReference* constructor = new Napi::FunctionReference();
        *constructor = Napi::Persistent(func);
        env.SetInstanceData(constructor);

        exports.Set("CppWin32Addon", func);
        return exports;
    }

    struct CallbackData {
        std::string eventType;
        std::string payload;
        CppAddon* addon;
    };

    CppAddon(const Napi::CallbackInfo& info)
        : Napi::ObjectWrap<CppAddon>(info)
        , env_(info.Env())
        , emitter(Napi::Persistent(Napi::Object::New(info.Env())))
        , callbacks(Napi::Persistent(Napi::Object::New(info.Env())))
        , tsfn_(nullptr) {

        napi_status status = napi_create_threadsafe_function(
            env_,
            nullptr,
            nullptr,
            Napi::String::New(env_, "CppCallback"),
            0,
            1,
            nullptr,
            nullptr,
            this,
            [](napi_env env, napi_value js_callback, void* context, void* data) {
                auto* callbackData = static_cast<CallbackData*>(data);
                if (!callbackData) return;

                Napi::Env napi_env(env);
                Napi::HandleScope scope(napi_env);

                auto addon = static_cast<CppAddon*>(context);
                if (!addon) {
                    delete callbackData;
                    return;
                }

                try {
                    auto callback = addon->callbacks.Value().Get(callbackData->eventType).As<Napi::Function>();
                    if (callback.IsFunction()) {
                        callback.Call(addon->emitter.Value(), {Napi::String::New(napi_env, callbackData->payload)});
                    }
                } catch (...) {}

                delete callbackData;
            },
            &tsfn_
        );

        if (status != napi_ok) {
            Napi::Error::New(env_, "Failed to create threadsafe function").ThrowAsJavaScriptException();
            return;
        }

        // Set up the callbacks here
        auto makeCallback = [this](const std::string& eventType) {
            return [this, eventType](const std::string& payload) {
                if (tsfn_ != nullptr) {
                    auto* data = new CallbackData{
                        eventType,
                        payload,
                        this
                    };
                    napi_call_threadsafe_function(tsfn_, data, napi_tsfn_blocking);
                }
            };
        };

        cpp_code::setTodoAddedCallback(makeCallback("todoAdded"));
    }

    ~CppAddon() {
        if (tsfn_ != nullptr) {
            napi_release_threadsafe_function(tsfn_, napi_tsfn_release);
            tsfn_ = nullptr;
        }
    }

private:
    Napi::Env env_;
    Napi::ObjectReference emitter;
    Napi::ObjectReference callbacks;
    napi_threadsafe_function tsfn_;

    Napi::Value HelloWorld(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();

        if (info.Length() < 1 || !info[0].IsString()) {
            Napi::TypeError::New(env, "Expected string argument").ThrowAsJavaScriptException();
            return env.Null();
        }

        std::string input = info[0].As<Napi::String>();
        std::string result = cpp_code::hello_world(input);

        return Napi::String::New(env, result);
    }

    void HelloGui(const Napi::CallbackInfo& info) {
        cpp_code::hello_gui();
    }

    Napi::Value On(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();

        if (info.Length() < 2 || !info[0].IsString() || !info[1].IsFunction()) {
            Napi::TypeError::New(env, "Expected (string, function) arguments").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        callbacks.Value().Set(info[0].As<Napi::String>(), info[1].As<Napi::Function>());
        return env.Undefined();
    }

    Napi::Value Destroy(const Napi::CallbackInfo& info) {
        callbacks.Reset();
        emitter.Reset();

        if (tsfn_ != nullptr) {
            napi_release_threadsafe_function(tsfn_, napi_tsfn_abort);
            tsfn_ = nullptr;
        }

        return info.Env().Undefined();
    }
};

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    return CppAddon::Init(env, exports);
}

NODE_API_MODULE(cpp_addon, Init)
```

--------------------------------

### Load a local HTML file in BrowserWindow

Source: https://github.com/electron/electron/blob/main/docs/api/web-contents.md

Loads an HTML document specified relative to the application's root directory. Returns a promise that resolves when the page finishes loading.

```javascript
const win = new BrowserWindow()
win.loadFile('src/index.html')
```

--------------------------------

### Updating webContents Zoom Methods to Synchronous

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

Transition from callback-based zoom level and factor retrieval to direct synchronous return values.

```javascript
// Deprecated
webContents.getZoomLevel((level) => {
  console.log(level)
})
// Replace with
const level = webContents.getZoomLevel()
console.log(level)
```

```javascript
// Deprecated
webContents.getZoomFactor((factor) => {
  console.log(factor)
})
// Replace with
const factor = webContents.getZoomFactor()
console.log(factor)
```

--------------------------------

### <webview>.loadURL(url[, options])

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Loads the given URL in the webview. The promise resolves when navigation finishes or rejects on failure.

```APIDOC
### `<webview>.loadURL(url[, options])`

#### Description
Loads the `url` in the webview. The `url` must contain the protocol prefix, e.g. `http://` or `file://`.

#### Parameters
- **url** (`URL`) - Required. The URL to load.
- **options** (`Object`) - Optional.
  - **httpReferrer** (`string | Referrer`) - Optional. An HTTP Referrer url.
  - **userAgent** (`string`) - Optional. A user agent originating the request.
  - **extraHeaders** (`string`) - Optional. Extra headers separated by "\n".
  - **postData** (`(UploadRawData | UploadFile)[]`) - Optional. Post data to send.
  - **baseURLForDataURL** (`string`) - Optional. Base url (with trailing path separator) for files to be loaded by the data url.

#### Return Value
- Returns `Promise<void>` - Resolves when the page has finished loading (`did-finish-load`) and rejects if the page fails to load (`did-fail-load`).
```

--------------------------------

### Event: 'browser-window-created'

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Emitted when a new BrowserWindow is created in the application.

```APIDOC
## Event: 'browser-window-created'

### Description
Emitted when a new BrowserWindow is created.

### Event Listener Parameters
- **event** (Event) - The event object.
- **window** (BrowserWindow) - The newly created window instance.
```

--------------------------------

### Set Up Threadsafe Function in C++ N-API Addon Constructor

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-cpp-win32.md

Sets up a N-API threadsafe function within the CppAddon constructor, allowing C++ to safely invoke JavaScript callbacks from any thread with provided event data.

```cpp
// ... existing constructor code
CppAddon(const Napi::CallbackInfo& info)
    : Napi::ObjectWrap<CppAddon>(info)
    , env_(info.Env())
    , emitter(Napi::Persistent(Napi::Object::New(info.Env())))
    , callbacks(Napi::Persistent(Napi::Object::New(info.Env())))
    , tsfn_(nullptr) {

    napi_status status = napi_create_threadsafe_function(
        env_,
        nullptr,
        nullptr,
        Napi::String::New(env_, "CppCallback"),
        0,
        1,
        nullptr,
        nullptr,
        this,
        [](napi_env env, napi_value js_callback, void* context, void* data) {
            auto* callbackData = static_cast<CallbackData*>(data);
            if (!callbackData) return;

            Napi::Env napi_env(env);
            Napi::HandleScope scope(napi_env);

            auto addon = static_cast<CppAddon*>(context);
            if (!addon) {
                delete callbackData;
                return;
            }

            try {
                auto callback = addon->callbacks.Value().Get(callbackData->eventType).As<Napi::Function>();
                if (callback.IsFunction()) {
                    callback.Call(addon->emitter.Value(), {Napi::String::New(napi_env, callbackData->payload)});
                }
            } catch (...) {}

            delete callbackData;
        },
        &tsfn_
    );

    if (status != napi_ok) {
        Napi::Error::New(env_, "Failed to create threadsafe function").ThrowAsJavaScriptException();
        return;
    }

    // We'll add callback setup in the next step
}
```

--------------------------------

### binding.gyp configuration for macOS Objective-C addon

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-objc-macos.md

This `binding.gyp` file configures the native addon build process for macOS, ensuring it compiles Objective-C++ files, links against Foundation and AppKit frameworks, and enables ARC and C++17 support.

```json
{
  "targets": [
    {
      "target_name": "objc_addon",
      "conditions": [
        ['OS=="mac"', {
          "sources": [
            "src/objc_addon.mm",
            "src/objc_code.mm"
          ],
          "include_dirs": [
            "<!@(node -p \"require('node-addon-api').include\")",
            "include"
          ],
          "libraries": [
            "-framework Foundation",
            "-framework AppKit"
          ],
          "dependencies": [
            "<!(node -p \"require('node-addon-api').gyp\")"
          ],
          "xcode_settings": {
            "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
            "CLANG_CXX_LIBRARY": "libc++",
            "MACOSX_DEPLOYMENT_TARGET": "11.0",
            "CLANG_ENABLE_OBJC_ARC": "YES",
            "OTHER_CFLAGS": [
              "-ObjC++",
              "-std=c++17"
            ]
          },
          "defines": [
            "NODE_ADDON_API_CPP_EXCEPTIONS"
          ]
        }]
      ]
    }
  ]
}
```

--------------------------------

### Migrate BrowserWindow extension APIs

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

BrowserWindow extension methods are removed. Use the session-based extension APIs instead.

```js
// Removed in Electron 13
BrowserWindow.addExtension(path)
BrowserWindow.addDevToolsExtension(path)
// Replace with
session.defaultSession.loadExtension(path)
```

```js
// Removed in Electron 13
BrowserWindow.removeExtension(name)
BrowserWindow.removeDevToolsExtension(name)
// Replace with
session.defaultSession.removeExtension(extension_id)
```

```js
// Removed in Electron 13
BrowserWindow.getExtensions()
BrowserWindow.getDevToolsExtensions()
// Replace with
session.defaultSession.getAllExtensions()
```

--------------------------------

### <webview>.inspectServiceWorker()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Opens DevTools for the service worker context present in the guest page.

```APIDOC
## `<webview>.inspectServiceWorker()`

### Description
Opens the DevTools for the service worker context present in the guest page.
```

--------------------------------

### Enable file dialog access entitlements

Source: https://github.com/electron/electron/blob/main/docs/tutorial/mac-app-store-submission-guide.md

Configure these entitlements to allow the app to read or write files selected by the user via dialogs.

```xml
<key>com.apple.security.files.user-selected.read-only</key>
<true/>
```

```xml
<key>com.apple.security.files.user-selected.read-write</key>
<true/>
```

--------------------------------

### win.setPosition(x, y[, animate])

Source: https://github.com/electron/electron/blob/main/docs/api/base-window.md

Moves the window to the specified coordinates with optional animation on macOS.

```APIDOC
## `win.setPosition(x, y[, animate])`

### Description
Moves window to `x` and `y`.

### Parameters
- `x` (Integer) - The target X coordinate.
- `y` (Integer) - The target Y coordinate.
- `animate` (boolean, optional) - *macOS* Whether to animate the movement.
```

--------------------------------

### Open Shared Texture and Create Staging Texture on Windows with Direct3D 11

Source: https://github.com/electron/electron/blob/main/shell/browser/osr/README.md

Converts a shared texture handle to a Direct3D 11 texture resource, retrieves its description, and creates a staging texture for CPU access. The staging texture is cached and recreated only when dimensions change, enabling efficient texture copying.

```c++
// Windows
HANDLE handle = *reinterpret_cast<HANDLE*>(handleBufferData);
Microsoft::WRL::ComPtr<ID3D11Texture2D> shared_texture = nullptr;
HRESULT hr = device1->OpenSharedResource1(handle, IID_PPV_ARGS(&shared_texture));

// Extract the texture description
D3D11_TEXTURE2D_DESC desc;
shared_texture->GetDesc(&desc);

// Cache the staging texture if it does not exist or size has changed
if (!cached_staging_texture || cached_width != desc.Width ||
    cached_height != desc.Height) {
  if (cached_staging_texture) {
    cached_staging_texture->Release();
  }

  desc.CPUAccessFlags = D3D11_CPU_ACCESS_READ;
  desc.Usage = D3D11_USAGE_STAGING;
  desc.BindFlags = 0;
  desc.MiscFlags = 0;

  std::cout << "Create staging Texture2D width=" << desc.Width
            << " height=" << desc.Height << std::endl;
  hr = device->CreateTexture2D(&desc, nullptr, &cached_staging_texture);

  cached_width = desc.Width;
  cached_height = desc.Height;
}

// Copy to a intermediate texture
context->CopyResource(cached_staging_texture.Get(), shared_texture.Get());
```

--------------------------------

### Main Process Information Dialog Handler

Source: https://github.com/electron/electron/blob/main/docs/fiddles/native-ui/dialogs/information-dialog/index.html

Listens for the IPC trigger and displays the native message box with specified options.

```javascript
const {ipcMain, dialog} = require('electron')  ipcMain.on('open-information-dialog', (event) => {   const options = {     type: 'info',     title: 'Information',     message: "This is an information dialog. Isn't it nice?",     buttons: ['Yes', 'No']   }   dialog.showMessageBox(options, (index) => {     event.sender.send('information-dialog-selection', index)   }) })
```

--------------------------------

### N-API Addon for Swift/Objective-C Interoperability

Source: https://github.com/electron/electron/blob/main/docs/tutorial/native-code-and-electron-swift-macos.md

This code defines a Node.js N-API addon class (SwiftAddon) that bridges C++ with Swift/Objective-C. It demonstrates setting up thread-safe callbacks from Swift into Node.js, defining N-API methods, and managing resources.

```cpp
                    auto callback = addon->callbacks.Value().Get(callbackData->eventType).As<Napi::Function>();
                    if (callback.IsFunction()) {
                        callback.Call(addon->emitter.Value(), {Napi::String::New(napi_env, callbackData->payload)});
                    }
                } catch (...) {}

                delete callbackData;
            },
            &tsfn_
        );

        if (status != napi_ok) {
            Napi::Error::New(env_, "Failed to create threadsafe function").ThrowAsJavaScriptException();
            return;
        }

        auto makeCallback = [this](const char* eventType) {
            return ^(NSString* payload) {
                if (tsfn_ != nullptr) {
                    auto* data = new CallbackData{
                        eventType,
                        std::string([payload UTF8String]),
                        this
                    };
                    napi_call_threadsafe_function(tsfn_, data, napi_tsfn_blocking);
                }
            };
        };

        [SwiftBridge setTodoAddedCallback:makeCallback("todoAdded")];
        [SwiftBridge setTodoUpdatedCallback:makeCallback("todoUpdated")];
        [SwiftBridge setTodoDeletedCallback:makeCallback("todoDeleted")];
    }

    ~SwiftAddon() {
        if (tsfn_ != nullptr) {
            napi_release_threadsafe_function(tsfn_, napi_tsfn_release);
            tsfn_ = nullptr;
        }
    }

private:
    Napi::Env env_;
    Napi::ObjectReference emitter;
    Napi::ObjectReference callbacks;
    napi_threadsafe_function tsfn_;

    Napi::Value HelloWorld(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();

        if (info.Length() < 1 || !info[0].IsString()) {
            Napi::TypeError::New(env, "Expected string argument").ThrowAsJavaScriptException();
            return env.Null();
        }

        std::string input = info[0].As<Napi::String>();
        NSString* nsInput = [NSString stringWithUTF8String:input.c_str()];
        NSString* result = [SwiftBridge helloWorld:nsInput];

        return Napi::String::New(env, [result UTF8String]);
    }

    void HelloGui(const Napi::CallbackInfo& info) {
        [SwiftBridge helloGui];
    }

    Napi::Value On(const Napi::CallbackInfo& info) {
        Napi::Env env = info.Env();

        if (info.Length() < 2 || !info[0].IsString() || !info[1].IsFunction()) {
            Napi::TypeError::New(env, "Expected (string, function) arguments").ThrowAsJavaScriptException();
            return env.Undefined();
        }

        callbacks.Value().Set(info[0].As<Napi::String>(), info[1].As<Napi::Function>());
        return env.Undefined();
    }

    Napi::Value Destroy(const Napi::CallbackInfo& info) {
        callbacks.Reset();
        emitter.Reset();

        if (tsfn_ != nullptr) {
            napi_release_threadsafe_function(tsfn_, napi_tsfn_abort);
            tsfn_ = nullptr;
        }

        return info.Env().Undefined();
    }
};

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    return SwiftAddon::Init(env, exports);
}

NODE_API_MODULE(swift_addon, Init)
```

--------------------------------

### <webview>.showDefinitionForSelection()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Shows the macOS pop-up dictionary that searches the selected word on the page.

```APIDOC
## <webview>.showDefinitionForSelection()

### Platform
macOS

### Description
Shows pop-up dictionary that searches the selected word on the page.
```

--------------------------------

### Create Windows Shortcut Link with Shell Module

Source: https://github.com/electron/electron/blob/main/docs/api/shell.md

Uses shell.writeShortcutLink() to create, update, or replace a Windows shortcut link. Requires shortcutPath and ShortcutDetails options. Returns boolean indicating success. Windows-only functionality.

```javascript
const { shell } = require('electron')

const shortcutPath = 'C:\\Users\\Desktop\\MyApp.lnk'
const success = shell.writeShortcutLink(shortcutPath, 'create', {
  target: 'C:\\Program Files\\MyApp\\app.exe',
  description: 'My Application',
  icon: 'C:\\Program Files\\MyApp\\icon.ico'
})

if (success) console.log('Shortcut created successfully')
```

--------------------------------

### Migrate WebContents new-window event

Source: https://github.com/electron/electron/blob/main/docs/breaking-changes.md

The new-window event is deprecated. Use setWindowOpenHandler to manage window opening behavior.

```js
// Deprecated in Electron 13
webContents.on('new-window', (event) => {
  event.preventDefault()
})

// Replace with
webContents.setWindowOpenHandler((details) => {
  return { action: 'deny' }
})
```

--------------------------------

### <webview>.reload()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Reloads the current guest page.

```APIDOC
### `<webview>.reload()`

#### Description
Reloads the guest page.
```

--------------------------------

### Capture Offscreen Window Content to PNG using Electron

Source: https://github.com/electron/electron/blob/main/docs/tutorial/offscreen-rendering.md

Demonstrates setting up an offscreen BrowserWindow with hardware acceleration disabled to capture frames. The code listens for the 'paint' event and uses the Node.js 'fs' module to save the resulting image buffer as a PNG file.

```JavaScript
const { app, BrowserWindow } = require('electron/main')
const fs = require('node:fs')
const path = require('node:path')

app.disableHardwareAcceleration()

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      offscreen: true
    }
  })

  win.loadURL('https://github.com')
  win.webContents.on('paint', (event, dirty, image) => {
    fs.writeFileSync('ex.png', image.toPNG())
  })
  win.webContents.setFrameRate(60)
  console.log(`The screenshot has been successfully saved to ${path.join(process.cwd(), 'ex.png')}`)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

--------------------------------

### net.WebSocket

Source: https://github.com/electron/electron/blob/main/docs/api/net.md

A reference to the WebSocket class for creating WHATWG-compatible WebSocket connections from the main process.

```APIDOC
## net.WebSocket

### Description
A reference to the WebSocket class, which can be used to create WHATWG-compatible WebSocket connections through Chromium's network stack from the main process. This property is only available in the main process.

### Type
`typeof WebSocket`

### Example
```js
const { app, net } = require('electron')

app.whenReady().then(() => {
  const ws = new net.WebSocket('wss://echo.websocket.events')
  ws.onmessage = (event) => console.log(event.data)
})
```
```

--------------------------------

### Handle USB Device Selection and Permissions

Source: https://github.com/electron/electron/blob/main/docs/api/session.md

Configures permission check handlers, device permission handlers, and the 'select-usb-device' event to manage and persist USB device permissions.

```javascript
const { app, BrowserWindow } = require('electron')

let win = null

app.whenReady().then(() => {
  win = new BrowserWindow()

  win.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
    if (permission === 'usb') {
      // Add logic here to determine if permission should be given to allow USB selection
      return true
    }
    return false
  })

  // Optionally, retrieve previously persisted devices from a persistent store (fetchGrantedDevices needs to be implemented by developer to fetch persisted permissions)
  const grantedDevices = fetchGrantedDevices()

  win.webContents.session.setDevicePermissionHandler((details) => {
    if (new URL(details.origin).hostname === 'some-host' && details.deviceType === 'usb') {
      if (details.device.vendorId === 123 && details.device.productId === 345) {
        // Always allow this type of device (this allows skipping the call to `navigator.usb.requestDevice` first)
        return true
      }

      // Search through the list of devices that have previously been granted permission
      return grantedDevices.some((grantedDevice) => {
        return grantedDevice.vendorId === details.device.vendorId &&
              grantedDevice.productId === details.device.productId &&
              grantedDevice.serialNumber && grantedDevice.serialNumber === details.device.serialNumber
      })
    }
    return false
  })

  win.webContents.session.on('select-usb-device', (event, details, callback) => {
    event.preventDefault()
    const selectedDevice = details.deviceList.find((device) => {
      return device.vendorId === 9025 && device.productId === 67
    })
    if (selectedDevice) {
      // Optionally, add this to the persisted devices (updateGrantedDevices needs to be implemented by developer to persist permissions)
      grantedDevices.push(selectedDevice)
      updateGrantedDevices(grantedDevices)
    }
    callback(selectedDevice?.deviceId)
  })
})
```

--------------------------------

### app.setAsDefaultProtocolClient(protocol[, path, args])

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Sets the current executable as the default handler for a protocol/URI scheme.

```APIDOC
## app.setAsDefaultProtocolClient(protocol[, path, args])

### Description
Sets the current executable as the default handler for a protocol (URI scheme). Once registered, all links with `your-protocol://` will be opened with the current executable.

### Parameters
- **protocol** (string) - The name of your protocol, without `://`.
- **path** (string) - *Optional (Windows)* - The path to the Electron executable. Defaults to `process.execPath`.
- **args** (string[]) - *Optional (Windows)* - Arguments passed to the executable. Defaults to an empty array.

### Return Value
- **boolean** - Whether the call succeeded.
```

--------------------------------

### new TouchBarSlider(options)

Source: https://github.com/electron/electron/blob/main/docs/api/touch-bar-slider.md

Creates a new TouchBarSlider instance with optional configuration for its label, current value, minimum and maximum values, and a callback function for change events.

```APIDOC
## new TouchBarSlider(options)

### Description
Creates a new TouchBarSlider instance.

### Method
Constructor

### Endpoint
TouchBarSlider

### Parameters
#### Request Body
- **options** (Object) - Required - Configuration object for the slider.
- **options.label** (string) - Optional - Label text.
- **options.value** (Integer) - Optional - Selected value.
- **options.minValue** (Integer) - Optional - Minimum value.
- **options.maxValue** (Integer) - Optional - Maximum value.
- **options.change** (Function) - Optional - Function to call when the slider is changed.
  - **newValue** (number) - The value that the user selected on the Slider.

### Request Example
```json
{
  "options": {
    "label": "Volume",
    "value": 50,
    "minValue": 0,
    "maxValue": 100,
    "change": "function(newValue) { console.log(newValue); }"
  }
}
```

### Response
#### Success Response (Instance)
- **TouchBarSlider** (Object) - A new instance of the TouchBarSlider class.

#### Response Example
```json
{
  "label": "Volume",
  "value": 50,
  "minValue": 0,
  "maxValue": 100
}
```
```

--------------------------------

### <webview>.redo()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Executes the editing command redo in the page.

```APIDOC
## `<webview>.redo()`

### Description
Executes editing command `redo` in page.
```

--------------------------------

### Execute Electron Unit Tests

Source: https://github.com/electron/electron/blob/main/docs/development/testing.md

Runs all unit tests for the Electron application located in the 'spec' folder, or specific tests matching a pattern.

```bash
npm run test
```

```bash
npm run test -- -g=PATTERN
```

```bash
npm run test -- -g ipc
```

--------------------------------

### Open DevTools on webview DOM Ready in JavaScript

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Ensure the webview element is loaded before invoking its methods. Listen to the dom-ready event before calling methods like openDevTools.

```javascript
const webview = document.querySelector('webview')
webview.addEventListener('dom-ready', () => {
  webview.openDevTools()
})
```

--------------------------------

### <webview>.copy()

Source: https://github.com/electron/electron/blob/main/docs/api/webview-tag.md

Executes the editing command copy in the page.

```APIDOC
## `<webview>.copy()`

### Description
Executes editing command `copy` in page.
```

--------------------------------

### Set up MessageChannelMain for direct communication in Electron Main Process

Source: https://github.com/electron/electron/blob/main/docs/tutorial/message-ports.md

This JavaScript code runs in the Electron main process. It creates a `BrowserWindow` with `contextIsolation` enabled, initializes a `MessageChannelMain`, and sends one end of the channel (`port1`) to the renderer's main world via `webContents.postMessage`. It also sets up a listener on the other end (`port2`) to receive messages from the renderer's main world.

```javascript
const { BrowserWindow, app, MessageChannelMain } = require('electron')

const path = require('node:path')

app.whenReady().then(async () => {
  // Create a BrowserWindow with contextIsolation enabled.
  const bw = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  bw.loadURL('index.html')

  // We'll be sending one end of this channel to the main world of the
  // context-isolated page.
  const { port1, port2 } = new MessageChannelMain()

  // It's OK to send a message on the channel before the other end has
  // registered a listener. Messages will be queued until a listener is
  // registered.
  port2.postMessage({ test: 21 })

  // We can also receive messages from the main world of the renderer.
  port2.on('message', (event) => {
    console.log('from renderer main world:', event.data)
  })
  port2.start()

  // The preload script will receive this IPC message and transfer the port
  // over to the main world.
  bw.webContents.postMessage('main-world-port', null, [port1])
})
```

--------------------------------

### Build and Version Information

Source: https://github.com/electron/electron/blob/main/docs/api/process.md

Properties identifying the specific build of Electron and the versions of underlying components.

```APIDOC
## Build and Version Properties

### Properties
- **process.versions.chrome** (string) - Readonly. Chrome's version string.
- **process.versions.electron** (string) - Readonly. Electron's version string.
- **process.mas** (boolean) - Readonly. True for Mac App Store builds.
- **process.windowsStore** (boolean) - Readonly. True if the app is running as an MSIX package (including AppX for Windows Store).
- **process.defaultApp** (boolean) - Readonly. True when the app is started by being passed as a parameter to the default Electron executable.
```

--------------------------------

### webFrameMain.fromFrameToken(processId, frameToken)

Source: https://github.com/electron/electron/blob/main/docs/api/web-frame-main.md

Retrieves a WebFrameMain instance associated with the specified process ID and frame token.

```APIDOC
## webFrameMain.fromFrameToken(processId, frameToken)

### Description
Returns a WebFrameMain instance for the given process ID and frame token, or null if no such frame exists.

### Parameters
- **processId** (Integer) - Required - The internal ID of the process owning the frame.
- **frameToken** (string) - Required - The unique string token identifying the frame.

### Returns
- **WebFrameMain | null** - The frame instance or null.
```

--------------------------------

### app.getPreferredSystemLanguages()

Source: https://github.com/electron/electron/blob/main/docs/api/app.md

Returns the user's preferred system languages from most preferred to least preferred, including country codes if applicable.

```APIDOC
## app.getPreferredSystemLanguages()

### Description
Returns the user's preferred system languages from most preferred to least preferred, including the country codes if applicable. Can be used for deciding what language to present the application in.

### Return Value
- **string[]** - The user's preferred system languages from most preferred to least preferred.

### Example
```js
app.getPreferredSystemLanguages() // ['fr-CA', 'en-US', 'zh-Hans-CN', 'fi', 'es-419']
```
```

--------------------------------

### tray.popUpContextMenu([menu, position])

Source: https://github.com/electron/electron/blob/main/docs/api/tray.md

Pops up the context menu for the tray icon, optionally using a custom menu or position.

```APIDOC
## tray.popUpContextMenu([menu, position])

### Description
Pops up the context menu of the tray icon. When `menu` is passed, the `menu` will be shown instead of the tray icon's context menu. The `position` is only available on Windows, and it is (0, 0) by default.

### Method Signature
`tray.popUpContextMenu([menu, position])`

### Parameters
- **menu** (Menu) - Optional
- **position** (Point) - Optional - The pop up position.
```

--------------------------------

### Handle Display Media Requests with Desktop Capturer

Source: https://github.com/electron/electron/blob/main/docs/api/session.md

Grants display media capture by querying available screen sources or leveraging the native macOS system picker.

```javascript
const { session, desktopCapturer } = require('electron')

session.defaultSession.setDisplayMediaRequestHandler((request, callback) => {
  desktopCapturer.getSources({ types: ['screen'] }).then((sources) => {
    // Grant access to the first screen found.
    callback({ video: sources[0] })
  })
  // Use the system picker if available.
  // Note: this is currently experimental. If the system picker
  // is available, it will be used and the media request handler
  // will not be invoked.
}, { useSystemPicker: true })
```