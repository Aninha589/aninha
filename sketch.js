let cor
let ty;
let px;
let py;
function setup() {
  createCanvas(600, 450);
  background("white");  
  px = (200);
  py = (200)
}

function draw() {
  tx = (random(0, 50))
  ty = (random(0, 50))
  cor = color(random(0, 255), random(0, 255), random(0, 255));
 
  if(mouseIsPressed){
    fill(cor);
    circle(px, py, 30)
   
      px = mouseX
     py = mouseY
  }
    
}