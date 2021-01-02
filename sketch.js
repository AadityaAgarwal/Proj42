const Body=Matter.Body;
const Bodies= Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var man,manImg;
var engine,world;

var rainArray;

var maxdrop=100;
function preload(){
    manImg=loadImage("walking_3.png");
}

function setup(){
   createCanvas(500,500)

   rainArray=[];

   engine = Engine.create();
   world = engine.world;

   man=Bodies.rectangle(400,600,10,10,{isStatic: true});
   World.add(world,man);

   for(var i=0; i<maxdrop; i++){
    rainArray.push(new Rain(random(0,500),0));
  }
}

function draw(){
    background(rgb(1,0,1))
    imageMode(CENTER);
    rectMode(CENTER);

    
    fill("white")
    image(manImg,man.position.x,man.position.y,10,10);

    if(frameCount%100){
    for (var r=0; r<rainArray.length; r++){
      rainArray[r].display();
    }
  }
}   

