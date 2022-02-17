/* 
    Tulis kode function di sini
*/

let introduce = (...biodata) => {
    const [name, age, gender, job] = biodata
    let called = 'Pak'

    if (gender === 'Perempuan') {
        called = 'Ibu'
    }

    return `${called} ${name} adalah seorang ${job} yang berusia ${age} tahun`
}
 
//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"