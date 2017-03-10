const widthMapA = 120;
const heightMapA = 20;

class Map{


   constructor(){
		this.tiles = new Array(120);
		for(var i = 0; i < 120;i++){
			this.tiles[i] = new Array(heightMapA);
		}
		for(var i = 0;i < 120;i++){
			for(var j = 0;j < 19;j++){
				if( Math.floor((Math.random() * 40) + 1) == 1){
					this.tiles[i][j] = new Entity(i*32,j*32,32,32,"./data/img/cloud.png");
				}
				else{
					this.tiles[i][j] = new Entity(i*32,j*32,32,32,"./data/img/ciel.png");
				}
			}
		}
		for(i = 0;i < 120;i++){
			this.tiles[i][heightMapA - 1] = new Entity(i*32,608,32,32,"./data/img/terre.png");
		}
		this.tiles[1][19] = new Entity(32,19*32,32,32,"./data/img/terre.png");
	}
}
	
	

		
