import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserAdd = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    const inputChange = (e) => {
        console.log(e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const addUserData = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://jsonplaceholder.typicode.com/users`, user);
        } catch (error) {
            console.log("Error, while adding data in api", error);
        }
    }

    // const addUserData = (e) => {
    //     e.preventDefault();
    //     fetch('https://jsonplaceholder.typicode.com/users', {
    //         method: 'POST',
    //         body: JSON.stringify({user}),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
    // }


  return (
    <>
        <div className='container'>
            <h1>Add User Data</h1>
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
                    name="phone" 
                    placeholder='Phone'
                    onChange={e => inputChange(e)}
                /><br/><br/>
                <button className='btn add-user' onClick={e => addUserData(e)}>Add User</button>
                <Link className='btn cancel-user' to={`/home`}>Cancel</Link>
            </form>
        </div>
    </>
  )
}

export default UserAdd;