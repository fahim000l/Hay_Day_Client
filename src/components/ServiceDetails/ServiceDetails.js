import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, name, thumbnail, rating, price, details } = service;
    return (
        <div className='border-gray-200 my-10 w-[90%] mx-auto shadow-lg shadow-green-500 border-2 border-solid rounded-lg'>
            <div>
                <img className='w-full lg:h-[300px] h-[500px] rounded-lg' src={thumbnail} alt="" />
            </div>
            <div className='p-5'>
                <h3 className='font-bold text-5xl my-10 truncate text-green-900'>{name}</h3>
                <p className='text-start'>{details}</p>
                <p className='my-5 text-xl font-bold text-start'>Price : $<span className='text-yellow-900 font-bold'>{price}</span></p>
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
            {/* <button onClick={() => navigate(`/servicedetails/${_id}`)} className='bg-green-500 w-full text-white font-bold rounded-lg px-5 py-2'>View Details</button> */}
        </div>
    );
};

export default ServiceDetails;