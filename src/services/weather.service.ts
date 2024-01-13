import { watherApi } from "../utils/HttpCommon";
import WeatherData from "../types/weather.type";
import config from "../utils/config";

// Retrieve the Weather API key from the configuration
const WEATHER_API_KEY = config.WEATHER_API_KEY;

/**
 * Fetches weather data based on provided parameters.
 * @param params - Additional parameters for the API request.
 * @returns A promise containing the weather data.
 */
export const getWeather = (params: object) => {
  // Merge the API key and additional parameters
  const finalParams = { apiKey: WEATHER_API_KEY, ...params };
  // Make a GET request to the '/forecast' endpoint
  return watherApi.get<WeatherData>("/forecast", { params: finalParams });
};
