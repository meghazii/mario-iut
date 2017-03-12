class Goomba extends MovingEntity{

    constructor(x, delta, direction){
	super((x*32)%800, 640-64, 32, 32, "./data/img/goomba.png", 3, delta, direction);
	this.x = x;
	this.frame = 0;
	this.widthS = 32;
	this.heightS = 32;
	this.dead = false;
    }

    display(context, b, c){
	if(this.x >= b && this.x < c){
	    if(this.dead){
		context.drawImage(this.image, 32, 9*32, this.widthS, this.heightS, this.posPrec.x - b*32, this.posPrec.y, this.width, this.height);
	    }
	    else if(this.direction){
		context.drawImage(this.image, 32, this.frame*32, this.widthS, this.heightS, this.position.x, this.position.y, this.width, this.height);
	    }
	    else if(! this.direction){
		context.drawImage(this.image, 0, this.frame*32, this.widthS, this.heightS, this.position.x, this.position.y, this.width, this.height);
	    }
	}
    }
}
