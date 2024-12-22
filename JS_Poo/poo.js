// ES6

/* Classe -> Pas d attribut prv
          -> Pas d'attribut statique
*/ 

class MusicPlayer {             // let MP = class {}
    constructor(filetype) {
        this.filetype = filetype;
    }
/*
    getFiletype() {
        return this.filetype;
    }

    setFiletype(new_filetype) {
        return this.filetype = new_filetype;
    }
*/
    play() {
        console.log("Lecture en cours...");
    }

    static hello() {
        return 'hello world !'
    }
};

/*
// Version Prototype
function fMusicPlayer(filetype){
    this.filetype = filetype;
};
// ou 
function f2MusicPlayer(filetype){
    var filetype = filetype;
    this.filetype = function(){return filetype;}
};
*/


/*console.log(player.getFiletype());
console.log(player.setFiletype("OGG"));*/

let player = new MusicPlayer("MP3");
document.write(player.filetype + "<br>"); // player.filetype() pour f2
player.filetype = "OGG";
document.write(player.filetype + "<br>");


//fMusicPlayer.hello = function(){ return "Hello World !";};
//document.write(fMusicPlayer.hello());

document.write(MusicPlayer.hello()+ "<br>");

MusicPlayer.prototype.filename = null;
player.filename = "C\\Users\\:";
document.write(player.filename);

delete player.filename;