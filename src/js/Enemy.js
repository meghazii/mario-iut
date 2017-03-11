class Enemy {
    
    constructor(){
	this.listeEn = new Array();
    }

    addGoomba(x, y){
	this.listeEn.push(new Goomba(x, y));
    }

    display(context){
	for(var i = 0; i < this.listeEn.length; i++){
	    this.listeEn[i].display(context);
	}
    }

    update(map, b){
	for(var i = 0; i < this.listeEn.length; i++){
	    this.listeEn[i].update();
	    this.listeEn[i].collision(map, b);
	}
    }
}
