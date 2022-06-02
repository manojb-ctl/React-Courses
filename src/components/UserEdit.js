import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const UserEdit = () => {
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });

    // Showing (get) user data on edit click....
    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                console.log(user);
                setUser(user.data);
            } catch (error) {
                console.log("Error, while getting data from id in api", error);
            }
        }
        getUser();
    }, [id]);

    // useEffect(() => {
    //     const getUser = () => {
    //         fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //         .then((response) => response.json())
    //         .then((data) => setUser(data));
    //     }
    //     getUser();
    // }, [id]);
    
    const inputChange = (e) => {
        console.log(e.target.value);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const editUserData = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
        } catch (error) {
            console.log("Error, while updating data in api", error);
        }
    }

    // const editUserData = (e) => {
    //     e.preventDefault();
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({ user }),
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
            <form className='user-form'>
                <h1>Edit User Data</h1>
                <input type="text" 
                    name="name"
                    value={user.name}
                    placeholder='Name' 
                    onChange={e => inputChange(e)}
                /><br/><br/>
                <input type="text" 
                    name="username"
                    value={user.username}
                    placeholder='Username' 
                    onChange={e => inputChange(e)}
                /><br/><br/>
                <input type="text" 
                    name="email"
                    value={user.email}
                    placeholder='Email'
                    onChange={e => inputChange(e)}
                /><br/><br/>
                <input type="text" 
                    name="phone"
                    value={user.phone} 
                    placeholder='Phone'
                    onChange={e => inputChange(e)}
                /><br/><br/>
                <button className='btn edit-user' onClick={e => editUserData(e)}>Edit User</button>
                <Link className='btn cancel-user' to={`/`}>Cancel</Link>
            </form>
        </div>
    </>
  )
}

export default UserEdit;