// di file callback.js
function readBooks(time, book, callback ) {
    console.log("saya membaca " + book.name )
    setTimeout(function(){
        let sisaWaktu = 0
        if(time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            console.log("saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
            callback(sisaWaktu) //menjalankan function callback
        } else {
            console.log('waktu saya habis')
            callback(time)
        }   
    }, book.timeSpent)
}

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// Tulis code untuk memanggil function readBooks di sini ( menggunkan callback )
const countDown = (firstTime, arrBooks) => {
    readBooks(firstTime, arrBooks[0], (timeLeft) => {
        if (timeLeft > 0 && arrBooks.length > 1) {
            countDown(timeLeft, arrBooks.slice(1))
        }
    })
    return 0;
}

countDown(10000, books);