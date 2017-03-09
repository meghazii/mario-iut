var ts = new Tileset("tiles.png");
var ciel = new Tileset("tiles2.png");
var map = new Map("premiere");



window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    ciel.dessinerTile(868,ctx,10,42);
    ts.dessinerTile(145, ctx, 10, 10);
    ciel.dessinerTile(868, ctx, 40, 10);
    ciel.dessinerTile(868, ctx, 70, 10);
    ciel.dessinerTile(869, ctx, 40, 42);
    ciel.dessinerTile(868,ctx,10,74);
    ciel.dessinerTile(868, ctx, 130, 10);
    var i;
    for(i = 0;i < 100;i++){
	ts.dessinerTile(4, ctx, i * 32, 400);
	}
	for (i = 640; i <= 748;i= i + 32){ 
		ts.dessinerTile(18, ctx,i,368); 
	}
	
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
	map.dessinerMap(ctx);
	
}

function getXMLHttpRequest() {
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}

