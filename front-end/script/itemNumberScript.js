// Appel de la function pour le nombre d'article du panier //
itemConfirmation()

// Affichage du nombre d'article dans le panier //
function itemConfirmation() {
    div = document.querySelector("#basket_number")
    let number = 0;
    if (localStorage.getItem('anyItem') !== null) {
        let keyNumber = JSON.parse(localStorage.getItem('anyItem'));
        keyNumber.forEach((prod) => {
            number = number + prod.quantity;
        });
    }
    div.textContent = number;
}

