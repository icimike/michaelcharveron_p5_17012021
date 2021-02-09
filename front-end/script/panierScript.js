let boxSection = document.querySelector("#item__select");
// variable quantité 0
let total = 0;
// Appel ma function affichage du panier
displayQuantity()

// Contenu du panier, des boutons de suppression et d'annulation du panier ainsi que du formulaire de contact 
function displayQuantity() {

    if (localStorage.getItem('anyItem') !== null) {

        let items = JSON.parse(localStorage.getItem('anyItem'));
        total = 0; //initialisation du total à 0

        boxSection.insertAdjacentHTML("afterbegin",
            `<div class="card text-center">
                <div class="card-body">
                <h5 class="card-title">Récapitulatif de votre panier</h5>
                    <div class= "table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                        <th scope="col">Articles</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Couleurs</th>
                        <th scope="col">Nombre d'articles</th>
                        <th scope="col">Prix</th>
                        </tr>
                        </thead>
                        <tbody class="order__details"></tbody>
                    </table>
                    </div>
                </div>
            </div>`
        );
        
        let showCartProduct = "";
        // Affichage des articles + prix + quantité
        items.forEach( (product, index) => {
            
            total = total + (product.price * product.quantity);

            showCartProduct +=
                    `<tr>
                        <td class="old"><img src="${product.imageUrl}" alt="ours en peluche" style="width:100px;"></td>
                        <td class="old">${product.name}</td>
                        <td class="old">${product.selectColors}</td>
                        <td class="old"><button class="decrease__item ${index} btn btn-outline-secondary btn-sm fw-bold"> - </button>
                        ${product.quantity}
                        <button class="increase__item ${index} btn btn-outline-secondary btn-sm fw-bold"> + </button></td>
                        <td class="old">${(product.price * product.quantity/100).toFixed(2).replace(".",",")}€</td>
                        <td><button class="delete__item ${index} btn btn-outline-danger"><i class="bi bi-trash"></i></button></td>
                    </tr>`
            document.querySelector(".order__details").innerHTML = showCartProduct;
        })

        //Total prix + boutton annuler commande    
        boxSection.insertAdjacentHTML("beforeend",
            `<div class="card text-center mx-auto w-50">
                <div class="card-header">
                    Total de votre commande
                </div>
                <div class="card-body">
                    <h5 class=" cart-section card-title">${(total/100).toFixed(2).replace(".",",")}€</h5>
                    <button class="cancel__ordered btn btn-outline-danger btn-sm">
                    Annuler le panier
                    </button>
                </div>
                <div class="card-footer text-muted">
                Formulaire de validation
                </div>
            </div>`
        );
        // Formulaire
        boxSection.insertAdjacentHTML("beforeend",
            `<div class="card-body mx-auto" style="max-width: 30rem" ;>
            <form
              type="submit"
              class="contact__form row g-3"
              action="post"
              
            >
              <div class="col-md-6 details__form">
                <label for="firstname" class="form-label">Prénom</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  maxlength="25" pattern="[a-zA-ZÀ-ÿ]{2,}"
                  required
                />
              </div>
    
              <div class="col-md-6 details__form">
                <label for="name" class="form-label">Nom</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  maxlength="25" pattern="[a-zA-ZÀ-ÿ]{2,}"
                  required
                />
              </div>
              <div class="col-md-6 details__form">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}"
                  required
                />
              </div>
    
              <div class="col-12 details__form">
                <label for="address" class="form-label">Addresse</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  maxlength="50"
                  required
                />
              </div>
    
              <div class="col-md-6 details__form">
                <label for="city" class="form-label">Ville</label>
                <input type="text"
                class="form-control"
                id="city"
                maxlength="50"
                required />
              </div>
    
              <div class="d-grid gap-2">
                <button id="submit" class="validate btn btn-primary">
                  Confirmation
                </button>
              </div>
            </form>
          </div>`
        );

        // L'ecoute du boutton -
        const decreaseItem = document.querySelectorAll(".decrease__item ");
        decreaseItem.forEach((btn) => {

            btn.addEventListener('click', e => {
            removeOneItem(e, items);
            })
        })
        // L'ecoute des bouttons +
        const increaseItem = document.querySelectorAll(".increase__item");
        increaseItem.forEach((btn) => {

            btn.addEventListener('click', e => {
            addOneItem(e, items);
            })
        })
        //supprimer
        const deleteItem = document.querySelectorAll(".delete__item");
        deleteItem.forEach((btn) => {
            btn.addEventListener('click', e => {
            deleteItemSelect(e, items);
            });
        });
        
        //annuler
        const cancelOrdered = document.querySelector(".cancel__ordered");
        cancelOrdered.addEventListener('click', () => {
            cancelMyOrdered();
        });

        //validation formulaire
        const form = document.querySelector(".contact__form");
        form.addEventListener('submit', e => {
            e.preventDefault();
            sendform();
        });

        //Sinon, Panier vide
    } else {
        boxSection.insertAdjacentHTML("afterbegin",
            `<div class="card text-center mx-auto w-50">
                <div class="card-header">
                Votre panier
                </div>
                <div class="card-body">
                    <h5 class="cart-section card-title">Votre panier est vide !</h5>
                    <a href="./index.html" class="btn btn-outline-primary">
                    Retour à la page d'accueil
                    </a>
                </div>
            </div>`
        )
    }
}

