/*
	Let's create some shapes with p5. Ellipses, rectangles, lines, oh my.

	Check out the p5 reference page: http://p5js.org/reference. See the
	structure, shape and color sections.

	p5 structure:
		setup(), draw()

	p5 global functions:
		createCanvas(...)
		background(...)
		fill(...), noFill(...)
		stroke(...), noStroke(...), strokeWeight(...)
		ellipse(...), rect(...)

	p5 global variables:
		windowWidth, windowHeight
		mouseX, mouseY
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
  //Create a canvas of a particular size
  createCanvas(windowWidth,windowHeight);

  //Draw a black canvas
  background(255,0,255);

  //Drawing shapes
  fill(255,255,255);
  stroke(255,200,0);
  strokeWeight(10);

  //x,y,diameter
  ellipse(200,100,100);
  //x,y,w,h
  rect(150,150,100,200);
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
fill(100,0,255);
stroke(2555,255,255);
strokeWeight(1);

ellipse(mouseX,mouseY,20);

}
