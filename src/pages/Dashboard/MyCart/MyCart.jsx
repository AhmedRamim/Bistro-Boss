import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCarts';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart,refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
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
                fetch(`http://localhost:5000/carts/${id}`,{
                    method:'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount === 1){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }
        })
    }
    return (
        <div className=''>
            <Helmet>
                <title>My Cart | Bistro Boss</title>
            </Helmet>
            <div className='uppercase flex justify-evenly my-6'>
                <h3 className='text-3xl font-semibold'>Total Items: {cart.length}</h3>
                <h3 className='text-3xl font-semibold'>Total Price: {total}</h3>
                <button className="btn bg-rose-400 border-none btn-sm">PAY</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td>${item.price}</td>
                                <td onClick={() => handleDelete(item._id)} className='bg-red-600 cursor-pointer inline-block mt-4 rounded-full '>
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

export default MyCart;