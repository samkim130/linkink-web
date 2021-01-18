import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContext from "./ContextProviders/NavigationContext.jsx";
import NavBar from "./Navigation/NavBar";
import SideMenuBar from "./Navigation/SideMenuBar.jsx";

import Home from "./Home/Home";
import SearchPage from "./Search/SearchPage";
import Appointments from "./Appointments/Appointments.jsx";
import Community from "./Community/Community.jsx";
import Admin from "./Admin/Admin.jsx";

import ArtistProfile from "./ArtistInteraction/ArtistProfile";

import "foundation-sites/dist/css/foundation.min.css";
import "./App.css";
// import jQuery
import $ from "jquery";
// import core foundation (possibly misnamed due to legacy)
// to allow global bookkeeping & jquery helper
// https://github.com/foundation/foundation-sites/issues/10336
import { Foundation } from "foundation-sites";

// set up the $.fn.foundation helper so you can just grab
// DOM elements and call foundation on them
Foundation.addToJquery($);

// Tell Foundation global bookkeeping/jquery helper about Reveal plugin
//Foundation.plugin(Reveal, 'Reveal');

function App() {
  useEffect(() => {
    $("#root").foundation();
  }, []);
  return (
    <div className="App">
      <NavigationContext>
        <Router>
          <div className="app-container">
            <SideMenuBar />
            <div
              className="off-canvas-content"
              data-off-canvas-content=""
              data-sticky-container=""
            >
              <NavBar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/search">
                  <SearchPage />
                </Route>
                <Route exact path="/favorites"></Route>
                <Route exact path="/schedule">
                  <Appointments />
                </Route>
                <Route exact path="/community">
                  <Community />
                </Route>
                <Route exact path="/profile"></Route>
                <Route
                  exact path="/vendor/:profileId"
                  children={<ArtistProfile />}
                ></Route>
                <Route exact path="/admin">
                  <Admin />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </NavigationContext>
    </div>
  );
}

export default App;
