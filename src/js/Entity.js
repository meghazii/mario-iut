class Entity{
    constructor(w, h, url, collide){
	//image de l'entit�
	this.image = new Image();
	this.image.src = url;
	
	//taille de la HitBox
	this.width = w;
	this.height = h;

	//coordonn�es du joueur
	this.collide = collide;
    }

    display(context, x, y){
	context.drawImage(this.image, 0, 0, this.width, this.height, x, y, this.width, this.height);
    }
}
