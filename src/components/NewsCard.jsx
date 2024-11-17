import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-5">
            {/* Author Section */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={news.author.img}
                        alt={news.author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h4 className="font-semibold text-sm">{news.author.name}</h4>
                        <p className="text-gray-500 text-xs">{news.author.published_date}</p>
                    </div>
                </div>
                <div>
                    <button className="text-gray-500 hover:text-gray-800">
                        <i className="fas fa-share-alt"></i>
                    </button>
                </div>
            </div>

            {/* News Title */}
            <h2 className="text-lg font-semibold mb-3">
                {news.title}
            </h2>

            {/* Thumbnail */}
            <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Details */}
            <p className="text-gray-600 text-sm mb-4">
                {news.details.substring(0, 150)}...
                <Link to={`/news/${news._id}`} className="text-blue-500 font-medium cursor-pointer">
                    Read More
                </Link>
            </p>

            {/* Footer Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-orange-400">
                    <i className="fas fa-star"></i>
                    <span className="text-sm">{news.rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <i className="fas fa-eye"></i>
                    <span className="text-sm flex items-center gap-2"> <FaEye></FaEye> {news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
