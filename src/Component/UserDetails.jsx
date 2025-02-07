import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const userDetails = useLoaderData()
    // console.log(userDetails)
    const {id, name, username, email, address, phone, website, company} = userDetails
    
    return (
        <div className='border border-green-600 space-y-3 pb-3 w-5/6 mt-10 rounded p-5 mx-auto text-left'>
            <span className='text-gray-600 font-bold'>User Id: {id}</span>
            <p className='lg:text-2xl font-bold text-green-800'><span className='text-lg text-blue-800'>Name</span >: {name}</p>
            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>Username</span>: {username}</p>
            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>Email</span>: {email}</p>
            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>Address</span>: {address.street}</p>
            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>City</span>: {address.city}</p>
            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>Contact Number</span>: {phone}</p>
            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>Website</span>: {website}</p>
            <h3><span className='font-bold text-blue-800 '>Company</span>: {company.name}</h3>
        </div>
    );
};

export default UserDetails;