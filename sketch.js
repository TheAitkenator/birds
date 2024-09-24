
//Bird Flying
let drawbirdx = 700;
let drawbirdy = 200;
let goLeft = false;
function setup() {
drawbird();
  createCanvas(800, 800);
}
function draw(){
  background(220);
  drawbird(drawbirdx, drawbirdy, 800, 800);

  (drawbirdx = drawbirdx - 1)
}
function drawbird(x, y, birdSize) {
push();
translate(x, y);
//Body of Bird
fill(0, 0, 0,)
stroke(0, 0, 0,)
ellipse(150, 55, 105,35);
//Head of Bird
circle(90, 45, 40)
//Top Wing for Bird
quad(130, 60, 145, 20, 175, 10, 140, 60)
//Bottom Wing for Bird
quad(130, 60, 145, 90, 175, 100, 140, 60)
//Tail for Bird
quad(190, 60, 200, 50, 230, 80, 180, 60,)
quad(190, 50, 200, 40, 220, 70, 190, 40,)

//Beak for the Bird
stroke(255, 255, 0,);
fill(255, 255, 0,)
triangle(70, 50, 60, 60, 80, 60,);

//Eye for the Bird
fill(365,365,365,)
stroke(365,365,365,)
circle(90,45, 10,)
fill(0, 0, 0,)
circle(90, 45, 5,);
pop();
}
