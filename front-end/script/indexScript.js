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
    <li class="teddy-item">
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
                ${numberWithCommat(teddy.price)}€
              </p>
             <br />
              <a
                class="btn btn-outline-primary w-25"
                href="/front-end/product.html"
                role="button"
                >Détail</a
              >
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
function numberWithCommat(x) {
  return x.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
}
























// fetch('http://localhost:3000/api/teddies')
//   .then(res => res.json())
//   .then(data => console.log(data))



// const imgTeddy = document.getElementById('imgTeddy');
// const nameTeddy = document.getElementById('nameTeddy');
// const textTeddy = document.getElementById('textTeddy');
// const priceTeddy = document.getElementById('priceTeddy');

// fetch('http://localhost:3000/api/teddies')
//   .then(res => res.json())
//   .then(data => imgTeddy.src = data[0].imageUrl)
 
// fetch('http://localhost:3000/api/teddies')
//   .then(res => res.json())
//   .then(data => nameTeddy.textContent = data[0].name)

// fetch('http://localhost:3000/api/teddies')
//   .then(res => res.json())
//   .then(data => textTeddy.textContent = data[0].description)

// fetch('http://localhost:3000/api/teddies')
//   .then(res => res.json())
//   .then(data => priceTeddy.textContent = data[0].price)