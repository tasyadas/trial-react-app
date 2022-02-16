// soal 1
let dataPeserta = ["john", "laki-laki", "programmer", "30"]

const [name, gender, job, age] = dataPeserta;

let output = `Halo, nama saya ${name}. saya ${gender} berumur ${age} bekerja sebagai seorang ${job}`;

console.log(output)


// soal 2
let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]

for(var i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}


// Soal 3
let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]

for(var i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
        console.log(array2[i]);        
    }
}


// Soal 4
let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]

const [aku, saya, sangat, ...newSentence] = kalimat
let combined = [saya, ...newSentence]

console.log(...combined);


// Soal 5
var sayuran=[]

sayuran.push('Kangkung')
sayuran.push('Bayam')
sayuran.push('Buncis')
sayuran.push('Kubis')
sayuran.push('Timun')
sayuran.push('Seledri')
sayuran.push('Tauge')

sayuran.sort()

for(var i = 0; i < sayuran.length; i++) {
    console.log(`${i+1}.${sayuran[i]}`);
}