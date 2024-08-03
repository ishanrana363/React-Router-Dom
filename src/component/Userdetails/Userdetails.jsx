import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Userdetails = () => {
    const user = useLoaderData()
    return (
        <div>
            <h1>Name : { user.name} </h1>
            <p> street : { user.address.city} </p>
        </div>
    );
};

export default Userdetails;