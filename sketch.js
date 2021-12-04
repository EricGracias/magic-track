var p1,p1_Image;
var fan,fanImage;
var t,t_Image;
var train,trainImage;

function preload(){
  p1_Image = loadImage("magic.png");
  fan_Image = loadImage("fan.png");
  t_Image = loadImage("track brks.png");
  trainImage = loadImage("p1.png");

}
function setup() {
  createCanvas(1528, 701);

  p1 = createSprite(900, 360);
  p1.addImage(p1_Image);
  p1.scale = 0.2;

  fan = createSprite(900, 360);
  fan.addImage(fan_Image);
  fan.scale = 0.15;
  fan.rotationSpeed = 50;

  train = createSprite(900, 360);
  train.addImage(trainImage);
  train.scale = 0.5;

}
function draw() {
  background("white"); 
  fan.x = p1.x;
  fan.y = p1.y;
  train.collide(p1);
  // train.x = t.x;
  // train.y = t.y;

  if (keyDown("up")) {
    p1.setSpeedAndDirection(p1.getSpeed()+10, p1.rotation-90);
    t = createSprite(p1.x,p1.y);
    t.addImage(t_Image);
    t.scale = 0.2;
    t.lifetime = 200;
    t.rotation = p1.rotation;
    t.depth = p1.depth-1;
    train.x = t.x;
    train.y = t.y;
    train.rotation = t.rotation;
    // // tGroup.add(t);
  } 
  else{
    p1.setSpeedAndDirection(p1.getSpeed()-0.5, p1.rotation-90);
  } 


  if (keyDown("left")) {
    if (keyDown("/") && keyDown("up") == false ) {
      p1.rotation = p1.rotation-18;
    } else {
      p1.rotation = p1.rotation-5;
    }
  }
  if (keyDown("right")) {
    if (keyDown("/") && keyDown("up") == false) {
      p1.rotation = p1.rotation+18;
    } else {
      p1.rotation = p1.rotation+5;
    }
  }
  if (p1.getSpeed() > 10) {
    p1.setSpeedAndDirection(10, p1.rotation-90);
  }
  
  if (p1.getSpeed() < -4) {
    p1.setSpeedAndDirection(-4, p1.rotation-90);
  }

  camera.x = p1.x;
  camera.y = p1.y;

  drawSprites();

}
