import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { createUser, update } = useContext(AuthContext)
    const location = useLocation()
    const pathname = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                update(data.name, data.photo)
                    .then(() => {
                        const saveUser = {name:data.name,email:data.email}
                        fetch('http://localhost:5000/users',
                        {
                            method:"POST",
                            headers:{
                                'content-type':'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Login Successfully',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    navigate(pathname, { replace: true })
                                }
                            })

                    })
                    .catch(err => {
                        console.log(err);
                    })
                console.log(loggedUser);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="hero-content w-full gap-10 flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>

                </div>
                <div className="card w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input  {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-warning'>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input  {...register("photo", { required: true })} type="text" placeholder="photo url" className="input input-bordered" />
                            {errors.photo && <span className='text-warning'>Photo URL field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-warning'>Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  {...register("password", { required: true, minLength: 6, maxLength: 20 })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='text-warning'>Password field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-warning' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <SocialLogin/>
                    <p className='pb-6 text-center'>Already have an account? <Link to={'/login'} className='text-orange-500'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;