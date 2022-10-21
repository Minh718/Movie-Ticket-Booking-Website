export const Discover_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

export const img_url = "http://image.tmdb.org/t/p/w500";

export const fetchTopRatedMovies = (page) =>
  `https://api.themoviedb.org/3/movie/top_rated?api_key=14ccdb96456935bbb41591e99697d262&page=${page}`;
export const fetchPopularMovies = (page) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=14ccdb96456935bbb41591e99697d262&page=${page}`;
