const { ipcRenderer, contextBridge } = require('electron')
const sqlite3 = require('sqlite3')
contextBridge.exposeInMainWorld('api', {
  notificationApi: {
    sendNotification (message) {
      ipcRenderer.send('notify', message)
    }
  },
  batteryApi: {

  },
  filesApi: {

  },
  databaseApi: {
    selectData: () => {
      return new Promise((resolved, reject) => {
        try {
          const database = new sqlite3.Database('./db/db.sqlite3', (err) => {
            if (err) console.error('Database opening error: ', err)
          })

          // database.run

          return database.all('SELECT * FROM users', (err, rows) => {
            if (!err) {
              resolved(rows)
            } else {
              reject(err)
            }
          })
        } catch (e) {
          console.log(e)
        }
      })
    }
  },
  mainDatabase: {

  }
})
