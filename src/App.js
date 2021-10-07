import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
/* import People from "./components/People/People"; */
import Person from "./components/Person/Person";
import Films from "./components/Films/Films";
import GetPerson from './components/GetPerson/GetPerson';

function App() {
  return (
    <Router>
        <div>
            <Navbar />
                <Route exact path="/starwarsappwithjsx/">
                    <GetPerson />
                </Route>
                <Route exact path="/person/:id">
                    <Person />
                </Route>
                <Route exact path="/films/:id">
                    <Films />
                </Route>
        </div>
    </Router>
  );
}

export default App;
