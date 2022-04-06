

function setup() {
  createCanvas(400, 400, WEBGL);
  
  createEasyCam();
  
  document.oncontextmenu = function() {
    return false;
  }
}

function draw() {
  background(220);
  push();
  box(50, 50, 50);
  pop();
  push();
  translate(50, 0, 0);
  box(50, 50, 50);
  pop();
  push();
  translate(0, 50, 0);
  box(50, 50, 50);
  pop();
  push();
  translate(-50, 0, 0);
  box(50, 50, 50);
  pop();
  push();
  translate(0, -50, 0);
  box(50, 50, 50);
  pop();
  push();
  translate(-50, -50, 0);
  box(50, 50, 50);
  pop();
  push();
  translate(50, 50, 0);
  box(50, 50, 50);
  pop();
  push();
  translate(50, -50, 0);
  box(50, 50, 50);
  pop();
  push();
  translate(-50, 50, 0);
  box(50, 50, 50);
  pop();
  
  push();
  translate(0, 0, 50);
  box(50, 50, 50);
}