// =====================================================================================

// Ajoute "1" d'un article
function addOneItem(e, items) {
    let index = e.target.classList[1].slice(-1);
    items[index].quantity++;
    localStorage.setItem('anyItem', JSON.stringify(items));
    updateNumberArticles();
}

// =====================================================================================

// Enlève "1" d'un article, en arrivant à zéro il est supprimé
function removeOneItem(e, items) {
    let index = e.target.classList[1].slice(-1);
    items[index].quantity--;
    
    if (items[index].quantity <= 0) {
        items.splice(index, 1);       
        if (items.length === 0 ) {
            localStorage.removeItem('anyItem');
        } else {
            localStorage.setItem('anyItem', JSON.stringify(items));
        }
    } else {
        localStorage.setItem('anyItem', JSON.stringify(items));
    }
    updateNumberArticles();
}

// =====================================================================================
 
//Supprime l'article sélectionné.
//Récupère l'index de l'article correspondant avec le caractère du nom de la classe. 
//Supprime le bon article dans le tableau "items" du localStorage
function deleteItemSelect(e, items) {
    let index = e.target.classList[1].slice(-1);
    items.splice(index, 1);
    localStorage.setItem('anyItem', JSON.stringify(items));

    if (items.length === 0) {
        localStorage.removeItem('anyItem');
    }
    updateNumberArticles();
}

// =====================================================================================

//Annulation tout le panier
function cancelMyOrdered() {
    localStorage.removeItem('anyItem');
    updateNumberArticles();
}

// =====================================================================================

//Réinitialise la section "item__select" et le nombre d'article dans le panier
function updateNumberArticles() {
    boxSection.innerHTML = "";
    displayQuantity();
    itemConfirmation();
}

// =====================================================================================

//Récupère les valeurs de l'input dans contact__form
//Récupère les id des produits du panier dans le tableau products
//L'objet contact et le tableau products sont envoyé dans la function postOrder
function sendform() {
    let contact = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    };

    let products = [];
    if (localStorage.getItem('anyItem') !== null) {
        let productTab = JSON.parse(localStorage.getItem('anyItem'));
        
        productTab.forEach( p => {
            products.push(p._id);
        })
    }
    
    let contactItems = JSON.stringify({
        contact, products
    })
    postOrder(contactItems);
};
// =====================================================================================

//Requête POST, envoi au serveur "contact" et le tableau d'id "products"
//Enregistre l'objet "contact" et Id, le total de la commande sur le localStorage.
//Envoie page "confirmation"
function postOrder(contactItems) {

    fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode:'cors',
        body: contactItems
    }).then(response => {
        return response.json();

    }).then( r => {
        localStorage.setItem('contact', JSON.stringify(r.contact));
        localStorage.setItem('orderId', JSON.stringify(r.orderId));
        localStorage.setItem('total', JSON.stringify(total));
        localStorage.removeItem('anyItem');
        window.location.replace("./confirmation.html");
    })
    .catch((e) => {
        displayError();
        console.log(e);
    })
}




