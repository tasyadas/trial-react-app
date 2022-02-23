import React, {useContext} from "react"
import {MhsContext} from "./MhsContext"
import './App.css';

const MhsList = () =>{
  const {mahasiswa, handleEdit, handleDelete} = useContext(MhsContext)

    return(
        <>
            <h1>Daftar Mahasiswa</h1>
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
        </>
    )

}

export default MhsList