export const Discover_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

export const img_url = "http://image.tmdb.org/t/p/w500";

export const fetchUpcomingMovies = (page) =>
  `https://api.themoviedb.org/3/movie/upcoming?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&page=${page}&region=US`;
export const fetchPopularMovies = (page) =>
  `https://api.themoviedb.org/3/movie/popular?api_key=14ccdb96456935bbb41591e99697d262&page=${page}`;
export const url_database = "http://localhost:8800/api";

export const url_img = "http://image.tmdb.org/t/p/w500";
// const resCasts = await fetch(
//   `https://api.themoviedb.org/3/movie/${id}/credits?api_key=14ccdb96456935bbb41591e99697d262`
// );
// const resInfo = await fetch(
//   `https://api.themoviedb.org/3/movie/${id}?api_key=14ccdb96456935bbb41591e99697d262`
// );
// const resReviews = await fetch(
//   `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=14ccdb96456935bbb41591e99697d262`
// );
