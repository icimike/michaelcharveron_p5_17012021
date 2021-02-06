//Récupération des différents éléments dans le sessionStorage afin de les afficher sur la page confirmation
const contact = JSON.parse(sessionStorage.getItem("contact"));
const orderId = JSON.parse(sessionStorage.getItem("orderId"));
const total = JSON.parse(sessionStorage.getItem('total'));
let html ="";

html +=`
    <h2>Confirmation de la commande</h2>
    <ul>
        <li class="puce">Vos coordonnées</li>
        <li class="puce">Nom: ${contact.lastName}</li>
        <li class="puce">Prénom: ${contact.firstName}</li>
        <li class="puce">Adresse: ${contact.address}</li>
        <li class="puce">Ville: ${contact.city}</li>
        <li class="puce">Email: ${contact.email}</li>
    </ul>
    <h3>Total: ${(total/100).toFixed(2).replace(".",",")} €</h3>
    <h3>Numéro de la commande: </br> ${orderId}</h3>`
    document.getElementById("order__confirmed").innerHTML = html;

sessionStorage.removeItem('contact');
sessionStorage.removeItem('total');
sessionStorage.removeItem('orderId');





















// --- Récup et affichage ds page web --- //
// document.querySelector('#prenom').innerHTML = localStorage.getItem("FirstName");
// document.querySelector('#nom').innerHTML = localStorage.getItem("LastName");
// document.querySelector('#adresse').innerHTML = localStorage.getItem("Address");
// document.querySelector('#ville').innerHTML = localStorage.getItem("City");
// document.querySelector('#email').innerHTML = localStorage.getItem("eMail");



// TO DO LIST CONFIRMATION :
// Affichage du numero de confirmation receptionné par l'API ?
