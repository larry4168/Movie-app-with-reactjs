import React from "react";
import './SideBar.css'

const SideBar = (props) => {

    const {searchMovies} = props.searchMovies

    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <h2 className="side">Side Bar</h2>
                <div className="categories">
                    <h3 
                    className="cont"
                    key={1}
                    onClick={() => 
                    searchMovies('movies')}>
                        Movies
                    </h3>
                    <h3 
                    className="cont" 
                    key={2}
                    onClick={() => 
                    searchMovies('Series')}>
                        Series
                    </h3>
                    <h3 
                    className="cont" 
                    key={3}
                    onClick={() => 
                    searchMovies('Comics')}>
                        Comics
                    </h3>
                    <h3 
                    className="cont" 
                    key={4}
                    onClick={() => 
                    searchMovies('Comedies')}>
                        Comedies
                    </h3>
                </div>
                
            </div>
            </div>
    )
};

export default SideBar