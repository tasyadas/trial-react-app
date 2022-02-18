function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
      var books=[
          {name: "shinchan", totalPage: 50, isColorful: true},
          {name: "Kalkulus", totalPage: 250, isColorful: false},
          {name: "doraemon", totalPage: 40, isColorful: true},
          {name: "algoritma", totalPage: 250, isColorful: false},
      ]
      if (amountOfPage >= 40) {
          resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
          var reason= new Error("Maaf buku di bawah 40 halaman tidak tersedia")
          reject(reason);
        }
    });
}

// rules :
// bukunya berwarna dan jumlah halamannya 40 (gunakan async/await untuk kondisi ini)
// bukunya tidak berwarna dan jumlah halamannya 250 (gunakan async/await untuk kondisi ini)
// bukunya berwarna dan jumlah halamannya 30 (gunakan async/await untuk kondisi ini) 

// Lanjutkan code untuk menjalankan function filterBookPromise ( menggunakan async/await )
let collection = [{color: true, page: 40}, {color: false, page: 250}, {color: true, page: 30}]

const filteredBook = async (data) => {
    const {color, page} = data[0]
    await filterBooksPromise(color, page)
    .then((resp) => {
        console.log(resp);
        if(data.length > 1) filteredBook(data.slice(1));
    })
    .catch((err) => { console.log(err) })
}

filteredBook(collection);