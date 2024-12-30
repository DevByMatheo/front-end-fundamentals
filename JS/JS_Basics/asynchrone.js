// --------------------------------------------
// FICHE : Programmation Asynchrone en JavaScript
// --------------------------------------------

// Qu'est-ce que la programmation asynchrone ?
// - Elle permet de gérer des tâches longues (ex. : appel réseau, temporisation)
//   sans bloquer l'exécution du reste du programme.
// - Exemple classique : récupérer des données d'une API ou attendre un délai.

// --------------------------------------------
// 1. Les CALLBACKS
// --------------------------------------------

// Un callback est une fonction passée en argument à une autre fonction.
// Elle est exécutée une fois que la tâche principale est terminée.

function exempleCallback(callback) {
    console.log("Tâche asynchrone avec Callback en cours...");
    setTimeout(() => {
        console.log("Tâche terminée !");
        callback(); // Appeler le callback à la fin
    }, 2000); // Attendre 2 secondes
}

// Utilisation du callback
exempleCallback(() => {
    console.log("Callback exécuté après la tâche asynchrone.");
});

// Problème des callbacks : quand plusieurs callbacks s'imbriquent, 
// cela devient difficile à lire. C'est ce qu'on appelle le **Callback Hell**.

// --------------------------------------------
// 2. LES PROMISES
// --------------------------------------------

// Une Promise est un objet représentant une opération asynchrone.
// Elle retourne un **résultat futur** qui peut être :
// - Résolu (fulfilled) : l'opération a réussi.
// - Rejeté (rejected) : l'opération a échoué.

function exemplePromise() {
    return new Promise((resolve, reject) => {
        console.log("Tâche asynchrone avec Promise en cours...");
        setTimeout(() => {
            let succes = true; // Changez cette variable pour tester
            if (succes) {
                resolve("Tâche réussie !");
            } else {
                reject("Tâche échouée !");
            }
        }, 2000); // Attendre 2 secondes
    });
}

// Utilisation d'une Promise avec .then() et .catch()
exemplePromise()
    .then((message) => console.log("Succès :", message)) // Résolution
    .catch((erreur) => console.error("Erreur :", erreur)); // Rejet

// Avantage : on évite l'imbrication de callbacks.

// --------------------------------------------
// 3. Async / Await
// --------------------------------------------

// Async/Await est une syntaxe qui simplifie l'utilisation des Promises.
// Les fonctions marquées `async` retournent toujours une Promise.

async function exempleAsyncAwait() {
    console.log("Tâche asynchrone avec Async/Await en cours...");
    try {
        const resultat = await new Promise((resolve) => {
            setTimeout(() => resolve("Tâche réussie avec Async/Await"), 2000);
        });
        console.log(resultat); // Résultat de la Promise
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}

// Utilisation d'une fonction async/await
exempleAsyncAwait();

// --------------------------------------------
// 4. Cycle d'Événements en JavaScript
// --------------------------------------------

// En JavaScript, l'exécution est gérée par le **Cycle d'Événements** :
// 1. Les instructions sont placées dans la **Call Stack** (pile d'exécution).
// 2. Les tâches longues (asynchrones) sont déléguées aux **Web APIs** (navigateur).
// 3. Une fois prêtes, leurs callbacks passent dans la **Task Queue** (file d'attente).
// 4. La **Event Loop** vérifie si la Call Stack est vide pour traiter les callbacks.

// Exemple démonstratif du cycle d'événements :
console.log("Début du programme...");
setTimeout(() => console.log("Tâche asynchrone exécutée"), 2000);
console.log("Fin du programme.");

// Sortie attendue :
// Début du programme...
// Fin du programme.
// Tâche asynchrone exécutée

// --------------------------------------------
// 5. Exemple Complet : Gestion de plusieurs tâches
// --------------------------------------------

// Que faire si on doit gérer plusieurs tâches asynchrones en même temps ?
// Utiliser `Promise.all()` pour les exécuter en parallèle.

async function gestionMultipleTaches() {
    console.log("Démarrage de plusieurs tâches asynchrones...");

    const tache1 = new Promise((resolve) => setTimeout(() => resolve("Tâche 1 terminée"), 1000));
    const tache2 = new Promise((resolve) => setTimeout(() => resolve("Tâche 2 terminée"), 2000));
    const tache3 = new Promise((resolve) => setTimeout(() => resolve("Tâche 3 terminée"), 1500));

    const resultats = await Promise.all([tache1, tache2, tache3]); // Toutes les tâches terminées
    console.log("Résultats des tâches :", resultats);
}

// Lancer les tâches
gestionMultipleTaches();

// --------------------------------------------
// Résumé
// --------------------------------------------

// Mécanismes pour gérer l'asynchronisme en JavaScript :
// 1. **Callbacks** : Fonction passée en argument, mais attention au Callback Hell.
// 2. **Promises** : Plus lisible, évite les imbrications.
// 3. **Async/Await** : Lecture linéaire proche du code synchrone.
// 4. **Promise.all()** : Pour exécuter plusieurs tâches asynchrones en parallèle.

// Avantage principal : Maintenir un programme réactif, même lors de tâches longues.



// timer / Asynchrome

function timer(){
    console.log("boujour")
    setTimeout(() => {
        console.log("les gens");
        setTimeout(() => {
            console.log("Au revoir");
        }, 3000)
    }, 1000)

    /*
    setInterval(() => {
        console.log("les gens")
    }, 1000)
    //clearInterval(2)
    */
}



// Promsise

const p = new Promise((resolve, reject) => {resolve(4)})
/*
p
    .then((n) => {
        console.log("Le nombre", n);
        // return 5;
        throw new Error('Echec');
    })
    .then((n) => { 
        console.log('Le nombre 2', n);
    })
    .catch((e) => {
        console.log("Erreur", e);
        return 2
    })
    .then((n) => console.log(2))
    .finally(() => console.log("aaaa"))
*/
function wait(duration){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration)
        }, duration)
    })
}

function waitAndFail(duration){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration)
        }, duration)
    })
}

/*
wait(2000)
    .then(() => {
        console.log("Attente 2s")
        return wait(1000)
    })
    .then(() => {
        console.log("Attente 1s")
        return waitAndFail(1000)
    })
    .catch(() => null)
*/


async function main() {
    try {
        const duration = await wait(2000)
        console.log('Bonjour temps :', duration)
        await waitAndFail(1000)
        console.log("Hello")
    } catch(e) {
        console.log("Erreur")
    }
}

main()

Promise.all([wait(1000), waitAndFail(2000)])
    .then(console.log)
    .catch(console.log)

/*
Méthodes :
    .allSettled() ->  0:{"status": "fulfilled","value": 1000}
                  ->  1:{"status": "rejected", "reason": 2000}
    .any() -> resulat de la premire promesse resolve
    .race() -> resulat de la première promesse
*/



// FETCH 

async function fetchUsers() {
    const r = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    })
    if(r.ok === true){
        return r.json();
    }
    throw new Error("Impossible de contacter le server")
}

fetchUsers().then(users => console.log(users))