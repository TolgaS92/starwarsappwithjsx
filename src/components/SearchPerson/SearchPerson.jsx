import React from 'react'

export default function SearchPerson(props) {
    return (
        <div className="container mt-3">
            <form className="search">
                <div className="row">
                    <div className="col-6">
                        <label className="text-center"><h3 className="text-light">Search:</h3></label>
                    </div>
                    <div className="col-6">
                        <input
                        name="search"
                        onChange={props.handleInputChange}
                        value={props.search}
                        type="text"
                        className="form-control"
                        placeholder="Search for Cast Member"
                        id="search"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
