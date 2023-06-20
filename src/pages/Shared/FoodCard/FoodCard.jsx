import React from 'react';
import { FaEye , FaEdit , FaTrash } from 'react-icons/fa';

const FoodCard = ({food}) => {
    console.log(food);
    const {_id, category,details ,foodPhoto ,name ,price ,quantity , supplier} = food;
    
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
                    <button className='bg-[#D2B48C;]'><FaEye /></button>
                    <button className='bg-[#3C393B;]'><FaEdit /></button>
                    <button className='bg-[#EA4744;]'><FaTrash /></button>
               </div>
            </div>
        </div>
    );
};

export default FoodCard;