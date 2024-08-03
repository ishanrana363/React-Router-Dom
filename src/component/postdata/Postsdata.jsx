import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Postsdata = ({post}) => {
    const {userId,id,title} = post;
    const navigate = useNavigate();
    const onHandelChange =() =>{
        navigate(`/post-details/${id}`)
    }
    return (
        <div className=' 
        border-2 text-[25px] text-blue-600 font-medium  border-gray-950 h-auto w-auto rounded-lg shadow-lg
        lg:text-[20px] 
        ' >
            <h1> User Id is : { id } </h1>
            <p> Title is {title} </p>
            <Link className='text-black' to={`/post-details/${id}`} >Post Details </Link>
            <button onClick={onHandelChange} className=' w-[150px] text-[17px] text-slate-700 font-bold bg-[#61e734] p-2 rounded-md shadow-lg ' >Post details</button>
        </div>
    );
};

export default Postsdata;