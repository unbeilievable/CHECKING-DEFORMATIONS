var zenia;
var tourus;
var cyclap;
var MGhector;
var wall1;
var wall2;
var wall3;
var checker1;
var checker2;
var checker3;
var checker4;
//the deformations of all the cars are : zenia is 180,  cyclap is 84, tourus is 223 and MGhector is 134


function setup() {
  createCanvas(800,440);
  zenia = createSprite(50, 100, 50, 20);
  tourus = createSprite(50,200,50,20);
  cyclap = createSprite(50,300,50,20);
  MGhector = createSprite(50,400,50,20);
  wall1 = createSprite(400,150,1000,3);
  wall2 = createSprite(400,250,1000,3);
  wall3 = createSprite(400,350,1000,3);
  checker1 = createSprite(750, 100, 20, 50);
  checker2 = createSprite(750, 200, 20, 50);
  checker3 = createSprite(750, 300, 20, 50);
  checker4 = createSprite(750, 400, 20, 50);

}

function draw() {
  background(255,255,255);
  zenia.velocityX = 3;
  tourus.velocityX = 3;
  cyclap.velocityX = 3;
  MGhector.velocityX = 3;


  if (zenia.x - checker1.x < checker1.width/2 + zenia.width/2 && checker1.x - zenia.x < checker1.width/2 + checker1.width/2 && zenia.y - checker1.y < checker1.width/2 + zenia.width/2 && checker1.y - zenia.y < checker1.width/2 + zenia.width/2) {
    zenia.shapeColor = "red";
    checker1.shapeColor = "red";}

    else {zenia.shapeColor = "green";
   checker1.shapeColor = "green";
  
}
if (tourus.x - checker2.x < checker2.width/2 + tourus.width/2 && checker2.x - tourus.x < checker2.width/2 + checker2.width/2 && tourus.y - checker2.y < checker2.width/2 + tourus.width/2 && checker2.y - tourus.y < checker2.width/2 + tourus.width/2) {
  tourus.shapeColor = "red";
  checker2.shapeColor = "red";}

  else {tourus.shapeColor = "green";
 checker2.shapeColor = "green"; }

 if (cyclap.x - checker3.x < checker3.width/2 + cyclap.widht/2 && checker3.x - cyclap.x < checker3.width/2 + checker3.width/2 && cyclap.y - checker3.y < checker3.width/2 + cyclap.width/2 && checker3.y - cyclap.y < checker3.width/2 + cyclap.width/2) {
  cyclap.shapeColor = "green";
  checker3.shapeColor = "green";}

  else {cyclap.shapeColor = "green";
 checker3.shapeColor = "green"; }

 if (MGhector.x - checker4.x < checker4.width/2 + MGhector.width/2 && checker4.x - MGhector.x < checker4.width/2 + checker4.width/2 && MGhector.y - checker4.y < checker4.width/2 + MGhector.width/2 && checker4.y - MGhector.y < checker4.width/2 + MGhector.width/2) {
  MGhector.shapeColor = "yellow";
  checker4.shapeColor = "yellow";}

  else {MGhector.shapeColor = "green";
 checker4.shapeColor = "green"; }

  


  drawSprites();
}