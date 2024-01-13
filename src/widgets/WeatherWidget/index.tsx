import React, { useEffect, useState } from 'react';
import { getWeather } from '../../services/weather.service';
import WeatherData from '../../types/weather.type';

const WeatherWidget: React.FC = () => {
    const [todayDate, setTodayDate] = useState<string>('');
    const [weatherCity] = useState<string>('Delhi');
    const [weatherData, setWeatherData] = useState<WeatherData | undefined>();

    useEffect(() => {
        // Fetch weather data on component mount
        const fetchWeatherData = async () => {
            try {
                const formattedDate = new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short',
                    year: '2-digit',
                });
                setTodayDate(formattedDate);

                const params = {
                    q: weatherCity,
                    units: 'metric',
                };

                const response = await getWeather(params);

                // Filter and update weather data single data of single date
                const filteredList = response.data.list.filter(
                    (item, index, array) =>
                        new Date(item.dt_txt).toLocaleDateString() !==
                        (index < array.length - 1 ? new Date(array[index + 1].dt_txt).toLocaleDateString() : null)
                );

                setWeatherData({ ...response.data, list: filteredList });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchWeatherData();
    }, [weatherCity]);

    return (
        <>
            {/* Desktop Weather Widget */}
            <div className="weather-widget d-sm-block d-none">
                <h2 className="heading">{todayDate}</h2>
                <div className="card">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="degree">
                            <h3>{weatherData?.list[0]?.main.temp.toFixed(0)}&deg;</h3>
                            <p>
                                {weatherCity}, {weatherData?.city?.country}
                            </p>
                        </div>
                        <div className="d-flex justify-content-end align-items-center me-2">
                            <img
                                src={`https://openweathermap.org/img/w/${weatherData?.list[0]?.weather[0].icon}.png`}
                                height={80}
                                alt={weatherData?.list[0]?.weather[0].description}
                            />
                        </div>
                    </div>
                </div>

                <ul className="future">
                    {weatherData?.list.slice(1).map((item, index) => (
                        <li key={index} className="d-flex justify-content-between align-items-center">
                            <div style={{ flex: 1, textAlign: 'left' }}>
                                <p className="mb-0">{new Date(item.dt_txt).toLocaleString('default', { weekday: 'long' })}</p>
                            </div>
                            <div style={{ flex: 1, textAlign: 'center' }}>
                                <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} height={40} alt={item.weather[0].description} />
                            </div>
                            <div style={{ flex: 1, textAlign: 'right' }}>
                                <span className="text">
                                    {item.main.temp_max.toFixed(0)}&deg; <span>{item.main.temp_min.toFixed(0)}&deg;</span>
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Weather Widget */}
            <div className="weather-widget d-lg-none d-xs-block">
                <div className="d-flex justify-content-between">
                    {weatherData?.list.map((item, index) => (
                        <div key={index} className={`p-2 text-center ${index === 0 ? 'today' : ''}`}>
                            <p className="month mb-0">{new Date(item.dt_txt).toLocaleString('default', { weekday: 'short' })}</p>
                            <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
                            <p className="text mb-0">{item.main.temp_max.toFixed(0)}&deg;</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WeatherWidget;