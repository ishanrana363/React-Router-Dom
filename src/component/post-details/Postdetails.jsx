import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Postdetails = () => {
    const postdetails = useLoaderData();
    console.log(postdetails);
    
    const {userId,id,title,body} = postdetails;
    return (
        <div>
            <h1> User id : {userId} </h1>
            <p> User id {id} </p>
            <h2> Title is : {title} </h2>
            <p> Postbody : {body} </p>
        </div>
    );
};

export default Postdetails;