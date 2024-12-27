age = 15;
const statut = age >= 18 ? "adulte" : "mineur";

/*
Type primitifs :
    undefined
    null
    Boolean (true / false)
    Number
    BigInt -> nb plus grand que 2^53
    String
    Symbol

Autres types :
    Object
    Array
*/ 

let n  = new Number(144); // Instance of Number
let n2  = Number(144);
let n3  = 144;
let n4 = NaN;
let n5 = 4.5983;

if(Number.isNaN(n4)) {
    document.write("OK" + "<br>");
}
if(Number.isInteger(n3)) {
    document.write("OK"+ "<br>");
}

document.write(n3.toString()+ "<br>");
document.write(n5.toFixed(2)+ "<br>"); // 4.60 (4.59 et 8 -> 4.60)


let s  = "Hello"; 
let s2  = new String("Hello"); // Instance of String -> object

/*
Méthodes : 
    charAt(), []
    concat("") -> concaténer
    startsWith(""), endsWith("") -> true si sa commence avec / fini avec
    padStart(nb, ""), padEnd(nb, "") -> Complete la chaine avec "" le nombre nb
    trim(), trimStart(), trimEnd() -> supprime les espaces
    indexOf("") -> Indice de la première occurnce de "elt" / -1 si pas trouvé
    includes("") -> Inclus un elt > true
    repeat(nb) -> repète nb fois
    replace("a", "o"), replaceAll("a", "o") -> remplace 1er a / tous les a par o
    toLowerCase(), toUpperCase() -> tous minuscule / majuscule
    substring(indice_debut, indice_fin), slice(indice_debut, indice_fin) -> récupère une sous chaine dans une chaine
    split(" ") -> sépare la chaine au " " -> creer un tableau
*/  

document.write(s.charAt(0)+ "<br>"); // -> H
document.write(s[0]+ "<br>"); // -> H
document.write(s.length + "<br>"); // nb caractère

document.write(s.concat(" World"));
document.write("<br>");
document.write("<br>");

let s3 = "Salut à tous !"
let cArray = s.split(" ")
s3 = cArray.join(" ")

// Array (Tableau)

let someArray = ["Laura", "Bernard", "Salim", "Fatima", "Julien", "Frank"];

let anotherArray = new Array("Laura", "Bernard", "Salim", "Fatima", "Julien", "Frank");
let anotherArray2 = Array.of(1, 2, 3);

let data = {0: "Julien", 1: "Laura"};
let newArray = Array.from(data);

console.log(Array.isArray(someArray));
document.write(someArray[ someArray.length - 1 ]+ "<br>"); // document.write(someArray.at(5))
someArray[0] = "Sarah";


for(let i = 0; i < someArray.length; ++i) {
    document.write(someArray[i] + " ");
}
// ou
for(value of someArray) {
    document.write(value + " ");
}
// ou
for(index in someArray) {
    document.write(someArray[index] + " ");
}
// ou
someArray.forEach(item => console.log(item))
// ou
someArray.forEach(function(value, index){
    document.write("<br>" + index + " - " + value);
})
document.write("<br>")
/*
Méthodes : 
    Ajout / suppression
        .push("", ...), -> ajoute elt a la fin du tableau
        .unshift("", ...), -> ajoute elt au début du tableau
        .pop() -> supprime dernier elt du tableau
        .shift() -> supprime premier elt du tableau
        .fill(elt, 0, someArray.length) -> ajoute elt de 0 à la fin du tableau
        .concat()

    Recherche
        .indexOf("") -> Indice de la première occurnce de "elt"
        .lastIndexOf("") -> Indice de la dernière occurnce de "elt"
        .includes("") -> Inclus un elt > true
        .find() / findIndex() -> première valeur selon une condition / une function

    Tri / Inversion
        .sort()
        .sort( (a,b) => a.localeCompare(b) )
        .reverse()
        .slice(inclut, exclut)
        .splice(0, 1, "Marie") -> à l'indice 0 on suppr 1 elt et on le remplace par Marie

    Filtrage
        .filter(x => x >= 0)
        .map(value => "Inconnu")
*/

let d2 = Date(); // Tue Dec 24 2024 18:47:59
let d = new Date(2020, 5, 23, 13, 23, 56); // dimanche jour 0
let d3 = Date.now() // nb msec depuis 1 janvier

document.write(d);
/*
Méthodes
    .getDate()
    .getDay()
    .getMonth()
    .getFullYear()
    .getHours() ......

    ou UTC
    .getUTCate()
    etc...
*/ 

d.setFullYear(2007); // changer année


// ENSEMBLE

let someSet = new Set([1, "bonjour", new Date()]); // valeur unique

someSet.add(4);
someSet.delete(1);

for(element of someSet)
    document.write("<p>" + element + "</p>");

if(someSet.has("bonjour")){
    document.write("Youpi");
}

const iterValues = someSet.values(); // keys()
document.write("<br>" + iterValues.next().value);

document.write("<br>" + someSet.size);

function show(value2){
    document.write("<p>" + value2 + "</p>")
}
someSet.forEach(show)

someSet.clear();


// MAP

let something = {one: "One", two: "Two"};

let someMap = new Map();

someMap.set(1, "Un");
someMap.set(2, "Deux")

if(someMap.has(1)){ // cle
    document.write("Youpi");
}

document.write(someMap.get(1)) // -> Un

const it = someMap.keys(); // ou .values()
document.write(it.next().value);
document.write(it.next().value);

const allEntries = someMap.entries();
for(entries of allEntries){
    document.write("<p>" + entries[0] + " > " + entries[1] + "</p>") // cle > valeur
}
// ou
function shows(valuess, keyss){
    document.write("<p>" + keyss + " > " + valuess + "</p>")
}
someMap.forEach(shows)

someMap.delete(2) //cle

document.write(someMap.size);
someMap.clear()