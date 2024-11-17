import React from 'react';
import Marquee from 'react-fast-marquee';
const LatestNews = () => {
    return (
        <div className='flex gap-2 my-4 items-center bg-gray-200'>
            <p className='bg-[#D72050] py-2 px-4 text-white text-lg font-medium'>Latest</p>

            <Marquee pauseOnHover={true} className="mr-10 space-x-20 text-lg font-semibold text-[#403F3F]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum iste quaerat vel quidem eum autem a ad cumque repellat! Beatae dolores, porro, modi optio laborum, fugit nostrum accusamus exercitationem ut aperiam necessitatibus suscipit totam officia ducimus inventore expedita vitae!
            </Marquee>

        </div>
    );
};

export default LatestNews;