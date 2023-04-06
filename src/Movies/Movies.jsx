import React from "react";
import "./Movies.css"
import MovieList from "../MovieList/MovieList";
import { Outlet } from "react-router-dom";

const Movies = () => {

    return (
        <div className="movies">
            <h1>Movies</h1>

            <div className="movies-container">
                <MovieList />
                <Outlet />
            </div>
        </div>
    )
}

export default Movies