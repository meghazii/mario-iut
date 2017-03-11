const timer = 16;
var b = 0;
var c = 25;

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var joueur = new Player(160, 640-32-50, 32, 50, 1);
    var ennemi = new Enemy();
    ennemi.addGoomba(20);
    var map = new Map();
    var interval = setInterval(
	function(){
	    ctx.clearRect(0, 0, 800,640);
	    joueur.update();
	    joueur.collision(map, b);
	    if((joueur.position.x >= 300) && (c < 115)){
		joueur.position.x = joueur.posPrec.x;
		b++;
		c++;
	    }
	    if((joueur.position.x < 100) && b > 5){
		joueur.position.x = joueur.posPrec.x;
		b--;
		c--;
	    }
	    if(b < 0){
		b = 0;
		c = 25;
	    }
	    if(c > 120){
		c = 120;
		b = 95;
	    }
	    for(i = b; i < c; i++){
		for(j = 0; j < 20; j++){
		    map.tiles[i][j].display(ctx, (i-b)*32, j*32);
		}
	    }
	    ennemi.update(map, b);
	    ennemi.display(ctx, b, c);
	    joueur.display(ctx);
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
