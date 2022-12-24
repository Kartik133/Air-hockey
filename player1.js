class Player1 {
  constructor(x,y,radius) {
    var options = {
     // isStatic:true,
      restitution:0.8,
      density:1000.0,
      friction:1.0
    }

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("player1.gif");
    World.add(world,this.body);
  }

  display() {
    push();
     this.body.position.x = mouseX;
     if(mouseY>=height/2) {
      this.body.position.y = mouseY;
     }else {
      this.body.position.y = 3*height/4;
     }
     translate(this.body.position.x,this.body.position.y);
     rotate(this.body.angle);
     imageMode(CENTER);
     image(this.image,0,0,2*this.radius,2*this.radius);
     console.log(this.body.position.x,mouseX,this.body.position.y,mouseY);
    pop();
  }
}