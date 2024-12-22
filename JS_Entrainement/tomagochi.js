class Animals {
    constructor(nom, energie=100, faim=0, bonheur=100) {
        this.nom = nom;
        this.energie = energie;
        this.faim = faim;
        this.bonheur =bonheur;
    };
    jouer() {
        this.energie -= 20;
        this.bonheur += 10;
        this.faim += 10;
        console.log(this.nom + " joue et s'amuse !");
    };
    manger() {
        this.faim -= 20;
        this.energie += 10;
        console.log(this.nom + " mange et reprends des forces !");
    };
    dormir() {
        this.energie += 30;
        this.bonheur -= 10;
        console.log(this.nom + " dort paisiblement.");
    };
    etat() {
        console.log(" énergie: " + this.energie + " faim: " + this.faim + " bonheur: " + this.bonheur);
    };
    estVivant() {
        if(this.bonheur > 0 && this.energie > 0) {
            return true;
        } else{
            return false;
        };
    }
};


function user(titi) {
    const jours_total = 10;
    for(let jour = 1; jour <= jours_total; jour++){
        alert(`_Jours : ${jour}_`);
        let i = 0;

        while(titi.estVivant() && i < 3) {
            let choix = parseInt(prompt(`Jour ${jour} : Choisissez une action pour ${titi.nom} : \n1 -> Jouer\n2 -> Manger\n3 -> Dormir\n4 -> Voir état`));
            i += 1;
            if(choix === 1) {
                titi.jouer();
            } else if( choix === 2) {
                titi.manger();
            } else if(choix === 3) {
                titi.dormir()
            } else if(choix === 4) {
                titi.etat()
            } else {
                console.log("Vous devez entrer un nombre entre 1, 2, 3, 4 !!")
                i--;
                continue;
            }
            if(i % 3 === 0) {
                alert(`${titi.nom} a ${titi.energie} d'énergie et un bonheur de ${titi.bonheur}`);
            }
        };

        titi.energie -= 10;
        titi.faim += 10;
        titi.bonheur -= 5;
        if(!titi.estVivant()) {alert(`${titi.nom} meurt au jour ${jour}`); break;};

        console.log(`Fin du jour ${jour}`);
    };
};

let titi = new Animals("titi");

user(titi);

