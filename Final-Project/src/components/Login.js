import axios from 'axios';
import React, { useState, useContext } from 'react'
import { MovieContext } from "../context/MovieContext"
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'

const Login = () => {
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

    const handleLogin = (event) => {
        event.preventDefault()

        let {email, password} = input

        axios.post(`https://backendexample.sanbersy.com/api/user-login`, {email, password})
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
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <label for="fname">Email</label>
                    <input required onChange={handleChange} value={input.email} type="email" id="fname" name="email" placeholder="Email" />

                    <label for="lname">Password</label>
                    <input required onChange={handleChange} value={input.password} type="password" id="lname" name="password" placeholder="Password" />
                
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
    )
}

export default Login