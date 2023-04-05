import React from "react";
import { useParams } from "react-router-dom";
import movies from "../movie-database";

const Movie = () => {
    const { movieId } = useParams()
    const movieData = movies.find((movie) => movie.id === movieId)

    console.log(movieData)

    return (
        <div>
            {/* <h1>{movieData.title}</h1> */}
        </div>

    )
}
export default Movie