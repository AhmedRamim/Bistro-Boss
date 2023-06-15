import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const{data:users = [] ,refetch} = useQuery(['users'],async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })
    return (
        <div>
            <Helmet>
                <title>All Users | Bistro Boss</title>
            </Helmet>
            <h1 className='text-3xl font-semibold'>Total Users:{users.length}</h1>
        </div>
    );
};

export default AllUsers;