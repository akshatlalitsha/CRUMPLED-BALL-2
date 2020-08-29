const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin1,dustbin2,dustbin3;
var paperball;
var ground;
var dustbin,dustbinimg
function preload()
{
dustbinimg=loadImage("dustbingreen.png");

}




function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    dustbin=createSprite(660,580,150,50);
    dustbin.addImage(dustbinimg);
    dustbin.scale=0.63;
    dustbin1 = new Dustbin(650,650,150,10);
    dustbin2 = new Dustbin(580,630,10,80);
    dustbin3 = new Dustbin(730,630,10,80);
    paperball = new Paper(150,400,40);
    ground = new Ground(400,670,800,20);
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    paperball.display();
   
drawSprites();
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperball.body,paperball.body.position ,{ x:160,y:-200});
   
}
}
