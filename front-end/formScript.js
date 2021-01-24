// --------- FORMULAIRE VALIDATION --------- //
let btnFormulaire = document.querySelector("#btnFormulaire");
console.log(btnFormulaire);

btnFormulaire.addEventListener("click", () => {

// --- Stockage des saisies ds local Storage --- //
localStorage.setItem("FirstName", document.querySelector("#inputFirstName").value);
localStorage.setItem("LastName", document.querySelector("#inputLastName").value);
localStorage.setItem("eMail", document.querySelector("#inputEmail4").value);
localStorage.setItem("Address", document.querySelector("#inputAddress").value);
localStorage.setItem("City", document.querySelector("#inputCity").value);

});