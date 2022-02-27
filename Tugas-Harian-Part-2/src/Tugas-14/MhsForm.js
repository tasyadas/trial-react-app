import React, {useContext} from "react"
import {MhsContext} from "../Tugas-13/MhsContext"
import './tugas14.css';

const MhsForm = () =>{
    const {
        inputName, 
        inputCourse, 
        inputScore,
        setInputName,
        setInputCourse,
        setInputScore,
        handleSubmit
    } = useContext(MhsContext)

    return(
        <>
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

export default MhsForm