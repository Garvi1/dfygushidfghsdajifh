const Engine =  Matter.Engine;
const World = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var engine,world;
var ground,player,target;

function preload() {
    
}

function setup() {
createCanvas(400,800);
engine = Engine.create();
 world = engine.world;
 
ground = new Ground(200,780);
 player = new Player(100,770);
 target = new Target(250,770);
 
Engine.run()
}



function draw(){
Engine.update(engine)

ground.display();
player.display();
target.display();

drawSprites()
}
    
