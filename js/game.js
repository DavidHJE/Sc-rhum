let ctx = null;
let canvasGame = null;
let tileH = 100; // Hauteur des cases
let tileW = 100; // Largeur des cases
let mapW = 10; // Nombre de cases par ligne
let mapH = 7; // Nombre de ligne

canvasGame = document.getElementById('gameCanvas');
ctx = canvasGame.getContext('2d')
scene = new createjs.Stage(canvasGame);

const startPos = [
  {
    x: 30,
    y: 30
  },
  {
    x: 70,
    y: 30
  },
  {
    x: 30,
    y: 70
  },
  {
    x: 70,
    y: 70
  }
];

let players = [
  {
    id: 0,
    name: "Joueur1",
  },
  {
    id: 1,
    name: "Joueur2",
  }
];

let actualPlayerId = players[0].id;

// Creation des pions des joueurs
const j1Point = new createjs.Shape();
j1Point.graphics.beginFill("Blue").drawCircle(0, 0, 10);
j1Point.x = startPos[0].x;
j1Point.y = startPos[0].y;
scene.addChild(j1Point);

const j2Point = new createjs.Shape();
j2Point.graphics.beginFill("Red").drawCircle(0, 0, 10);
j2Point.x = startPos[1].x;
j2Point.y = startPos[1].y;

const j3Point = new createjs.Shape();
j3Point.graphics.beginFill("Green").drawCircle(0, 0, 10);
j3Point.x = startPos[2].x;
j3Point.y = startPos[2].y;

const j4Point = new createjs.Shape();
j4Point.graphics.beginFill("Yellow").drawCircle(0, 0, 10);
j4Point.x = startPos[3].x;
j4Point.y = startPos[3].y;

const playersPoints = [];


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

const tiles = [];



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

      let tileShape = new createjs.Shape();
      let image = new Image(tileW, tileH);

      switch (gameMap[((y * mapW) + x)]) {
        case start:
          tileShape.graphics.beginFill('#bdbdbd').drawRect(0, 0, tileW, tileH);
          break;

        case intrus:
          image.src = "./assets/intrus.png";
          break;

        case malus4:
          image.src = "./assets/malus4.png";
          break;

        case malus2:
          image.src = "./assets/malus2.png";
          break;

        case bonus1:
          image.src = "./assets/bonus1.png";
          break;

        case bonus2:
          image.src = "./assets/bonus2.png";
          break;

        case end:
          tileShape.graphics.beginFill('#d8f500').drawRect(0, 0, tileW, tileH);
          break;

        case quizz:
          image.src = "./assets/quizz.png";
          break;

        case retourDepart:
          image.src = "./assets/death.png";
          break;


        case normal:
        default:
          tileShape.graphics.beginFill('#ccffcc').drawRect(0, 0, tileW, tileH);

      }
      tileShape.x = x * tileW;
      tileShape.y = y * tileH;

      let tile = {
        type: gameMap[((y * mapW) + x)],
        x: x * tileW + (tileW / 2),
        y: y * tileH + (tileH / 2 )
      }

      let bitmap = new createjs.Bitmap(image);

      bitmap.x = x * tileW;
      bitmap.y = y * tileH;

      tiles.push(tile);

      scene.addChild(tileShape);
      scene.addChild(bitmap);
    }
  }

  // Ajout des pions sur la map
  scene.addChild(j1Point);
  scene.addChild(j2Point);
  playersPoints.push(j1Point, j2Point);

  if (players.length == 3) {
    scene.addChild(j3Point);
    playersPoints.push(j3Point);
  }

  if (players.length == 4) {
    scene.addChild(j3Point)
    scene.addChild(j4Point);
    playersPoints.push(j3Point, j4Point);
  }

  console.log(playersPoints)


  setTimeout(() => { scene.update(); }, 200); // timeout pour garantir chargements des images avant affichage
  //scene.update();
}

let buttonDice = document.getElementById('buttonDice');
let dice = document.getElementById('diceDiv');
buttonDice.addEventListener("click", function () {
  let tileLandedX;
  let tileLandedY;

  var randomDice = Math.floor(6 * Math.random()) + 1;

  switch (actualPlayerId) {
    case 0:
      j1Point.x += 100 * randomDice;
      if ((j1Point.x > 1000 || j1Point.x == 930) && j1Point.y == 630) {
        j1Point.x = 930;
        j1Point.y = 630
        console.log(`${players[0].name} a gagné !`);
      } else if (j1Point.x > 1000) {
        j1Point.x -= 1000;
        j1Point.y += 100;
      };
      tileLandedX = Math.round(j1Point.x / 50) * 50;
      tileLandedY = Math.round(j1Point.y / 50) * 50;
      break;
    case 1:
      j2Point.x += 100 * randomDice;
      if ((j2Point.x > 1000 || j2Point.x == 970) && j2Point.y == 630) {
        j2Point.x = 970;
        j2Point.y = 630
        console.log(`${players[1].name} a gagné !`);
      } else if (j2Point.x > 1000) {
        j2Point.x -= 1000;
        j2Point.y += 100;
      }
      tileLandedX = Math.round(j2Point.x / 50) * 50;
      tileLandedY = Math.round(j2Point.y / 50) * 50;
      break;
    case 2:
      j3Point.x += 100 * randomDice;
      if ((j3Point.x > 1000 || j3Point.x == 930) && j3Point.y == 670) {
        j3Point.x = 930;
        j3Point.y = 670
        console.log(`${players[2].name} a gagné !`);
      } else if (j3Point.x > 1000) {
        j3Point.x -= 1000;
        j3Point.y += 100;
      }
      tileLandedX = Math.round(j3Point.x / 50) * 50;
      tileLandedY = Math.round(j3Point.y / 50) * 50;
      break;
    case 3:
      j4Point.x += 100 * randomDice;
      if ((j4Point.x > 1000 || j4Point.x == 970) && j4Point.y == 670) {
        j4Point.x = 970;
        j4Point.y = 670
        console.log(`${players[3].name} a gagné !`);
      } else if (j4Point.x > 1000) {
        j4Point.x -= 1000;
        j4Point.y += 100;
      }
      tileLandedX = Math.round(j4Point.x / 50) * 50;
      tileLandedY = Math.round(j4Point.y / 50) * 50;
      break;
    default:
      break;
  }
  scene.update();

  const tileLanded = _.find(tiles, function(tile) { return tile.x == tileLandedX && tile.y == tileLandedY; });

  executeTile(tileLanded, actualPlayerId);

  diceDiv.innerHTML = randomDice + ' / ' + actualPlayerId;
  setTimeout(() => { scene.update(); }, 500);
  actualPlayerId++;
  if(actualPlayerId > _.last(players).id) {
    actualPlayerId = 0;
  }
});

function executeTile(tile, actualPlayerId) {
  console.log(tile);

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