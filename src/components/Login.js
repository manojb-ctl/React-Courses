import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState([]);

    const inputChange = (e) => {
        console.log(e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const loginUserData = (e) => {
        e.preventDefault();
        let getData = localStorage.getItem("UserData");
        let myData = JSON.parse(getData);
        console.log("Local Storage Data: ", myData);
        
        if(user.email === myData.email && user.password === myData.password) {
            console.log("work");
            navigate("/home");
        } else{
            console.log("not work");
            alert("Enter valid credentials!");
        }
    }


  return (
    <>
        <div className='container'>
            <h1>Login Form</h1>
            <form className='user-form'>
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
                <button className='btn add-user' onClick={e => loginUserData(e)}>Login</button>
                <p>Not a member? <Link className='btn cancel-user' to={`/`}>Sign Up</Link></p>
            </form>
        </div>
    </>
  )
}

export default Login;