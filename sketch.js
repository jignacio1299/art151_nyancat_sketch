//ADD names of group members at top of sketch 
//Please have each group member DUPLICATE THIS SKETCH and have it saved in your accounts
//Everyone will be submitting their versions individually 
//There are ~24 bugs + version control 
//please add a comment to what was fixed or adjusted for each one. Note that you may need to delete stuff. 
let nyan;
let noNyan;
let nyanBg; 
let variable; //x
let circles = [];


let colors = [ //
 [255, 0, 0],     // red 
  [255, 165, 0],   // orange 
  [255, 255, 0],   // yellow
  [0, 255, 0],     // green
  [0, 0, 255],     // blue
  [148, 0, 211],   // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink 
  [255, 0, 180], // hot pink //x
  [255, 228, 181], // beige 
  [0, 0, 0],       // black 
  [255, 255, 255]  // white 
];

let playbackRate = 1.0;


async function setup() { 
  createCanvas(400, 400);
  // background(noNyan);
  nyan = await loadSound('medias/nyanCat.mp3'); //x
  noNyan = await loadImage('medias/nyancatless.gif'); //x
  // sprinkles = await loadImage('sprinkles.jpg'); //x
 
}

function draw() {
  background(noNyan);
  
  // Draw all circles
  for (let circle of circles) { //x
    fill(circle.colors); 
    ellipse(circle.x, circle.y, 50, 50); //x
  }
  

  if (mouseIsPressed) {
    let c = random(colors); 
    let newCircle = { //x
      x: mouseX, //x
      y: mouseY,
      colors: color(c[0], c[1], c[2]) //x
    };
    circles.push(newCircle);
  }
}

function mousePressed() {
  let c = random(colors);
  let newCircle = {
    x: mouseX,//x
    y: mouseY,
    color: color(c[0], c[1], c[2])
  };
  circles.push(newCircle);
  nyan.volume(0.5); //x
  nyan.rate(playbackRate); 
  nyan.loop();
  
}
function mouseReleased(){
  nyan.stop();
} //


function keyPressed() {
  if (keyCode === UP_ARROW) { //
    playbackRate += 0.1; //
    nyan.rate(playbackRate); 
  } else if (keyCode === DOWN_ARROW) { //
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.rate(playbackRate);
  } else if (keyCode === LEFT_ARROW) { //
    playbackRate = playbackRate * 1; 
    nyan.rate(playBackRate);
  }
}
// }
// } 
// }