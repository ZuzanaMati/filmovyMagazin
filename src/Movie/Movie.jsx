import React from "react";
import { useParams } from "react-router-dom";
import movies from "../movie-database";

const Movie = () => {
    const { id } = useParams()
    const movieData = movies.find((movie) => (
        movie.id === Number(id)

    ))

    return (
        <div className="movie">
            <img src={movieData.poster} alt={movieData.title} />

            <h2>{movieData.title}</h2>
            <p><b>Rok vydání: </b>{movieData.year}</p>
            <p><b>Hodnocení: </b>{movieData.rating}</p>
            <p><b>Režisér: </b>{movieData.director}</p>
            <p><b>Žánr: </b>{movieData.genre}</p>

            {movieData.cast.map((cast) => (
                <table key={cast.name}>
                    <tbody>
                        <tr>
                            <td><b>Jméno herce: </b>{cast.name}</td>
                            <td><b>Role: </b>{cast.as}</td>
                        </tr>
                    </tbody>
                </table>
            ))
            }

            <p><b>Popis: </b>
                {movieData.storyline}</p>

        </div>
    )
}
export default Movie