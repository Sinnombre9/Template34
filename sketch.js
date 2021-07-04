const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var piso;
var caja;
var caja1; 
var caja2;
var caja3;
var caja4;
var caja5;
var caja6;
var ball
var sling;
function preload() {
    
}

function setup(){
 createCanvas(3000,1200); 
 engine = Engine.create();
    world = engine.world;
 piso=new Piso(1400,1160,3000,20)
 caja=new Dad(2000,580,80,80);
 caja1=new Dad(2000,660,80,80)
 caja2=new Dad(2000,740,80,80)
 caja3=new Dad(2000,820,80,80)
 caja4=new Dad(2000,900,80,80)
 caja5=new Dad(2000,1080,80,80)
 caja6=new Dad(2000,1160,80,80)
 ball=new Bolita(1500,600,150,150)
 sling= new Sling(ball.body,{x:1500,y:80});
}

function draw(){
    background("gray");
    Engine.update(engine);
    piso.display();
    caja.display();caja1.display();
    caja2.display();
    caja3.display();
    caja4.display();
    caja5.display();
    caja6.display();
    ball.display();
    sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
