class Player1 {
  constructor(x,y,width,height) {
    var options = {
                    'restitution':0.8,
                    'friction':1.0,
                    'density':1.0
                  }
  
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    push();
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);
     fill(255);
     rectMode(CENTER);
     rect(this.body.position.x,this.body.position.y,);
    pop();
  }
}