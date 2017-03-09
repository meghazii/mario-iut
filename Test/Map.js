function Map (nom){
			var xhr = getXMLHttpRequest();
			
			xhr.open("GET", nom + '.json',true);
			xhr.send(null);
			
			var map = xhr.responseText;
			var mapObject = JSON.parse(map);
			
			this.tileset = new Tileset(mapObject.tileset);
			this.terrain = mapObject.terrain;

		}
		
	Map.prototype.getHauteur = function() {
	return this.terrain.length;
}
	Map.prototype.getLargeur = function() {
	return this.terrain[0].length;
}

Map.prototype.dessinerMap = function(context) {
	for(var i = 0, l = this.terrain.length ; i < l ; i++) {
		var ligne = this.terrain[i];
		var y = i * 32;
		for(var j = 0, k = ligne.length ; j < k ; j++) {
			if(ligne[j] > 400){
				this.tileset = new Tileset(mapObject.tileset2);
			}
			this.tileset.dessinerTile(ligne[j], context, j * 32, y);
		}
	}
}


