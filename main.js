const {app, BrowserWindow} = require('electron');
const fetch = require('electron-fetch').default;

function createWindow() {
    let window = new BrowserWindow({
        width: 800,
        hieght: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // window.webContents.openDevTools();
    window.setMenu(null);
    window.loadFile('index.html');
}

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    app.quit()
});