// Boucle

function ex1Boucle(){
    let chiffre = parseInt(prompt("Entrez un nombre entre 0 et 10"));
    if(chiffre > 10 || chiffre < 0){
        return "Le chiffre n'est pas compris entre 0 et 10";
    } else {
        for(let i = chiffre; i >= 0 ; i--){
                document.write("<br>" + i);
        }
    }
}

function NbMagique(){
    let guess = 8;
    let chiffre = 0;
    while( chiffre != guess){
        chiffre = parseInt(prompt("Entrez un nombre entre 0 et 10"));
        if(chiffre === guess){
            document.write("Bravo vous avez réussi");
        } else{
            continue;
        }
    }
}

function isPalindrome(m){
    let Array1 = m.split("");
    let ArrayReverse = [...Array1].reverse(); //nouvelle copie indépendante de Array1
    for(let i = 0; i < Array1.length; ++i)
        if(Array1[i] !== ArrayReverse[i]){
            return false;
        } 
    return true;
}


const students = [
    {name: 'John', notes: [1, 20, 18, 19, 12] },
    {name: 'Jane', notes: [17, 18, 20, 13, 15]},
    {name: 'Sophie', notes: [17, 12, 14, 15, 13]},
    {name: 'Marc', notes: [2, 3, 5, 8, 9]},
    {name: 'Manon', notes: [18, 17, 18, 19, 12]}
]

const moyMap = new Map();

students.forEach(students => {
    const name = students.name;
    const note = students.notes
    const somme = function (note){
        let somme = 0;
        for(let i = 0; i < note.length; i++){
            somme += note[i];
        }
        return somme
    };
    const totalNotes = somme(note);
    const moyenne = totalNotes / note.length;
    moyMap.set(name, moyenne);
})

let ArrayMoyenne = [...moyMap.entries()].sort((a,b) => b[1] - a[1]);

// ArrayMoyenne.slice(0, 3).forEach(students => console.log(`${students[0]} : ${students[1]}`))



// Class

class Rectangle{
    constructor(longueur, largeur){
        this.longueur = longueur;
        this.largeur = largeur;
        this.perimeter = (longueur + largeur) * 2;
    };

    isValid(){
        return this.longueur > 0 && this.largeur > 0;
    }

    isBiggerThan(c){
        return this.perimeter > c.perimeter;
    }
}

class Square extends Rectangle{
    constructor(largeur){
        super(largeur, largeur) // appel le construtor parent 
    }
}
/*
const r = new Rectangle(10, 20);
console.log(r.perimeter) // 60
console.log(r.isValid) // true
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid) // false
const c = new Square(10); 
console.log(c.perimeter) // 40
console.log(r.isBiggerThan(c)) // true
*/

class Book{
    constructor(titre, nbpages){
        this.titre = titre;
        this.nbpages = nbpages;
        this.page = 1;
    }

    nextPage(){
        if(this.nbpages < this.nbpages){
            this.page += 1;
            return `Vous êtes à la page ${this.page}`;
        } else {
            return "Vous avez finis le livre";
        }
    }
 
    close(){
        this.page = 0;
    }
}

class Library{
    constructor(bibliotheque = []){
        this.bibliotheque = bibliotheque;
    }

    addBook(livre){
        this.bibliotheque.push(livre.titre);
        console.log(this.bibliotheque);
    }

    addBooks(livres){
        livres.forEach(livre => this.bibliotheque.push(livre.titre));
        console.log(this.bibliotheque);
    }

    findBooksByLetter(lettre){
        return this.bibliotheque.filter(livre => livre[0].toUpperCase() === lettre.toUpperCase());
    }

}
/*
const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])


console.log(l.findBooksByLetter('S'))*/

 
// Asynchrome

function decompte(n) {
    let i = 0
    setTimeout(() => {
        console.log(n - i);
        i++
        setTimeout(() => {
            console.log(n - i);
            i++
            setTimeout(() => {
                console.log(n - i);
            }, 1000)
        }, 1000)
    }, 1000)
}

// decompte(3)
