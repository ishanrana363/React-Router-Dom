import React from 'react';
import { Link } from 'react-router-dom';

const Userdata = ({user}) => {
    const {name,username,email,id} = user;
    return (
        <div className=' 
            
            border-2 border-[gold] w-auto p-4 my-9 mx-7 text-fuchsia-700  md:w-[100%] rounded-lg shadow-xl

        '>
            <h1 className=' text-[18px] ' > Name : {name} </h1>
            <h3> Username : {  username } </h3>
            <h5> Email :  {email} </h5>
            <Link to={`/user/${id}/`} >Details</Link>
        </div>
    );
};

export default Userdata;