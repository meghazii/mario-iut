//var player = new Image();
//player.src = "./data/img/playerRunningRight.png";

//var playerX = 0;
//var playerY = 0;

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var joueur = new Player(0, 0);
    joueur.display(ctx);

    window.onkeydown = function(event){
	var e = event || window.event;
	var key = e.keyCode;
	if(key == 39){
	    ctx.clearRect(joueur.x, joueur.y, joueur.x + 60, joueur.y +95);
	    joueur.moveRight();
	    joueur.display(ctx);
	}
	else if(key == 37){
	    ctx.clearRect(joueur.x, joueur.y, joueur.x + 60, joueur.y +95);
	    joueur.moveLeft();
	    joueur.display(ctx);
	}
	return true;
    }

}


