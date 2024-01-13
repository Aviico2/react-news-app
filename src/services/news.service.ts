import { newsApi } from "../utils/HttpCommon";
import { NewsData } from "../types/news.type";
import config from "../utils/config";

// Retrieve the News API key from the configuration
const NEWS_API_KEY = config.NEWS_API_KEY;

/**
 * Fetches general news based on provided parameters.
 * @param params - Additional parameters for the API request.
 * @returns A promise containing the news data.
 */
export const getNews = (params: object) => {
  // Merge the API key and additional parameters
  const finalParams = { apiKey: NEWS_API_KEY, ...params };
  // Make a GET request to the '/top-headlines' endpoint
  return newsApi.get<NewsData>("/top-headlines", { params: finalParams });
};

/**
 * Fetches top news based on provided parameters.
 * @param params - Additional parameters for the API request.
 * @returns A promise containing the top news data.
 */
export const getTopNews = (params: object) => {
  // Merge the API key and additional parameters
  const finalParams = { apiKey: NEWS_API_KEY, ...params };
  // Make a GET request to the '/top-headlines' endpoint
  return newsApi.get<NewsData>("/top-headlines", { params: finalParams });
};
