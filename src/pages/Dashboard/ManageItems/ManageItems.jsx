import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu,,refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
                .then(result => {
                    if(result.data.deletedCount){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }
    return (
        <div>
            <SectionTitle SubHeading={"Hurry Up"} heading={'Manage Items'}></SectionTitle>
            <Helmet>
                <title>Manage Items | Bistro Boss</title>
            </Helmet>
            <h1 className='text-3xl font-semibold text-center mt-16'>Total Items:  {menu.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-auto mt-20">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td><img className='w-[80px] h-[70px] rounded-3xl' src={user.image} alt="" /></td>
                                <td>{user.name}</td>
                                <td>${user.price}</td>
                                <td>{
                                    <p onClick={() => handleMakeAdmin(user)} className='p-4 bg-green-600 cursor-pointer inline-block  rounded-full'><FaPen className='  text-xl text-white' /></p>
                                }</td>
                                <td onClick={() => handleDelete(user._id)} className='bg-red-600 mt-4 cursor-pointer inline-block rounded-full '>
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

export default ManageItems;