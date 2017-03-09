const widthMap = 800;
const heightMap = 600;
const heightS = 95;
const widthS = 60;

function Player(x, y){
    //image du joueur
    this.image = new Image();
    this.image.src = "./data/img/mario.png";

    //initialisation des frames de debut pour chacun des déplacements (droite et gauche)
    this.frameD = 0;
    this.frameG = 6;

    //coordonnées du joueur
    this.mass = 2;
    this.posPrec = new Vecteur(x, y);

    this.position = new Vecteur(x, y);
    this.vitesse = new Vecteur(0, 0);
    this.accel = new Vecteur(0, 0);

    this.gravity = new Vecteur(0, 0.981*this.mass);

    // 0 = gauche et 1 = droite
    this.direction = 1;
    this.jumping = false;
    this.moving = false;
}

Player.prototype.moveUp = function(){
    this.accel.y -= 40;
}

Player.prototype.moveRight = function(){
    this.moving = true;
    this.accel.x += 10;
    this.frameD++;
    this.direction = 1;
}

Player.prototype.moveLeft = function(){
    this.moving = true;
    this.direction = 0;
    this.accel.x -= 10;
    this.frameG--;
}

Player.prototype.physic = function(force){
    //applique la gravité
    var f = Vecteur.div(force, this.mass);
    this.accel.add(f);
}

Player.prototype.update = function(){
    //update les vecteurs du joueur
    this.posPrec.x = this.position.x;
    this.posPrec.y = this.position.y;
    this.physic(this.gravity);
    this.vitesse.add(this.accel);
    this.position.add(this.vitesse);
    this.vitesse.mult(0);
}

Player.prototype.collide = function(){
    //Check les collisions avec les bords
    if (this.position.x > widthMap) {
	this.position.x = widthMap - widthS;
	this.vitesse.x = 0;
    } else if (this.position.x < 0) {
	this.vitesse.x = 0;
	this.position.x = 0;
    }
    if (this.position.y > heightMap - heightS) {
	this.vitesse.y =  0;
	this.position.y = heightMap - heightS;
    }
    else if (this.position.y <= 0) {
	this.vitesse.y = 0;
	this.position.y = 0;
    }
}

Player.prototype.display = function(context){
    if(this.direction == 0 && this.jumping){
	context.drawImage(this.image, (420 - 3*widthS), 0, widthS, heightS, this.position.x, this.position.y,widthS,heightS);
    }
    else if(this.direction == 1 && this.jumping){
	context.drawImage(this.image, 3*widthS, heightS, widthS, heightS, this.position.x, this.position.y,widthS,heightS);
    }
    else if(this.direction == 1 && this.moving){
	context.drawImage(this.image,(widthS*this.frameD)%420,heightS,widthS,heightS,this.position.x,this.position.y,widthS,heightS);
    }
    else if(this.direction == 0 && this.moving){
	context.drawImage(this.image, (420-this.frameG*widthS)%420, 0, widthS, heightS, this.position.x, this.position.y,widthS,heightS);
    }
    else if(this.direction == 1 && ! this.moving){
	context.drawImage(this.image, 0 , heightS, widthS, heightS, this.position.x, this.position.y,widthS,heightS);
    }
    else if(this.direction == 0 && ! this.moving){
	context.drawImage(this.image, 420 - widthS, 0, widthS, heightS, this.position.x, this.position.y,widthS,heightS);
    }
    
}
