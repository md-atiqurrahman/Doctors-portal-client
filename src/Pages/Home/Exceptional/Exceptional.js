import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div className="hero lg:min-h-screen">
            <div className="hero-content flex-col lg:flex-row items-center">
                <img className="max-w-sm rounded-lg shadow-2xl lg:ml-40"  src={treatment}/>
                <div className='lg:ml-20 lg:mr-24'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 lg:text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;