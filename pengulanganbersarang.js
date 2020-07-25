let siswa = [
    ['1215','Adi','Malang'],
    ['1216','Budi','Tulungagung'],
    ['1217','Doni','Tuban'],
];

for (let i=0;i<siswa.length;i++){
    for(let j=0;j<siswa[i].length;j++){
        console.log(siswa[i][j].toString());
        if(j<siswa[i].length-1){
            console.log('\t');
    }
}
console.log();
}


