import React from "react"
import {MhsProvider} from "../Tugas-13/MhsContext"
import MhsForm from "./MhsForm"

import "./tugas14.css"

const MhsFormProvider = () =>{
  return(
    <MhsProvider>
      <MhsForm />
    </MhsProvider>
  )
}

export default MhsFormProvider