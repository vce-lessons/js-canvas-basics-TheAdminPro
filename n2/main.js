let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;

document.body.appendChild(canv);


/*---Init---*/
(function init() {
	loop();
})();


/*---Loop---*/
function loop() {
	draw();
	requestAnimationFrame(loop);
};


/*---Draw---*/
function draw() {
	ctx.strokeRect(canv.width / 2 - 100, canv.height / 2 - 100, 200, 200);
}


