function setup() {
	createCanvas(500, 650);
    
    background(255);
}

function preload() {
  img1 = loadImage("canvas.png")
}

function squiggle(x, y) {
    strokeWeight(2);
	stroke(random(20,255), random(20,255), random(100,255));
	noFill();
    curveTightness(map(mouseX, 0, height, 10, -10));
	beginShape();
	for (let z = 0; z <= 3; z++) {
    curveVertex(random(0, 255) + height / 5, random(0, 255) + width / 2.3);
    endShape();
    }
}

function mouseClicked() {
  if (isLooping() === true) {
    noLoop();
  } else {
    loop();
  }
}
  
  function draw() {
    image(img1,-114,-92,width * 1.45,height * 1.54);
    noFill();
    stroke(255);
    rect(width, height, 10);
    squiggle(200 + mouseX/3, 200 + mouseX/7);
	squiggle(200 + mouseY/4, 200 + mouseX/8);
    squiggle(200 - mouseX/5, 200 + mouseY/3);
	squiggle(200 + mouseY/4, 200 - mouseX/2);
    squiggle(200 - mouseX/4, 200 - mouseY/4);
}