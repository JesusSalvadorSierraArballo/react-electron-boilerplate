const { app, BrowserWindow } = require('electron')
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
      contextIsolation: true
    }
  })

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
app.whenReady().then(createWindow)
