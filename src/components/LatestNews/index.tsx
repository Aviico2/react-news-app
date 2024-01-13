import React, { useEffect, useRef, useState } from 'react';
import { Article } from '../../types/news.type';
import { getNews } from "../../services/news.service";
import TimeAgoComponent from '../TimeAgo';
import _debounce from 'lodash/debounce';

const LatestNews: React.FC = () => {
    const [latestNews, setLatestNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [stopHitNews, setStopHitNews] = useState(false);
    const pageRef = useRef(1);

    const debouncedFetchData = useRef(
        _debounce(async () => {
            setLoading(true);
            const params: Object = {
                country: 'in',
                pageSize: 4,
                page: pageRef.current
            };
            try {
                const response = await getNews(params);
                const newArticles = response.data.articles || [];
                if (newArticles.length > 0) {
                    setLatestNews((prevData) => [...prevData, ...newArticles]);
                    pageRef.current += 1;
                } else {
                    setStopHitNews(true);
                }
            } catch (error) {
                setStopHitNews(true);
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }, 500)
    ).current;

    useEffect(() => {
        const fetchData = () => {
            debouncedFetchData();
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading && !stopHitNews) {
                    fetchData();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        const target = document.querySelector('.infinite-scroll-target');
        if (target) {
            observer.observe(target);
        }

        return () => observer.disconnect();
    }, [debouncedFetchData, loading, stopHitNews]);

    return (
        <div className="container">
            <div className="latest-news">
                {/* News Section Heading */}
                <h2 className='heading'>Latest News</h2>

                {/* News Items */}
                <div className="row mb-5">
                    {latestNews.map((news, index) => (
                        <div key={index} className='col-lg-3 col-md-4 col-xs-6 col-6 news-items'>
                            {/* News Image Container */}
                            <div className="image-container">
                                <img src={news.urlToImage || 'https://media.istockphoto.com/id/1128119311/photo/cubes-with-the-word-news-on-a-newspaper.webp?b=1&s=170667a&w=0&k=20&c=6KpkbF1_RLB5P9dP6dCEBbrk_TR8y7yAvTBCXsCc87k='} alt="news" />
                            </div>

                            {/* News Title */}
                            <p>{news.title.length > 80 ? `${news.title.slice(0, 80)}...` : news.title}</p>

                            {/* TimeAgo Component */}
                            <TimeAgoComponent timestamp={news.publishedAt} />
                        </div>
                    ))}
                </div>

                {/* Loading Indicator */}
                {loading && <div className='text-center'><div className="loading"></div></div>}

                {/* Intersection Observer Target */}
                <div className="infinite-scroll-target" style={{ height: '10px' }}></div>
            </div>
        </div>
    );
};

export default LatestNews;
