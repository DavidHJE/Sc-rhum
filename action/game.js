let ctx = null;
let canvasGame = null;
let tileH = 100;
let tileW = 100;

let mapW = 10;
let mapH = 7;

canvasGame = document.getElementById('gameCanvas');
ctx = canvasGame.getContext('2d')
scene = new createjs.Stage(canvasGame);

const j1Point = new createjs.Shape();
j1Point.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 10);
j1Point.x = 25;
j1Point.y = 25;
scene.addChild(j1Point);

const j2Point = new createjs.Shape();
j2Point.graphics.beginFill("Red").drawCircle(0, 0, 10);
j2Point.x = 75;
j2Point.y = 25;

const j3Point = new createjs.Shape();
j3Point.graphics.beginFill("Yellow").drawCircle(0, 0, 10);
j3Point.x = 25;
j3Point.y = 75;


//CASES
const depart = 0;
const arrivee = 1;
const normal = 10;
const intrus = 2;
const malus2 = 3;
const malus4 = 4;
const bonus1 = 5;
const bonus2 = 6;
const quizz = 7;
const retourDepart = 8;





// normal L * 7 H
var gameMap = [
  depart, intrus, normal, malus2, quizz, normal, bonus2, intrus, normal, normal,
  normal, normal, malus4, intrus, normal, normal, quizz, bonus1, normal, normal,
  intrus, bonus1, quizz, normal, normal, intrus, normal, normal, quizz, malus2,
  normal, normal, normal, normal, malus4, quizz, bonus2, normal, intrus, normal,
  quizz, normal, malus4, bonus2, intrus, normal, normal, quizz, normal, intrus,
  bonus2, normal, normal, quizz, normal, malus2, intrus, normal, normal, quizz,
  normal, quizz, intrus, bonus1, normal, normal, normal, malus4, retourDepart, arrivee,
];

function initialise() {

    for(let y = 0; y < mapH; y++) {
      for(let x = 0; x < mapW; x++) {
        
        let tile = new createjs.Shape();
        let image = new Image(100,100);

        switch(gameMap[((y*mapW)+x)]) {
          case depart:
            tile.graphics.beginFill('#bdbdbd').drawRect(0, 0, tileW, tileH);
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
            
          case arrivee:
            tile.graphics.beginFill('#d8f500').drawRect(0, 0, tileW, tileH);
            break;

          case quizz:
            image.src = "./assets/quizz.png";
            break;

          case retourDepart:
            image.src = "./assets/death.png";
            break;
          
          
          case normal:
          default:
            tile.graphics.beginFill('#ccffcc').drawRect(0, 0, tileW, tileH);

        }
        tile.x = x*tileW;
        tile.y = y*tileH;

        let bitmap = new createjs.Bitmap(image);
        
        bitmap.x = x*tileW;
        bitmap.y =  y*tileH;

        scene.addChild(tile);
        scene.addChild(bitmap);
      }
    }

    scene.addChild(j1Point);
    scene.addChild(j2Point);
    scene.addChild(j3Point);


  setTimeout(() => { scene.update();}, 200);
  //scene.update();
}

let buttonDice = document.getElementById('buttonDice');
let de = document.getElementById('de');
buttonDice.addEventListener("click", function() {
  var randomDice = Math.floor(6*Math.random())+1;
  j1Point.x += 100 * randomDice;
  if((j1Point.x > 1000 || j1Point.x == 925) && j1Point.y == 625) {
    j1Point.x = 925;
    j1Point.y = 625
    console.log("GAGNE");
  } else if (j1Point.x > 1000) {
    j1Point.x -= 1000;
    j1Point.y +=100;
  }

  de.innerHTML = randomDice;
  scene.update();
});

initialise();

