import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const [news, setNews] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
        .then(res => res.json())
        .then(data => setNews(data.data))
        .catch(err => alert("ERROR", err))
    },[id])
    return (
        <div>
            <h1 className='text-xl font-semibold'>Dragon News Home</h1>
            <div className='flex flex-col gap-4'>
                {
                    news.map((n, idx)=> <NewsCard key={idx} news={n}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;