import React from 'react';
import DashboardLeftMenu from '../Shared/DashboardLeftMenu/DashboardLeftMenu';

const AddItem = () => {
    return (
        <div>
            <div className="dashboard-area">
                <DashboardLeftMenu></DashboardLeftMenu>
                
                <div className="dashboard-right-area">
                    <div className="food-form-area">
                       
                        <div className="dashboard-form-wrapper">
                            <h1>Add Food Item</h1>
                           
                            <form className='food-row'>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name='name' placeholder='Enter food name' className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input type="number" name='quantity' placeholder='Enter food quantity' className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="supplier">Supplier</label>
                                    <input type="text" name='supplier' placeholder='Enter food supplier ' className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="price">Price</label>
                                    <input type="number" name='price' placeholder='Enter food price' className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="category">Category</label>
                                    <input type="number" name='category' placeholder='Enter food category' className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="details">Details</label>
                                    <input type="number" name='details' placeholder='Enter food details' className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-12">
                                    <label htmlFor="photo">Photo</label>
                                    <input type="number" name='photo' placeholder='Enter photo URL' className='input input-bordered w-full' required/>
                                </div>

                                <div className="single-form-item col-lg-12">
                                <button className='boxed-btn'>Add Item</button>
                                </div>
                            </form>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;