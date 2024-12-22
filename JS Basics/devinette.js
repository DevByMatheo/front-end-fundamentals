function play(){
    let mot_rechercher = Math.floor(Math.random() * (10 -1) + 1);
    //Math.floor(Math.random() * (max - min)) + min; 

    let reponse = 0;
    console.log(mot_rechercher);

    while (reponse != mot_rechercher) {
        reponse = parseInt(prompt("Devines le nombre générer [1, 10] -> "));
        if (reponse === mot_rechercher) {
            alert('Vous avez réussi');
            let question = prompt("Voulez vous rejouer ? ( oui / non ) ");
            if(question === "oui") {
                play();
            } else {
                alert("Au revoir ! ");
            }
        } else {
            alert("Ce n'est pas le bon réessayer ! ");
            for(let i = 3; i > 0; i--){
                alert("Compte a rebour - " + i);
            }
        }
    }
}

function guess(question){
    if( question === "oui") {
        play();
    } else if( question === "non") {
        alert("Au revoir ! ");
    } else {
        alert("Vous n'avez pas enter oui ou non ! ");

    }
}


let question = prompt("Voulez vous jouer ? ( oui / non ) ");

if(question === "oui") {
    guess(question);
}
