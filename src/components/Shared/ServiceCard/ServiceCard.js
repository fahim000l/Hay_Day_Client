import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();

    const { _id, name, thumbnail, rating, price, details } = service;
    return (
        <div className='border-gray-200 shadow-lg shadow-green-500 border-2 border-solid rounded-lg'>
            <div>
                <img className='w-full lg:h-[300px] h-[500px] rounded-lg' src={thumbnail} alt="" />
            </div>
            <div className='text-start p-5 h-[250px]'>
                <h3 className='font-bold text-2xl truncate text-green-900'>{name}</h3>
                <p>{details.length > 100 ? details.slice(0, 100) + '...' : details}</p>
                <p className='my-5 text-xl font-bold'>Price : $<span className='text-yellow-900 font-bold'>{price}</span></p>
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
            <button onClick={() => navigate(`/servicedetails/${_id}`)} className='bg-green-500 w-full text-white font-bold rounded-lg px-5 py-2'>View Details</button>
        </div>
    );
};

export default ServiceCard;