import React from 'react';
import signInImage from '/signin-71220807.gif'
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <section className="breadcrumb-area">
                <h1>Login</h1>
            </section>

            <section className="section-padding-area">
                <div className="container">
                    <div className="row form-wrapper">
                        <div className="col-lg-6 px-0">
                            <div className="form-area">
                                <h2>Please login to your account</h2>
                                <form>
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
                                    <button className='boxed-btn icon-btn btn-no-bg'> <img src="/google-plus-g.svg" />  Continue with Google</button>
                                    <button className='boxed-btn icon-btn btn-no-bg'> <img src="/github.svg" />   Continue with Github</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="login-img">
                                <img src={signInImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;