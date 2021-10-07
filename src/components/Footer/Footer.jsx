import React from 'react'

export default function Footer() {
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="/">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="https://swapi.dev/api/people/?page=2">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item"><a className="page-link" href="/">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}
