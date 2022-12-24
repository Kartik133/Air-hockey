class Ball {
    constructor(x,y,radius) {
      var options = {
       // isStatic:true,
        restitution:0.8,
        density:1.0,
        friction:1.0
      }
  
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("ball.gif");
      World.add(world,this.body);
    }
  
    display() {
      push();
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       imageMode(CENTER);
       image(this.image,0,0,2*this.radius,2*this.radius);
      pop();
    }
  }