import axios from "axios";
import config from "./config";

// Base URLs for News and Weather APIs
const NEWS_API_BASE = config.NEWS_API;
const WEATHER_API_BASE = config.WEATHER_API;

// Common axios configuration for both News and Weather APIs
const axiosConfig = {
  headers: {
    "Content-type": "application/json",
  },
};

// Axios instance for the News API
const newsApi = axios.create({
  baseURL: NEWS_API_BASE,
  ...axiosConfig,
});

// Axios instance for the Weather API
const watherApi = axios.create({
  baseURL: WEATHER_API_BASE,
  ...axiosConfig,
});

export { newsApi, watherApi };
