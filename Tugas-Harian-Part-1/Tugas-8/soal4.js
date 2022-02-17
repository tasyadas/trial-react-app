let data = [
    {'nama': 'Nanas', 'warna': 'Kuning', 'adaBijinya': false, 'harga': 9000 },
    {'nama': 'Jeruk', 'warna': 'Oranye', 'adaBijinya': true, 'harga': 8000},
    {'nama': 'Semangka', 'warna': 'Hijau & Merah', 'adaBijinya': true, 'harga': 10000},
    {'nama': 'Pisang', 'warna': 'Kuning', 'adaBijinya': false, 'harga': 5000}
]

let filtered = data.filter(el => el.adaBijinya === false)

console.log(filtered);