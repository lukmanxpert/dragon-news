import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogIn = () => {
    return (
        <div>
            <h1 className='text-xl font-bold'>Login With</h1>
            <div className='flex flex-col mt-4 gap-2'>
                <button className='border py-2 px-4 rounded-lg w-full font-bold flex gap-2 items-center justify-center'><FaGoogle className='inline-block'></FaGoogle> Login With Google</button>
                <button className='border py-2 px-4 rounded-lg w-full font-bold flex gap-2 items-center justify-center'><FaGithub className='inline-block'></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogIn;