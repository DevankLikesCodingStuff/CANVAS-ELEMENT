 Canvasid = document.getElementById("mycanvas");
Ctx = Canvasid.getContext("2d");
var colorholder = "red";
Ctx.beginPath();
Ctx.strokeStyle = colorholder;
Ctx.lineWidth = 3;
Ctx.arc(200,200,30,0,2*Math.PI);
Ctx.stroke();
Canvasid.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    console.log("mousedown");
    mouse_x = e.clientX-Canvasid.offsetLeft;
    mouse_y = e.clientY-Canvasid.offsetTop;
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
Ctx.beginPath();
Ctx.strokeStyle = colorholder;
Ctx.lineWidth = 3;
Ctx.arc(mouse_x,mouse_y,30,0,2*Math.PI);
Ctx.stroke();
}