
// --- Récup et affichage ds page web --- //
document.querySelector('#prenom').innerHTML = localStorage.getItem("FirstName");
document.querySelector('#nom').innerHTML = localStorage.getItem("LastName");
document.querySelector('#adresse').innerHTML = localStorage.getItem("Address");
document.querySelector('#ville').innerHTML = localStorage.getItem("City");
document.querySelector('#email').innerHTML = localStorage.getItem("eMail");



// TO DO LIST CONFIRMATION :
// Affichage du numero de confirmation receptionné par l'API ?
