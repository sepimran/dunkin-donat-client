import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faHatCowboy , faUserAltSlash , faTrophy} from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <div>
            <section className="breadcrumb-area">
                <h1>About Us</h1>
            </section>

            <section className="about-us-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-us-img">
                                <img src="/about-us-image.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content-area">
                                <div className="section-heading">
                                    <h4 className="style-f text-[#FF7C08] text-[24px] font-bold">
                                        Daily Offer
                                    </h4>
                                    <h2 className='text-[35px]'>Helathy Foods Provider</h2>
                                    <p>PlayGuru is your gateway to the enchanting world of music. Our music school is committed to providing top-notch instruction, personalized guidance, and a nurturing learning environment.</p>
                                </div>

                                <ul>
                                    <li>
                                        <img src="/about_check.png" alt="" />
                                        <h4>Trusted Partner</h4>
                                        <p> Our dedicated team of instructors will guide you on your path to musical mastery.</p>
                                    </li>
                                    <li>
                                        <img src="/about_check.png" alt="" />
                                        <h4>First Delivery</h4>
                                        <p> Our dedicated team of instructors will guide you on your path to musical mastery.</p>
                                    </li>
                                    <li>
                                        <img src="/about_check.png" alt="" />
                                        <h4>Secure Payment</h4>
                                        <p> Our dedicated team of instructors will guide you on your path to musical mastery.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-us-area pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content-area">
                                <div className="section-heading">
                                    <h4 className="style-f text-[#FF7C08] text-[24px] font-bold">
                                        Why Choose Us
                                    </h4>
                                    <h2 className='text-[35px]'>Why We Are The Best</h2>
                                    <p>PlayGuru is your gateway to the enchanting world of music. Our music school is committed to providing top-notch instruction, personalized guidance, and a nurturing learning environment.</p>
                                </div>

                                <ul>
                                    <li>
                                        <img src="/about_check.png" alt="" />
                                        <h4>Trusted Partner</h4>
                                        <p> Our dedicated team of instructors will guide you on your path to musical mastery.</p>
                                    </li>
                                    <li>
                                        <img src="/about_check.png" alt="" />
                                        <h4>First Delivery</h4>
                                        <p> Our dedicated team of instructors will guide you on your path to musical mastery.</p>
                                    </li>
                                    <li>
                                        <img src="/about_check.png" alt="" />
                                        <h4>Secure Payment</h4>
                                        <p> Our dedicated team of instructors will guide you on your path to musical mastery.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-us-img">
                                <img src="/why_choose_img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="counter-item-area">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3">
                            <div className="single-counter-item">
                                <h3 className='counter'>85,000+</h3>
                                <span>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <p>Customer Server</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-counter-item">
                                <h3 className='counter'>85,000+</h3>
                                <span><FontAwesomeIcon icon={faHatCowboy} /></span>
                                <p>Experience Chef</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-counter-item">
                                <h3 className='counter'>85,000+</h3>
                                <span><FontAwesomeIcon icon={faUserAltSlash} /></span>
                                <p>Happy Customer</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-counter-item">
                                <h3 className='counter'>85,000+</h3>
                                <span><FontAwesomeIcon icon={faTrophy} /></span>
                                <p>Winning Award</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;