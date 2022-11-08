import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services?quantity=3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            {
                services.map(service => <ServiceCard></ServiceCard>)
            }
        </div>
    );
};

export default Services;