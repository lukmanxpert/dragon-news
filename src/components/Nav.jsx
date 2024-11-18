import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Context/Context';

const Nav = () => {
    const { user, userSignOut } = useContext(AuthContext)
    return (
        <div className="flex justify-between items-center p-4">
            <div>
                <p>{user && user.email ? user.email : ''}</p>
            </div>
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
                <img src={user ? user.photoURL : userIcon} alt="User Icon" className="w-8 h-8 rounded-full" />
                {
                    user ? <button onClick={userSignOut}>Sign Out</button> : <Link to='/login' className="text-white bg-gray-600 py-2 px-4 font-semibold">
                        Login
                    </Link>
                }
            </div>
        </div>
    );
};

export default Nav;
