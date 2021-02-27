
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, bobObject6, bobObject7;
var rope1, rope2, rope3, rope4, rope5;
function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 200, 400, 50);
	bobObject1 = new Bob(350, 400, 25);
	bobObject2 = new Bob(375, 400, 25);
	bobObject3 = new Bob(400, 400, 25);
	bobObject4 = new Bob(425, 400, 25);
	bobObject5 = new Bob(450, 400, 25);
	bobObject6 = new Bob(475, 400, 25);
	bobObject7 = new Bob(500, 400, 25);
	rope1 = new Rope(bobObject1.body, roof.body, -150, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -100, 0);
	rope3 = new Rope(bobObject3.body, roof.body, -50, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 0, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 50, 0);
	rope6 = new Rope(bobObject6.body, roof.body, 100, 0);
	rope7 = new Rope(bobObject7.body, roof.body, 150, 0);
	Engine.run(engine);
  
}


function draw() {
  background("lightred");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  roof.display();
  fill("lightblue");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();
  bobObject7.display();
  textSize(40);
  fill("purple")
  stroke("black");
  strokeWeight(5);
  text("Press Right arrow to bonk", 400, 100);
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(bobObject7.body, bobObject7.body.position, {x:30, y:-25});
	}
}
