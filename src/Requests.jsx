const API_KEY = "c2f61503424b3dbeddd884e142598c11";


const Requests = {

    fetchTrending:`trending/all/week?api_key=${API_KEY}&language=en-US`,

    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    
  
    
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    
   
    
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default Requests;


