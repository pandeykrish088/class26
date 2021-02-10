const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(3000,700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(1500,650,3000,40);
    box1 = new Box(900,100);
    box2 = new Box(900,100);
    box3 = new Box(900,100);
    box4 = new Box(900,100);
    box5 = new Box(900,100);
    box6 = new Box(900,100);
    box7 = new Box(900,100);
    box8 = new Box(900,100);
    box9 = new Box(900,100);
    box10 = new Box(900,100);
    
    ball = new Ball(200,200,80,80);

    sling = new SlingShot(ball.body,{x:400,y:75})
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ball.display();
    sling.display();
}

