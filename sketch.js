var machine,p1_Image;
var fan,fanImage;
var track,t_Image;
var train,trainImage;

function preload(){
  p1_Image = loadImage("magic.png");
  fan_Image = loadImage("fan.png");
  t_Image = loadImage("track brks.png");
  trainImage = loadImage("machine.png");

}
function setup() {
  createCanvas(1528, 701);

  machine = createSprite(900, 360);
  machine.addImage(p1_Image);
  machine.scale = 0.2;

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
  fan.x = machine.x;
  fan.y = machine.y;
  train.collide(machine);
  // train.x = track.x;
  // train.y = track.y;

  if (keyDown("up")) {
    machine.setSpeedAndDirection(machine.getSpeed()+10, machine.rotation-90);
    track = createSprite(machine.x,machine.y);
    track.addImage(t_Image);
    track.scale = 0.2;
    track.lifetime = 200;
    track.rotation = machine.rotation;
    track.depth = machine.depth-1;
    train.x = track.x;
    train.y = track.y+200;
    train.rotation = track.rotation;
    // // tGroup.add(track);
  } 
  else{
    machine.setSpeedAndDirection(machine.getSpeed()-0.5, machine.rotation-90);
  } 

  if (keyDown("left")) {
    if (keyDown("/") && keyDown("up") == false ) {
      machine.rotation = machine.rotation-18;
    } else {
      machine.rotation = machine.rotation-5;
    }
  }
  if (keyDown("right")) {
    if (keyDown("/") && keyDown("up") == false) {
      machine.rotation = machine.rotation+18;
    } else {
      machine.rotation = machine.rotation+5;
    }
  }
  if (machine.getSpeed() > 10) {
    machine.setSpeedAndDirection(10, machine.rotation-90);
  }
  
  if (machine.getSpeed() < -10) {
    machine.setSpeedAndDirection(-10, machine.rotation-90);
  }

  camera.x = machine.x;
  camera.y = machine.y;

  drawSprites();

}
