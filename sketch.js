const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var stick;
var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    stick=new Box(200,300,50,50);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    stick.display();
}