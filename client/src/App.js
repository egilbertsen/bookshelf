import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Shelf from "./pages/Shelf";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/shelf">
            <Shelf />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
