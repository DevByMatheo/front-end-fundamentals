/*
    SuperNinja -> Ninja -> Object -> null
*/ 


let naruto = {
    attack : function() { return "Rasengan";},
    name : "Naruto Uzumaki",
    weapon : "kunai"
};

document.write("<h2> Ecriture Littérale </h2>")
document.write(`${naruto.attack()} par ${naruto.name} <br>`);


// ------------------------------------


class Genin {
    constructor(name = "Naruto Uzumaki", weapon = "shuriken") {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return "Rahhhh !!!";
    }
}



document.write("<h2> Constructeur via classe </h2>")
let sasuke = new Genin("Sasuke Uchiha", "shuriken fuma");

document.write(sasuke.name + "<br>");
document.write(sasuke.attack() + "<br>");


// ------------------------------------


function Ninja(name = "inconnu"){ // Parent
    this.attack  = this.attack = function(){
        return "Rahhhh !!!";
    }
    
    this.name = name;
}


document.write("<h2> Constructeur via fonction </h2>")
let hinata = new Ninja("Hinata Hyûga");

document.write(hinata.name + "<br>");
document.write(hinata.attack() + "<br>");


function SuperNinja(name = "inconnu", weapon) { // Enfant
    Ninja.call(this, name);
    this.weapon = weapon || "shuriken";
}


SuperNinja.prototype = Object.create(Ninja.prototype); // clonage ( 2 objcts distincts )
SuperNinja.prototype = Ninja.prototype; // liaison d un prototype à un autre
let sakura = new SuperNinja("kunai");

SuperNinja.prototype.age = 24;

console.log(Ninja.prototype);
console.log(SuperNinja.prototype);

// ou

document.write("<h2> Autre Heritage</h2>")

class Ninja2 {
    constructor(name = 'Naruto') {
        this.name = name;
    }
}

class SuperNinja2 extends Ninja2 {
    constructor(name = "Naruto", weapon="shuriken") {
        super(name);
        this.weapon = weapon;
    }
}

let neji = new SuperNinja2("Neji Hyûga", "kunai");
document.write(neji.name + "<br>");
document.write(neji.weapon + "<br>");