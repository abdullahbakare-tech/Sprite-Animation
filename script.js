const canvas = document.getElementById("canvas1");
const contex = canvas.getContext("2d");
/** getContext() returns a drawing context for a <canvas> element — the object your JavaScript code uses to actually draw shapes, text, images, or 3D graphics. Without calling getContext(), a canvas is just an empty bitmap with no drawing tools. 
---
🎯 What `getContext()` actually does
According to the HTMLCanvasElement specification, getContext():
• Returns a rendering context object (like CanvasRenderingContext2D or WebGLRenderingContext).
• Returns null if the context type isn’t supported.
• Always returns the same context instance if called again with the same type.
• Cannot switch a canvas to a different context type once one is set.  */

//draw a rectangle in canvas tag
console.log(contex);
