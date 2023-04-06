import React from "react";
import "./MovieList.css"
import movies from "../movie-database";
import { NavLink } from "react-router-dom";

const MovieList = () => {

    return (
        <nav className="movie-list">
            {movies.map((movie) =>
                <NavLink to={`/movies/${movie.id}`}
                    key={movie.id}
                    className={({ isActive }) => isActive ? "active" : ""} >{movie.title}</NavLink>
            )}

        </nav>
    )
}

export default MovieList