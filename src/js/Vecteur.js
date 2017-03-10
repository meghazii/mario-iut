function Vecteur(x, y){
    this.x = x;
    this.y = y;
}

Vecteur.prototype.add = function(vecteur){
    this.x += vecteur.x;
    this.y += vecteur.y;
}

Vecteur.prototype.mult = function(scal){
    this.x *= scal;
    this.y *= scal;
}

Vecteur.div = function(force, mass){
    return new Vecteur(force.x*mass, force.y*mass);
}
