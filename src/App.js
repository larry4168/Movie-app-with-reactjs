import React from "react";
import './App.css'
import SideBar from './SideBar'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

const API_URL_LINK = 'http://www.omdbapi.com/?i=tt3896198&apikey=1def754c'

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([])

    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL_LINK}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies();
    }, []);
     
    return ( 
        <div className="app">

            <SideBar searchMovies={searchMovies} />

            <div className="app-view">
        
                <h1>MovieLand</h1>
        
                <div className="search">
                    <input 
                        placeholder="Search for Movies"
                        value={searchTerm}
                        onChange= {(e) => setSearchTerm(e.target.value)}
                    />
                    <img 
                        src={searchIcon}
                        alt="search"
                        onClick={() => searchMovies(searchTerm)}
                        />
                </div>
        
                {movies?.length > 0
                    ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>) : (
                    <div className="empty">
                        <h2>No Movies Found.</h2>
                    </div>
                )};
            </div>
        </div>
    );
}

export default App