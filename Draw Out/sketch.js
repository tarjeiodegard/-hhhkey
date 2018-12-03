var bg;

function preload() {
    bg = loadImage("assets/functions.png");
}

function setup() {
 	createCanvas(windowWidth, windowHeight);  
    background(bg, 0, 0);
	strokeWeight(5)
	stroke(69, 200, 121);
    
    
}


function touchMoved() {
    
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}

