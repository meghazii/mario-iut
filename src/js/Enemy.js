class Enemy {
    
    constructor(){
	this.listeEn = new Array();
    }

    addGoomba(x, delta, direction){
	this.listeEn.push(new Goomba(x, delta, direction));
    }

    display(context, b, c){
	for(var i = 0; i < this.listeEn.length; i++){
	    this.listeEn[i].display(context, b, c);
	}
    }

    update(map, b){
	for(var i = 0; i < this.listeEn.length; i++){
	    this.listeEn[i].update();
	    this.listeEn[i].collision(map, b);
	}
    }
}
