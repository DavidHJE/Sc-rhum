let ctx = null;
let canvasGame = null;
let tileH = 100; // Hauteur des cases
let tileW = 100; // Largeur des cases
let mapW = 10; // Nombre de cases par ligne
let mapH = 7; // Nombre de ligne

const playerIconH = 25;
const playerIconW = 25;

canvasGame = document.getElementById('gameCanvas');
ctx = canvasGame.getContext('2d')
scene = new createjs.Stage(canvasGame);
const questionModal = new bootstrap.Modal(document.getElementById('modalQuestion'));
let question; // réponse attendu
const questiontitle = document.getElementById('questionTitle');
const questionResponses = document.getElementById('questionResponses');;
const modalTitle = document.getElementById('staticBackdropLabel');;
const buttonValidateQuestion = document.getElementById('buttonValidateResponse');
let htmlResponses = "";

const endModal = new bootstrap.Modal(document.getElementById('modalEnd'));
const endModalTitle = document.getElementById('modalEndTitleLabel');

const containerPlayersInfos = document.getElementById('containerPlayersInfos');
const playersInfos = document.getElementsByClassName('playerInfo');

const startPos = [
  {
    x: 30, // Player 1
    y: 30
  },
  {
    x: 70, // Player 2
    y: 30
  },
  {
    x: 30, // Player 3
    y: 70
  },
  {
    x: 70, // Player 4
    y: 70
  }
];

const players = JSON.parse(localStorage.getItem('playersArray'));

containerPlayersInfos.innerHTML = '';
_.forEach(players, (player) => {
  containerPlayersInfos.innerHTML += `<div class="col py-2 playerInfo">${player.name}<image src="./assets/pawn${player.id}.png"></image></div>`;
});


let actualPlayerId = players[0].id;

// Creation des pions des joueurs
const imageJ1 = new Image(playerIconW, playerIconH);
imageJ1.src = './assets/pawn0.png';
const bitmapJ1 = new createjs.Bitmap(imageJ1);
bitmapJ1.regX = 12.5;
bitmapJ1.regY = 12.5;
bitmapJ1.shadow = new createjs.Shadow("#000000", 5, 5, 10);
bitmapJ1.x = startPos[0].x;
bitmapJ1.y = startPos[0].y;

const imageJ2 = new Image(playerIconW, playerIconH);
imageJ2.src = './assets/pawn1.png';
const bitmapJ2 = new createjs.Bitmap(imageJ2);
bitmapJ2.regX = 12.5;
bitmapJ2.regY = 12.5;
bitmapJ2.shadow = new createjs.Shadow("#000000", 5, 5, 10);
bitmapJ2.x = startPos[1].x;
bitmapJ2.y = startPos[1].y;

const imageJ3 = new Image(playerIconW, playerIconH);
imageJ3.src = './assets/pawn2.png';
const bitmapJ3 = new createjs.Bitmap(imageJ3);
bitmapJ3.regX = 12.5;
bitmapJ3.regY = 12.5;
bitmapJ3.shadow = new createjs.Shadow("#000000", 5, 5, 10);
bitmapJ3.x = startPos[2].x;
bitmapJ3.y = startPos[2].y;

const imageJ4 = new Image(playerIconW, playerIconH);
imageJ4.src = './assets/pawn3.png';
const bitmapJ4 = new createjs.Bitmap(imageJ4);
bitmapJ4.regX = 12.5;
bitmapJ4.regY = 12.5;
bitmapJ4.shadow = new createjs.Shadow("#000000", 5, 5, 10);
bitmapJ4.x = startPos[3].x;
bitmapJ4.y = startPos[3].y;

const playersPoints = [];

const tiles = [];

//CASES
const start = 0;
const end = 1;
const normal = 10;
const intrus = 2;
const malus2 = 3;
const malus4 = 4;
const bonus1 = 5;
const bonus2 = 6;
const quizz = 7;
const retourDepart = 8;

// Map
var gameMap = [
  start, intrus, normal, malus2, quizz, normal, bonus2, intrus, normal, normal,
  normal, normal, malus4, intrus, normal, normal, quizz, bonus1, normal, normal,
  intrus, bonus1, quizz, normal, normal, intrus, normal, normal, quizz, malus2,
  normal, normal, normal, normal, malus4, quizz, bonus2, normal, intrus, normal,
  quizz, normal, malus4, bonus2, intrus, normal, normal, quizz, normal, intrus,
  bonus2, normal, normal, quizz, normal, malus2, intrus, normal, normal, quizz,
  normal, quizz, intrus, bonus1, normal, normal, normal, malus4, retourDepart, end,
];

