const heightS = 95;
const widthS = 60;

function Player(x, y){
    //image du joueur
    this.image = new Image();
    this.image.src = "./data/img/mario.png";
    this.frameD = 0;
    this.frameG = 6;
    //coordonnées du joueur
    this.x = x;
    this.y = y;
    // 0 = gauche et 1 = droite
    this.direction = 1;
}

Player.prototype.moveRight = function(){
    this.direction = 1;
    this.x = this.x + 10;
    this.frameD++;
}

Player.prototype.moveLeft = function(){
    this.direction = 0;
    this.x = this.x - 10;
    this.frameG--;
}

Player.prototype.display = function(context){
    if(this.direction == 1){
	context.drawImage(this.image,(widthS*this.frameD)%420,heightS,widthS,heightS,this.x,this.y,widthS,heightS);
    }
    else if(this.direction == 0){
	context.drawImage(this.image, (420-this.frameG*widthS)%420, 0, widthS, heightS, this.x, this.y,widthS,heightS);
    }
}

