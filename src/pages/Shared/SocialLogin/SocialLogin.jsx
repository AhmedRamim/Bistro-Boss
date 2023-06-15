import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const {googleSignIn} = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            const  saveUser  = {name:loggedInUser.displayName,email:loggedInUser.email}
            fetch('http://localhost:5000/users',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then(() => {})
            navigate('/')
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                <FaGoogle color='orange' size={32} />

                <p>Continue with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;