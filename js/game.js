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

const players = [
  {
    id: 0,
    name: "Joueur1",
  },
  {
    id: 1,
    name: "Joueur2",
  },
  {
    id: 2,
    name: "Joueur3",
  },
  {
    id: 3,
    name: "Joueur4",
  }
];

let actualPlayerId = players[0].id;

// Creation des pions des joueurs
const imageJ1 = new Image(playerIconW, playerIconH);
imageJ1.src = './assets/pawnJ1.png';
const bitmapJ1 = new createjs.Bitmap(imageJ1);
bitmapJ1.regX = 12.5;
bitmapJ1.regY = 12.5;
bitmapJ1.x = startPos[0].x;
bitmapJ1.y = startPos[0].y;

const imageJ2 = new Image(playerIconW, playerIconH);
imageJ2.src = './assets/pawnJ2.png';
const bitmapJ2 = new createjs.Bitmap(imageJ2);
bitmapJ2.regX = 12.5;
bitmapJ2.regY = 12.5;
bitmapJ2.x = startPos[1].x;
bitmapJ2.y = startPos[1].y;

const imageJ3 = new Image(playerIconW, playerIconH);
imageJ3.src = './assets/pawnJ3.png';
const bitmapJ3 = new createjs.Bitmap(imageJ3);
bitmapJ3.regX = 12.5;
bitmapJ3.regY = 12.5;
bitmapJ3.x = startPos[2].x;
bitmapJ3.y = startPos[2].y;

const imageJ4 = new Image(playerIconW, playerIconH);
imageJ4.src = './assets/pawnJ4.png';
const bitmapJ4 = new createjs.Bitmap(imageJ4);
bitmapJ4.regX = 12.5;
bitmapJ4.regY = 12.5;
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
        y: y * tileH + (tileH / 2 )
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

  setTimeout(() => { scene.update(); }, 100); // timeout pour garantir chargements des images avant affichage
}

let buttonDice = document.getElementById('buttonDice');
let dice = document.getElementById('diceDiv');
buttonDice.addEventListener("click", function () {
  let tileLandedX;
  let tileLandedY;

  var randomDice = Math.floor(6 * Math.random()) + 1;

  switch (actualPlayerId) {
    case 0:
      //createjs.Tween.get(bitmapJ1).to({x: bitmapJ1.x + (100 * randomDice)}, 300, createjs.Ease.linear);
      bitmapJ1.x += 100 * randomDice;    
      if ((bitmapJ1.x > 1000 || bitmapJ1.x == 930) && bitmapJ1.y == 630) {
        bitmapJ1.x = 930;
        bitmapJ1.y = 630
        console.log(`${players[0].name} a gagné !`);
      } else if (bitmapJ1.x > 1000) {
        bitmapJ1.x -= 1000;
        bitmapJ1.y += 100;
      };
      tileLandedX = Math.round(bitmapJ1.x / 50) * 50;
      tileLandedY = Math.round(bitmapJ1.y / 50) * 50;
      break;
    case 1:
      bitmapJ2.x += 100 * randomDice;
      if ((bitmapJ2.x > 1000 || bitmapJ2.x == 970) && bitmapJ2.y == 630) {
        bitmapJ2.x = 970;
        bitmapJ2.y = 630
        console.log(`${players[1].name} a gagné !`);
      } else if (bitmapJ2.x > 1000) {
        bitmapJ2.x -= 1000;
        bitmapJ2.y += 100;
      }
      tileLandedX = Math.round(bitmapJ2.x / 50) * 50;
      tileLandedY = Math.round(bitmapJ2.y / 50) * 50;
      break;
    case 2:
      bitmapJ3.x += 100 * randomDice;
      if ((bitmapJ3.x > 1000 || bitmapJ3.x == 930) && bitmapJ3.y == 670) {
        bitmapJ3.x = 930;
        bitmapJ3.y = 670
        console.log(`${players[2].name} a gagné !`);
      } else if (bitmapJ3.x > 1000) {
        bitmapJ3.x -= 1000;
        bitmapJ3.y += 100;
      }
      tileLandedX = Math.round(bitmapJ3.x / 50) * 50;
      tileLandedY = Math.round(bitmapJ3.y / 50) * 50;
      break;
    case 3:
      bitmapJ4.x += 100 * randomDice;
      if ((bitmapJ4.x > 1000 || bitmapJ4.x == 970) && bitmapJ4.y == 670) {
        bitmapJ4.x = 970;
        bitmapJ4.y = 670
        console.log(`${players[3].name} a gagné !`);
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
  setTimeout(() => { scene.update(); }, 200);

  // Get the tile where player landed
  const tileLanded = _.find(tiles, function(tile) { return tile.x == tileLandedX && tile.y == tileLandedY; });

  // Execute the effect of the tile
  executeTile(tileLanded, actualPlayerId);

  diceDiv.innerHTML = randomDice + ' / ' + actualPlayerId;
  setTimeout(() => { scene.update(); }, 600);

  actualPlayerId++;
  if(actualPlayerId > _.last(players).id) {
    actualPlayerId = 0;
  }
});

function executeTile(tile, actualPlayerId) {

  switch (tile.type) {
    case intrus:
      console.log("LANCER JEU INTRUS");
      break;

    case malus4:
      playersPoints[actualPlayerId].x -= 400;
      if (playersPoints[actualPlayerId].x < 0) {
        playersPoints[actualPlayerId].x += 1000;
        playersPoints[actualPlayerId].y -= 100;
      }
      break;

    case malus2:
      playersPoints[actualPlayerId].x -= 200;
      if (playersPoints[actualPlayerId].x < 0) {
        playersPoints[actualPlayerId].x += 1000;
        playersPoints[actualPlayerId].y -= 100;
      }
      break;

    case bonus1:
      playersPoints[actualPlayerId].x += 100;
      if (playersPoints[actualPlayerId].x > 1000) {
        playersPoints[actualPlayerId].x -= 1000;
        playersPoints[actualPlayerId].y += 100;
      }
      break;

    case bonus2:
      playersPoints[actualPlayerId].x += 200;
      if (playersPoints[actualPlayerId].x > 1000) {
        playersPoints[actualPlayerId].x -= 1000;
        playersPoints[actualPlayerId].y += 100;
      }
      break;

    case quizz:
      console.log("LANCER JEU INTRUS");
      break;

    case retourDepart:
      playersPoints[actualPlayerId].x = startPos[actualPlayerId].x;
      playersPoints[actualPlayerId].y = startPos[actualPlayerId].y;
      break;

    case end:
    case start:
    case normal:
    default:
      break;
  }
}

initialise();