import React from "react";
import Nav from './component/navbar';
import Home from './component/Home';
import About from './component/About';
import MobileList1 from "./component/MobileList";
import MobileForm from "./component/MobileForm";

import { MobileProvider } from "./context/mobileContext"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const Routes = () => {

  return (
    <MobileProvider>
    <Router>
        <Nav/>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route path="/mobile-list">
                <MobileList1 />
            </Route>
            <Route exact path="/mobile-form">
                <MobileForm />
            </Route>
            <Route exact path="/mobile-form/edit/:slug">
                <MobileForm />
            </Route>
            <Route exact path="/search/:valueOfSearch">
                {/* <App3 /> */}
            </Route>
        </Switch>
    </Router>
    </MobileProvider>
  );
};

export default Routes;