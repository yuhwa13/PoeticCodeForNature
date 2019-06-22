// function setup() {
//   title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 작품 제목!");
//   title.position(20, 0);

//   canvas = createCanvas(300, 300);
//   canvas.position(20, 60);
//   canvas.class("artwork");

//   description = "\
//   작품에 대한 설명이 들어갑니다. <br/> \
//   HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
//   ";
//   text = createDiv(description);
//   text.position(20, 400);
//   text.style("font-family", "monospace");
//   text.style("font-size", "12pt");

// }

var walker = [];
let stepProb;
let randomColor;
let randomStroke;
let choice
let upDown
//let wall;

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 작품 제목12");
  title.position(20, 0);
  description = "\
  작품에 대한 설명이 들어갑니다. <br/> \
  HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
  ";
  text = createDiv(description);
  text.position(20, 400);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");

  createCanvas(640,360);
  background(0);
  upDown = 10
  
  for (var i = 0; i < 1000; i++) {
    walker[i] = new Walker();
}


function draw() {
  background(0, 30);
  
  if (mouseIsPressed){
    upDown = abs(upDown);
    randomColor = random (0, 170);
    randomStroke = random (0, 20);
    stepProb = 7;
    
    for (var i = 0; i < walker.length; i++) {
     walker[i].step();
     walker[i].render();
   }
  }
  
  else {
    upDown = -abs(upDown);
    randomColor = random (0, 170);
    randomStroke = random (0, 20);
    stepProb = 7;
    
    for (var i = 0; i < walker.length; i++) {
     walker[i].step();
     walker[i].render();
   }  
  }
  
  
  
}



class Walker {
  constructor(){
    this.x = random (0, width);
    this.y = height/2;
  }

  render() {
    strokeWeight(randomStroke);
    stroke(255, randomColor, randomColor, 10);
    point(this.x,this.y);
  }

  step() {     
      choice = floor(random(0, stepProb));
      if (choice == 0 && 1) {
        this.x++;
      }
      else if (choice == 2 && 3) {
        this.x--;
      }
      else if (choice == 4) {
        this.y--;
      }
      else if (choice > 4) {
        this.y = this.y + upDown;
      }
    this.x = constrain(this.x,1,width-1);
    this.y = constrain(this.y,1,height-1);
  }
}