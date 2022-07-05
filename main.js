function preload() {
	world_start = loadSound("world_start.wav");
	mario_die = loadSound("mariodie.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_collect_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,500);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameconsole");
	poses=ml5.poseNet(video, modeloaded);
	poses.on("pose", gotresults);
}

function draw() {
	game();
}

function modeloaded() {
	console.log("eat a log would ya");
}

function gotresults(results) {
	if(results.length>0){
     noseX=results[0].pose.nose.x;
	 noseY=results[0].pose.nose.y;
	}
}




