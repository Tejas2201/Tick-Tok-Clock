function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(12);

  map();

  line();

  translate();

  drawSprites();
}

function map() {
  scAngle = map(sc, 0, 60, 0, 360);
}

function line() {
  push();
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  arc(50, 55, 50, 50, 0, HALF_PI);
  noFill();
  arc(50, 55, 60, 60, HALF_PI, PI);
  arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
}

function translate() {

}




