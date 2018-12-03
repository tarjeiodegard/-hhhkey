var bg;

function preload() {
    bg = loadImage("assets/floor.png");
}

function setup() {
 	createCanvas(displayWidth, displayHeight);  
    background(bg);
	strokeWeight(5)
	stroke(69, 200, 121);
    
    
}


function touchMoved() {
    
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}

