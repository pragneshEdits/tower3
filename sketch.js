const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score = 0;
var bg, backgroundImg;

function preload(){
  getBackgroundImg();

  polygon_img=loadImage("polygon.png");
  
  

}

function setup() {

  engine  = Engine.create();
  world = engine.world;
  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  //level two
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  //level three
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //level four
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  //level five
  block21 = new Block(385,115,30,40);

  //set two 
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //level three
  blocks9 = new Block(700,95,30,40);

  //ball  with slings
  ball = Bodies.circle(100,100,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw(){

  if(backgroundImg){
    background(backgroundImg);
  }

   // background(bg);




  Engine.update(engine);
  textSize(25);
  fill("yellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",70,30);
  
 

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  fill("yellow");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  fill("red");  
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block15.score();
  block16.score();
  block17.score();
  block18.score();
  fill("green");  
  block19.display();
  block20.display();
  block19.score();
  block20.score();
  fill("orange");
  block21.display();
  block21.score();
  fill("blue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  fill("yellow");
  blocks6.display();
  blocks7.display();
  blocks8.display();

  blocks6.score();
  blocks7.score();
  blocks8.score();
  fill("red")
  blocks9.display();
  block9.score();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
keyPressed();
  slingShot.display();
  fill("black");
  textSize(30);
  text("Score :" + score,100,100);
  if(score===500){
    text("Congratulations!! You win.....",300,300)
  }

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.ball);
}

}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(responseJSON.datetime);
   
  if(hour>=6 && hour<=18){
   bg = "sprites/light.jpg";
}
else{
    bg = "sprites/dark.jpg";
}
backgroundImg = loadImage(bg);
}




