import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const userDetails = useLoaderData()
    // console.log(userDetails)
    const {id, name, username, email, address, phone, website, company} = userDetails
    
    return (
        <div>
            <span>{id}</span>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <h3>{company.name}</h3>
        </div>
    );
};

export default UserDetails;