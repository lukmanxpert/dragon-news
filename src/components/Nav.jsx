import React from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';

const Nav = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div></div>
            <div>
                <ul className="flex items-center gap-4">
                    <NavLink 
                        to="/home/category/01" 
                        className={({ isActive }) =>
                            `text-lg text-[#706F6F] ${isActive ? 'bg-gray-500 text-white py-2 px-4 rounded-xl font-bold' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) =>
                            `text-lg text-[#706F6F] ${isActive ? 'bg-gray-500 text-white py-2 px-4 rounded-xl font-bold' : ''}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/career" 
                        className={({ isActive }) =>
                            `text-lg text-[#706F6F] ${isActive ? 'bg-gray-500 text-white py-2 px-4 rounded-xl font-bold' : ''}`
                        }
                    >
                        Career
                    </NavLink>
                </ul>
            </div>
            <div className="flex gap-4 items-center">
                <img src={userIcon} alt="User Icon" className="w-8 h-8" />
                <button className="text-white bg-gray-600 py-2 px-4 font-semibold">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Nav;
