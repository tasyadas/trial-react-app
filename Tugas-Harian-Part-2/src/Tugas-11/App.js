import React, { useState } from 'react';
import './App.css';

const FormBuah = (props) => {
  let buah = props.buah
  let setBuah = props.setBuah
  console.log(props.editBuah);
  
  const [inputName, setInputName] = useState(props.editBuah ? props.editBuah.nama : "")
  const [inputHargaTotal, setInputHargaTotal] = useState(props.editBuah ? props.editBuah.inputHargaTotal : "")
  const [inputBeratTotal, setInputBeratTotal] = useState(props.editBuah ? props.editBuah.inputBeratTotal : "")

  console.log(inputName);
  console.log(inputHargaTotal);
  console.log(inputBeratTotal);
  
  const handleSubmit = (event) => {
    event.preventDefault()

    if (props.editBuah) {
      buah.map((val) => {
        if (val.name === props.editBuah) {
          val.name = inputName
          val.hargaTotal = inputHargaTotal
          val.beratTotal = inputBeratTotal
        }
      })

      setBuah(buah)
    } else {
      setBuah([...buah, 
        {
          nama: inputName,
          hargaTotal: inputHargaTotal,
          beratTotal: inputBeratTotal
        }
      ])
    }
    setInputName("")
    setInputHargaTotal("")
    setInputBeratTotal("")
  }
  
  return(
  <form onSubmit={handleSubmit}>
    <label>
      Masukkan nama buah:
    </label>         
    <input type="text" value={inputName} onChange={(event) => {
      setInputName(event.target.value)
    }}/>
    <br></br>
    <label>
      Masukkan Total Harga buah:
    </label>
    <input type="text" value={inputHargaTotal} onChange={(event) => {
      setInputHargaTotal(event.target.value)
    }}/>
    <br></br>
    <label>
      Masukkan Total Berat buah:
    </label>
    <input type="text" value={inputBeratTotal} onChange={(event) => {
      setInputBeratTotal(event.target.value)
    }}/>
    <br></br>
    <button>submit</button>
  </form>
  )
}

const List = () => {
  const [buah, setBuah] = useState([
    {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
    {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
    {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
    {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
  ])
  const [selectedBuah, setSelectedBuah] = useState({});

  return (
    <>
      <h1>Daftar Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga per kg</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>

          {
            buah.map((val, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{val.nama}</td>
                  <td>{val.hargaTotal}</td>
                  <td>{val.beratTotal}</td>
                  <td>{val.hargaTotal / (val.beratTotal/1000)}</td>
                  <td><button onClick={() => { setSelectedBuah(val) }}>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

      <FormBuah buah={buah} setBuah={setBuah} editBuah={selectedBuah} />
    </>
  )

}

export default List