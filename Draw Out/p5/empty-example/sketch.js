var img;  // Declare variable 'img'.

function setup() {
  createCanvas(1440, 720);
  img = loadImage("assets/fjasboka.png");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/2, img.width/2, img.height/2);
}
