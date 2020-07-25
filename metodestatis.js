class Aritmatika{
    static tambah(a,b){
        return a+b;
    }
}
//membaca data a dan b
let a=3;
console.log("Nilai a:"+a);
let b=4;
console.log("Nilai b:"+b);

//Memanggil metode statis
console.log(`${a}+${b}=${Aritmatika.tambah(a,b)}`);

