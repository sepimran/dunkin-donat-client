import React from 'react';
import signInImage from '/signin-71220807.gif'
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <section className="breadcrumb-area">
                <h1>Sign Up</h1>
            </section>

            <section className="section-padding-area">
                <div className="container">
                    <div className="row form-wrapper">
                        <div className="col-lg-6 px-0">
                            <div className="form-area">
                                <h2>Please Signup</h2>
                                <form>
                                    <div className="single-form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name='name' placeholder='Type your name here' className='input input-bordered w-full' required />
                                    </div>
                                    <div className="single-form-group">
                                        <label htmlFor="photo">Photo url</label>
                                        <input type="url" name='url' placeholder='Type your photo url here' className='input input-bordered w-full' required />
                                    </div>
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
                                    <p>Already have an account ?<Link to="/login"> Login</Link></p>
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

export default Registration;