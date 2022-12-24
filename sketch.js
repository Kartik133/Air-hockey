const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var player1,y,player2,ground1,ground2,ground3,ground4,ball;

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  engine.gravity = 0;

  player1 = new Player1(width/2,3*height/4,50);
  player2 = new Player2(width/2,height/4,48.8);
  ball = new Ball(width/2,height/2,25);
  ground1 = Bodies.rectangle(width/2,height,width,50,{isStatic:true,restitution:0.8,density:10000});
  ground2 = Bodies.rectangle(width/2,0,width,50,{isStatic:true,restitution:0.8,density:10000});
  ground3 = Bodies.rectangle(0,height/2,50,height,{isStatic:true,restitution:0.8,density:10000});
  ground4 = Bodies.rectangle(width,height/2,50,height,{isStatic:true,restitution:0.8,density:10000});
  World.add(world,ground1);
  World.add(world,ground2);
  World.add(world,ground3);
  World.add(world,ground4);
}

function draw() {
  background(0);

  Engine.update(engine);

  if(mouseY>=height/2) {
    y = mouseY;
  }
  
  player1.display();
  player2.display();
  ball.display();
}