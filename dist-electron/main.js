import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from './utils.js';
import { pollResources } from './resourceManager.js';
app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    console.log('isDev:', isDev());
    console.log('Environment:', process.env.NODE_ENV);
    if (isDev()) {
        console.log('Development mode detected, loading localhost...');
        mainWindow.loadURL('http://localhost:5123');
    }
    else {
        console.log('Production mode detected, loading built files...');
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
    }
    pollResources();
});
