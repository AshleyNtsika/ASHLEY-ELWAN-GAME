let joueur=document.getElementById("joueur");
/* de la même façon, à compléter */
let ennemi=document.getElementById("ennemi");
let scoreHTML=document.getElementById("score");
let viesHTML=document.getElementById("vies")

let bouton_droite=document.getElementById("droite");
let bouton_gauche=document.getElementById("gauche");

let positionJoueur= 175;  
let ennemiX= Math.floor(Math.random()*360);
let ennemiY=0;

let score=0;
let vitesse = 5;
let vies= 3;
ennemi.style.left=ennemiX+"px";


function deplacerJoueurClavier(event) {
if (event.key==="ArrowRight"){
deplacerDroite();	
}

if (event.key==="ArrowLeft"){
	deplacerGauche()
}
	
}

function deplacerDroite() {
	if (positionJoueur <360) { 
		positionJoueur= positionJoueur+20;
		joueur.style.left= positionJoueur + "px";
	}
}	

function deplacerGauche(){
	if (positionJoueur > 0){
		positionJoueur= positionJoueur - 20;
		joueur.style.left= positionJoueur + "px";
	}
}
	

function descendreEnnemi() {
	 ennemiY+= vitesse;
	 ennemi.style.top=ennemiY+"px";
	 if (ennemiY > 400){
	
	 if (Math.abs(ennemiX-positionJoueur)<40){
		 score+=1;
		 
		 ennemi.style.backgroundColor="yellow";
		 setTimeout(() =>{
		 ennemi.style.backgroundcolor="red";}, 100);
	 }
	 else{
		 score-=1;
		 vies-=1;
	 }
	 scoreHTML.innerHTML = score;
	 viesHTML.innerHTML ="❤️".repeat(vies); 
	 ennemiY = 0;
	 
	 ennemiX= Math.floor(Math.random()*360);
	 ennemi.style.left = ennemiX + "px";
	 
	 vitesse += 0.5;
	 }
     if (vies <= 0){
		 alert("💀GAME OVER");
		 location.reload();
	 }
	 if (score >= 10){
		 alert("🏆YOU WIN !!");
		 location.reload();
	 }
}
function startMusic(){
	let music= document.getElementById("music");
	music.play()
}
	
document.onkeydown = deplacerJoueurClavier;

bouton_droite.onclick = deplacerDroite;
bouton_gauche.onclick = deplacerGauche;

setInterval(descendreEnnemi,30);

