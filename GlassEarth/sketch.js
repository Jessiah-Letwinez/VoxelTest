

function setup() {
  createCanvas(400, 400, WEBGL);
  
  createEasyCam();
  
  document.oncontextmenu = function() {
    return false;
  }
}

function draw() {
  background(0);
  translate(0, 0, -275);
  
  push();
  translate(0, 0, 275);
  box(50, 50, 50);
  pop();
  
  push();
  for (let i = -5; i < 5; ++i) {
    for (let j = -5; j < 5; ++j) {
      let x = i * 50;
      let y = j * 50;
      push();
      translate(x + 25, y + 25, 0);
      stroke(0);
      fill(128 + x, 128 + y, 128, 200);
      box(50, 50, 50);
      pop();
    }
  }
  pop();
  push();
  for (let i = -5; i < 5; ++i) {
    for (let j = -5; j < 5; ++j) {
      let x = i * 50;
      let y = j * 50;
      push();
      translate(x + 25, y + 25, 550);
      stroke(0);
      fill(128 + x, 128 + y, 128, 200);
      box(50, 50, 50);
      pop();
    }
  }
  pop();
  
  push();
  for (let i = -5; i < 5; ++i) {
    for (let j = -5; j < 5; ++j) {
      let x = i * 50;
      let z = j * 50;
      push();
      translate(x + 25, 275, z + 300);
      stroke(0);
      fill(128 + x, 128, 128 + z, 200);
      box(50, 50, 50);
      pop();
    }
  }
  pop();
  push();
  for (let i = -5; i < 5; ++i) {
    for (let j = -5; j < 5; ++j) {
      let x = i * 50;
      let z = j * 50;
      push();
      translate(x + 25, -275, z + 300);
      stroke(0);
      fill(128 + x, 128, 128 + z, 200);
      box(50, 50, 50);
      pop();
    }
  }
  pop();
  
  push();
  for (let i = -5; i < 5; ++i) {
    for (let j = -5; j < 5; ++j) {
      let y = i * 50;
      let z = j * 50;
      push();
      translate(275, y + 25, z + 300);
      stroke(0);
      fill(128, 128 + y, 128 + z, 200);
      box(50, 50, 50);
      pop();
    }
  }
  pop();
  push();
  for (let i = -5; i < 5; ++i) {
    for (let j = -5; j < 5; ++j) {
      let y = i * 50;
      let z = j * 50;
      push();
      translate(-275, y + 25, z + 300);
      stroke(0);
      fill(128, 128 + y, 128 + z, 200);
      box(50, 50, 50);
      pop();
    }
  }
  pop();
}