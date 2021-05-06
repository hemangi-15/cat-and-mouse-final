var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3;
var gardenimg;
function preload() {
    //load the images here
    catimg1=loadAnimation('images/cat1.png');
    catimg2=loadAnimation('images/cat2.png','images/cat3.png');
    catimg3=loadAnimation('images/cat4.png');
    mouseimg1=loadAnimation('images/mouse4.png');
    mouseimg2=loadAnimation('images/mouse2.png','images/mouse3.png');
    mouseimg3=loadAnimation('images/mouse1.png');
    gardenimg=loadImage('images/garden.png');
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
cat=createSprite(900,540,20,20);
cat.addAnimation('catsitting',catimg1);
//cat.addAnimation('catwalking',catimg2);
//cat.addAnimation('cathappy',catimg3);
cat.scale=0.15;
mouse=createSprite(100,525,50,50);
mouse.addAnimation('mousecheese',mouseimg1);
//mouse.addAnimation('mouseteasing',mouseimg2);
//mouse.addAnimation('mouse4',mouseimg3);
mouse.scale=0.15;

}

function draw() {

    background(gardenimg);

  
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.velocityX=0;
cat.x=300;
mouse.addAnimation('mouse4',mouseimg3);
mouse.changeAnimation('mouse4',mouseimg3);
cat.addAnimation('cathappy',catimg3);
cat.changeAnimation('cathappy',catimg3);

}
drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation('mouseteasing',mouseimg2);
    mouse.changeAnimation('mouseteasing',mouseimg2);
    cat.velocityX=-4;
    cat.addAnimation('catwalking',catimg2);
   cat.changeAnimation('catwalking',catimg2);
}

}
