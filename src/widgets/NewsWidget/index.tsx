import React, { useEffect, useState } from 'react';
import { Article } from '../../types/news.type';
import { getTopNews } from '../../services/news.service';
import TimeAgoComponent from '../../components/TimeAgo';

const NewsWidget: React.FC = () => {
    const [heroNews, setHeroNews] = useState<Article | undefined>();

    useEffect(() => {
        // Fetch top news on component mount
        const fetchTopNews = async () => {
            try {
                const params = {
                    country: 'in',
                    pageSize: 1,
                    page: 1,
                };

                const response = await getTopNews(params);
                setHeroNews(response.data.articles[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTopNews();
    }, []);

    return (
        <div className="hot-news-section">
            <h2 className="heading">Hot Topics</h2>
            {heroNews && (
                <div className="article-box">
                    <img src={heroNews.urlToImage || '/assets/bg-img.png'} className="image" alt="background news" />
                    <div className="text">
                        <h3>{heroNews.title}</h3>
                        <TimeAgoComponent timestamp={heroNews.publishedAt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsWidget;