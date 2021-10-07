import React, { useEffect, useState } from 'react'
import API from '../../utils/API';
import SearchPerson from '../SearchPerson/SearchPerson';
import { Link } from "react-router-dom";

function People() {
    const [people, setPeople] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        API.getStarWarsPeople()
        .then(peopleResult =>   setPeople(peopleResult.data.results))
        .catch(err => console.log(err));
    }, [])
    function handleInputChange (event) {
        if (event.target.name === "search") {
        const search = event.target.value.toLowerCase();
        setSearch(search)
        }
      };
      console.log(people)
    return (
        <div className="container">
            <SearchPerson 
            handleInputChange = {handleInputChange}
            search = {search}
            />
            <table className="table table-striped text-center table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                {people && people.map((people, index) => 
                people.name.toLowerCase().includes(search) ?
                <tbody key={people.name}>
                <tr>
                    <Link to={"/person/" + (index + 1)}>
                        <td>{people.name}</td>
                    </Link>
                </tr>
                </tbody>
                :
                people.name.toLowerCase().includes(search) ?
                <tbody key={people.id}>
                <tr>
                    <th scope="row"></th>
                    <td>{people.name}</td>
                </tr>
                </tbody>
                :
                null
                )}
            </table>
        </div>
    )
}

export default People

