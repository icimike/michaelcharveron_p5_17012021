/* Récupération de l'id du produit sélectionné dans la page précédente */
const productId = window.location.search.substr(1); 


/* Récupération du produit avec l'id associé depuis le serveur */ 

fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then((response) => response.json())
    .then(response => {
        
    let html="";

    // Affichage du produit / personalisation
    html += `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          class="img-fluid img-thumbnail shadow"
          src="${response.imageUrl}"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${response.name}</h5>
          <p id="textTeddy" class="card-text">${response.description}</p>
          <p class="card-text">
            <small id="priceTeddy" class="text-muted">${(response.price/100).toFixed(2).replace(".",",")}€</small>
          </p>
          <label for="select__color">
          Personnalisez en choississant une autre couleur :
      </label>
          <select class="section__choice" name="colors" id="select__color">
          </select>
          <hr />

          <div class="d-grid gap-2">
            <button class="addCart btn btn-primary">
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
    document.getElementById("item__details").innerHTML = html;
    
    //Création d'une function foreach pour afficher mes choix de couleurs
    let choice = document.querySelector(".section__choice");
    
    response.colors.forEach (function (colors) {
        let option = document.createElement("option");
        option.value = colors;
        option.textContent = colors;
        choice.appendChild(option);
    })

    //Évènement "click" : lance la fonction d'ajout du produit au panier
    let cartBtn = document.querySelector(".addCart");

    cartBtn.addEventListener('click', () => {
        let select = document.querySelector(".section__choice");
        response.selectColors = select.options[select.selectedIndex].value;
        addItemCart(response);

    })
})
// Message d'erreur
.catch(e => {
    errorMessage();
    console.log(e);
});

// Function ajout des articles au panier.
function addItemCart (item) {

    // variable tableaux
    let cartItem = []

    // stockage dans un objet
    let saveItemCart = {
        _id: item._id,
        imageUrl: item.imageUrl,
        name: item.name,
        price: item.price,
        quantity: 1,
        selectColors: item.selectColors
    }
    let otherItem = true;
    // Si sessionStorage est vide elle crée un nouveau tableau cartItem et l'enregistre dans le sessionStorage
    if (sessionStorage.getItem('anyItem') === null) {
        cartItem.push(saveItemCart);
        sessionStorage.setItem('anyItem', JSON.stringify(cartItem));
    } 
    // Sinon elle récupère le tableau du sessionStorage, ajoute le nouveau produit, et enregistre le nouveau tableau.
    else { 
        cartItem = JSON.parse(sessionStorage.getItem('anyItem'));

        cartItem.forEach((prod) => {
            if (item._id === prod._id && item.selectColors === prod.selectColors) {
                prod.quantity++;
                otherItem = false;
            }
        })
    if (otherItem) cartItem.push(saveItemCart);
    sessionStorage.setItem('anyItem', JSON.stringify(cartItem));
}

itemConfirmation();
alert("Vôtre produit a été ajouter au panier");
}




























// --- Main function, auto executed at load time --- //
// (async () => {
//     const productId = getProductId()
//     const productData = await getProductData(productId)
//     showTeddy(productData)
//   })()
  
//   function getProductId() {
//     return new URL(window.location.href).searchParams.get('id')
//   }
  
//   function getProductData(productId) {
//     return fetch(`http://localhost:3000/api/teddies/${productId}`)
//       .catch(error => { console.log(error) })
//       .then(res => res.json())
//       .then(productData => productData)
//   }
  
  
//   function showTeddy(product) {
//     document.getElementById('imgTeddy').src = product.imageUrl 
//     document.getElementById('titleTeddy').textContent = product.name
//     document.getElementById('priceTeddy').textContent = `${product.price / 100}.00 €`
//     document.getElementById('textTeddy').textContent = product.description
    // --- Recuperer les differentes couleurs en fonction du Teddy sélectionné et les afficher ds une liste déroulante --- //
//     product.colors.forEach(color => {
//       const opt = document.createElement('option');
//       opt.textContent = color;
//       opt.value = color;
//       document.getElementById('selectColor').appendChild(opt)
//     })
 
// let idTeddy = product._id;
// let infoTeddy = [product.name, product.imageUrl, `${product.price / 100}.00 €`]

    // --------- BTN ADD TO CARD --------- //
    // let addToCard = document.querySelector("#addToCard");

    // --- Stockage des saisies ds local Storage --- //
//     addToCard.addEventListener("click", () => {
//       localStorage.setItem(idTeddy, JSON.stringify(infoTeddy));

//       // --- Zone de Test --- //
//       localStorage.setItem("Teddy", document.textContent = product.imageUrl);
//       localStorage.setItem("Name", document.textContent = product.name);
//       localStorage.setItem("Price", document.textContent = `${product.price / 100}.00 €`);

//       alert("Produit ajouté au panier !");
//     });

// }


// TO DO LIST PRODUCT :
// La possibilité de revenir sur la page index.html tout en gardant le panier remplis (si teddy sélectionné) > utilisation du local storage ?
// La possibilité de rajouter des teddys au panier si les conditions sont remplis 