class Player{
    
    constructor(x, y, w, mass, direction){

	this.image = new Image();
	this.image.src = "./data/img/mario.png";
	this.mass = mass;
	
	this.posPrec = new Vecteur(x, y);
	this.gravity = new Vecteur(0, 0.9*this.mass);

	this.position = new Vecteur(x, y);
	this.vitesse = new Vecteur(0, 0);
	this.accel = new Vecteur(0, 0);

	this.widthS = 60;
	this.heightS = 95;
	this.width = w;
	this.height = 50;

	this.frameD = 0;
	this.frameG = 6;

	this.direction = direction;
	this.jumping = false;
	this.moving = false;
	this.vie = 1;
	this.degat = false;
    }
    
    moveUp(){
	this.accel.y -= 15;
    }

    moveRight(){
	this.moving = true;
	if(this.jumping) this.accel.x += 3;
	else this.accel.x += 5;
	this.frameD++;
	this.direction = true;
    }

    moveLeft(){
	this.moving = true;
	this.direction = false;
	if(this.jumping) this.accel.x -= 3;
	else this.accel.x -= 5;
	this.frameG--;
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
	if(this.degat && this.vie == 1){
	    this.degat = false;
	    this.height = 32;
	}
	this.physic(this.gravity);
	this.vitesse.add(this.accel);
	this.position.add(this.vitesse);
	this.vitesse.mult(0);
	if(! this.jumping){
	    this.accel.x *= 0.2;
	}
    }
    
    collision(map, b){
	//Check les collisions avec les bords
	if (this.position.x > widthMap) {
	    alert("YOU WON");
	    location.reload();
	} else if (this.position.x < 0) {
	    this.vitesse.x = 0;
	    this.position.x = 0;
	}
	else if (this.position.y <= 0) {
	    this.vitesse.y = 0;
	    this.position.y = 0;
	}
	if(this.position.y >= heightMap){
	    alert("GAME OVER");
	    location.reload(false);
	}
	//Teste les collisions avec les objets de la map
	else if(map.tiles[Math.trunc((this.position.x + 32)/32) + b][Math.trunc(this.position.y/32) + 1].collide){
	    this.vitesse.x = 0;
	    this.position.x = this.posPrec.x;
	}
	else if(map.tiles[Math.trunc((this.position.x + 32)/32) + b][Math.trunc(this.position.y/32)].collide){
	    this.vitesse.y = 0;
	    this.position.y = this.posPrec.y;
	}
	if(map.tiles[Math.trunc(this.position.x/32) + b][Math.trunc(this.position.y/32) + 1].collide){
	    this.vitesse.x = 0;
	    this.position.x = this.posPrec.x;
	}
	if(map.tiles[Math.trunc(this.position.x/32) + b][Math.trunc(this.position.y/32)].collide){
	    this.position.y = this.posPrec.y;
	    this.vitesse.y = 0;
	}
	if((map.tiles[Math.trunc((this.position.x)/32) + b][Math.trunc((this.position.y + this.height)/32)].collide) ||
	   (map.tiles[Math.trunc((this.position.x+32)/32) + b][Math.trunc((this.position.y + this.height)/32)].collide)){
	    this.vitesse.y = 0;
	    this.accel.y = 0;
	    this.position.y = this.posPrec.y;
	    this.jumping = false;
	}
    }

    loose(){
	if(this.vie <= 0){
	    alert("GAME OVER");
	    location.reload(false);
	}
    }

    testEnemy(enemy, b, c){
	for(var i = 0; i < enemy.listeEn.length; i++){
	    if(enemy.listeEn[i].x >= b && enemy.listeEn[i].x < c){
		if((Math.trunc(this.position.x/32)+b == Math.trunc(enemy.listeEn[i].position.x/32)+b) && (Math.trunc(this.position.y/32) == Math.trunc(enemy.listeEn[i].position.y/32)-2)){
		    if(! enemy.listeEn[i].dead) this.moveUp();
		    enemy.listeEn[i].dead = true;	
		}
		else if((Math.trunc(this.position.x/32)+b == Math.trunc(enemy.listeEn[i].position.x/32)+b) && (Math.trunc(this.position.y/32) == Math.trunc(enemy.listeEn[i].position.y/32)-1) &&
			( ! enemy.listeEn[i].dead)){
		    this.vie--;
		}
	    }
	}
    }
    
    display(context){
	if(! this.direction && this.jumping){
	    context.drawImage(this.image, (420 - 3*this.widthS), 0, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction && this.jumping){
	    context.drawImage(this.image, 3*this.widthS, this.heightS, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction && this.moving){
	    context.drawImage(this.image,(this.widthS*this.frameD)%420,this.heightS,this.widthS,this.heightS,this.position.x,this.position.y,this.width,this.height);
	}
	else if( ! this.direction && this.moving){
	    context.drawImage(this.image, (420-this.frameG*this.widthS)%420, 0, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction && ! this.moving){
	    context.drawImage(this.image, 0 , this.heightS, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}
	else if( ! this.direction && ! this.moving){
	    context.drawImage(this.image, 420 - this.widthS, 0, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}	
    }
}
