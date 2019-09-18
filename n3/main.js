let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

document.body.appendChild(canv);


/*Create*/
let x, y;


/*---Init---*/
(function init() {
	x = y = 30;
	loop();
})();


/*---Loop---*/
function loop() {
	update();
	draw();
	requestAnimationFrame(loop);
};


/*Update*/
function update() {
	ctx.clearRect(0, 0, canv.width, canv.height);

	x = y += 1;
}

/*---Draw---*/
function draw() {
	ctx.beginPath();
	ctx.fillStyle = 'rgb(255,0,0)';
	ctx.arc(x, y, 30, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
}


