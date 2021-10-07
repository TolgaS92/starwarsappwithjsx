import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import People from "./components/People/People";
import Person from "./components/Person/Person";
import Films from "./components/Films/Films";
/* import GetPerson from "./components/GetPerson/GetPerson"; */

function App() {
  return (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <People />
                </Route>
                <Route exact path="/person/:id">
                    <Person />
                </Route>
                <Route exact path="/films/:id">
                    <Films />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
