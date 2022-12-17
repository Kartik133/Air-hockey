const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball,player1,player2,x,y;

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(mouseX,y,20);
}

function draw() {
  background(0);
  
  Engine.update(engine);
  
  if(mouseY>=width/2) {
    y = mouseX;
  }

  ball.display();
}
