import React from 'react';
import { Link } from 'react-router-dom';

const Postsdata = ({post}) => {
    const {userId,id,title} = post;
    return (
        <div className=' 
        border-2 text-[25px] text-blue-600 font-medium  border-gray-950 h-auto w-auto rounded-lg shadow-lg
        lg:text-[20px] 
        ' >
            <h1> User Id is : { id } </h1>
            <p> Title is {title} </p>
            <Link className='text-black' to={`/post-details/${id}`} >Post Details </Link>
        </div>
    );
};

export default Postsdata;