import React from "react"
import {MhsProvider} from "../Tugas-13/MhsContext"
import MhsList1 from "./MhsList"

const Mhs = () =>{
  return(
    <MhsProvider>
      <MhsList1 />
    </MhsProvider>
  )
}

export default Mhs