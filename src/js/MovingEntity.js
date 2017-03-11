const widthMap = 800;
const heightMap = 640;

class MovingEntity extends Entity{

    constructor(x, y, w, h, url, mass){
	super(w, h, url, true);
	this.mass = mass;
	
	//initialisation des frames de debut pour chacun des déplacements (droite et gauche)

	this.posPrec = new Vecteur(x, y);
	this.gravity = new Vecteur(0, 0.9*this.mass);

	this.position = new Vecteur(x, y);
	this.vitesse = new Vecteur(0, 0);
	this.accel = new Vecteur(0, 0);

	// 0 = gauche et 1 = droite
	this.direction = 1;
	this.moving = false;
    }

    moveRight(){
	this.direction = 1;
	this.vitesse.x += 1;
	this.frame++;
	this.frame = this.frame%7;
    }

    moveLeft(){
	this.direction = 0;
	this.vitesse.x -= 1;
	this.frame++;
	this.frame = this.frame%7;
    }

    physic(force){
	//applique la gravité
	var f = Vecteur.div(force, this.mass);
	this.accel.add(f);
    }

    update(dT){
	//update les vecteurs du joueur
	this.posPrec.x = this.position.x;
	this.posPrec.y = this.position.y;
	if(dT < 315){
	    console.log(this.frame);
	    this.moveLeft();
	}else if(dT >= 315){
	    console.log(this.frame);
	    this.moveRight();
	}
	this.physic(this.gravity);
	this.vitesse.add(this.accel);
	this.position.add(this.vitesse);
	this.vitesse.mult(0);
    }

    collision(map, b){
	//Check les collisions avec les bords
	if (this.position.x > widthMap - this.width) {
	    this.position.x = widthMap - this.width;
	    this.vitesse.x = 0;
	} else if (this.position.x < 0) {
	    this.vitesse.x = 0;
	    this.position.x = 0;
	}else if(this.position.y > heightMap - this.height){
	    this.vitesse.y = 0;
	    this.position.y = heightMap - this.height - 32;
	}else if (this.position.y <= 0) {
	    this.vitesse.y = 0;
	    this.position.y = 0;
	}
    }
}

