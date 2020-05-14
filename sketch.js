var pillar, square2;
var square, pillar2;
var square3, pillar3;
var pillar4,pillar5;
var line;

function setup() {
  createCanvas(800,400);
  fill("white");
 square =  createSprite(400, 200, 50, 50);
 

 pillar = createSprite(400,350,30,300);
 fill("white");
 

 square2 = createSprite(500,150,60,60);
 fill("white");

 pillar2 = createSprite(500,350,30,340);
 fill("white");

  square3 = createSprite(600,200,50,50);
  fill("white");

  pillar3 = createSprite(600,350,30,300);
  fill("white");

  pillar4 = createSprite(450,300,30,200);
  fill("white");
  pillar5 = createSprite(550,300,30,200);
  fill("white");

  line = createSprite(500,200,230,10);





}

function draw() {
  background(0,0,0);  
  drawSprites();
}