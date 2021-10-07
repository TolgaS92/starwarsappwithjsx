import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";

export default function Person() {
    const [person, setPerson] = useState({})
    const [movies, setMovies] = useState([])
    const { id } = useParams();
    console.log(person)
    useEffect(() => {
        API.getStarWarsPersonWithName(id)
        .then(personResult => {
            console.log(personResult.data.results[0].films)
            setPerson(personResult.data.results[0])
            setMovies(personResult.data.results[0].films)
        })
        .catch(err => console.log(err));
    }, [id])
    return (
        <div className="container">
            <h1 className="text-center mt-2 mb-3 text-light">Information about the Character</h1>
            <div className="row justify-content-center mt-3 text-center">
            <div className="card col-6">
            <div className="card-header">
              <h4>{person.name}</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Height : {person.height} cm </li>
              <li className="list-group-item">Mass : {person.mass} kg</li>
              <li className="list-group-item">Hair Color : {person.hair_color}</li>
              <li className="list-group-item">Skin Color : {person.skin_color}</li>
              <li className="list-group-item">Eye Color : {person.eye_color}</li>
              <li className="list-group-item">BoD : {person.birth_year}</li>
              <li className="list-group-item">Gender : {person.gender}</li>
              Movies:{movies.map((movie, index) =>
                  <li className="list-group" key= {index}>
                      <Link to={"/films/" + (index+1)}>Movie {index+1 } Click for details!</Link>
                      </li>
                      )}
            </ul>
            </div>
            </div>
            <div className="row justify-content-center mt-5 text-center">
                <div className="col-6">
                    <Link to="/starwarsappwithjsx/">← Back to Search</Link>
                </div>
            </div>
        </div>
    )
}
