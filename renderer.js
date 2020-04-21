const intersection = require('array-intersection');

async function getOwnedGames(steamids) {
    let superArray = [];
    try {
        for (let i = 0; i < steamids.length; i++) {
            let url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=83BB37ACD8C85F98B6DE61D47B4A6716&steamid=${steamids[i]}&include_appinfo=true&format=json`;
            let result = await fetch(url).then(response => response.json());
            let gameArray = [];
            for (let j = 0; j < result.response.games.length; j++) {
                gameArray.push(result.response.games[j].name);
            };
            superArray.push(gameArray);
        }
    } catch (error) {
        document.getElementById('t_display').innerHTML = "Attempt failed. Are all profiles and game lists public?"
    }
    return superArray;
}

function populateTable() {
    let inputText = document.getElementById('i_input').value;
    inputText.trim();
    let inputArray = inputText.split(',');

    let t_display = document.getElementById('t_display');
    t_display.innerHTML = '';
    getOwnedGames(inputArray).then(result => {
        let final = intersection(...result);
        final.sort();
        final.forEach((item, index) => {
            t_display.innerHTML += `<tr><td>${item}</tr></td>`;
        });
    });
}

// 76561198060798137, 76561198050069396, 76561198046614660
// 76561198050069396, 76561198046614660