import React, { useState } from 'react'
import { axiosWithAuth } from '../utilities/apiUsage'

const Login = (props) => {
    const initValues = {
        username: "",
        password: ""
    }
    const [creds, setCreds] = useState(initValues)

    const handleChanges = evt => {
        setCreds({
            ...creds,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        axiosWithAuth().post("http://localhost:5000/api/login", creds)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            props.history.push("/friends")
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="username"
            value={creds.username}
            onChange={handleChanges} />
            <input type="text"
            name="password"
            value={creds.password}
            onChange={handleChanges} />
            <button>Login</button>
        </form>
     );
}
 
export default Login;