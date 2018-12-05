var bg;

function preload() {
    bg = loadImage("assets/functions5.png");
}

function setup() {
 	createCanvas(windowWidth, windowHeight);  
    background(bg);
	strokeWeight(8)
	stroke(160, 37, 137);
}


function touchMoved() {
    
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}

