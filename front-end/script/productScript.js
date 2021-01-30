// inserer un ARRAY dans liste déroulante :
let selectColor = document.getElementById("selectColor"); 
let colors = ["Tan", "Chocolate", "Black", "White"];

// Populate list with options:
for(let i = 0; i < colors.length; i++) {
    let opt = colors[i];
    selectColor.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}


// TO DO LIST PRODUCT :

// Afficher le TEDDY correspondant à la selection de la page index.html
// Affichage du TEDDY avec l'img, le nom, la description, le prix et une liste déroulante pour choisir une couleur en fonction du TEDDY.
// Au clic du bouton AJOUTER AU PANIER : message comme quoi le produit est bien ajouté et si pas de couleur sélectionné : un message d'avertissement
// La possibilité de revenir sur la page index.html tout en gardant le panier remplis (si teddy sélectionné) > utilisation du local storage ?
// La possibilité de rajouter des teddys au panier si les conditions sont remplis 