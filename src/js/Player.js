class Player extends MovingEntity{
    
    constructor(x, y, w, h, mass){
	super(x, y, w, h, "./data/img/mario.png", mass);
	this.jumping = false;
    }
    
    moveUp(){
	this.accel.y -= 40;
    }

    moveRight(){
	this.moving = true;
	this.accel.x += 10;
	this.frameD++;
	this.direction = 1;
    }

    moveLeft(){
	this.moving = true;
	this.direction = 0;
	this.accel.x -= 10;
	this.frameG--;
    }
    
    display(context){
	if(this.direction == 0 && this.jumping){
	    context.drawImage(this.image, (420 - 3*this.width), 0, this.width, this.height, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction == 1 && this.jumping){
	    context.drawImage(this.image, 3*this.width, this.height, this.width, this.height, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction == 1 && this.moving){
	    context.drawImage(this.image,(this.width*this.frameD)%420,this.height,this.width,this.height,this.position.x,this.position.y,this.width,this.height);
	}
	else if(this.direction == 0 && this.moving){
	    context.drawImage(this.image, (420-this.frameG*this.width)%420, 0, this.width, this.height, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction == 1 && ! this.moving){
	    context.drawImage(this.image, 0 , this.height, this.width, this.height, this.position.x, this.position.y,this.width,this.height);
	}
	else if(this.direction == 0 && ! this.moving){
	    context.drawImage(this.image, 420 - this.width, 0, this.width, this.height, this.position.x, this.position.y,this.width,this.height);
	}	
    }
}
