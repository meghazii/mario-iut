class Entity{
    constructor(x, y, w, h, url){
	//image de l'entité
	this.image = new Image();
	this.image.src = url;
	
	//taille de la HitBox
	this.width = w;
	this.height = h;

	//coordonnées du joueur
	this.position = new Vecteur(x, y);
	this.vitesse = new Vecteur(0, 0);
	this.accel = new Vecteur(0, 0);
    }

    display(context){
	context.drawImage(this.image, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
    }
}
