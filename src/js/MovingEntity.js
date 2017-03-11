const widthMap = 800;
const heightMap = 600;

class MovingEntity extends Entity{

    constructor(x, y, w, h, url, mass){
	super(w, h, url, true);
	this.mass = mass;
	
	//initialisation des frames de debut pour chacun des déplacements (droite et gauche)
	this.frameD = 0;
	this.frameG = 6;

	this.posPrec = new Vecteur(x, y);
	this.gravity = new Vecteur(0, 0.9*this.mass);

	this.position = new Vecteur(x, y);
	this.vitesse = new Vecteur(0, 0);
	this.accel = new Vecteur(0, 0);

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

    collision(map){
	//Check les collisions avec les bords
	if (this.position.x > widthMap - this.width) {
	    this.position.x = widthMap - this.width;
	    this.vitesse.x = 0;
	} else if (this.position.x < 0) {
	    this.vitesse.x = 0;
	    this.position.x = 0;
	}
	if (this.position.y > heightMap - 50) {
	    this.position.y = 640-32-50;
	    this.vitesse.y = 0;
	}
	else if (this.position.y <= 0) {
	    this.vitesse.y = 0;
	    this.position.y = 0;
	}
	//Teste les collisions avec les objets de la map
	/*if(map.tiles[20][map.heightMapA - (Math.trunc((this.position.y + 50)/32))].collide){
	    this.vitesse.y = 0;
	    this.position.y = this.posPrec.y;
	}*/
    }
}

