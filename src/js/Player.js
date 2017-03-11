class Player extends MovingEntity{
    
    constructor(x, y, w, h, mass){
	super(x, y, w, h, "./data/img/mario.png", mass);

	this.widthS = 60;
	this.heightS = 95;

	this.frameD = 0;
	this.frameG = 6;

	this.jumping = false;
	//this.boxCase = Math.trunc(this.position.x/32);
    }
    
    moveUp(){
	this.accel.y -= 15;
    }

    moveRight(){
	this.moving = true;
	if(this.jumping) this.accel.x += 3;
	else this.accel.x += 10;
	this.frameD++;
	this.direction = 1;
    }

    moveLeft(){
	this.moving = true;
	this.direction = 0;
	if(this.jumping) this.accel.x -= 3;
	else this.accel.x -= 10;
	this.frameG--;
    }
    
    update(){
	//update les vecteurs du joueur
	this.posPrec.x = this.position.x;
	this.posPrec.y = this.position.y;
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
	if (this.position.x > widthMap - this.width) {
	    this.position.x = widthMap - this.width;
	    this.vitesse.x = 0;
	} else if (this.position.x < 0) {
	    this.vitesse.x = 0;
	    this.position.x = 0;
	}
	else if (this.position.y <= 0) {
	    this.vitesse.y = 0;
	    this.position.y = 0;
	}
	//Teste les collisions avec les objets de la map
	if(map.tiles[Math.trunc((this.position.x + 32)/32) + b][Math.trunc(this.position.y/32) + 1].collide){
	    this.vitesse.x = 0;
	    this.position.x = this.posPrec.x;
	}
	if(map.tiles[Math.trunc(this.position.x/32) + b][Math.trunc(this.position.y/32) + 1].collide){
	    this.vitesse.x = 0;
	    this.position.x = this.posPrec.x;
	}
	
	if((map.tiles[Math.trunc((this.position.x)/32) + b][Math.trunc((this.position.y + 50)/32)].collide) ||
	   (map.tiles[Math.trunc((this.position.x+32)/32) + b][Math.trunc((this.position.y+50)/32)].collide)){
	    this.vitesse.y = 0;
	    this.accel.y = 0;
	    this.position.y = this.posPrec.y;
	    this.jumping = false;
	}else{
	    this.jumping = true;
	}
    }
    
    display(context){
	if(this.direction == 0 && this.jumping){
	    context.drawImage(this.image, (420 - 3*this.widthS), 0, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction == 1 && this.jumping){
	    context.drawImage(this.image, 3*this.widthS, this.heightS, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction == 1 && this.moving){
	    context.drawImage(this.image,(this.widthS*this.frameD)%420,this.heightS,this.widthS,this.heightS,this.position.x,this.position.y,this.width,this.height);
	}
	else if(this.direction == 0 && this.moving){
	    context.drawImage(this.image, (420-this.frameG*this.widthS)%420, 0, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction == 1 && ! this.moving){
	    context.drawImage(this.image, 0 , this.heightS, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction == 0 && ! this.moving){
	    context.drawImage(this.image, 420 - this.widthS, 0, this.widthS, this.heightS, this.position.x, this.position.y,this.width,this.height);
	}	
    }
}
