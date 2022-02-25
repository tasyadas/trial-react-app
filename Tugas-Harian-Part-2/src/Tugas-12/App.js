import React, {useState, useEffect} from "react"
import axios from "axios"

import './App.css';

const List = () => {
    const [mahasiswa, setMahasiswa] = useState([])
    const [inputName, setInputName] = useState("")
    const [inputCourse, setInputCourse] = useState("")
    const [inputScore, setInputScore] = useState("")
    
    const [currentId, setCurrentId] =  useState(null)

    const checkIndex = (score) => {
        // nilai >= 80 indeksnya A, nilai >= 70 dan nilai < 80 indeksnya B, nilai >= 60 dan nilai < 70, indeksnya c nilai >= 50 dan nilai < 60 indeksnya D, nilai < 50 indeksnya E
        let result;

        switch(true) {
            case score >= 80:
                result = 'A'
              break;
            case score >= 70 && score < 80:
                result = 'B'
              break;
            case score >= 60 && score < 70:
                result = 'C'
              break;
            case score >= 50 && score < 60:
                result = 'D'
              break;
            default:
                result = 'E'
        }

        return result;
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (currentId === null){
          // untuk create data baru
          axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {
                name: inputName, 
                course: inputCourse,
                score: inputScore
          })
          .then(res => {
            let data = res.data

            setMahasiswa([...mahasiswa, {
                    id: data.id, 
                    name: data.name,
                    course: data.course,
                    score: data.score,
                    index: checkIndex(data.score)
                }
            ])
          })
        }else{
          axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {
            name: inputName, 
            course: inputCourse,
            score: inputScore
          })
          .then(() => {
              let singleData = mahasiswa.find(el=> el.id === currentId)
              singleData.name= inputName
              singleData.course= inputCourse
              singleData.score= inputScore
              singleData.index= checkIndex(inputScore)

              setMahasiswa([...mahasiswa])
          })      
        }
        
        setInputName("")
        setInputCourse("")
        setInputScore("")
        setCurrentId(null)
    }

    const handleEdit = (event) =>{
        let idMahasiswa = event.target.value
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
        .then(res => {
          let data = res.data
          setInputName(data.name)
          setInputCourse(data.course)
          setInputScore(data.score)
          setCurrentId(data.id)
        })
    }
    
    const handleDelete = (event) =>{
        let idMahasiswa = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
        .then(() => {
            let newMahasiswa = mahasiswa.filter(el=> {return el.id !== idMahasiswa})
            setMahasiswa(newMahasiswa)
        })
    }

    useEffect( () => {
        const fetchData = async () => {
          const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
    
          setMahasiswa(result.data.map(x=>{ 

            return {
              id: x.id, 
              name: x.name,
              course: x.course,
              score: x.score,
              index: checkIndex(x.score)
            } 
        }) 
    )}
          
    fetchData()
    }, [])
  
    return (
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
  
        
        <form onSubmit={handleSubmit} className="FormMahasiswa">
            <label>
                Nama:
            </label>         
            <input type="text" value={inputName} onChange={(event) => {
                setInputName(event.target.value)
            }}/>
            <br></br>
            <label>
                Matakuliah:
            </label>
            <input type="text" value={inputCourse} onChange={(event) => {
                setInputCourse(event.target.value)
            }}/>
            <br></br>
            <label>
                Nilai:
            </label>
            <input type="text" value={inputScore} onChange={(event) => {
                setInputScore(event.target.value)
            }}/>
            <br></br>
            <button>submit</button>
        </form>
      </>
    )
  
}
  
  export default List