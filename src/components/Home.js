import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);

    // Get all user data and showing in page....
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try{
            const users = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log("Users : ", users);
            console.log("Users Data : ", users.data);
            setUsers(users.data);
        } catch (error) {
            console.log("Error, while getting data from api", error);
        }
    }

    // const getAllUsers = () => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.json())
    //     .then((data) => setUsers(data));
    // }

    // Delete Userdata :-
    const deleteUserData = async (id) => {
        console.log("deleted id: ", id);
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        getAllUsers();
    }

    // const deleteUserData = (id) => {
    //     console.log("deleted id: ", id);
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //         method: 'DELETE',
    //     });
    //     getAllUsers();
    // }


  return (
    <>
        <div className='container'>
            <h1>Welcome to Dashboard</h1>
            <div className='btn-wrapper'>
                <button className='btn add-user'><Link className='btn add-user' to={`/add`}>Add User</Link></button>
            </div>
            <div className='table-wrapper'>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    {
                    users.map((user) => (
                        <tr key={user.id}>
                            {/* {console.log(user)} */}
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button className='btn edit-user'><Link className='btn edit-user' to={`/edit/${user.id}`}>Edit</Link></button>
                                <button className='btn delete-user' onClick={() => deleteUserData(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    </>
  )
}

export default Home;