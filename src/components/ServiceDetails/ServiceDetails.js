import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailCard from './DetailCard/DetailCard';
import ReviewSection from './ReviewSection/ReviewSection';

const ServiceDetails = () => {
    const service = useLoaderData();

    return (
        <div className='w-[90%] mx-auto'>
            <DetailCard service={service}></DetailCard>
            <ReviewSection></ReviewSection>
        </div>

    );
};

export default ServiceDetails;