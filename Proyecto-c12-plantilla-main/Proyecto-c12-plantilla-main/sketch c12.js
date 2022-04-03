var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
pathImg= loadAnimation("path.png");
  //loadAnimation de boy (niño)
 boy1Img loadAnimation(Jake1.png);
 boy2Img loadAnimation(Jake2.png);
 boy3Img loadAnimation(jake3.png);
 boy4Img loadAnimation(jake4.png);
 boy5Img loadAnimation(jake5.png);
}

function setup(){
  
  path.createCanvas(400,400);
 //crear sprite de path (camino) 
//agregar imagen de path
path.addImage("ground" , pathImage);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.y = phat.width /2;
path.veolocityY = -4;
path.scale=1.2;

//crear sprite de boy (niño)
boy.createCanvas(400,400);
//agregar animación para boy
boy.addAnimation("running", jake1, jake2, jake3, jake4, jake5);
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rigthBoundary.visible = false;
  
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  if(keyDown("mouse")&& boy.x >= 10) {
    boy.velocityY = -10;
  }
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(rigthBoundary, leftBoundary);
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
