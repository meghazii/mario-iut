class Map{

    constructor(){

	this.widthMapA = 800;
	this.heightMapA = 20;
	
	this.tiles = new Array(500);
	for(var i = 0; i < 500;i++){
	    this.tiles[i] = new Array(this.heightMapA);
	}
	for(var i = 0;i < 500;i++){
	    for(var j = 0;j < 19;j++){
		if( Math.floor((Math.random() * 50) + 1) == 1 && j < 12){
		    this.tiles[i][j] = new Entity(32,32,"./data/img/cloud.png", false);
		}
		else{
		    this.tiles[i][j] = new Entity(32,32,"./data/img/ciel.png", false);
		}
	    }
	}
	for(i = 0;i < 500;i++){
	    this.tiles[i][this.heightMapA - 1] = new Entity(32,32,"./data/img/terre.png", true);
	}
	for(i = 0; i > 4; i++){

	}
	this.tiles[110][18] = new Entity(32,32,"./data/img/escalier.png", true);
    }
}




