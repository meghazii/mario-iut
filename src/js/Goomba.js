class Goomba extends MovingEntity{

    constructor(x, y){
	super(x, y, 32, 32, "./data/img/goomba.png", 3);
	this.frame = 0;
	this.widthS = 32;
	this.heightS = 32;
    }

    display(context){
	if(this.direction == 0){
	    context.drawImage(this.image, 32, this.frame*32, this.widthS, this.heightS, this.position.x, this.position.y, this.width, this.height);
	}
	else if(this.direction == 1){
	    context.drawImage(this.image, 0, this.frame*32, this.widthS, this.heightS, this.position.x, this.position.y, this.width, this.height);
	}
    }
}
