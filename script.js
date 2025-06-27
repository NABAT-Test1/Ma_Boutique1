let panier = [];

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  afficherPanier();
}

function afficherPanier() {
  const liste = document.getElementById('liste-panier');
  const totalEl = document.getElementById('total');
  const countEl = document.getElementById('panier-count');
  liste.innerHTML = '';

  let total = 0;
  panier.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nom} - ${item.prix.toFixed(2)} €`;
    liste.appendChild(li);
    total += item.prix;
  });

  totalEl.textContent = total.toFixed(2);
  countEl.textContent = panier.length;
}

function viderPanier() {
  panier = [];
  afficherPanier();
}

function payer() {
  alert("Merci pour votre achat !");
  panier = [];
  afficherPanier();
}

document.getElementById('panier-btn').onclick = () => {
  const panierDiv = document.getElementById('panier');
  panierDiv.style.display = panierDiv.style.display === 'block' ? 'none' : 'block';
};
