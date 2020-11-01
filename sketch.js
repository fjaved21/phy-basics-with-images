const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;

var box, ball;
var ground;
var bg;

function preload(){
  bg= loadImage("images/backdrop.jpg");
}

function setup() {
  createCanvas(1000,600);
  myEngine = Engine.create();
  myWorld= myEngine.world;


 

ground= new Ground(500,580,1000,20);
crate1= new Crate(700,100,50,50);
  crate2= new Crate(750,100,50,50);
 crate3= new Crate(800,100,50,50);
  crate4= new Crate(725,50,50,50);
  crate5= new Crate(775,50,50,50);
  crate6= new Crate(750,20,50,50);

}

  function draw() {
    background(bg);  
    Engine.update(myEngine);
//rectMode(CENTER);
//rect(box.position.x,box.position.y,30,30);
//ellipseMode(RADIUS);
//ellipse(ball.position.x,ball.position.y,40,40);

ground.show();
crate1.show();
crate2.show();
crate3.show();
crate4.show();
crate5.show();
crate6.show();
  }
