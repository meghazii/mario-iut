class Map{

    constructor(){

	this.widthMapA = 200;
	this.heightMapA = 20;
	
	this.tiles = new Array(this.widthMapA);
	for(var i = 0; i < this.widthMapA;i++){
	    this.tiles[i] = new Array(this.heightMapA);
	}
	for(var i = 0;i < this.widthMapA;i++){
	    for(var j = 0;j < 19;j++){
		if( Math.floor((Math.random() * 40) + 1) == 1 && j < 12){
		    this.tiles[i][j] = new Entity(32,32,"./data/img/cloud.png", false);
		}
		else{
		    this.tiles[i][j] = new Entity(32,32,"./data/img/ciel.png", false);
		}
	    }
	}
	for(i = 0;i < this.widthMapA;i++){
		if(i <47 && i > 43 || i > 58 && i < 67){
			this.tiles[i][this.heightMapA - 1] = new Entity(32,32,"./data/img/ciel.png", false);
		}
		else{
	    	this.tiles[i][this.heightMapA - 1] = new Entity(32,32,"./data/img/terre.png", true);
		}
	}

	for(i = 0;i < 6;i++){
		 this.tiles[i+18][this.heightMapA -7] = new Entity(32,32,"./data/img/escalier.png", true);
		 this.tiles[i+60][this.heightMapA -8] = new Entity(32,32,"./data/img/escalier.png", true);
	}
	for(i = 0; i < 4;i++){
		// this.tiles[i+12][this.heightMapA - 2] = new Entity(32,32,"./data/img/escalier.png", true);
		// this.tiles[i+26][this.heightMapA - 2] = new Entity(32,32,"./data/img/escalier.png", true);
		 this.tiles[i+35][this.heightMapA - 4] = new Entity(32,32,"./data/img/box.png", true);
		 this.tiles[i+55][this.heightMapA - 6] = new Entity(32,32,"./data/img/escalier.png", true); //mobs en dessous
		 this.tiles[i+68][this.heightMapA - 6] = new Entity(32,32,"./data/img/escalier.png", true); //mobs en dessous
	}
	for(i = 0; i < 3;i++){
		 //this.tiles[i+13][this.heightMapA - 3] = new Entity(32,32,"./data/img/escalier.png", true);
		 //this.tiles[i+26][this.heightMapA - 3] = new Entity(32,32,"./data/img/escalier.png", true);
		 this.tiles[i+50][this.heightMapA - 4] = new Entity(32,32,"./data/img/escalier.png", true); // mobs en dessous
	}
	for(i = 0; i < 2;i++){
		 this.tiles[i+14][this.heightMapA - 4] = new Entity(32,32,"./data/img/escalier.png", true);
		 this.tiles[i+26][this.heightMapA - 4] = new Entity(32,32,"./data/img/escalier.png", true);
	}
	this.tiles[15][this.heightMapA - 5] = new Entity(32,32,"./data/img/escalier.png", true);
	this.tiles[26][this.heightMapA - 5] = new Entity(32,32,"./data/img/escalier.png", true);
	//this.tiles[43][this.heightMapA - 2] = new Entity(32,32,"./data/img/tuyau.png", true);
	//this.tiles[47][this.heightMapA - 2] = new Entity(32,32,"./data/img/tuyau.png", true);
    }
}





