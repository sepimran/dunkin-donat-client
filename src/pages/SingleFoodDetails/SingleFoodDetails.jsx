import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleFoodDetails = ({params}) => {
    const food = useLoaderData();
    const {_id, category,details ,foodPhoto ,name ,price ,quantity , supplier} = food;

    return (
        <div>
            <section className="breadcrumb-area">
                <h1>{name}</h1>
            </section>

            <section className="section-padding-area" id="food-details-area">
                <div className="container">
                    <div className="row justify-center">
                        <div className="col-lg-10">
                            <div className="food-image">
                                <img src={foodPhoto} alt="" />
                            </div>
                            <div className="food-details">

                                <table>
                                    <tr>
                                        <th>Title</th>
                                        <th>Details</th>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>{category}</td>
                                    </tr>
                                    <tr>
                                        <td>Quantity</td>
                                        <td>{quantity}</td>
                                    </tr>
                                    <tr>
                                        <td>Supplier</td>
                                        <td>{supplier}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{price}</td>
                                    </tr>
                                </table>

                                <p>{details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleFoodDetails;