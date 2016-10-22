console.log('hihi');

// declare variables at the top (elevation of scope)
var canvas;
var ctx;
// hold some coordinates
var x = 600;
var y = 300;
// hold the magnitude of our movement
var mx = 2;
var my = 4;
// holding width and height of canvas;
var width = 600;
var height = 300;
// initialise our animation
function init() {
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw, 10);
}

// draw circle 
function circle(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2);
	ctx.fillStyle = "tomato";
	ctx.fill();
}

// clear our canvas 
function clear() {
	ctx.clearRect(0, 0, width, height);

}

// finally, we are drawing each frame with this function:
function draw() {
	clear();
	circle(x, y, 30);

	// stays inside canvas 
	if(x + mx > width || x + mx < 0) {
		mx= -mx;
	}
	if(y + my > height || y + my < 0) {
		my= -my;
	}

	// moving our canvas by increasing the position by the magnitude of movement 
	x += mx; //this means x = x + mx
	y += my;
}

init();
