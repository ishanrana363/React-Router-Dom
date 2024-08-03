import React from 'react';

const Userdata = ({user}) => {
    const {name,username,email} = user;
    return (
        <div className=' border border-[gold] p-6 my-9 mx-7 ' >
            <h1> Name : {name} </h1>
        </div>
    );
};

export default Userdata;