// Exception

// Error, TypeError, RangeError, SyntaxError

try {
    throw new Error("Une erreur c'est produite...");
    // faire qqlch
} catch(err) {
    if(err instanceof TypeError) 
        console.log();
    else if(err instanceof RangeError)
        console.log();
} finally {
    document.write("OK");
}

// Creer sa propre Erreur

function MyError(message) {
    const err = new Error(message);
    err.logfile = 'logs/myerror.log';
    err.code = 310;
    err.message = message || "Vous avez une erreur";

    return err;
}

CustomException.prototype = Object.create(Error.prototype);
throw new MyError("Une erreur c'est produite...");

// ou 

class MySpecialException extends Error {
    constructor(code, ...params) {
        super(...params);
        this.code = code;
        this.name = "MySpecialException";
    }
}

try {
    throw new MySpecialException(301);
} catch(e) {
    console.log(e.name);
    console.error(e.stack);
}

function assert(condition, message){
    if(!condition)
        throw message || "Erreur assert";
}

assert(1 === 1); 