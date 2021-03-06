let readline=require('readlin-sync');
//kelas ekspresi
class DivisionByZeroError extends Error{
    constructor(msg){
        super(msg);
        this.name=this.constructor.name;
        this.message=msg;
    }
    getMessage(){
        return this.message;
    }
}

let a=parseFloat(readline.question("Input Nilai A: "));
let b=parseFloat(readline.question("Input Nilai B: "));

try{
    if(b==0){
        throw new DivisionByZeroError(
            'Nilai B tidak boleh 0'
        );
    }
    let c=a/b;
    console.log(`${a}/${b}=${c}`);
}catch(e){
    console.log(e.getMessage());
}
}

