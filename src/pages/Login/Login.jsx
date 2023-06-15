import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [disable, setDisable] = useState(true)
    const location = useLocation()
    const pathname = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(pathname,{replace:true})
            })
            .catch(err => {
                console.log(err);
            })

    }
    const handleCaptcha = (e) => {
        const value = e.target.value;
        if (validateCaptcha(value) == true) {
            setDisable(false)
        }
        else {
            setDisable(true)
            alert('captcha not Matched')
        }


    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleCaptcha} type="text" name='captcha' placeholder="captcha" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} type="submit" value="Login" className='btn btn-warning' />
                            </div>
                        </form>
                        <SocialLogin/>
                        <p className='pb-6 text-center'>Are you new here? <Link to={'/signup'} className='text-orange-500'>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;