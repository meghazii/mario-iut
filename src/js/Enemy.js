class Enemy {
    
    constructor(){
	this.listeEn = new Array();
    }

    addGoomba(x){
	this.listeEn.push(new Goomba(x, 19));
    }

    display(context, b, c){
	for(var i = 0; i < this.listeEn.length; i++){
	    this.listeEn[i].display(context, b, c);
	}
    }

    update(map, b,dT){
	for(var i = 0; i < this.listeEn.length; i++){
	    this.listeEn[i].update(dT);
	    this.listeEn[i].collision(map, b);
	}
    }
}
