import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faHatCowboy , faUserAltSlash , faTrophy} from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData } from 'react-router-dom';
import FoodCard from '../Shared/FoodCard/FoodCard';

const Home = () => {
    const loadedFoods = useLoaderData();
    const [foods , setFoods] = useState(loadedFoods);
    console.log(foods);

    const someFoods = foods.slice(0, 6);

    return (
        <div>
            <section className="hero-area">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content-area">
                                <h4 className="style-f">
                                    Satisfy Your Cravings
                                </h4>
                                <h1>Delicious Foods With Wonderful Eating</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minimaet debitis ut distinctio optio.</p>
                                <button className='boxed-btn'>Learn More</button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hero-img">
                                <img src="/hero-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="promo-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h4 className="style-f text-[#FF7C08] text-[24px] font-bold mb-[-6px]">
                                    Daily Offer
                                </h4>
                                <h2 className='text-[35px]'>Up To 75% Off For This Day</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-promo-item">
                                <span>45% off</span>
                                <h3>Dal Makhani</h3>
                                <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-promo-item bg-2">
                                <span>37% off</span>
                                <h3>Dal Makhani</h3>
                                <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-promo-item bg-3">
                                <span>55% off</span>
                                <h3>Dal Makhani</h3>
                                <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="food-menu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h4 className="style-f text-[#FF7C08] text-[24px] font-bold mb-[-6px]">
                                    Food Menu
                                </h4>
                                <h2 className='text-[35px] mb-[50px]'>Popular Delicious Foods</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            someFoods.map(food => 
                            <FoodCard
                                key={food._id}
                                food={food}
                                foods={foods}
                                setFoods={setFoods}
                            >

                            </FoodCard>)
                        }

                        <div className="col-lg-12 text-center mt-[20px]">
                            <Link to="/foods"><button className='boxed-btn'>More Food</button></Link>
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

export default Home;