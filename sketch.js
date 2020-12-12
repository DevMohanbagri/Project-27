
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	roof = new Roof(width/2,150,500,30);
	bob1 = new Bob(width/2,600,35);
	bob2 = new Bob(width/2-70,600,35);
	bob3 = new Bob(width/2+70,600,35);
	bob4 = new Bob(width/2-140,600,35);
	bob5 = new Bob(width/2+140,600,35);
	bobDiameter = bob1.diameter;
	rope1 = new Rope(bob1.body,roof.body,0,0);
	rope2 = new Rope(bob2.body,roof.body,bobDiameter*-2,0);
	rope3 = new Rope(bob3.body,roof.body,bobDiameter*2,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*-4,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*4,0);
	Engine.run(engine);

}


function draw() {


  rectMode(CENTER);

  background("lightblue");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-80,y:-100});
	}
}



