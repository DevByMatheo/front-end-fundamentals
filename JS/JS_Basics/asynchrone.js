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