var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
 //ball.shapeColour = "pink";
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("PINK");
  }
  if (keyIsDown(UP_ARROW)) 
  {
    background("green");
  }
  if (keyIsDown(DOWN_ARROW)) 
  {
    background("purple");
  }

  drawSprites();

}



 