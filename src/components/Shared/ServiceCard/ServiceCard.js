import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const ServiceCard = ({ service }) => {

    console.log(service);
    const { name, thumbnail, rating, price, details } = service;
    return (
        <div className='border-gray-200 shadow-lg shadow-green-500 border-2 border-solid rounded-lg'>
            <div>
                <img className='w-full h-[300px] rounded-lg' src={thumbnail} alt="" />
            </div>
            <div className='text-start p-5'>
                <h3 className='font-bold text-2xl truncate'>{name}</h3>
                <p>{details.length > 100 ? details.slice(0, 100) + '...' : details}</p>
                <p className='my-5'>Price : $ <span className='text-yellow-900 font-bold'>{price}</span></p>
                <div className='flex items-center'>
                    <div className='flex text-yellow-500 text-3xl'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                    </div>
                    <p className='ml-2 text-3xl font-bold'>{rating}</p>
                </div>
            </div>
            <button className='bg-green-500 w-full text-white font-bold rounded-lg px-5 py-2'>Show Details</button>
        </div>
    );
};

export default ServiceCard;