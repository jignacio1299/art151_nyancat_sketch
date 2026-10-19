//Jayden and Abdul
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
  nyan = await createAudio('medias/nyanCat.mp3'); //x
  noNyan = await loadImage('medias/nyancatless.gif'); //x
  // sprinkles = await loadImage('sprinkles.jpg'); //unused
}

function draw() {
  background(noNyan);
  
  // Draw all circles
  for (let circle of circles) { //typo
    fill(circle.colors); 
    ellipse(circle.x, circle.y, 50, 50); //typo
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
    x: mouseX,//typo
    y: mouseY,
    color: color(c[0], c[1], c[2])
  };
  circles.push(newCircle);
  nyan.volume(0.5); //x 
  nyan.speed(playbackRate); 
  nyan.loop();
  
  nyan.play(); //added to play the sound
}
function mouseReleased(){
  nyan.stop();
} // Missing right bracket


function keyPressed() {
  if (key === UP_ARROW) { //
    playbackRate += 0.1; //
    nyan.speed(playbackRate); 
  } else if (key === DOWN_ARROW) { //
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.speed(playbackRate);
  } else if (key === LEFT_ARROW) { //
    playbackRate = 1; //x 
    nyan.speed(playbackRate); //x
  }
}
// }
// } 
// }