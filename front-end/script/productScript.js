// Main function, auto executed at load time
(async () => {
    const productId = getProductId()
    const productData = await getProductData(productId)
    showTeddy(productData)
  })()
  
  function getProductId() {
    return new URL(window.location.href).searchParams.get('id')
  }
  
  function getProductData(productId) {
    return fetch(`http://localhost:3000/api/teddies/${productId}`)
      .catch(error => { console.log(error) })
      .then(res => res.json())
      .then(productData => productData)
  }
  
  function showTeddy(product) {
    document.getElementById('imgTeddy').src = product.imageUrl 
    document.getElementById('titleTeddy').textContent = product.name
    document.getElementById('priceTeddy').textContent = `${product.price / 100}.00 €`
    document.getElementById('textTeddy').textContent = product.description
    
    product.colors.forEach(color => {
      const opt = document.createElement('option');
      opt.textContent = color;
      opt.value = color;
      document.getElementById('selectColor').appendChild(opt)
    })
 

// --------- FORMULAIRE VALIDATION --------- //
let AddToCard = document.querySelector("#addToCard");
// console.log(AddToCard);


// --- Stockage des saisies ds local Storage --- //
AddToCard.addEventListener("click", () => {
    localStorage.setItem("Teddy", document.textContent = product.imageUrl);
    localStorage.setItem("Name", document.textContent = product.name);
    localStorage.setItem("Price", document.textContent = `${product.price / 100}.00 €`);
    // localStorage.setItem("LastName", document.querySelector("#inputLastName").value);
    // localStorage.setItem("eMail", document.querySelector("#inputEmail4").value);
    // localStorage.setItem("Address", document.querySelector("#inputAddress").value);
    // localStorage.setItem("City", document.querySelector("#inputCity").value);
});

}












// TO DO LIST PRODUCT :

// Au clic du bouton AJOUTER AU PANIER : message comme quoi le produit est bien ajouté et si pas de couleur sélectionné : un message d'avertissement
// La possibilité de revenir sur la page index.html tout en gardant le panier remplis (si teddy sélectionné) > utilisation du local storage ?
// La possibilité de rajouter des teddys au panier si les conditions sont remplis 