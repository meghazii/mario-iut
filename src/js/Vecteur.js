function Vecteur(x, y){
    this.x = x;
    this.y = y;
}

Vecteur.prototype.add = function(vecteur){
    this.x += vecteur.x;
    this.y += vecteur.y;
}
