class Player1 {
  constructor(x,y,radius) {
    var options = {
                    'restitution':0.8,
                    'friction':1.0,
                    'density':1.0
                  }
  
    this.body = Bodies.cirle(x,y,radius,options);
    this.radius = raidus;
    World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    push();
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, 0,2*this.radius,2*this.radius);
    pop();
  }
}