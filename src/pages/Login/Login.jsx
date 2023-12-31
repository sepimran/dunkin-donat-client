import React, { useContext, useState } from 'react';
import signInImage from '/signin-71220807.gif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const {signIn , googleSignIn} = useContext(AuthContext);
    const [error , setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email , password);

   
        
        signIn(email,password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser);
            Swal.fire({
                title: 'Success!',
                text: 'Login Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
            })

    const from = location.state?.from?.pathname || '/' ;
            navigate(from , {replace: true})
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    //google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result =>{
            Swal.fire({
                title: 'Success!',
                text: 'Login Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
            })
            navigate('/');
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <div>
            <section className="breadcrumb-area">
                <h1>Login</h1>
            </section>

            <section className="section-padding-area">
                <div className="container">
                    <div className="row form-wrapper">
                        <div className="col-lg-12 px-0">
                            <div className="form-area">
                                <h2>Please login to your account</h2>
                                <form onSubmit={handleLogin}>
                                    <div className="single-form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' placeholder='Type your email here' className='input input-bordered w-full' required />
                                    </div>
                                    <div className="single-form-group">
                                        <label htmlFor="Password">Password</label>
                                        <input type="Password" name='password' placeholder='Type your password here' className='input input-bordered w-full' required />
                                    </div>
                                    <div className="single-form-group">
                                        <input type="submit" name='submit' value="Login" />
                                    </div>
                                    
                                </form>

                                <div className="alternative-link-area">
                                    <p>Have no account? <Link to="/registration"> Create one</Link></p>
                                    <button onClick={handleGoogleSignIn} className='boxed-btn icon-btn btn-no-bg'> <img src="/google-plus-g.svg" />  Continue with Google</button>

                                    {
                                        error && <div className='text-red-600'>{error}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;