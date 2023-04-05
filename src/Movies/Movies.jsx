import React from "react";
import "./Movies.css"
import MovieList from "../MovieList/MovieList";
import { Outlet } from "react-router-dom";
import Movie from "../Movie/Movie";

const Movies = () => {

    return (
        <>
            <h1>Movies</h1>
            <MovieList />
            <Outlet />
        </>
    )
}

export default Movies