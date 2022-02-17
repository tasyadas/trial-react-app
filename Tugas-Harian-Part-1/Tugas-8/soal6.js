let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */ 
let result = {
    ...buku,
    warnaSampul: [...buku['warnaSampul'], ...warna],
    ...dataBukuTambahan
}

console.log(result);