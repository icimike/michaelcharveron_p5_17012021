// Récupération des éléments du localStorage //
const contact = JSON.parse(localStorage.getItem("contact"));
const orderId = JSON.parse(localStorage.getItem("orderId"));
const total = JSON.parse(localStorage.getItem('total'));

let showConfirmation ="";

// Affichage du message de confirmation //
showConfirmation +=
    `<div class="card text-center">
        <div class="card-body">
            <h2 class="card-title">Merci <span class="fw-bold">${contact.firstName} ${contact.lastName}</span> de votre commande !</h2>
            <hr>
            <p class="card-text">
            Votre commande d'un montant de <span class="fw-bold">${(total/100).toFixed(2).replace(".",",")} €</span>
            <br>
            est validé sous le numéro : <span class="fw-bold">${orderId}</span>
            </p>
        </div>
    </div>
    <br />
    <div class="card text-center mx-auto" style="max-width: 30rem">
        <div class="card-body">
            <p class="card-text">Celle-ci sera expediée à cette adresse :</p>
            <p class="card-text">
            <span class="fw-bold">${contact.address}</span> à
            <span class="fw-bold">${contact.city}</span>
            </p>
            <p class="card-text">
            Un Email de confirmation vient d'être envoyé à :
            </p>
            <p class="fw-bold">${contact.email}</p>
            <div class="d-grid gap-2">
                <a class="btn btn-outline-primary"
                href="/front-end/index.html"
                role="button">
                Retour au site
                </a>
            </div>
        </div>
    </div>`
    document.getElementById("order__confirmed").innerHTML = showConfirmation;

// Effacer les éléments du LocalStorage //
localStorage.removeItem('contact');
localStorage.removeItem('total');
localStorage.removeItem('orderId');
