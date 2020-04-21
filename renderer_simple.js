const remote = require('electron').remote;








async function getOwnedGames(steamid) {
    let url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=83BB37ACD8C85F98B6DE61D47B4A6716&steamid=' + steamid + '&include_appinfo=true&format=json';
    let result = await fetch(url).then(response => response.json());

    let gameArray = [];
    result.response.games.forEach((item, index) => {
        gameArray.push(item.name);
    });
    return gameArray;
}





let t_display = document.getElementById('t_display');
getOwnedGames('76561198060798137').then(result => {
    result.forEach((item, index) => {
        t_display.innerHTML += `<tr><td>${item}</tr></td>`;
    });
});