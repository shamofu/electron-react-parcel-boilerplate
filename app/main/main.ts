import { format } from 'url';

import { BrowserWindow, app } from 'electron';
import isDev from 'electron-is-dev';
import { resolve } from 'app-root-path';


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nativeWindowOpen: true,
    },
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    if (isDev) { mainWindow.webContents.openDevTools(); }
  });

  const devPath = 'http://localhost:1124';
  const prodPath = format({
    pathname: resolve('dist/frontend/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  const url = isDev ? devPath : prodPath;

  mainWindow.setMenu(null);
  mainWindow.loadURL(url);
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
