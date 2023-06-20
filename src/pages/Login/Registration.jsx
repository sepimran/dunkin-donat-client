import React, { useContext, useState } from 'react';
import signInImage from '/signin-71220807.gif'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';


const Registration = () => {
    const {createUser} = useContext(AuthContext);
    const [error , setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email ,photoUrl, password);

         //password validation
         setError('');
         if(password.length < 6){
            setError('Password should be at least 6 letter');
            return;
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            setError('Ensure string has One uppercase letters.');
            return;
        }
        
        createUser(email,password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser);
            
            updateProfile(newUser, {
                displayName: name,
                photoURL: photoUrl
            }).then(() =>{
                console.log('Update profile');
            }).catch(error => {
                setError(error.message)
            })

            Swal.fire({
                title: 'Success!',
                text: 'Account Register Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
            
              navigate('/')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

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
                                <form onSubmit={handleRegister}>
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
                                        <input type="submit" name='submit' value="Register" />
                                    </div>
                                    
                                </form>

                                <div className="alternative-link-area">
                                    <p>Already have an account ?<Link to="/login"> Login</Link></p>

                                    {
                                        error && <div className='text-red-600'>{error}</div>
                                    }
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