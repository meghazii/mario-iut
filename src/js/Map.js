class Map{

    constructor(){

	this.widthMapA = 120;
	this.heightMapA = 20;
	
	this.tiles = new Array(120);
	for(var i = 0; i < 120;i++){
	    this.tiles[i] = new Array(this.heightMapA);
	}
	for(var i = 0;i < 120;i++){
	    for(var j = 0;j < 19;j++){
		if( Math.floor((Math.random() * 40) + 1) == 1){
		    this.tiles[i][j] = new Entity(32,32,"./data/img/cloud.png", false);
		}
		else{
		    this.tiles[i][j] = new Entity(32,32,"./data/img/ciel.png", false);
		}
	    }
	}
	for(i = 0;i < 120;i++){
	    this.tiles[i][this.heightMapA - 1] = new Entity(32,32,"./data/img/terre.png", true);
	}
	this.tiles[1][19] = new Entity(32,32,"./data/img/terre.png", true);
	this.tiles[100][18] = new Entity(32,32,"./data/img/escalier.png", true);

    }
}




