// Sélection des éléments du DOM
const h1 = document.querySelector("h1"); // Sélection du premier <h1>
const ul = document.querySelectorAll("ul"); // Tous les <ul>
const lis = document.querySelectorAll("ul > li"); // Tous les <li> directs dans les <ul>
const li1 = document.querySelectorAll("ul li:first-child"); // Premier <li> de chaque <ul>
console.log(document.querySelector('#hello')); // Affiche l'élément avec l'id "hello"

// Affichage des informations des éléments <li>
lis.forEach(li => {
    console.log(
        li.nodeName,        // Nom du nœud (ex. "LI")
        li.innerHTML,       // Contenu HTML de l'élément
        li.innerText,       // Contenu textuel (visible uniquement)
        li.textContent,     // Contenu textuel complet (incluant espaces)
        li.style            // Style de l'élément
    );
});

// Manipulation des attributs
// Ajouter et supprimer l'attribut "hidden" sur le premier <ul>
ul[0]?.setAttribute('hidden', 'hidden'); 
ul[0]?.removeAttribute('hidden');

// Manipulation des classes et styles
// Supprimer une classe et modifier le style d'un élément <li>
lis[0].classList.remove('red');
lis[0].style.color = 'purple'; // Modifier la couleur du texte
lis[0].style.fontWeight = 'bold'; // Modifier le poids de la police

// Récupérer les styles appliqués
console.log(getComputedStyle(lis[0]).color);

// Ajouter une classe à <h1>
h1.classList.add('red');

// Alterner la classe "red" toutes les 3 secondes
setInterval(() => {
    lis[0].classList.toggle("red");
}, 3000);

// Ajouter des éléments au DOM
// Ajouter un nouvel élément <li> à la fin de la liste
const newli = document.createElement('li');
newli.innerHTML = "Salade Russe";
document.querySelector('ul').append(newli); // Utiliser prepend si à insérer au début

// Ajouter un nouvel élément <div> avant le premier <ul>
const div = document.createElement("div");
div.innerHTML = "Hello World";
ul[0].insertAdjacentElement('beforebegin', div);

/*
Explications sur insertAdjacentElement :
- beforebegin : Avant l'élément cible
- afterbegin : Juste à l'intérieur de l'élément cible, avant le premier enfant
- beforeend : Juste à l'intérieur de l'élément cible, après le dernier enfant
- afterend : Après l'élément cible
*/

// Affichage des informations des nœuds enfants
console.log(
    ul[0].childNodes,             // Renvoie tous les nœuds enfant (y compris les espaces ou nœuds texte)
    ul[0].children,               // Renvoie uniquement les enfants de type élément
    ul[0].firstChild,             // Récupère le premier nœud enfant (même un nœud texte)
    ul[0].firstElementChild,      // Récupère le premier enfant de type élément
    ul[0].previousElementSibling, // Récupère l'élément précédent de même niveau
    ul[0].nextElementSibling,     // Récupère l'élément suivant de même niveau
    ul[0].children.length         // Nombre d'enfants de type élément dans le <ul>
);

// Clonage et suppression
ul[0].append(lis[1].cloneNode(true)); // Clone le 2ème <li>
lis[1].remove(); // Supprime le 2ème <li>

// Vérification d'appartenance
console.log(ul[0].contains(lis[0])); // Vérifie si lis[0] est un enfant de ul[0]

