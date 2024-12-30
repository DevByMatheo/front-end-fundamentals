//console.log("Problème !");  console.error("Problème !"); console.clear();

/*
    document.write()
    alert() / confirm()
    prompt()
    parseInt()
*/ 

//const PI = 3.14; -> valeur constant mais contenu modifiable pour tableaux / objet, ...

// document.write(age++); l'incrémentation age +1 se fait ap l'affichage != ++age
// === Egalité valeur et type / !== type ou valeur -> True


// variable condition et opérateur

let nom = "Mathéo";

if(nom == "Mathéo") {
    document.write("OUI");
    let age = 18; // let age = prompt("Quel âges as tu ? ");
    age = parseInt(age);

    if( 0 < age && age <= 18 ) {
        document.write("<br> Vous êtes mineur");

    } else if( age >= 18 ) {
        document.write("<br> Vous êtes majeurs");

    } else {
        document.write("Vous avez menti sur votre age"); 

    }
    
    // ou

    let res = (age >= 18) ? "majeur" : "mineur";
    document.write("<br> Vous êtes " + res);

} else {
    document.write("<br> NON");
}


switch(nom) {
    case "Mathéo":
    case "mathéo":
        document.write("<br> OK");
        break;
    
    default :
        alert("<br> Pas OK");
        break;
}


// boucle 

let i = 0; 

while (i < 5) {
    document.write("a");
    i++;
}


let j = 10;
do {
    document.write( j );
} while( j < 10 );


for( let i = 0 ; i < 5 ;i++) {
    document.write("<br> a");
    if ( i % 2 == 1) { // impair
        continue;
    }
    document.write("b <br>");
}


// fonction

function sum(nb1, nb2 = 10) {
    let data = nb1 + nb2;

    function result() {
        return data;
    };
        
    return result();
};

document.write(sum(1)) ;

// ou

let somme = function calcul(nb1, nb2 = 10) {
    let data = nb1 + nb2;

    function result() {
        return data;
    };
        
    return result();
};

document.write(somme(1)) ;

//let sum2 = function(x, y){return x + y;}; ou
let sum2 = (x, y) => {return x + y};
document.write(sum2(1,9));

