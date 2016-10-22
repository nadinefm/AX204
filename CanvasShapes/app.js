//console.log("working");

// Creating new image
var dino = new Image();
dino.src = "dino.png";
// Putting picture onto canvas 
dino.onload = function(){
	ctx5.drawImage(dino,200,250,200,200)
}
//Creating new image two
var ice = new Image();
ice.src = "ice.png";
//putting picture on canvas
ice.onload = function(){
	ctx5.drawImage(ice,550,200,200,200)
}
//creating new image three
var snap = new Image();
snap.src = "snap.png";
//putting picture on canvas
snap.onload = function(){
	ctx5.drawImage (snap,700, 200, 200, 200)
}

var c = document.getElementById('myCanvas1');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.strokeStyle = "red";
ctx2.moveTo(0,0);
ctx2.lineTo(300,300)
ctx2.lineTo(300,0)
ctx2.lineTo(0,300)
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "lightgreen";
ctx2.fill();

var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d')
ctx3.beginPath();
ctx3.arc(100,100,80,0,6.28)
ctx3.closePath();
ctx3.fillStyle = "pink"
ctx3.fill();

// Scene
var c5 = document.getElementById("scene");
var ctx5 = c5.getContext("2d");
// Sky and Land
ctx5.fillStyle = "green";
ctx5.fillRect(0,350,800,150);
ctx5.fillStyle = "cyan";
ctx5.fillRect(0,0,800,350);
// Sun
ctx5.beginPath();
ctx5.arc(100,100,50,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "yellow";
ctx5.fill();
// Road
ctx5.beginPath();
ctx5.moveTo(300,500);
ctx5.lineTo(350,350);
ctx5.lineTo(400,350);
ctx5.lineTo(450,500);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "grey";
ctx5.fill();
// Line in the road
ctx5.moveTo(375,350);
ctx5.lineTo(375,500);
ctx5.stroke();
//Building 
ctx5.fillRect(100,250,200,100);
ctx5.clearRect(130,310,20,20);
ctx5.clearRect(170,310,20,20);
ctx5.clearRect(210,310,20,20);
ctx5.clearRect(250,310,20,20);
ctx5.clearRect(130,270,20,20);
ctx5.clearRect(170,270,20,20);
ctx5.clearRect(210,270,20,20);
ctx5.clearRect(250,270,20,20);

//Add text to canvas
ctx5.font = "italic 30pt Calibri"
ctx5.fillStyle = "tomato";
ctx5.fillText("Welcome to My Scene!", 300,50);
