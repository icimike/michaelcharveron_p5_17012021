let btnFormulaire = document.querySelector("#btnFormulaire");
console.log(btnFormulaire);

btnFormulaire.addEventListener("click", () => {

// --- Récup et affichage ds page web --- //
document.querySelector('#prenom').innerHTML = localStorage.getItem("FirstName");
document.querySelector('#nom').innerHTML = localStorage.getItem("LastName");
document.querySelector('#adresse').innerHTML = localStorage.getItem("Address");
document.querySelector('#ville').innerHTML = localStorage.getItem("City");
document.querySelector('#email').innerHTML = localStorage.getItem("eMail");

});