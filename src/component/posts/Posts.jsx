import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Postsdata from '../postdata/Postsdata';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className='
            grid grid-cols-4 gap-8 mt-10 
            lg:grid-cols-3 xl:grid-cols-4
        ' >
            {
                posts.map((post)=> <Postsdata post = {post} ></Postsdata> )
            }

        </div>
    )
}

export default Posts
