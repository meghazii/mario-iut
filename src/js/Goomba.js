class Goomba extends MovingEntity{

    constructor(x, delta, direction){
	super(x*32, 640-64, 32, 32, "./data/img/goomba.png", 3, delta, direction);
	this.x = x;
	this.frame = 0;
	this.widthS = 32;
	this.heightS = 32;
    }

    display(context, b, c){
	if(this.x >= b && this.x < c){ 
	    if(this.direction == 1){
		context.drawImage(this.image, 32, this.frame*32, this.widthS, this.heightS, this.position.x - b*32, this.position.y, this.width, this.height);
	    }
	    else if(this.direction == 0){
		context.drawImage(this.image, 0, this.frame*32, this.widthS, this.heightS, this.position.x - b*32, this.position.y, this.width, this.height);
	    }
	}
    }
}
