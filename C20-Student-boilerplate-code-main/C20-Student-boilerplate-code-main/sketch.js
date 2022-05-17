
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ball3;
var ground;
var ground2;
var small_ground;
var angle = 15;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ball3_options = {
    restitution: 1.25,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  ground2 = Bodies.rectangle(370,290,400,20,ground_options);
  World.add(world,ground2);
  small_ground = Bodies.rectangle(200,200,100,20,ground_options);
  World.add(world,small_ground);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(200,10,20,ball_options);
  ball3 = Bodies.circle(150,10,20,ball3_options);
  World.add(world,ball3);
  World.add(world,ball2);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground2.position.x,ground2.position.y,400,20);
  Matter.Body.rotate(small_ground,angle)
  push();
  translate(small_ground.position.x,small_ground.position.y)
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.15;
}

