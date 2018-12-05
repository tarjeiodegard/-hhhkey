var bg;

function preload() {
    bg = loadImage("assets/functions2.png");
}

function setup() {
 	createCanvas(windowWidth, windowHeight);  
    	background(bg, 0, 0);
	strokeWeight(20)
	stroke(160, 37, 137);
    
    
}


function touchMoved() {
    
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}

