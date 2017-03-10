const widthMap = 800;
const heightMap = 600;

class Entity{
	
	constructor(x, y, w, h, url, mass){
	//image de l'entité
		this.image = new Image();
		this.image.src = url;

		//initialisation des frames de debut pour chacun des déplacements (droite et gauche)
		this.frameD = 0;
		this.frameG = 6;
		
		//taille de la HitBox
		this.width = w;
		this.height = h;

		//coordonnées du joueur
		this.mass = mass;
		this.posPrec = new Vecteur(x, y);

		this.position = new Vecteur(x, y);
		this.vitesse = new Vecteur(0, 0);
		this.accel = new Vecteur(0, 0);

		this.gravity = new Vecteur(0, 0.981*this.mass);

		// 0 = gauche et 1 = droite
		this.direction = 1;
		this.moving = false;
	}

	physic(force){
		//applique la gravité
		var f = Vecteur.div(force, this.mass);
		this.accel.add(f);
	}

	update(){
		//update les vecteurs du joueur
		this.posPrec.x = this.position.x;
		this.posPrec.y = this.position.y;
		this.physic(this.gravity);
		this.vitesse.add(this.accel);
		this.position.add(this.vitesse);
		this.vitesse.mult(0);
	}
	
	collide(entity){
		//Check les collisions avec les bords
		if (this.position.x > widthMap - this.width) {
		this.position.x = widthMap - this.width;
		this.vitesse.x = 0;
		} else if (this.position.x < 0) {
		this.vitesse.x = 0;
		this.position.x = 0;
		}
		if (this.position.y > heightMap - this.height) {
		this.vitesse.y =  0;
		this.position.y = heightMap - this.height;
		}
		else if (this.position.y <= 0) {
		this.vitesse.y = 0;
		this.position.y = 0;
		}
		if((this.position.y < (entity.position.y + entity.height)) && ((this.position.y + this.height) > entity.position.y)){
			this.vitesse.y = 0;
			this.position.y = this.posPrec.y;
		}
		else if((this.position.x < (entity.position.x + entity.width)) && ((this.position.x + this.width) > entity.position.x)){
			this.vitesse.x = 0;
			this.position.x = this.posPrec.x;
		}
	}
	
	display(context){
		context.drawImage(this.image, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
	}
}
