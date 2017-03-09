const timer = 16;
var deltaT = 0;

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var joueur = new Player(0, 505);
    var interval = setInterval(
	function(){
	    console.log("POSITION : " +joueur.position.x +","+ joueur.position.y);
	    console.log("POSPREC : " + joueur.posPrec.x + "," + joueur.posPrec.y);
	    //console.log("POSPREC : " +joueur.accel.x +","+ joueur.accel.y);
	    ctx.clearRect(joueur.posPrec.x, joueur.posPrec.y, joueur.posPrec.x + 60, joueur.posPrec.y +95);
	    joueur.update();
	    joueur.collide();
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
