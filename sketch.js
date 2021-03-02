const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world, ground, box1, box2;

function setup() {
  createCanvas(400,400);

 engine = Engine.create();
 world = engine.world;

 ground = new Ground(200, 390, 400, 20);

 box1 = new Box(200,300,50,50);
box2 = new Box(240,100,50,80);


 console.log(ground);
}

function draw() {
  background("blue");  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}