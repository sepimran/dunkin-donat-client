import React, { useContext, useState } from 'react';
import { FaEye , FaEdit , FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const FoodCard = ({food , foods , setFoods}) => {
    const {user} = useContext(AuthContext);
    const {_id, category,details ,foodPhoto ,name ,price ,quantity , supplier} = food;

    const handleItemDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/food/${_id}` , {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                const remainFoods = foods.filter(food => food._id !== _id);
                setFoods(remainFoods);

                if(data.deletedCount > 0){
                    Swal.fire(
                    'Deleted!',
                    'Food Item has been deleted.',
                    'success'
                    )
                }
            })  
        }
        })
    }
    
    return (
        <div className='col-lg-6'>
            <div className="single-food-card">
               <div className="card-image">
                    <img src={foodPhoto} alt={name} />
               </div>

               <div className="food-card-content">
                    <h3>{name}</h3>
                    <ul>
                        <li><b>Category :</b> {category}</li>
                        <li><b>Quantity :</b> {price}</li>
                        <li><b>Price :</b> {price}</li>
                    </ul>
               </div>

               <div className="card-button-group">
                    <Link to={`/food/${_id}`}><button  className='bg-[#D2B48C;]'><FaEye /></button></Link>
                    <Link to={`/update/${_id}`} className={user ? 'd-block' : 'd-none'}><button className='bg-[#3C393B;]'><FaEdit /></button></Link>
                    <span className={user ? 'd-block' : 'd-none'}>
                        <button onClick={()=> handleItemDelete(_id)} className='bg-[#EA4744;]'><FaTrash /></button>
                    </span>
               </div>
            </div>
        </div>
    );
};

export default FoodCard;