import React from 'react';
import DashboardLeftMenu from '../Shared/DashboardLeftMenu/DashboardLeftMenu';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const UpdateItem = ({params}) => {
    const food = useLoaderData();
    const {_id, category,details ,foodPhoto ,name ,price ,quantity , supplier} = food;

    console.log('single food' ,food);


    const handleUpdateFood = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        const foodPhoto = form.photo.value;

        const updateFood = {name , quantity , supplier , price , category , details , foodPhoto}
        console.log(updateFood);

        // updateFood send to server 
        fetch(`http://localhost:5000/food/${_id}` , {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(updateFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Food Item Updated',
                icon: 'success',
                confirmButtonText: 'Okay'
            })
            form.reset();
        })

    }

    return (
        <div>
            <div className="dashboard-area">
                <DashboardLeftMenu></DashboardLeftMenu>
                
                <div className="dashboard-right-area">
                    <div className="food-form-area">
                       
                        <div className="dashboard-form-wrapper">
                            <h1>Update Food </h1>
                           
                            <form onSubmit={handleUpdateFood} className='food-row row'>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="name">Food Name</label>
                                    <input type="text" name='name' placeholder='Enter food name' defaultValue={name} className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="quantity">Quantity</label>
                                    <input type="number" name='quantity' placeholder='Enter food quantity' defaultValue={quantity} className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="supplier">Supplier</label>
                                    <input type="text" name='supplier' placeholder='Enter food supplier ' defaultValue={supplier} className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="price">Price</label>
                                    <input type="number" name='price' placeholder='Enter food price' defaultValue={price} className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="category">Category</label>
                                    <input type="text" name='category' placeholder='Enter food category' defaultValue={category} className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-6">
                                    <label htmlFor="photo">Photo</label>
                                    <input type="url" name='photo' placeholder='Enter photo URL' defaultValue={foodPhoto} className='input input-bordered w-full' required/>
                                </div>
                                <div className="single-form-item col-lg-12">
                                    <label htmlFor="details">Details</label>
                                    <textarea name="details" id="" cols="30" rows="10" defaultValue={details} placeholder='Enter food details' className='input input-bordered w-full' required></textarea>
                                </div>
                               

                                <div className="single-form-item col-lg-12">
                                <button className='boxed-btn'>Update</button>
                                </div>
                            </form>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;