import React from "react"
import { Link } from "react-router-dom";


const About = () => {
    return (
        <>
            <div style={{border: "1px solid #eaeaea", marginBottom: "3rem"}}>
            <h1 style={{textAlign: "center"}}>
                Data Peserta Sanbercode Bootcamp Reactjs
            </h1>

            <ol>
                <li><strong>Nama</strong>: Tasya Dwi Askara Siahaan</li>
                <li><strong>Email</strong>: tasyadwiaskarasiahaan@gmail.com</li>
                <li>
                    <strong>Sistem Operasi yang digunakan</strong>: Windows 10
                </li>
                <li>
                    <strong>Akun Gitlab</strong>: https://gitlab.com/tasyadas
                </li>
                <li><strong>Akun Telegram</strong>: @tdas97</li>
            </ol>
        </div>
        <button type="button"><Link to="/">Kembali ke home</Link></button>
        </>
    )
}

export default About