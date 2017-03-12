const timer = 16;
var b = 0;
var c = 25;
var dT = 0;
const widthMapCase = 200;

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var joueur = new Player(0, 0, 32, 50, 1, true);
    var ennemi = new Enemy();
    ennemi.addGoomba(20, 2*63, true);
    ennemi.addGoomba(22, 3*63, false);
    var box = new Box(0, 0);
    var map = new Map();
    var interval = setInterval(
	function(){
	    ctx.clearRect(0, 0, 800,640);
	    joueur.update();
	    joueur.collision(map, b);
	    if(joueur.position.x >= 768){
		joueur.position.x = 0;
		b += 25;
		c += 25;
	    }
	    else if((joueur.position.x <= 0) && (b > 0)){
		joueur.position.x = 768;
		b -= 25;
		c -= 25;
	    }
	    for(i = b; i < c; i++){
		for(j = 0; j < 20; j++){
		    map.tiles[i][j].display(ctx, (i-b)*32, j*32);
		}
	    }
	    box.display(ctx);
	    ennemi.update(map, b);
	    joueur.testKill(ennemi);
	    ennemi.display(ctx, b, c);
	    joueur.display(ctx);
	    dT++;
	    dT = dT%63;
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
		joueur.jumping = true;
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
