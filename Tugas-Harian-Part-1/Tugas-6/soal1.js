var nilaiJohn = 80;
var nilaiDoe = 50;
let indeksJohn = 'E';
let indeksDoe = 'E';

if ( nilaiJohn >= 80 ) {
    indeksJohn = 'A';
} else if ( nilaiJohn >= 70 && nilaiJohn < 80 ) {
    indeksJohn = 'B';
} else if ( nilaiJohn >= 60 && nilaiJohn < 70 ) {
    indeksJohn = 'C';
} else if ( nilaiJohn >= 50 && nilaiJohn < 60 ) {
    indeksJohn = 'D';
}

if ( nilaiDoe >= 80 ) {
    indeksDoe = 'A';
} else if ( nilaiDoe >= 70 && nilaiDoe < 80 ) {
    indeksDoe = 'B';
} else if ( nilaiDoe >= 60 && nilaiDoe < 70 ) {
    indeksDoe = 'C';
} else if ( nilaiDoe >= 50 && nilaiDoe < 60 ) {
    indeksDoe = 'D';
}

console.log(`Indeks nilai John adalah ${indeksJohn}`);
console.log(`Indeks nilai Doe adalah ${indeksDoe}`);
