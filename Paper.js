class Paper{
    constructor(x,y,r)
    {

  var options={
      'isStatic':false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.4
  }
  this.x=x;
  this.y=y;
  this.r=r;
  this.body = Bodies.circle(this.x,this.y,r, options);
  this.image = loadImage("image/paper.ng.png")
  World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        rotate(angle);
        fill("pink")
        image(this.image,0,0,this.r,this.r);
        pop()

    }

};