/*
	Conditionals - making decisions in code!

	Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		mouseIsPressed
		mouseButton
		mouseX, mouseY
        keyPressed(...)
        key, keyCode

	See index.html for disabling the right click menu.
*/

var colourHue=0;

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
createCanvas(windowWidth,windowHeight);
background(0,0,0);
//max for hue  saturation value alpha
colorMode(HSB,360,100,100,1);
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
colourHue+=5;
if(colourHue>360)
  colourHue-=360;
fill(colourHue,100,100);
stroke(0,0,100);
console.log(mouseIsPressed,mouseButton);
  if(mouseIsPressed){
    if(mouseButton===LEFT){
        //Normal
        ellipse(mouseX,mouseY,30);
      //Flipped horizontally
      ellipse(windowWidth-mouseX,mouseY,30);
      //Flipped vertically
      ellipse(mouseX,windowHeight-mouseY,30);
      //Flip both ways
        ellipse(windowWidth-mouseX,windowHeight-mouseY,30);
      }
    else if(mouseButton===RIGHT){

      background(0,0,0);
    }
}
}

function keyPressed(){
  if(key=="S")
    saveCanvas("screenhot","png")

}
