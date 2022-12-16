// import fetch from "node-fetch";
// import createConnection from "./database.js"

// const Discover_URL =
//   "https://api.themoviedb.org/3/discover/movie?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

// const img_url = "http://image.tmdb.org/t/p/w500";

// const fetchUpcomingMovies = (page) =>
//   `https://api.themoviedb.org/3/movie/upcoming?api_key=14ccdb96456935bbb41591e99697d262&language=en-US&page=${page}&region=US`;
// const fetchPopularMovies = (page) =>
//   `https://api.themoviedb.org/3/movie/popular?api_key=14ccdb96456935bbb41591e99697d262&page=${page}`;
// for (let i = 1; i <= 5;i++){
//   fetch(fetchPopularMovies(i)).then(data => data.json()).then(data => {
//     data.results.forEach( async movie => await storeMovie(movie))
//   })
// }
// const storeMovie = async (movie)=>{
//   const connection = await createConnection()
//   try{
//       let id = movie.id
//       let title = movie?.title?.replace("'","''")
//       let poster_path = movie?.poster_path?.replace("'","''")
//       let backdrop_path = movie?.backdrop_path?.replace("'","''")
//       if (id && title && poster_path && backdrop_path){
//         let sql = `INSERT INTO tbl_movie (id,title,poster_path,backdrop_path) values (${id} ,'${title}','${poster_path}','${backdrop_path}')`
//         await connection.query(sql)
//       }
//   }catch (e){
//     console.log(e)
//   }finally{
//       await connection.end();
//   }
// }
