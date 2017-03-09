const timer = 16;

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var joueur = new Player(0, 505);

    var interval = setInterval(
	function(){
	    console.log(joueur.x +","+ joueur.y);
	    console.log("PREC" + joueur.xPrec + "," + joueur.yPrec);
	    ctx.clearRect(joueur.xPrec, joueur.yPrec, joueur.xPrec + 60, joueur.yPrec +95);
	    joueur.display(ctx);
	}, timer);

    window.onkeydown = function(event){
	var e = event || window.event;
	var key = e.keyCode;
	if(key == 39){
	    joueur.moveRight();;
	}
	if(key == 37){
	    joueur.moveLeft();
	}
	if(key == 38){
	    joueur.moveUp();
	}
	return true;
    }

    /*window.onkeyup = function(event){
	var e = event || window.event;
	joueur.immo(ctx);
    }*/
}
