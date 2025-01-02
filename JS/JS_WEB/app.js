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


// Ecouteur d'évènement

/**
 * Fonction exécutée lorsqu'un bouton est cliqué.
 * @param {PointerEvent} event - L'événement déclenché par l'interaction utilisateur.
 */
function onButtonClick(event) {
    console.log('Bouton cliqué'); // Affiche un message dans la console
    console.log(
        event.currentTarget, // Élément qui a attaché l'écouteur d'événement
        event.preventDefault(), // Annule le comportement par défaut de l'événement
        event.stopPropagation() // Stoppe la propagation de l'événement vers les parents
    );
}

// Ajout d'écouteurs d'événements sur tous les boutons de la page
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', onButtonClick, { // Attache la fonction onButtonClick à chaque bouton
            once: true, // 1 fois
            preventDefault: false // Erreur preventDefault
        })
    });

// Exemple : Écouteur d'événement sur un <div>
document.querySelector('div').addEventListener('click', function () {
    console.log('Clic sur le div'); // Affiche un message lorsque le div est cliqué
}, {
    capture: true
});

// EVENTS.JS : Gestion des événements clavier et formulaires

// 1. Gestion des raccourcis clavier
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey === true && e.key === 'm') {
        e.preventDefault(); // Empêche le comportement par défaut
        console.log("Raccourci clavier Ctrl + M détecté");
    }
});

// 2. Gestion des événements de formulaire
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche l'envoi du formulaire

    const form = e.currentTarget; // Référence au formulaire
    const data = new FormData(form); // Récupération des données
    const firstname = data.get('firstname'); // Accès au champ 'firstname'

    if (firstname.length < 2) { // Validation simple
        console.error("Le prénom doit comporter au moins 2 caractères");
    } else {
        console.log("Formulaire soumis avec succès :", firstname);
    }
});

// 3. Gestion des événements sur les champs d'entrée (input)
// - `change` : Détecte un changement de valeur après perte du focus
// - `input` : Détecte les changements en temps réel
// - `keydown` : Détecte lorsqu'une touche est enfoncée
document.querySelector('input').addEventListener('change', (e) => {
    console.log("Changement détecté :", e.currentTarget.value);
});

document.querySelector('input').addEventListener('input', (e) => {
    console.log("Saisie en cours :", e.currentTarget.value);
});

document.querySelector('input').addEventListener('keydown', (e) => {
    console.log("Touche appuyée :", e.key);
});

// 4. Autres événements courants
// - `focus` : Détecte quand un élément (input) reçoit le focus
// - `blur` : Détecte quand un élément perd le focus
document.querySelector('input').addEventListener('focus', (e) => {
    console.log("Champ d'entrée en focus");
});

document.querySelector('input').addEventListener('blur', (e) => {
    console.log("Champ d'entrée a perdu le focus");
});

// EVENT HANDLERS : Gestion des événements pour les éléments interactifs

// 1. Gestion des événements pour les cases à cocher (checkbox)
document.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
    // `checked` renvoie `true` si la case est cochée, sinon `false`
    console.log("Checkbox cochée :", e.currentTarget.checked);
});

// 2. Gestion des événements pour une liste déroulante simple (select)
document.querySelector('select:not([multiple])').addEventListener('change', (e) => {
    console.log("Valeur sélectionnée :", e.currentTarget.value);
    console.log("Option sélectionnée :", e.currentTarget.selectedOptions[0].textContent);
});

// 3. Gestion des événements pour une liste déroulante multiple (select[multiple])
document.querySelector('select[multiple]').addEventListener('change', (e) => {
    console.log(Array.from(e.currentTarget.selectedOptions).map(option => option.value))
});

// Liens vers la documentation officielle :
// https://developer.mozilla.org/en-US/docs/Web/API/Event

