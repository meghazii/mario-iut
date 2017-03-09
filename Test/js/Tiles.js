function Tiles(x,y){
	this.image = new Image();
	this.x = x;
	this.y = y;
}

Tiles.prototype.draw = function(context){
	context.drawImage(this.image,this.x, this.y);
	}
Tiles.prototype.getHitbox = function(){
	var f = new Vecteur();
	f.x = this.x;
	f.y = this.y;
	return f;
	}
	
Tiles.prototype.setImage = function(){
	this.image.src = url;
}
