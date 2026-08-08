let playerState = "run";
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', function(e){
    playerState = e.target.value; //element that was clicked
})

const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

/** getContext() returns a drawing context for a <canvas> element — the object your JavaScript code uses to actually draw shapes, text, images, or 3D graphics. Without calling getContext(), a canvas is just an empty bitmap with no drawing tools. 
---
🎯 What `getContext()` actually does
According to the HTMLCanvasElement specification, getContext():
• Returns a rendering context object (like CanvasRenderingContext2D or WebGLRenderingContext).
• Returns null if the context type isn’t supported.
• Always returns the same context instance if called again with the same type.
• Cannot switch a canvas to a different context type once one is set.  */

//draw a rectangle in canvas tag and set it to the same size as css to avoid
// distortion
const CANVAS_WIDTH = (canvas.width = 400);
const CANVAS_HEIGHT = (canvas.height = 400);

const spriteWidth = 60;
const spriteHeight = 60;


let frameX = 0; //animate horizontally
let frameY = 0; //animate vertically
let gameFrame = 0; //
const staggerFrames = 15; //slowdown animation by the amount
const spriteAnimations = []; //hold data for all animations
const animationStates = [
  {
    name: "forwardWalk",
    frames: 4,
  },
  {
    name: "sideWalk",
    frames: 4,
  },

  {
    name: "backWalk",
    frames: 4,
  },
  {
    name: "sidefrontWalk",
    frames: 4,
  },
  {
    name: "forward2Walk",
    frames: 4,
  },
  {
    name: "side2Walk",
    frames: 4,
  },
  {
    name: "rest",
    frames: 4,
  },
  {
    name: "atRest",
    frames: 4,
  },
  {
    name: "run",
    frames: 3,
  },
]; // for calculations. Create a category for each row.

//state.name and index where index = 0 would be the second object.
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth; //traversing horizontally
    let positionY = index * spriteHeight; // traversing vertically.
    frames.loc.push({ x: positionX, y: positionY });
  }

  spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);
//bring image into javascript project
const playerImage = new Image();
//use the Image (constructor) to store the image sheet for animation
playerImage.src = "images.jpg";

//create a custom function to animate
function animate() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position =
    Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length; // cycle through horizontal sheets.Using Math.Floor to produce integers then divide by the remaineder operator
  // It means you will have to stagger throught all 4 frames from the image  (1/4, 2/4, 3/4, 4/4) to make position equals 1.
  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;
  // use the draw image method  -
  //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  context.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
  );
  //   if (gameFrame % staggerFrames == 0) {
  //     //cycle throught the frame horizontally
  //     if (frameX < 4) frameX++;
  //     else frameX = 0;
  //   }

  //cycle between frames
  gameFrame++;
  //it will keep on running the same animate() - recursive function without and end
  requestAnimationFrame(animate);
}
animate(); // animate the same rectangle over and over
