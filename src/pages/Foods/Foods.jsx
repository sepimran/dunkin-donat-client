import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../Shared/FoodCard/FoodCard';

const Foods = () => {
    const loadedFoods = useLoaderData();
    const [foods , setFoods] = useState(loadedFoods);

    return (
        <div>
            <section className="breadcrumb-area">
                <h1>All Foods</h1>
            </section>

            <section className="section-padding-area">
                <div className="container">
                    <div className="row gap-y-5">
                            {
                                foods.map(food => 
                                <FoodCard
                                    key={food._id}
                                    food={food}
                                    foods={foods}
                                    setFoods={setFoods}
                                >

                                </FoodCard>)
                            }


                        </div>
                </div>
            </section>
        </div>
    );
};

export default Foods;