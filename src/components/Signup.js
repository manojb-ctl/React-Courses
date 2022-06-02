import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState([]);

    const inputChange = (e) => {
        console.log(e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const signupUserData = (e) => {
        e.preventDefault();
        localStorage.setItem("UserData", JSON.stringify(user));
        console.log("Saved in Local Storage");
        navigate("/login");
    }

    
  return (
    <>
        <div className='container'>
            <h1>SignUp Form</h1>
            <form className='user-form'>
                <input type="text" 
                    name="name" 
                    placeholder='Name' 
                    onChange={e => inputChange(e)}
                /><br/><br/>
                <input type="text" 
                    name="username" 
                    placeholder='Username' 
                    onChange={e => inputChange(e)}
                /><br/><br/>
                <input type="text" 
                    name="email" 
                    placeholder='Email'
                    onChange={e => inputChange(e)}
                /><br/><br/>
                <input type="text" 
                    name="password" 
                    placeholder='Password'
                    onChange={e => inputChange(e)}
                /><br/><br/>
                <button className='btn add-user' onClick={e => signupUserData(e)}>Sign Up</button>
                <p>Already SignUp? <Link className='btn cancel-user' to={`/login`}>Login</Link></p>
            </form>
        </div>
    </>
  )
}

export default Signup;