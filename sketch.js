const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bg,tower,tower_img;


function preload() {
 bg=loadImage("assets/background.gif");
 tower_img=loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(600,600,1200,10,options)
  World.add(world,ground)

  tower=Bodies.rectangle(150,350,160,310,{isStatic:true})
  World.add(world,tower)
 imageMode(CENTER)
}

function draw() {
  background(180);
 image(bg,600,300,1200,600);
  rectMode(CENTER)
  fill("gray")
  rect(ground.position.x,ground.position.y,1200,10)
  
  image(tower_img,tower.position.x,tower.position.y,160,310)
  Engine.update(engine);
  
   
}
