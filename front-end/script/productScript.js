// Récupération du produit (id) séléctionné dans la page précédente //
const productId = window.location.search.substring(1); 

// Récupération des données du produit en fonction de son id sur l'API //
fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then((response) => response.json())
    .then(response => {
        
    let getTeddy ="";

    // Création de l'élément appelé en HTML //
    getTeddy += 
    `<div class="card mb-3">
      <div class="row g-0">
      <div class="col-md-4">
        <img
          alt="Ours en peluche"
          class="img-fluid img-thumbnail shadow"
          src="${response.imageUrl}"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title fs-4">${response.name}</h2>
          <p class="card-text">${response.description}</p>
          <p class="card-text text-muted">${(response.price/100).toFixed(2).replace(".",",")}€</p>
          <label for="select__color">
            Personnalisez en choississant une autre couleur :
          </label>
          <select
            class="section__choice"
            name="colors"
            id="select__color">
          </select>
          <hr />
          <div class="d-grid gap-2">
            <button class="addCart btn btn-primary">Ajouter au panier</button>
          </div>
        </div>
      </div>
    </div>
  </div>`

    document.getElementById("item__details").innerHTML = getTeddy;
    
    // Fonction pour afficher les differents choix de couleurs //
    let choice = document.querySelector(".section__choice");
    
    response.colors.forEach (function (colors) {
        let option = document.createElement("option");
        option.value = colors;
        option.textContent = colors;
        choice.appendChild(option);
    })

    // Evènement au click du lancement de la fonction d'ajout de produit au panier //
    let cartBtn = document.querySelector(".addCart");

    cartBtn.addEventListener('click', () => {
        let select = document.querySelector(".section__choice");
        response.selectColors = select.options[select.selectedIndex].value;
        addItemCart(response);
    })
})

// Message d'erreur //
.catch(e => {
    errorMessage();
    console.log(e);
});

// Fonction d'ajout d'article dans un array //
function addItemCart (item) {

    let cartItem = []
    // Stockage dans un objet //
    let saveItemCart = {
        _id: item._id,
        imageUrl: item.imageUrl,
        name: item.name,
        price: item.price,
        quantity: 1,
        selectColors: item.selectColors
    }
    
    let otherItem = true;
    // Si localStorage vide : création d'un nouveau tableau "cartItem"  //
    if (localStorage.getItem('anyItem') === null) {
        cartItem.push(saveItemCart);
        localStorage.setItem('anyItem', JSON.stringify(cartItem));
    }
    // Sinon : récupération du tableau présent, ajout du nouveau produit
    // et enregistrement du nouveau tableau //
    else { 
        cartItem = JSON.parse(localStorage.getItem('anyItem'));
        
        cartItem.forEach((prod) => {
            if (item._id === prod._id && item.selectColors === prod.selectColors) {
                otherItem = false;
                alert("INFORMATION : Produit déja dans votre panier (Nos Ours en peluche sont faits à la main et par conséquent unique, mais vous pouvez néanmoins sélectionner une couleur differente et l'ajouter à votre panier)")
                cardBtn.disabled = true;
            }
        })
    if (otherItem) cartItem.push(saveItemCart);
    localStorage.setItem('anyItem', JSON.stringify(cartItem));
}
// Message lors de l'ajout d'un produit dans le panier //
itemConfirmation();
  alert("Produit ajouté au panier !")
}
