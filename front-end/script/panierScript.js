// --------- FORMULAIRE VALIDATION --------- //
let btnFormulaire = document.querySelector("#btnFormulaire");
console.log(btnFormulaire);


// --- Stockage des saisies ds local Storage --- //
btnFormulaire.addEventListener("click", () => {
    localStorage.setItem("FirstName", document.querySelector("#inputFirstName").value);
    localStorage.setItem("LastName", document.querySelector("#inputLastName").value);
    localStorage.setItem("eMail", document.querySelector("#inputEmail4").value);
    localStorage.setItem("Address", document.querySelector("#inputAddress").value);
    localStorage.setItem("City", document.querySelector("#inputCity").value);
});



// --- Affichage de la selection précedente --- //
document.querySelector('#cardImgTeddy').src = localStorage.getItem("Teddy");
document.querySelector('#cardTitleTeddy').innerHTML = localStorage.getItem("Name");
document.querySelector('#cardPriceTeddy').innerHTML = localStorage.getItem("Price");


// --- Btn remove card --- //
let cardRemove = document.querySelector("#cardRemove");
cardRemove.addEventListener("click", () => {
    document.querySelector('#cardImgTeddy').src = localStorage.removeItem("Teddy");
    document.querySelector('#cardTitleTeddy').innerHTML = localStorage.removeItem("Name");
    document.querySelector('#cardPriceTeddy').innerHTML = localStorage.removeItem("Price");
})



// const idTeddy = {
//     name: "Norbert",
//     colors: ["Tan", "Chocolate", "Black", "White"],
//     price: 2900,
//     imageUrl: "http://localhost:3000/images/teddy_1.jpg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// }
// window.localStorage.setItem('5be9c8541c9d440000665243', JSON.stringify(idTeddy));


// TO DO LIST PANIER : 
// Affichage du ou des teddy(s) sélectionné(s) sour forme de petites vignettes simplifiées (img, nom, prix, couleur)
// Bouton pour supprimer un article ?
// Total du prix du ou des teddy(s)
// Envoyer toutes les données du panier et du formulaire sur le serveur (?) pour générer un numero de confirmation qui devra s'afficher sur la page confirmation.html
// S'assurer que le panier se vide apres confirmation ?