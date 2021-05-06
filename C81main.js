var canvas=document.getElementById("myCanbas");
var ctx=canvas.getContext("2d");
var color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mousedown_FUNCTION);
function mousedown_FUNCTION(e){
   color=document.getElementById("input_color").value; 
   console.log(color);
   mouse_x=e.clientX-canvas.offsetLeft;
   mouse_y=e.clientY-canvas.offsetTop
   console.log(mouse_y);
   console.log(mouse_x);
   circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(200, 200, 40, 0, 2*Math.PI);
    ctx.stroke();
}