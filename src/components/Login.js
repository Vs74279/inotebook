import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const [credentials,setcredentials] = useState({email: "", password: ""})
    let navigate = useNavigate();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/auth/login", {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email,  password: credentials.password})

        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // save the  auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate('/path')
            props.showAlert("Login successfully","success")

        }
        else{
            props.showAlert("Invalid Credentials", "denger")
        }

    }
    const onChange = (e)=>{
        setcredentials({...credentials, [e.target.name]: e.target.value})
     }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"  />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control"  value={credentials.password} onChange={onChange} id="password" name="password"  />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
