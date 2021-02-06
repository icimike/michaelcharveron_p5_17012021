//////////  Récupération des données ours en peluches avec l'API fetch.

fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then((response) => {
  
    console.log(response);

    //Je créer ma variable que je vais ajouter à mes elements
    let getTeddy = "";

    // Boucle pour récupére toutes les variables des produits + (Foreach)
    for(let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      
      //Html pur , Créer les élément, clone prototype
      getTeddy += 
      `<li class="item">
        <div class="card mb-3">
          <div id="cardProduct" class="row g-0">
            <div class="col-md-4">
              <img src="${response[i].imageUrl}" class="img-thumbnail shadow" />
            </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${response[i].name}</h5>
                  <p class="card-text">${response[i].description}</p>
                  <p class="card-text text-muted fs-5">${(response[i].price/100).toFixed(2).replace(".",",")}€</p>
                  <br />
                  <a
                    class="btn btn-outline-primary w-25"
                    href="./product.html?${response[i]._id}"
                    >Détail</a>
                </div>
              </div>
          </div>
        </div>
      </li>`
    }
    
     // Ajouter mes element créer dans le HTML pour afficher mes produits
    document.getElementById("items").innerHTML = getTeddy
})

// Message d'erreur
.catch(e => {
  errorMessage();
});


































// main()

// async function main() {
//   const products = await getProducts()
//   for (product of products) {
//     displayProduct(product)
//   }
// }

// function getProducts() {
//   return fetch("http://localhost:3000/api/teddies")
//     .then(function(httpBodyResponse) {
//       return httpBodyResponse.json()
//     })
//     .then(function(products) {
//       return products
//     })
//     .catch(function(error) {
//       alert(error)
//     })
// }

// function displayProduct() {
//   const templateElt = document.getElementById("templateProduct")
//   const cloneElt = document.importNode(templateElt.content, true)

//   cloneElt.getElementById("imgTeddy").src = product.imageUrl
//   cloneElt.getElementById("titleTeddy").textContent = product.name
//   cloneElt.getElementById("textTeddy").textContent = product.description
//   cloneElt.getElementById("priceTeddy").textContent = `${product.price / 100}.00 €`
//   cloneElt.getElementById("btn-product").href = `product.html?id=${product._id}`

//   document.getElementById("cardProduct").appendChild(cloneElt)
// }
