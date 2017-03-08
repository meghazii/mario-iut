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
	    joueur.display(ctx, 1);
	}
	else if(key == 37){
	    ctx.clearRect(joueur.x, joueur.y, joueur.x + 60, joueur.y +95);
	    joueur.moveLeft();
	    joueur.display(ctx, 1);
	}
	else if(key == 38){
	}
	return true;
    }

    window.onkeyup = function(event){
	var e = event || window.event;
	ctx.clearRect(joueur.x, joueur.y, joueur.x + 60, joueur.y +95);
	joueur.display(ctx, 0);
    }

}


