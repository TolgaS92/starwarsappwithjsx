import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";

export default function Person() {
    const [person, setPerson] = useState({})
    const [movies, setMovies] = useState([])
    const { id } = useParams();
    useEffect(() => {
        API.getStarWarsPerson(id)
        .then(personResult => {
            setPerson(personResult.data)
            setMovies(personResult.data.films)
        })
        .catch(err => console.log(err));
    }, [id])
    return (
        <div className="container">
            <div className="row justify-content-center mt-3">
            <div className="card col-6">
            <div className="card-header">
              <h3>{person.name}</h3>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Height : {person.height} cm</li>
              <li className="list-group-item">Mass : {person.mass} kg</li>
              <li className="list-group-item">Hair Color : {person.hair_color}</li>
              <li className="list-group-item">Skin Color : {person.skin_color}</li>
              <li className="list-group-item">Eye Color : {person.eye_color}</li>
              <li className="list-group-item">BoD : {person.birth_year}</li>
              <li className="list-group-item">Gender : {person.gender}</li>
                Films:
                <li className="list-group-item">
                    {movies.map((movie, index) =>
                        <li key= {index}>
                            <Link to={"/films/" + (index+1)}>Movie {index+1 } Click for details!</Link>
                        </li>
                    )}
                </li>
            </ul>
            </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-6">
                    <Link to="/">← Back to Cast</Link>
                </div>
            </div>
        </div>
    )
}
