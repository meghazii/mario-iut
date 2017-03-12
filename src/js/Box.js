class Box extends Entity{

    constructor(x, y) {
	super(32, 32, "./data/img/box.png", true); 
	this.frame = 0;
	this.widthS = 32;
	this.heightS = 32;
	this.position = new Vecteur(x, y);
	this.dT = 0;
	this.delta = 15;
    }

    display(context){	
	if(this.x >= b && this.x < c){
	    this.dT++;
	    if(this.dT >= this.delta){
		this.frame++;
		this.dT = this.dT%15;	
	    }
	    context.drawImage(this.image, this.frame*32, 0, 100, 100, this.position.x, this.position.y, this.width, this.height);
	}
	//context.drawImage(this.image, 0, 0, 100, 100, 0, 0, 100, 100);
    }
}
