import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials,setcredentials] = useState({name: "",email: "", password: "",cpassword:""})
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch("http://localhost:4000/api/auth/createUser", {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})

        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // save the  auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate('/path')
            props.showAlert("Account created successfully","success")

        }
        else{
            props.showAlert("Invalid Details", "denger")
        }

    }
    const onChange = (e)=>{
        setcredentials({...credentials, [e.target.name]: e.target.value})
     }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange}  aria-describedby="emailHelp"  />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange}  aria-describedby="emailHelp"  />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required  />
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword"> Conform Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required   />
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
