const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var BgImage, Bg;
var snow=[];
var snow1img,snow2img;

function preload() {
  BgImage = loadImage("snow2.jpg")

}
function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;
  
  if(frameCount % 50 === 0){

    for(var i=0; i<200; i++){
      snow.push(new createSnow(random(0,800), random(0,800)));
      
    }
  }

}

function draw() {
  background(BgImage);  
  Engine.update(engine);
  
  for(var i = 0; i<200; i++){
        snow[i].showDrop();
        snow[i].updateY()
  }
  
 
  drawSprites();
}

