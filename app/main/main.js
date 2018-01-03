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
    show: false
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
  const url = (isDev ? devPath : prodPath) + ('ELECTRON_IS_DEV' in process.env ? '' : '/#/');

  mainWindow.setMenu(null);
  mainWindow.loadURL(url);
});

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit);