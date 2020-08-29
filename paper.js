class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':false
      }
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x, y, r ,options);
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      //imageMode(CENTER);
      ellipseMode(RADIUS);
      fill("white");
      image(this.image,0,0,this.r, this.r);
      pop();
    }
  };
  