var fruit,fruitImg,fruitGroup,obstacle,obstacleImg,obstacleGroup,background1,backgroundImg,
score, monkey, monkey_running

function preload() {
  
  backgroundImg=loadImage("jungle.png")
  
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  
  fruitImg=loadImage("banana.png")
  obstacleImg=loadImage("stone.png");
  
}


function setup() {
  createCanvas(400, 400);
  
  var background1 = createSprite(200,200,400,400)
  background1.velocityX=-3
  background1.visible=false
  
  monkey=createSprite(200,370,20,50)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=.09
  
  
  
  obstacleGroup=new Group();
  fruitGroup=new Group();
  
  
}


function draw() {
  background(220);
  
  
  
  spawnfruit();
  spawnObstacles();
  drawSprites();
  
  
  
  
  
  
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,380,10,40);
    
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.09;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
    
    obstacle.addImage("stone",obstacleImg)
    
  }
}

function spawnfruit() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
    var fruit = createSprite(400,320,40,10);
    fruit.y = random(280,320);
    fruit.scale = 0.06;
    fruit.velocityX = -3;
    
     //assign lifetime to the variable
    fruit.lifetime = 134;
    
    fruit.addImage("banana",fruitImg)
    
    //adjust the depth
    fruit.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    fruitGroup.add(fruit);
  }

}












