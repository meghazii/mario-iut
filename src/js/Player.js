class Player extends MovingEntity{
    
    constructor(x, y, w, h, mass){
	super(x, y, w, h, "./data/img/mario.png", mass);

	this.widthS = 60;
	this.heightS = 95;
	this.jumping = false;
	//this.boxCase = Math.trunc(this.position.x/32);
    }
    
    moveUp(){
	this.accel.y -= 15;
    }

    moveRight(){
	this.moving = true;
	if(this.jumping) this.accel.x += 5;
	else this.accel.x += 10;
	this.frameD++;
	this.direction = 1;
    }

    moveLeft(){
	this.moving = true;
	this.direction = 0;
	if(this.jumping) this.accel.x -= 5;
	else this.accel.x -= 10;
	this.frameG--;
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
