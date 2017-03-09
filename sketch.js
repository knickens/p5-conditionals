var x = 0;
var speed= + 3;

function setup(){
    createCanvas(600,400);
}

function draw(){
   background(50); 
   
   //wrote this so background color changes when clicked on
   if(mouseX<100){
       background(96, 209, 189);

   }
   
   //make outline white,6px thick, no color inside shapes 
   stroke(255);
   strokeWeight(6);
   
   if(mouseY<150){
       fill(255, 64, 31);
   }
   else{
       fill(255, 165, 167);
   }
   
   //a circle
   ellipse(x,75,100,100);
   
   //this code is going to get the circle to move on its own
    if(x>width ||x < 0){
      console.log("CIRCLE IS OFF THE SCREEN"); 
      speed = speed * -1;
   }
   
  
   x = x + speed;
   console.log(x);
}