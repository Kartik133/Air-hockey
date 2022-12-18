var ball,player1,player2,player1_img,player2_img,x,y,ball_img,edge1,edge2,edge3,edge4,edge5,edge6,edge1_img,edge2_img,edge3_img,edge4_img,edge5_img,edge6_img;

function preload() {
 ball_img = loadImage("ball.gif");
 player1_img = loadImage("player1.gif");
 //player2_img = loadImage("player2.gif");
 //edge1_img = loadImage("edge1.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  ball = createSprite(width/2,height/2,50,50);
  ball.addImage(ball_img);

  player1 = createSprite(width/2,height/4,100,100);
  player1.addImage(player1_img);

  player2 = createSprite(width/2,3*height/4,100,100);
  //player2.addImage(player2_img);
}

function draw() {
  background(0);

  player2.x = mouseX;

  if(mouseY>=height/2) {
    player2.y = mouseY;
  }

  drawSprites();

  ball.bounce(player1);
  ball.bounce(player2);
  /*ball.bounceOff(edge1);
  ball.bounceOff(edge2);
  ball.bounceOff(edge3);
  ball.bounceOff(edge4);
  ball.bounceOff(edge5);
  ball.bounceOff(edge6);*/
}