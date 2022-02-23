import React from "react"
import {MhsProvider} from "./MhsContext"
import MhsList from "./MhsList"
import MhsForm from "./MhsForm"

const Mhs = () =>{
  return(
    <MhsProvider>
      <MhsList/>
      <MhsForm/>
    </MhsProvider>
  )
}

export default Mhs