import React, { useEffect, useState } from 'react'
import API from '../../utils/API';
import SearchPerson from '../SearchPerson/SearchPerson';
import { Link } from "react-router-dom";

function People() {
    const [onePerson, setOnePerson] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        API.getStarWarsPersonWithName(search)
        .then(peopleResult =>   setOnePerson(peopleResult.data.results))
        .catch(err => console.log(err));
    }, [search])
    function handleInputChange (event) {
        if (event.target.name === "search") {
        const searchValue = event.target.value.toLowerCase();
        setSearch(searchValue)
        }
      };
    function handleClick (event) {
        const click = event.target;
        console.log(click)
    }
      console.log(onePerson)
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
                {onePerson && onePerson.map((people, index) => 
                people.name.toLowerCase().includes(search) ?
                <tbody key={people.id}>
                <tr>
                    <Link onClick={handleClick} to={"/person/" + (index)}>
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

