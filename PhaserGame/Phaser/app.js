console.log("hahahahahaha");

// Declare the variables
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
	// Give game physics engine
	game.physics.startSystem(Phaser.Physics.ARCADE);
	// Add the sky
	game.add.sprite(0, 0, 'sky');

	// Physics group
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	// Ledges
	var ledge = platforms.create(400,400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	// Player sprite
	player = game.add.sprite(32, game.world.height - 150, 'dude');
		//animate
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);
		//physics
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	// Enemy sprite
	baddie = game.add.sprite(750, 20, 'baddie');
		//animate
		baddie.animations.add('left', [0,1], 10, true);
		baddie.animations.add('right', [2,3], 10, true);
		//physics
		game.physics.arcade.enable(baddie);
		baddie.body.bounce.y = 0.2;
		baddie.body.gravity.y = 500;
		baddie.body.collideWorldBounds = true;

	baddie2 = game.add.sprite(10, 20, 'baddie');
		//animate
		baddie2.animations.add('left', [0,1], 10, true);
		baddie2.animations.add('right', [2,3], 10, true);
		//physics
		game.physics.arcade.enable(baddie2);
		baddie2.body.bounce.y = 0.2;
		baddie2.body.gravity.y = 500;
		baddie2.body.collideWorldBounds = true;

	baddie3 = game.add.sprite(200, 20, 'baddie');
		//animate
		baddie3.animations.add('left', [0,1], 10, true);
		baddie3.animations.add('right', [2,3], 10, true);
		//physics
		game.physics.arcade.enable(baddie3);
		baddie3.body.bounce.y = 0.2;
		baddie3.body.gravity.y = 500;
		baddie3.body.collideWorldBounds = true;

	//Create stars 
	stars = game.add.physicsGroup
	stars.enableBody=true;
	//Loop to create 12 stars 
	for  (var i = 0; i < 12; i++) {
		var star = stars.create(i * 70, 0,'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = math.random() * 0.9;
	}

	// Keyboard inputs
	cursors = game.input.keyboard.createCursorKeys();
}

function update(){
	// Make the player & enemy sprite collide with the platform
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(baddie, platforms);
	game.physics.arcade.collide(baddie2, platforms);
	game.physics.arcade.collide(baddie3, platforms);
	
	// Player speed reset to 0
	player.body.velocity.x = 0;
	
	// Keyboard events
	if (cursor.left.isDown){
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else {
		player.animations.stop();
		player.frame = 4;
	}
	
	// Allow player to jump
	if (cursors.up.isDown && player.body.touching.down) {
		player.body.velocity.y = -300;
	}

// Enemy AI
if (baddie.x > 749) {
	baddie.animations.play('left');
	baddie.body.velocity.x = -120;
	}
	else if (baddie.x < 405) {
	baddie.animations.play('left');
	baddie.body.velocity.x = 120;	
	}

if (baddie2.x > 200) {
	baddie2.animations.play('left');
	baddie2.body.velocity.x = -80;
	}
	else if (baddie2.x < 20) {
	baddie2.animations.play('left');
	baddie2.body.velocity.x = 80;	
	}

if (baddie3.x > 749) {
	baddie3.animations.play('left');
	baddie3.body.velocity.x = -150;
	}
	else if (baddie3.x < 200) {
	baddie3.animations.play('left');
	baddie3.body.velocity.x = 150;	
	}
	//More Collisions 
	game.physics.arcade.collide(stars, platforms);
	// special collision called overlap - we define what happens
	game.physics.arcade.overlap(player, stars, collectStar, null, this); 
	game.physics.arcade.overlap(player, baddie, loselife, null, this);
	game.physics.arcade.overlap(player, baddie2, loselife, null, this); 
	game.physics.arcade.overlap(player, baddie3, loselife, null, this);  

}

// Define collectstar function 
function collectStar (player, star) {
	star.kill();
	score = score++;
	// create a star to replace killed star 
	star = stars.create(Math.floor(math.random() * 750), 0,'star');
	star.body.gravity.y = 200;
	star.body.bounce.y = Math.random() * 0.9;

}

// Define loselife function 
function loselife (player, baddie) {
	baddie.kill();
	score = score - 5; 
	baddie.reset(750, 20);
}
function loselife2 (player, baddie) {
	baddie.kill();
	score = score - 5; 
	baddie.reset(10, 20);
}








