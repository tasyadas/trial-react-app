/*
    Tulis code function di sini
*/

let luasPersegiPanjang = (p, l) => {
    return p * l
}

let kelilingPersegiPanjang = (p, l) => {
    return 2 * (p + l)
}

let volumeBalok = (p, l, t) => {
    return p * l * t
}
 
let panjang= 12
let lebar= 4
let tinggi = 8
 
let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang ) 
console.log(HasilkelilingPersegiPanjang )
console.log(HasilvolumeBalok )