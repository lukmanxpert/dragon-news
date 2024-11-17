import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div className='my-4'>
            <h1 className='font-semibold text-lg my-2'>Find Us On</h1>
            <div className="join flex join-vertical">
                <button className="btn join-item justify-start text-base font-medium text-blue-500 border-2 border-gray-500"> <FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start text-base font-medium text-black border-2 border-gray-500"> <FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start text-base font-medium text-red-600 border-2 border-gray-500"> <FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;