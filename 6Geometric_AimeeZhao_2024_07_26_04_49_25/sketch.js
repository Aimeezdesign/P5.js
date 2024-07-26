function setup() {
  createCanvas(400, 400); 
  background(0); 
  
  colorMode(HSB,360,100,100,100);
  noFill();
  
  stroke(255);
  strokeWeight(2);
  
  for(var i = 1; i < 65; i*=2){
      rect(width/2, height/2, i, i);
          if (i == 1){
            strokeWeight(1);
          } else if(i == 2){
            strokeWeight(2);
          } else if(i == 3){
            strokeWeight(3)
          } else if(i == 4){
            strokeWeight(4)
          } else if(i == 5){
            strokeWeight(5)
          } else if(i == 6){
            strokeWeight(6)
          }
        rotate(radians(i * 1));
  }
  
}


