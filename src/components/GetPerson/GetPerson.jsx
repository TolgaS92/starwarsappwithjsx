import React, { useEffect, useState } from 'react'
import API from '../../utils/API';
import SearchPerson from '../SearchPerson/SearchPerson';
import { Link } from "react-router-dom";

function People() {
    const [onePerson, setOnePerson] = useState([])
    const [search, setSearch] = useState("")


    useEffect(() => {
        function searchData(){
        if (!search) {
            return;
          }
        API.getStarWarsPersonWithName(search)
        .then(peopleResult =>   {
            if (peopleResult.data.length === 0) {
                throw new Error("No results found.");
              }
              if (peopleResult.data.status === "error") {
                throw new Error(peopleResult.data.message);
              }
        setOnePerson(peopleResult.data.results)
    })
        .catch(err => console.log(err));
    }
    searchData()
    }, [search])


    const handleInputChange = event => {
        setSearch(event.target.value.toLowerCase());
      };


    function handleClick (event) {
        event.preventDefault();
    }

    return (
        <div className="container">
            <SearchPerson 
            handleInputChange = {handleInputChange}
            search = {search}
            />
                {onePerson && onePerson.map((people, index) => 
                people.name.toLowerCase().includes(search) ?
                <div className="mb-5 mt-5 text-center d-flex justify-content-center" key={index}>
                    <div className="card col-4">
                        <Link onClick={handleClick} to={"/person/" + (people.name)}>
                            <div className="card-header">{people.name}</div>
                        </Link>
                    </div>
                </div>
                :
                people.name.toLowerCase().includes(search) ?
                <div className="mb-5 mt-5 text-center d-flex justify-content-center" key={index}>
                    <div className="card col-4">
                        <Link onClick={handleClick} to={"/person/" + (people.name)}>
                            <div className="card-header">{people.name}</div>
                        </Link>
                    </div>
                </div>
                :
                null
                )}
        </div>
    )
}

export default People

