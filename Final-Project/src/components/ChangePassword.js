import axios from 'axios';
import React, { useState, useContext } from 'react'
import { MovieContext } from "../context/MovieContext"
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'


const Headers = () => {
    const token = Cookies.get('token')
    
    return {headers: {"Authorization": "Bearer " + token}}    
}

const ChangePassword = () => {
    let history = useHistory()
    const {setToken} = useContext(MovieContext)
    const [input, setInput] = useState({
        current_password: '',
        new_password: '',
        new_confirm_password: ''
    });

    const handleChange = (event) => {
        let {name, value} = event.target

        setInput({...input, [name]: value})
    }

    const handleChangePassword = (event) => {
        event.preventDefault()

        let  {current_password, new_password, new_confirm_password} = input

        axios.post(`https://backendexample.sanbersy.com/api/change-password`,  {current_password, new_password, new_confirm_password}, Headers())
        .then( res => {
            Cookies.remove('token')
            setToken(false)
            history.push('/login')
        })
        .catch( err => {
            console.log(err);
        })
    }


    return (
        <>
            <div className="form-container">
                <form onSubmit={handleChangePassword}>
                    <h1>Change Password</h1>
                    <label for="lname">Current Password</label>
                    <input required onChange={handleChange} value={input.current_password} type="password" id="lname" name="current_password" placeholder="Current Password" />
                    
                    <label for="fname">New Password</label>
                    <input required onChange={handleChange} value={input.new_password} type="password" id="fname" name="new_password" placeholder="New Password" />

                    <label for="fname">Confirm Password</label>
                    <input required onChange={handleChange} value={input.new_confirm_password} type="password" id="fname" name="new_confirm_password" placeholder="Confirm Password" />

                    <input type="submit" value="Change Password" />
                </form>
            </div>
        </>
    )
}

export default ChangePassword