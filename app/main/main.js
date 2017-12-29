// Native
const { format } = require('url');

// Packages
const { BrowserWindow, app } = require('electron');
const isDev = require('electron-is-dev');
const { resolve } = require('app-root-path');

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: false // See #321(https://github.com/parcel-bundler/parcel/issues/321)
    }
  });
  
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    if (isDev) mainWindow.webContents.openDevTools();
  });

  const devPath = 'http://localhost:1124';

  const prodPath = format({
    pathname: resolve('app/renderer/.parcel/production/index.html'),
    protocol: 'file:',
    slashes: true
  });

  const url = isDev ? devPath : prodPath;
  mainWindow.loadURL(url + '/#/');
  mainWindow.setMenu(null);
});

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit);