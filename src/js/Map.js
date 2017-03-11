class Map{

    constructor(){

	this.widthMapA = 200;
	this.heightMapA = 20;
	
	this.tiles = new Array(this.widthMapA);
	for(var i = 0; i < this.widthMapA;i++){
	    this.tiles[i] = new Array(this.heightMapA);
	}
	for(var i = 0;i < this.widthMapA;i++){
	    for(var j = 0;j < 20;j++){
		if( Math.floor((Math.random() * 50) + 1) == 1 && j < 12){
		    this.tiles[i][j] = new Entity(32,32,"./data/img/cloud.png", false);
		}
		else{
		    this.tiles[i][j] = new Entity(32,32,"./data/img/ciel.png", false);
		}
	    }
	}
	//this.tiles[0][this.heightMapA -1] = new Entity(32,32,"./data/img/escalier.png", true);
    }
}




