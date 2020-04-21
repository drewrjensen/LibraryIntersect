const {app, BrowserWindow} = require("electron");
// const XMLHttpRequest = require("XMLHttpRequest");

function createWindow() {
    let window = new BrowserWindow({
        width: 800,
        hieght: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.loadFile("index.html");
}

app.whenReady().then(createWindow);

function getOwnedGames(steamid) {
    var url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=83BB37ACD8C85F98B6DE61D47B4A6716&steamid=" + steamid + "&include_appinfo=true&format=json";
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    return JSON.parse(request.responseText);
}

// getOwnedGames(76561198060798137);