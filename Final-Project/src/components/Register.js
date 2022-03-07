import axios from 'axios';
import React, { useState, useContext } from 'react'
import { MovieContext } from "../context/MovieContext"
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'

const Register = () => {
    let history = useHistory()
    const {setToken} = useContext(MovieContext)
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        let {name, value} = event.target

        setInput({...input, [name]: value})
    }

    const handleRegister = (event) => {
        event.preventDefault()

        let {name, email, password} = input

        axios.post(`https://backendexample.sanbersy.com/api/register`, {name, email, password})
        .then( res => {
            let {data} = res
            let {token} = data

            Cookies.set('token', token, {expires: 1})
            setToken(true)
            history.push('/')
        })
        .catch( err => {
            console.log(err);
        })
    }


    return (
        <>
            <div className="form-container">
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <label for="fname">Name</label>
                    <input required onChange={handleChange} value={input.name} type="text" id="fname" name="name" placeholder="Name" />

                    <label for="fname">Email</label>
                    <input required onChange={handleChange} value={input.email} type="email" id="fname" name="email" placeholder="Email" />

                    <label for="lname">Password</label>
                    <input required onChange={handleChange} value={input.password} type="password" id="lname" name="password" placeholder="Password" />
                
                    <input type="submit" value="Register" />
                </form>
            </div>
        </>
    )
}

export default Register