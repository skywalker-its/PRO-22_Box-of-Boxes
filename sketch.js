
//GLOBAL VARIABLES
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;

//an array of boxes, its width and height.
var boxes = []; 
var boxWidth = [];
var boxHeight = [];

var ground, gSlider;

var i = 0, j = 0;
var gra = 0;
 
function setup() {
	createCanvas(400, 400);

	// Create an instance of Engine, World
	engine = Engine.create();
	world = engine.world;

	// A slider is already created for you here. This slider will dictate the gravity of the world
	gSlider = createSlider(0, 100, 50);
	gSlider.position(125, 375);
	//gSlider.input =
	

	//A ground rectangle that would hold all the boxes
	var ground_options = {
		isStatic: true,
	}

	ground = Bodies.rectangle(200, 360, 400, 20, ground_options);
	World.add(world, ground);
}

//overriding mousePressed function
function mousePressed(){
	if (mouseY < 350) {
		//when mouse press occurs, create a new box.
		randomBox(mouseX, mouseY,
				round(random(10, 50)), round(random(10, 50)));
	}
}
 
function draw() {
		background(150);
		Engine.update(engine);

		// This is the value of your gravity. You can optionally show it to the viewer.
		var fVal = gSlider.value();
		gra = map(fVal, 0, 100, 0, 1);
		engine.world.gravity.y = gra;

		//draw a ground
		rectMode(CENTER);
		fill("green");
		rect(ground.position.x, ground.position.y, 400, 20);

		//for loop to show all the boxes
		for( j = 0; j < i; j++){
			show();
		}

		fill("black");
		text(0, 110 , 390);
		text(100, 260, 390);

		text("GRAVITY "+fVal, 150, 50);
}

function randomBox(x, y, w, h) {
    var boxes_options = {
		restitution: 1.0,
		friction: 0.5,
    }
 
    // create your box using the function arguments
	boxes[i] = Bodies.rectangle(x, y, w, h, boxes_options);
	boxWidth[i] = w;
	boxHeight[i] = h;

	World.add(world, boxes[i]);
	i = i + 1;		
}

// A show method which will draw the boxes.
function show() {
	var pos= boxes[j].position;
	var angle= boxes[j].angle;
	
	push();
	translate(pos.x,pos.y);
	rotate(angle);
	fill(0);
	rectMode(CENTER);
	rect(0, 0, boxWidth[j], boxHeight[j]);
	pop();	
}