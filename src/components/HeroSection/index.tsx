import React from 'react';
import NewsWidget from '../../widgets/NewsWidget';
import WeatherWidget from '../../widgets/WeatherWidget';

const HeroSection: React.FC = () => {
  return (
    // Hero Section Container
    <div className="container mt-md-5 mt-3">
      <div className="row">
        {/* Weather Widget Column */}
        <div className="col-md-4 order-md-2">
          <WeatherWidget />
        </div>

        {/* News Widget Column */}
        <div className="col-md-8 order-md-1">
          <NewsWidget />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
