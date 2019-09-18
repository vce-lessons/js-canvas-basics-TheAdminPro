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
	ctx.fillRect(100, 100, 160, 120);
}


