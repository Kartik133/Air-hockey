const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball,player1,player2,x,y;

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2,height/2,20);

  player1 = new Player1(0,0,20,20);
}

function draw() {
  background(0);
  
  Engine.update(engine);

  x= mouseX;
  if(mouseX>=width/2) {
    y = mouseX;
  }
  
  player1.display();

  ball.display();
}