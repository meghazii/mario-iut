var tab = [120][19];
for(i = 0; i < 12; i++){
	for(j = 0; j < 120; j++){
		tab[i][j].setImage("ciel.png");
	}
}

for(i=0;i< 120;i++){
	 tab[i][j].setImage("terre.png");
}

for(i=0;i<4;i++){
	tab[i+6][19].setImage("escalier.png");
}


for(i=0;i<3;i++){
	tab[i+7][18].setImage("escalier.png");
}


for(i=0;i<2;i++){
	tab[i+8][17].setImage("escalier.png");
}

tab[9][16].setImage("escalier.png");
