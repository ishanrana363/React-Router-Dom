import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {
    const postdetails = useLoaderData();
    const navigate = useNavigate()
    const backData = ()=>{
        navigate(-1);
    };

    const {userId,id,title,body} = postdetails;
    return (
        <div>
            <h1> User id : {userId} </h1>
            <p> User id {id} </p>
            <h2> Title is : {title} </h2>
            <p> Postbody : {body} </p>
            <button onClick={backData} className='bg-[#33eb33] py-2 px-10 my-6 rounded-2xl font-semibold text-[17px] hover:bg-[#a975d2] ' >Back</button>
        </div>
    );
};

export default Postdetails;