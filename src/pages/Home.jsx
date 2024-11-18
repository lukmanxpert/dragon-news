import React, { useEffect, useState } from 'react';
import SocialLogIn from '../components/SocialLogIn';
import FindUsOn from '../components/FindUsOn';
import { NavLink, Outlet } from 'react-router-dom';
const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
            .catch(err => alert("ERROR", err))
    }, [])
    return (
        <div className='grid md:grid-cols-12  gap-6'>
            <div className='md:col-span-3'>
                <h1 className='font-semibold text-xl text-[#403F3F] mb-2'>Categories : ({categories.length})</h1>
                <div className='flex gap-2 flex-col'>
                    {
                        categories.map(category => <NavLink to={`category/${category.category_id}`} className='btn text-xl text-[#9F9F9F] bg-white' key={category.category_id}>{category.category_name}</NavLink>)
                    }
                </div>
            </div>
            <div className='md:col-span-6'>
                <Outlet></Outlet>
            </div>
            <div className='md:col-span-3'>
                <SocialLogIn></SocialLogIn>
                <FindUsOn></FindUsOn>
            </div>
        </div>
    );
};

export default Home;