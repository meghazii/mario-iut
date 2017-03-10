function Tileset(url) {
    // Chargement de l'image dans l'attribut image
    this.image = new Image();
    this.image.referenceDuTileset = this;
    this.image.onload = function() {
	if(!this.complete) 
	    throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".");
	
	// Largeur du tileset en tiles
	this.referenceDuTileset.largeur = this.width / 32;
    }
    this.image.src = url;
}

// Méthode de dessin du tile numéro "numero" dans le contexte 2D "context" aux coordonnées xDestination et yDestination

Tileset.prototype.dessinerTile = function(numero, context, xDestination, yDestination) {
<<<<<<< HEAD:Test/Tileset.js
   /* var xSourceEnTiles = numero % this.largeur;
    if(xSourceEnTiles == 0) xSourceEnTiles = this.largeur;
    var ySourceEnTiles = Math.ceil(numero / this.largeur);
    
    var xSource = (xSourceEnTiles - 1) * 32;
    var ySource = (ySourceEnTiles - 1) * 32;*/
    context.drawImage(this.image, 0, 0, 1000, 1000, 0, 0, 1000, 1000);
=======
	var xSourceEnTiles = numero % this.largeur;
	if(xSourceEnTiles == 0) xSourceEnTiles = this.largeur;
	var ySourceEnTiles = Math.ceil(numero / this.largeur);
	
	var xSource = (xSourceEnTiles - 1) * 32;
	var ySource = (ySourceEnTiles - 1) * 32;
	
	context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);
>>>>>>> 907ca1bc4ac656238ba661a192e34d2368b1c6b7:Test/js/Tileset.js
}
