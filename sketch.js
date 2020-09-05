const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof, bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new 	Roof(400, 250, 150, 20);
	bob1 = new Bob(340, 350, 30);
	bob2 = new Bob(370, 350, 30);
	bob3 = new Bob(400, 350, 30);
	bob4 = new Bob(430, 350, 30);
	bob5 = new Bob(460, 350, 30);
	rope1 = new Chain(bob1.body, {x: 340, y: 250});
	rope2 = new Chain(bob2.body, {x: 370, y: 250});
	rope3 = new Chain(bob3.body, {x: 400, y: 250});
	rope4 = new Chain(bob4.body, {x: 430, y: 250});
	rope5 = new Chain(bob5.body, {x: 460, y: 250});

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Body.applyForce(bob5.body, bob5.body.position, {x: 100, y: -100});
	}
}


