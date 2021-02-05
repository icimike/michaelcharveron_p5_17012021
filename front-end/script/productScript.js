// --- Main function, auto executed at load time --- //
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
    // --- Recuperer les differentes couleurs en fonction du Teddy sélectionné et les afficher ds une liste déroulante --- //
    product.colors.forEach(color => {
      const opt = document.createElement('option');
      opt.textContent = color;
      opt.value = color;
      document.getElementById('selectColor').appendChild(opt)
    })
 
let idTeddy = product._id;
let infoTeddy = [product.name, product.imageUrl, `${product.price / 100}.00 €`]

    // --------- BTN ADD TO CARD --------- //
    let addToCard = document.querySelector("#addToCard");

    // --- Stockage des saisies ds local Storage --- //
    addToCard.addEventListener("click", () => {
      localStorage.setItem(idTeddy, JSON.stringify(infoTeddy));

      // --- Zone de Test --- //
      localStorage.setItem("Teddy", document.textContent = product.imageUrl);
      localStorage.setItem("Name", document.textContent = product.name);
      localStorage.setItem("Price", document.textContent = `${product.price / 100}.00 €`);

      alert("Produit ajouté au panier !");
    });

}





// TO DO LIST PRODUCT :
// La possibilité de revenir sur la page index.html tout en gardant le panier remplis (si teddy sélectionné) > utilisation du local storage ?
// La possibilité de rajouter des teddys au panier si les conditions sont remplis 