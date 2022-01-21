const { app, BrowserWindow, ipcMain, Notification } = require('electron')

const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')
// require('./db/main')

const path = require('path')
const isDev = !app.isPackaged

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavascript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.webContents.openDevTools()
  win.loadFile('index.html')
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', 'electron')
  })
}

ipcMain.on('notify', (_, message) => {
  try {
    new Notification({ title: 'Notification', body: message }).show()
  } catch (e) {
    console.log(e)
  }
})

app.whenReady().then(() => {
  installExtension(REACT_DEVELOPER_TOOLS, { allowFileAccess: true })
    .then((name) => {
      console.log(`Added Extension:  ${name}`)

      createWindow()
    }
    )
    .catch((err) => console.log('An error occurred: ', err))
})
