// Represents the source of a news article.
export interface Source {
  id: string | null;
  name: string;
}

// Represents a news article.
export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

// Represents the data structure for a set of news articles.
export interface NewsData {
  status: string;
  totalResults: number;
  articles: Article[];
}
