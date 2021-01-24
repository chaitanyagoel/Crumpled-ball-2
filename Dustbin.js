class Dustbin {
  constructor(x,y)
{
this.x=x;
this.y=y;
this.binWidth=200;
this.binHeight=213;
this.thickness=20;

this.image=loadImage("image/dustbin.png")
this.bottomBody= Bodies.rectangle(this.x, this.y, this.binWidth, this.thickness, {isStatic:true})
this.leftBody= Bodies.rectangle(this.x-this.binWidth/2, this.y-this.binHeight/2, this.thickness, this.binHeight, {isStatic:true})
this.rightBody=Bodies.rectangle(this.x+this.binWidth/2, this.y-this.binHeight/2, this.thickness, this.binHeight, {isStatic:true})

World.add(world, this.bottomBody)
World.add(world, this.leftBody)
World.add(world, this.rightBody);
}
display()
{
var posBottom=this.bottomBody.position;
var posLeft=this.leftBody.position;
var posRight=this.rightBody.position;

push()
translate(posLeft.x, posLeft.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255);
rotate(this.angle);

pop();

push();
translate(posRight.x, posRight.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255);
rotate(-1*this.angle);
pop();

push();
translate(posBottom.x, posBottom.y);
rectMode(CENTER);
angleMode(RADIANS);
fill(255);
imageMode(CENTER);
image(this.image, 0,-this.binHeight/4, this.binWidth,  this.binHeight-50);
pop()

}
}