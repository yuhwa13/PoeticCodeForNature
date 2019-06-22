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

function setup() {
  title = createElement('h2', "<a href='/PoeticCodeForNature'> HOME : </a> 작품 제목12");
  title.position(20, 0);

  for (var i = 0; i < 20; i++) {
     walker[i] = new Walker(random(width), random(height));
   }
  createCanvas(640,360);
  // walker = new Walker();
  // walker2 = new Walker();
  background(0);

  description = "\
  작품에 대한 설명이 들어갑니다. <br/> \
  HTML이 직접 들어가서 줄넘김을 할 수 있습니다. \
  ";
  text = createDiv(description);
  text.position(20, 400);
  text.style("font-family", "monospace");
  text.style("font-size", "12pt");
}


function draw() {
  background(0, 50);
  
  if (mouseIsPressed){
    randomColor = random (0, 170);
    randomStroke = random (0, 20);
    stepProb = 7;
    
    for (var i = 0; i < walker.length; i++) {
     walker[i].step();
     walker[i].render();
   }
//     walker.step(6);
//     walker.render(randomColor);
    
//     walker2.step(6);
//     walker2.render(randomColor);
    
    
  }
}



class Walker {
  constructor(){
    this.x = random (0, 640);
    this.y = random (0, 10);
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
        this.y = this.y + 10;
      }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}