import React from 'react';
import Card from './Card/Card';
import Carosul from './Carosul/Carosul';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Carosul></Carosul>
            <Card></Card>
            <Services></Services>
        </div>

    );
};

export default Home;