function initialise() {

  for (let y = 0; y < mapH; y++) {
    for (let x = 0; x < mapW; x++) {

      let image = new Image(tileW, tileH);

      switch (gameMap[((y * mapW) + x)]) {
        case start:
          image.src = "./assets/start.jpg";
          break;

        case intrus:
          image.src = "./assets/intrus.jpg";
          break;

        case malus4:
          image.src = "./assets/malus4.jpg";
          break;

        case malus2:
          image.src = "./assets/malus2.jpg";
          break;

        case bonus1:
          image.src = "./assets/bonus1.jpg";
          break;

        case bonus2:
          image.src = "./assets/bonus2.jpg";
          break;

        case end:
          image.src = "./assets/end.jpg";
          break;

        case quizz:
          image.src = "./assets/quizz.jpg";
          break;

        case retourDepart:
          image.src = "./assets/restart.png";
          break;

        case normal:
        default:
          image.src = "./assets/normal.jpg";
      }

      let tile = {
        type: gameMap[((y * mapW) + x)],
        x: x * tileW + (tileW / 2),
        y: y * tileH + (tileH / 2)
      }

      let bitmap = new createjs.Bitmap(image);
      bitmap.x = x * tileW;
      bitmap.y = y * tileH;
      bitmap.shadow = new createjs.Shadow("#000000", 5, 5, 10);

      tiles.push(tile);

      scene.addChild(bitmap);
    }
  }

  // Ajout des pions sur la map
  scene.addChild(bitmapJ1);
  scene.addChild(bitmapJ2);
  playersPoints.push(bitmapJ1, bitmapJ2);

  if (players.length == 3) {
    scene.addChild(bitmapJ3);
    playersPoints.push(bitmapJ3);
  }

  if (players.length == 4) {
    scene.addChild(bitmapJ3)
    scene.addChild(bitmapJ4);
    playersPoints.push(bitmapJ3, bitmapJ4);
  }
  playersInfos[actualPlayerId].classList.add("activePlayer");
  setTimeout(() => { scene.update(); }, 100); // timeout pour garantir chargements des images avant affichage
}

let buttonDice = document.getElementById('buttonDice');
buttonDice.addEventListener("click", function () {
  buttonDice.disabled = true;

  let tileLandedX;
  let tileLandedY;

  var randomDiceNumber = rando(1, 6)

  rollDice(randomDiceNumber);

  switch (actualPlayerId) {
    case 0:
      bitmapJ1.x += 100 * randomDiceNumber;
      if ((bitmapJ1.x > 1000 || bitmapJ1.x == 930) && bitmapJ1.y == 630) {
        bitmapJ1.x = 930;
        bitmapJ1.y = 630
        endGame();
      } else if (bitmapJ1.x > 1000) {
        bitmapJ1.x -= 1000;
        bitmapJ1.y += 100;
      };
      tileLandedX = Math.round(bitmapJ1.x / 50) * 50;
      tileLandedY = Math.round(bitmapJ1.y / 50) * 50;
      break;
    case 1:
      bitmapJ2.x += 100 * randomDiceNumber;
      if ((bitmapJ2.x > 1000 || bitmapJ2.x == 970) && bitmapJ2.y == 630) {
        bitmapJ2.x = 970;
        bitmapJ2.y = 630
        endGame();
      } else if (bitmapJ2.x > 1000) {
        bitmapJ2.x -= 1000;
        bitmapJ2.y += 100;
      }
      tileLandedX = Math.round(bitmapJ2.x / 50) * 50;
      tileLandedY = Math.round(bitmapJ2.y / 50) * 50;
      break;
    case 2:
      bitmapJ3.x += 100 * randomDiceNumber;
      if ((bitmapJ3.x > 1000 || bitmapJ3.x == 930) && bitmapJ3.y == 670) {
        bitmapJ3.x = 930;
        bitmapJ3.y = 670
        endGame();
      } else if (bitmapJ3.x > 1000) {
        bitmapJ3.x -= 1000;
        bitmapJ3.y += 100;
      }
      tileLandedX = Math.round(bitmapJ3.x / 50) * 50;
      tileLandedY = Math.round(bitmapJ3.y / 50) * 50;
      break;
    case 3:
      bitmapJ4.x += 100 * randomDiceNumber;
      if ((bitmapJ4.x > 1000 || bitmapJ4.x == 970) && bitmapJ4.y == 670) {
        bitmapJ4.x = 970;
        bitmapJ4.y = 670
        endGame();
      } else if (bitmapJ4.x > 1000) {
        bitmapJ4.x -= 1000;
        bitmapJ4.y += 100;
      }
      tileLandedX = Math.round(bitmapJ4.x / 50) * 50;
      tileLandedY = Math.round(bitmapJ4.y / 50) * 50;
      break;
    default:
      break;
  }
  // Update the scene to move the player pawn
  setTimeout(() => {
    scene.update();
    // Get the tile where player landed
    const tileLanded = _.find(tiles, function (tile) { return tile.x == tileLandedX && tile.y == tileLandedY; });

    // Execute the effect of the tile
    executeTile(tileLanded, actualPlayerId);

  }, 800);
});

