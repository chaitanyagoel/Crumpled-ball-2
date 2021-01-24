
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinobj,dustbin,dustbin1,dustbin3,paperobject,groundobject;

function preload()
{
  
}

function setup() {
   createCanvas(1400, 400);
   engine = Engine.create();
   world = engine.world;
 
 paperobject =new Paper(150,335,50,50)
 groundobject = new Ground(670,height,1400,30);
 dustbinobj = new Dustbin(1100,350);

 //dustbin = new Dustbin(1017,312,15,130); 
// dustbin1 = new Dustbin(1183,312,15,130);
 //dustbin3 = new Dustbin(1100,380,130,15);
 
 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  

 background("white");
 paperobject.display();
 groundobject.display();
dustbinobj.display();




 

}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:630,y:-630});

}

}
