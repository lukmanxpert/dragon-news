import React from 'react';
import dragon from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-4'>
            <img src={dragon} />
            <p className='text-[#706F6F] text-xl font-medium my-2'>Journalism Without Fear or Favour</p>
            <p className='text-lg font-medium text-[#706f6f]'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;