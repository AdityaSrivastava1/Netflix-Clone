import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}){

const [movies,setMovies] = useState([]);
//whenever i click i want to capture the trailer url
const [trailerUrl,setTrailerUrl] = useState("");

//A snippet of code which runs based on a specific condition/variable
useEffect(() =>{

//if [],run once when the row loads and dont run again


//if we are using the useEffect if there is any data if there is any variable that has been came from outside like 
//fetchUrl has to be come inside the akiri mae bcoz it is dependent on that variable

async function fetchData() {

    try {
      const request = await axios.get(fetchUrl);
    //   console.log(request);
    setMovies(request.data.results);
      return request;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error or display a message to the user
    }
  }

fetchData();

},[fetchUrl]);

const opts = {
  height:"390",
  width:"100%",
  playerVars:{
    autoplay: 1,
  }
}

const handleClick = (movie) =>{
  // if video is playing then after finish it should get hide
if(trailerUrl) {
  setTrailerUrl('');
}
else{
  movieTrailer(movie?.name|| "")
  .then((url) =>{
    //we want  video id to play
    //jo id hoga like v=Xtnthaurj toh uski assign value fetch krega 
    const urlParams = new URLSearchParams(new URL(url).search);
    setTrailerUrl(urlParams.get("v"));

  }).catch(error => console.log(error));
}
}



    return(
        <div className="row">
           {/* title */}

        <h2>{title}</h2>

          <div className="row_posters">

            {/* several row_posters */}

            {movies.map(movie =>(
     <img   
     key={movie.id} //makes code faster 
     onClick={() =>handleClick(movie)}
     className={`row_poster ${isLargeRow && "row_posterLarge"}`}
     src = {`${base_url}${
      isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>

            ))}
          </div>
        {/* whenever i click i want to show youtube video   */}
 {trailerUrl && <Youtube videoId={trailerUrl} opts = {opts} />}


        </div>
    )
}

export default Row;


