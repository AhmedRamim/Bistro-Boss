import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure]= useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data
    })
    const handleDelete = (user) => {

    }
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire(
                    'Success!',
                    `${user.name} is an admin now!`,
                    'success'
                )
            }
        })
        
    }
    return (
        <div>
            <Helmet>
                <title>All Users | Bistro Boss</title>
            </Helmet>
            <h1 className='text-3xl font-semibold text-center mt-16'>Total Users:{users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-auto mt-20">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === 'admin' ? 'admin' : <p onClick={() => handleMakeAdmin(user)} className='p-2 bg-green-600 cursor-pointer inline-block  rounded-full'><FaUserShield className='  text-3xl text-white' /></p>
                                }</td>
                                <td onClick={() => handleDelete(user)} className='bg-red-600 mt-4 cursor-pointer inline-block rounded-full '>
                                    <FaTrashAlt color='white' />
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;