import React from "react";
import Row from "./Row";
import "./App.css";
import Requests from "./Requests";

import Banner from "./Banner";
import Nav from "./Nav";




const App = () =>{
    return(

        <div className="app">
<Nav/>
        {/* Nav */}

        {/* Banner */}
        <Banner/>
            <Row title ="NETFLIX ORIGINALS" fetchUrl={Requests.fetchNetflixOriginals}
            isLargeRow={true}
            />
            <Row title ="TRENDING NOW" fetchUrl={Requests.fetchTrending}/>
            <Row title ="Top Rated" fetchUrl={Requests.fetchTopRated}/>
            <Row title ="Action Movies" fetchUrl={Requests.fetchActionMovies}/>
            <Row title ="Comedy Movies" fetchUrl={Requests.fetchComedyMovies}/>
            <Row title ="Horror" fetchUrl={Requests.fetchHorrorMovies}/>
            <Row title ="Romance Movies" fetchUrl={Requests.fetchRomanceMovies}/>
            <Row title ="Documentaries" fetchUrl={Requests.fetchDocumentaries}/>

        </div>
    )
}


export default App;
