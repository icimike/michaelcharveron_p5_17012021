const productTeddy = document.getElementById('teddies');
let apiTeddy;

const fetchTeddy = async() => {
  apiTeddy = await fetch (
    'http://localhost:3000/api/teddies').then(res => res.json());
}

const showTeddies = async() => {
  await fetchTeddy();

  productTeddy.innerHTML = (
    apiTeddy
    .map(teddy =>(
      `
    <li>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img class="img-thumbnail shadow" src="${teddy.imageUrl}" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${teddy.name}</h5>
              <p class="card-text">${teddy.description}</p>
              <p class="card-text text-muted fs-5">
                ${numberWithCommas(teddy.price)}€
              </p>
             <br />
             <a
             id="btn-product"
             class="btn btn-outline-primary w-25"
             href="/front-end/product.html"
             role="button"
             >Détail</a>
            </div>
          </div>
        </div>
      </div>
    </li>
      `
    )).join('')
  );
};

showTeddies();


// Fonction pour formater le prix //
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
}




// TO DO LIST INDEX :

// Au clic du bouton "détail" > se rendre sur la page "product.html" et afficher que le teddy sélectionné (avec l'ID de l'API ?)