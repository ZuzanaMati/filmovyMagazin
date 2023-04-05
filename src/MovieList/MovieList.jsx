import React from "react";
import "./MovieList.css"
import movies from "../movie-database";
import { Link, Outlet } from "react-router-dom";

const MovieList = () => {

    return (
        <nav className="movie-list">
            {movies.map((movie) =>
                <Link to={`/movies/${movie.id}`}
                    key={movie.id}>{movie.title}</Link>
            )}

        </nav>
    )
}

export default MovieList