/* 
    Tulis kode function di sini 
*/

let dataFilm = []

let tambahDataFilm = (...data) => {
    const [nama, durasi, genre, tahun] = data

    dataFilm.push({nama, durasi, genre, tahun});
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)