function executeTile(tile, actualPlayerId) {
  switch (tile.type) {
    case intrus:
      // Get random question
      question = questions.intruder[Math.floor((questions.intruder.length) * Math.random())]
      htmlResponses = '';
      // Populate modal
      modalTitle.innerHTML = '<h1>Trouvez l\'intrus</h1>';
      _.forEach(question.proposed_answer, (reponse, index) => {
        htmlResponses +=
          `<div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="${index}">
          <label class="form-check-label" for="flexRadioDefault1">${reponse}</label>
        </div>`;
      });
      questionResponses.innerHTML = htmlResponses;
      questiontitle.innerHTML = question.question;

      // Open modal
      questionModal.show();
      break;

    case malus4:
      playersPoints[actualPlayerId].x -= 400;
      if (playersPoints[actualPlayerId].x < 0) {
        playersPoints[actualPlayerId].x += 1000;
        playersPoints[actualPlayerId].y -= 100;
      }
      endTurn();
      break;

    case malus2:
      playersPoints[actualPlayerId].x -= 200;
      if (playersPoints[actualPlayerId].x < 0) {
        playersPoints[actualPlayerId].x += 1000;
        playersPoints[actualPlayerId].y -= 100;
      }
      endTurn();
      break;

    case bonus1:
      playersPoints[actualPlayerId].x += 100;
      if (playersPoints[actualPlayerId].x > 1000) {
        playersPoints[actualPlayerId].x -= 1000;
        playersPoints[actualPlayerId].y += 100;
      }
      endTurn();
      break;

    case bonus2:
      playersPoints[actualPlayerId].x += 200;
      if (playersPoints[actualPlayerId].x > 1000) {
        playersPoints[actualPlayerId].x -= 1000;
        playersPoints[actualPlayerId].y += 100;
      }
      endTurn();
      break;

    case quizz:
      // Get random question
      question = questions.quiz[Math.floor((questions.quiz.length) * Math.random())]
      htmlResponses = '';
      // Populate modal
      modalTitle.innerHTML = '<h1>Quizz</h1>';
      _.forEach(question.proposed_answer, (reponse, index) => {
        htmlResponses +=
          `<div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="${index}">
          <label class="form-check-label" for="flexRadioDefault1">${reponse}</label>
        </div>`;
      });
      questionResponses.innerHTML = htmlResponses;
      questiontitle.innerHTML = question.question;

      // Open modal
      questionModal.show();
      break;

    case retourDepart:
      playersPoints[actualPlayerId].x = startPos[actualPlayerId].x;
      playersPoints[actualPlayerId].y = startPos[actualPlayerId].y;
      endTurn();
      break;

    case end:
    case start:
    case normal:
    default:
      endTurn();
      break;
  }
}

function rollDice(diceNumber) {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = diceNumber;
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

buttonValidateQuestion.addEventListener("click", () => {
  let selectedResponse = document.querySelector('input[type=radio]:checked');
  if(selectedResponse) {
    if(_.toNumber(selectedResponse.id) == question.answer_index){
      iziToast.success({
        message: 'Bonne réponse ! Vous avancez d\'une case supplémentaire',
        position: 'center',
        timeout: 1500,
        closeOnEscape: true,
        closeOnClick: true,
        transitionIn: 'flipInX'
      });
      playersPoints[actualPlayerId].x += 100;
      if (playersPoints[actualPlayerId].x > 1000) {
        playersPoints[actualPlayerId].x -= 1000;
        playersPoints[actualPlayerId].y += 100;
      }
    }else {
      iziToast.error({
        message: 'C\'est non',
        position: 'center',
        timeout: 1500,
        closeOnEscape: true,
        closeOnClick: true,
        transitionIn: 'flipInX'
      });
    }
    questionModal.hide();
    endTurn();
  }
});

function endTurn() {
  playersInfos[actualPlayerId].classList.remove("activePlayer");

  setTimeout(() => {
    actualPlayerId++;
    if (actualPlayerId > _.last(players).id) {
      actualPlayerId = 0;
    }
    playersInfos[actualPlayerId].classList.add("activePlayer");
    scene.update();
    buttonDice.disabled = false;
  }, 1000);
}

function endGame() {
  endModalTitle.innerHTML = `Victoire de ${players[actualPlayerId].name}`;
  endModal.show()
}

initialise();