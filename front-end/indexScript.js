fetch('http://localhost:3000/api/teddies')
  .then(res => res.json())
  .then(data => console.log(data))



const imgTeddy = document.getElementById('imgTeddy');
const nameTeddy = document.getElementById('nameTeddy');
const textTeddy = document.getElementById('textTeddy');
const priceTeddy = document.getElementById('priceTeddy');

fetch('http://localhost:3000/api/teddies')
  .then(res => res.json())
  .then(data => imgTeddy.src = data[0].imageUrl)
 
fetch('http://localhost:3000/api/teddies')
  .then(res => res.json())
  .then(data => nameTeddy.textContent = data[0].name)

fetch('http://localhost:3000/api/teddies')
  .then(res => res.json())
  .then(data => textTeddy.textContent = data[0].description)

fetch('http://localhost:3000/api/teddies')
  .then(res => res.json())
  .then(data => priceTeddy.textContent = data[0].price)