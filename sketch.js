var cube,cubeImg
var ground,groundImg
var obstacles
var surfaces 
var bkground
function preload(){
cubeImg = loadImage("cube.png")
groundImg = loadImage("background.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight)
 bkground=createSprite(width/2,200)
 bkground.addImage(groundImg)
    cube = createSprite(width/17,height/2.1,50,50)
    cube.addImage(cubeImg)
    cube.scale=0.2
    ground = createSprite(width/3,height/2,width,5)
    

}

function draw() {
 background(255)
 drawSprites()
}