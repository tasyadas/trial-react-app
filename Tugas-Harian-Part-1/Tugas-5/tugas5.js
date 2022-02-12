// Tugas 1
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 
let fourth = 'and'; 
let fifth = 'I'; 
let sixth = 'love'; 
let seventh = 'it!';

let combined = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`

console.log(combined);


// Tugas 2
let kataPertama = "saya"; 
let kataKedua = "senang"; 
let kataKetiga = "belajar"; 
let kataKeempat = "javascript";

kataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)
kataKetiga = kataKetiga.slice(0, -1) + kataKetiga.charAt(kataKetiga.length - 1).toUpperCase()
kataKeempat = kataKeempat.toUpperCase()

let combined2 = `${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat}`

console.log(combined2);


// Tugas 3
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let alasSegitiga= "6";
let tinggiSegitiga = "7";

let kelilingPersegiPanjang = 2 * (Number(panjangPersegiPanjang) + Number(lebarPersegiPanjang));
let luasSegitiga = 0.5 * Number(alasSegitiga) * Number(tinggiSegitiga);

console.log(kelilingPersegiPanjang);
console.log(luasSegitiga);

// Tugas 4
let sentences= 'wah javascript itu keren sekali'; 

let firstWord1 = sentences.substring(0, 3); 
let secondWord1 = sentences.substring(4, 14); // do your own! 
let thirdWord1 = sentences.substring(15, 18); // do your own! 
let fourthWord1 = sentences.substring(19, 24); // do your own! 
let fifthWord1 = sentences.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + firstWord1); 
console.log('Kata Kedua: ' + secondWord1); 
console.log('Kata Ketiga: ' + thirdWord1); 
console.log('Kata Keempat: ' + fourthWord1); 
console.log('Kata Kelima: ' + fifthWord1);

// Tugas 5
var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9] ; // lakukan sendiri, wajib mengikuti seperti contoh diatas 
var fourthWord = sentence[11] + sentence[12]  ; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWord = sentence[14] + sentence[15]  ; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21] ; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWord = sentence[23] + sentence[24]  ; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] ; // lakukan sendiri , wajib mengikuti seperti contoh diatas

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

// Tugas 6
let txt = "I can eat bananas all day";
let hasil = txt.slice(10, 17); //lakukan pengambilan kalimat di variable ini

console.log(hasil)