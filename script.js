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

//bring image into javascript project
const playerImage = new Image();
//use the Image (constructor) to store the image sheet for animation
playerImage.src = "images.jpg";

//create a custom function to animate
function animate() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //draw a new rectangle
  //context.fillRect(100, 50, 100, 100); // everytime the recursive function runs, then it increases the x by 1.
  // use the draw image method  -
  //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  context.drawImage(
    playerImage,
    2 * spriteWidth,
    0,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
  );
  //it will keep on running the same animate() - recursive function without and end
  requestAnimationFrame(animate);
}
animate(); // animate the same rectangle over and over
console.log(context);
