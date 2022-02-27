import React, {useContext} from "react"
import {MhsContext} from "../Tugas-13/MhsContext"
import '../Tugas-13/App.css';
import { useHistory } from "react-router-dom";


function FormMhsButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/tugas-14-form");
  }

  return (
    <button className="createStudent" type="button" onClick={handleClick}>Buat Data Nilai Mahasiswa Baru</button>
  );
}

const MhsList1 = () =>{
  const {mahasiswa, handleEdit, handleDelete, navBlackColor, setNavBlackColor} = useContext(MhsContext)

    return(
        <div className="middle-box">
            <div className="title">
            <button onClick={ () => setNavBlackColor(!navBlackColor) } >Change Navbar To Dark Theme</button>
            <h1>Daftar Mahasiswa</h1>
            </div>
            <FormMhsButton />
            <table>
            <thead>
                <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Mata Kuliah</th>
                <th>Nilai</th>
                <th>Indeks Nilai</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>

            {
                mahasiswa.map((val, index) => {
                    return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.course}</td>
                        <td>{val.score}</td>
                        <td>{val.index}</td>
                        <td><button onClick={handleEdit} value={val.id}>Edit</button></td>
                        <td><button onClick={handleDelete} value={val.id}>Delete</button></td>
                    </tr>
                    )
                })
            }

            </tbody>
            </table>
        </div>
    )

}

export default MhsList1