import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-md bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl text-secondary font-semibold">{name}</h2>
                <p className='text-center'>{
                    slots.length
                        ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500'>Try another date</span>
                }</p>
                <p className='uppercase text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center">
                    <button disabled={slots.length === 0} className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;