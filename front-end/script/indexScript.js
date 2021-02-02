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
