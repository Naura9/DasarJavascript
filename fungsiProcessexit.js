let a= 2;
console.log("Nilai A:"+a);
let b= 4;
console.log("Nilai B:"+b);
let c;

if(b===0){
    console.log('kesalahan: nilai b tidak boleh 0');
    process.exit(1);
}

c=a/b;
console.log(`${a}/${b}=${c}`);


