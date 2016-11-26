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

	// Keyboard inputs
	cursors = game.input.keyboard.createCursorKeys();
}

function update(){
	// Make the player & enemy sprite collide with the platform
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(baddie, platforms);
	// Player speed reset to 0
	player.body.velocity.x = 0;
	// Keyboard events
	if (cursors.left.isDown){
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
}

// Enemy AI
if (baddie.x > 749) {
	baddie.animations.play('left');
	baddie.body.velocity.x = -120;

	}else if (baddie.x < 405) {
	baddie.animations.play('left');
	baddie.body.velocity.x = 120;	
	}
}























//
