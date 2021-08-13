var bird;
var bird2;
var pipes = [];

function setup() {
  createCanvas(800, 600);
  P1=color(255, 204, 0)
  P2=color(255, 204, 0)
  bird = new Bird(color(255, 204, 0));
  bird2= new Bird(color('#0f0'));
  pipes.push(new Pipe());
}
 
function draw() {

  background(0);
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      if(bird.score>0){
        bird.score-=0.2
      }
      if(bird.score<0){
          bird.score=0
      }
        
    }
    if (pipes[i].hits(bird2)) { 
        if(bird2.score>0){
          bird2.score-=0.2
        }
        if(bird2.score<0){
            bird2.score=0
        } 
      }
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  bird2.update();
  bird2.show();
  if(frameCount% 150 ==0){
      bird.score+=1
      bird2.score+=1
      
  }
  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
  fill(255 )
  text(`Score Player1: ${Number(bird.score).toPrecision(2)}`,10,20)
  text(`Score Player2: ${Number(bird2.score).toPrecision(2)}`,10,40)
  if(bird.score == 0 && bird2.score==0){
    fill(color(255,0,0))
    text("TIE PRESS R TO RESTART",width/2,height/2)
      noloop()
  }
  if(bird.score == 0){
      fill(color('#0f0'))
    text(`Player 2 Won : ${Number(bird2.score).toPrecision(2)}`,width/2,height/2)
      noloop()
     
  }
  if(bird2.score == 0){
    fill(color(255, 204, 0))
    text(`Player 1 Won : ${Number(bird.score).toPrecision(2)}`,width/2,height/2)
      noloop()
  }
}  

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
  if (keyCode == UP_ARROW){
      bird2.up()
  }
  if (key == 'r') {
    window.location.reload()
  }
}