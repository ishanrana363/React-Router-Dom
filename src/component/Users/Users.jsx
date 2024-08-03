import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Userdata from '../user-data/Userdata';


const Users = () => {
    const users = useLoaderData();
    
    return (
        <div className=' mt-16 grid grid-cols-3  ' >
            {
                users.map((user)=><Userdata user={user} ></Userdata>)
            }
        </div>
    );
};

export default Users;