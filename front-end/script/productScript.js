// let apiUrl = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
//   ? "http://localhost:3000"
//   : "http://localhost:3000/api/teddies"




// Main function, auto executed at load time
(async () => {
    const productId = getProductId()
    const productData = await getProductData(productId)
    hydratePage(productData)
  })()
  
  function getProductId() {
    return new URL(window.location.href).searchParams.get('id')
  }
  
  function getProductData(productId) {
    return fetch(`http://localhost:3000/api/teddies/${productId}`)
      .catch(error => { console.log(error) })
      .then(httpBodyResponse => httpBodyResponse.json())
      .then(productData => productData)
  }
  
  function hydratePage(product) {
    // Hydrate page with data
    document.getElementById('imgTeddy').src = product.imageUrl
    document.getElementById('titleTeddy').textContent = product.name
    document.getElementById('priceTeddy').textContent = `${product.price / 100}.00 €`
    document.getElementById('textTeddy').textContent = product.description
    // document.getElementById('productColors').style.gridTemplateColumns = `repeat(${product.colors.length}, 1fr)`
  
    // Add event listeners on button
    // document.getElementById('addToCart').onclick = (event) => {
    //   event.preventDefault()
    //   Cart.addProduct(product)
    //   redirectToShoppingCart(product.name)
    // }
  
    // Get parent element
    // const colorsElt = document.getElementById('productColors')
  
    // Display all colors
    // product.colors.forEach(color => {
      // Get & clone template for one color
    //   const templateElt = document.getElementById('productColor')
    //   const cloneElt = document.importNode(templateElt.content, true)
  
      // Hydrate color clone
    //   cloneElt.querySelector('div').style.backgroundColor = color
  
      // Display a new color
    //   colorsElt.appendChild(cloneElt)
    // })
  }
  
//   function redirectToShoppingCart(productName) {
//     window.location.href = `${window.location.origin}/cart.html?lastAddedProductName=${productName}`
//   }



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