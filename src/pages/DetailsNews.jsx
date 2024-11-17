import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import SocialLogIn from '../components/SocialLogIn';
import FindUsOn from '../components/FindUsOn';
import { FaArrowLeft } from 'react-icons/fa';

const DetailsNews = () => {
    const data = useLoaderData();
    const news = data.data[0]
    const { image_url, title, details } = news
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <div className='grid gap-6 grid-cols-12'>
                <div className='col-span-9'>
                    <h1 className='text-[#403F3F] font-semibold text-xl'>Dragon News</h1>
                    <div className="card card-compact bg-base-100 shadow-xl my-6">
                        <figure>
                            <img className='p-6'
                                src={image_url}
                                alt={title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions items-center justify-start">
                                <Link to={`/home/category/${news.category_id}`} className="btn bg-[#D72050] flex justify-center items-center text-white text-xl font-medium hover:bg-[#D72050] hover:no-underline capitalize"> <FaArrowLeft></FaArrowLeft> All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <SocialLogIn></SocialLogIn>
                    <FindUsOn></FindUsOn>
                </div>
            </div>
        </div>
    );
};

export default DetailsNews;