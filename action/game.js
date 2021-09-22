let ctx = null;
let canvasGame = null;
let tileH = 100;
let tileW = 100;

let mapW = 10;
let mapH = 7;



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
  canvasGame = document.getElementById('gameCanvas');
  ctx = canvasGame.getContext('2d')
  scene = new createjs.Stage(canvasGame);

    for(let y = 0; y < mapH; y++) {
      for(let x = 0; x < mapW; x++) {
        
        let tile = new createjs.Shape();
        let image = new Image(100,100);

        switch(gameMap[((y*mapW)+x)]) {
          case depart:
            tile.graphics.beginFill('#bdbdbd').drawRect(0, 0, tileW, tileH);
            break;

          case intrus:
            tile.graphics.beginFill('#118eed').drawRect(0, 0, tileW, tileH);
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
            tile.graphics.beginFill('#e105f5').drawRect(0, 0, tileW, tileH);
            break;

          case retourDepart:
            tile.graphics.beginFill('#000000').drawRect(0, 0, tileW, tileH);
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

  setTimeout(() => { scene.update();}, 200);
  //scene.update();
}

initialise();

