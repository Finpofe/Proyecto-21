var bg, dormir, cepillar, ejercitarse, alimentarse, lavarse, moverse;
var astronauta;

function preload(){
bg = loadImage("images/iss.png");
dormir = loadAnimation("images/sleep.png");
cepillar = loadAnimation("images/brush.png");
ejercitarse = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym11.png","images/gym11.png","images/gym12.png","images/gym12.png");
alimentarse = loadAnimation("images/eat1.png","images/eat2.png","images/drink1.png","images/drink2.png");
lavarse = loadAnimation("images/bath1.png","images/bath2.png");
moverse = loadAnimation("images/move.png","images/move1.png");
}

function setup() {
  createCanvas(600, 500);
  astronauta = createSprite(300,230);
  astronauta.addAnimation("descansar", dormir);
  astronauta.scale = 0.1;
}

function draw() {
  background(bg);
  
  textSize(20);
  fill("white")
  text("Instrucciones:",20, 35);
  textSize(15);
  text("Flecha hacia Arriba = Cepillarse",20, 55);
  text("Flecha hacia Abajo = Ejercitarse",20, 70);
  text("Flecha hacia la Izquierda = Comer",20, 85);
  text("Flecha hacia la Derecha = Bañarse",20, 100);
  text("tecla m = Moverse",20, 115);
  
  edges = createEdgeSprites();
  astronauta.bounceOff(edges);
  
   if(keyDown("UP_ARROW")){
    astronauta.addAnimation("Cepillarse", cepillar);
    astronauta.changeAnimation("Cepillarse");
    astronauta.y = 350;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronauta.addAnimation("Ejercitarse", ejercitarse);
    astronauta.changeAnimation("Ejercitarse");
    astronauta.y = 350;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronauta.addAnimation("Comer", alimentarse);
    astronauta.changeAnimation("Comer");
    astronauta.x = 150;
    astronauta.y = 350;
    astronauta.velocityX = 0.5;
    astronauta.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronauta.addAnimation("Bañarse", lavarse);
    astronauta.changeAnimation("Bañarse");
    astronauta.x = 300;
    astronauta.velocityX = 0;
    astronauta.velocityY = 0;
  }

  if(keyDown("m")){
    astronauta.addAnimation("Moverse", moverse);
    astronauta.changeAnimation("Moverse");
    astronauta.velocityX = 1;
    astronauta.velocityY = 1;
  }
  
  drawSprites();

}