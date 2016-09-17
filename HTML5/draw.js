console.log("working");

var c = document.getElementById("myCanvas")
var ctx = c.getContext("2d");
//	ctx.moveTo (0,0)
//	ctx.lineTo(200,100);
//	ctx.stroke();

//	ctx.fillStyle = "rgb(255,0,0)";
//	ctx.fillRect(100,100,100,100);
//	ctx.strokeRect(80,80,140,140);
//	ctx.clearRect(120,120,60,60);

var x = 0;
var y = 0;
var width = 300;
var height = 300;
ctx.fillRect(x,y,width,height);
while (width > 0) {
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx.clearRect(x, y, width, height);
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx.fillRect(x,y,width,height);


}