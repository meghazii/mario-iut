const timer = 16;
var deltaT = 0;

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var joueur = new Player(0, 505-32, 60, 95, 2);
    var map = [];
    for(i = 0; i < 100; i++){
	map[i] = new Entity(i*32, 600-32, 32, 32, "./data/img/terre.png");
    }
    var terre = new Entity(200, 568, 32, 32, "./data/img/escalier.png", 1);
    var interval = setInterval(
	function(){
	    ctx.clearRect(joueur.posPrec.x, joueur.posPrec.y, joueur.posPrec.x + 60, joueur.posPrec.y +95);
	    joueur.update();
	    for(i = 0; i < 100; i++){
		joueur.collide(map[i]);
		map[i].display(ctx);
	    }
	    joueur.display(ctx);
	    if(deltaT != 0) deltaT--;
	    if(deltaT <= 0){
		joueur.accel.mult(0);
		joueur.jumping = false;
	    }
	}, timer);

    window.onkeypress = function(event){
	var e = event || window.event;
	var key = e.keyCode;
	if(key == 39){
	    joueur.moveRight();
	}
	if(key == 37){
	    joueur.moveLeft();
	}
	if(key == 38){
	    if(! joueur.jumping){
		joueur.jumping = true
		deltaT = 20;
		joueur.moveUp();
	    }
	}
	return true;
    }

    window.onkeyup = function(event){
	var e = event || window.event;
	joueur.moving = false;
    }
}
