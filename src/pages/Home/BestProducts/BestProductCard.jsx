import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCarts';

const BestProductCard = ({ items, title }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch] = useCart()
    const { user } = useContext(AuthContext)
    const { name, image, price, recipe,_id } = items;
    const handleAddToCart = (item) => {
        const cartItem = {menuItemId:_id,name,image,price,email:user?.email}
        if (user) {
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(cartItem)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: 'Success!',
                            text: 'Item added on the Cart',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please Login order the food?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{from:location}})
                }
            })
        }
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-full h-[270px]" />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p className='font-bold'>${price}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(items)} className="btn btn-outline border-orange-400 bg-gray-100 text-black border-0 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default BestProductCard;