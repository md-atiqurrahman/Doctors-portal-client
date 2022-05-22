import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div className='mx-6'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
        </div>
    );
};

export default Home;