function Box(x, y){

    //image de la box
    this.image = new Image();
    this.image.src = "./data/img/boxes.png";

    this.frame = 0;

    this.x = x;
    this.y = y;
}

Box.prototype.display = function(context){
    context.drawImage(this.image, 0, 0, 50, 50, this.x, this.y, 50, 50);
}
