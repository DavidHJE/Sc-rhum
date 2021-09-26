let players = [];

const selectorNbPlayers = document.getElementById('selectorNbPlayers');
const messageNbPlayers = document.getElementById('messageNbPlayers');
const launchGameButton = document.getElementById('launchGameButton');
const alertUsernames = document.getElementById('alertUsernames');
const buttonAlert = document.getElementById('buttonAlert');

alertUsernames.style.display = 'none';

let htmlUsername = '';

// Base nb of players
updateNbPlayers(2);


selectorNbPlayers.addEventListener('change', () => {
    updateNbPlayers(_.toNumber(selectorNbPlayers.value))
});


launchGameButton.addEventListener('click', () => {
    let canLaunchGame = true;
    players = [];
    const usernameInputs = document.getElementsByClassName('inputUsername');
    _.forEach(usernameInputs, (input, i) => {
        players.push({id: i, name: input.value});
        if (_.isEmpty(input.value)) {
            canLaunchGame = false
            input.classList.add('attention');
            setTimeout(() => {
                input.classList.remove('attention');
            }, 1500);
        }
    });

    if (canLaunchGame) {
        localStorage.setItem('playersArray', JSON.stringify(players));
        location.href = 'game.html';
    } else {
        alertUsernames.style.display = 'block';
    }
});

buttonAlert.addEventListener('click', () => {
    alertUsernames.style.display = 'none';
});

function updateNbPlayers(nbPlayer) {
    htmlUsername = '';
    messageNbPlayers.innerHTML = `Vous avez sélectionné ${nbPlayer} joueurs, entrez vos pseudo :`;

    for(let i = 1; i <= nbPlayer; i++) {
        htmlUsername += `<div class='col containerInputUsername'><input type="text" class="form-control inputUsername" name="joueur${i}" placeholder="Joueur n°${i}"></input></div>`;
    }
    usernamesContainer.innerHTML = htmlUsername;
}