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
document.querySelector('#totalPrice').innerHTML = localStorage.getItem("Price");


// --- Make sure the page is load in order to run the code --- //
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    // --- Btn remove card --- //
    let removeCardBtn = document.getElementsByClassName('btn-outline-danger')
    console.log(removeCardBtn)
    for (let i = 0; i < removeCardBtn.length; i++) {
        let button = removeCardBtn[i]
        button.addEventListener('click', function(event) {
            let buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
        })
    }
}


// TO DO LIST PANIER : 
// Affichage du ou des teddy(s) sélectionné(s) sour forme de petites vignettes simplifiées (img, nom, prix)
// Total du prix du ou des teddy(s)
// Envoyer toutes les données du panier et du formulaire sur le serveur (?) pour générer un numero de confirmation qui devra s'afficher sur la page confirmation.html
// S'assurer que le panier se vide apres confirmation ?

