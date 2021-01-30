main()

async function main() {
  const products = await getProducts()
  for (product of products) {
    displayProduct(product)
  }
}

function getProducts() {
  return fetch("http://localhost:3000/api/teddies")
    .then(function(httpBodyResponse) {
      return httpBodyResponse.json()
    })
    .then(function(products) {
      return products
    })
    .catch(function(error) {
      alert(error)
    })
}

function displayProduct() {
  const templateElt = document.getElementById("templateProduct")
  const cloneElt = document.importNode(templateElt.content, true)

  cloneElt.getElementById("imgTeddy").src = product.imageUrl
  cloneElt.getElementById("titleTeddy").textContent = product.name
  cloneElt.getElementById("textTeddy").textContent = product.description
  cloneElt.getElementById("priceTeddy").textContent = `${product.price / 100}.00 €`
  cloneElt.getElementById("btn-product").href = `product.html?id=${product._id}`

  document.getElementById("cardProduct").appendChild(cloneElt)
}



// const productTeddy = document.getElementById('teddies');
// let apiTeddy;

// const fetchTeddy = async() => {
//   apiTeddy = await fetch (
//     'http://localhost:3000/api/teddies').then(res => res.json());
// }

// const showTeddies = async() => {
//   await fetchTeddy();

//   productTeddy.innerHTML = (
//     apiTeddy
//     .map(teddy =>(
//       `
//     <li>
//       <div class="card mb-3">
//         <div class="row g-0">
//           <div class="col-md-4">
//             <img class="img-thumbnail shadow" src="${teddy.imageUrl}" />
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title">${teddy.name}</h5>
//               <p class="card-text">${teddy.description}</p>
//               <p class="card-text text-muted fs-5">
//                 ${numberWithCommas(teddy.price)}€
//               </p>
//              <br />
//              <a
//              id="btn-product"
//              class="btn btn-outline-primary w-25"
//              href=
//              role="button"
//              >Détail</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//       `
//     )).join('')
//   );
// };

// showTeddies();


// Fonction pour formater le prix //
// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
// }




// TO DO LIST INDEX :

// Au clic du bouton "détail" > se rendre sur la page "product.html" et afficher que le teddy sélectionné (avec l'ID de l'API ?)