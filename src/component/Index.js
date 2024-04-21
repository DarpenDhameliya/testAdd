import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./authenticate/Login";
import Signup from "./authenticate/Signup";
import Dashbord from "./pages/dashbord/Dashbord";

const Index = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/deshbord"> <Dashbord />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Index;
