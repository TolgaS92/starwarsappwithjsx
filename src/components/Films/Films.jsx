import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";

export default function Person() {
    const [movies, setMovies] = useState([])
    const { id } = useParams();
    useEffect(() => {
        API.getStarWarsFilms(id)
        .then(personResult => {
            setMovies(personResult.data)
        })
        .catch(err => console.log(err));
    }, [id])
    return (
        <div className="container">
            <div className="row justify-content-center mt-3">
            <div className="card col-6">
            <div className="card-header">
              <h3>Title: {movies.title}</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Director: {movies.director}</li>
              <li className="list-group-item">Producer: {movies.producer}</li>
              <li className="list-group-item">Release date: {movies.release_date}</li>
            </ul>
            </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-3">
                    <Link to="/">← Back to Cast</Link>
                </div>
            </div>
        </div>
    )
}
