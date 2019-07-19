import React from "react";
import Itemlist from "./Pages/Itemlist";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Custom from "Pages/Main/Custom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Custom} />
          <Route exact path="/itemlist" component={Itemlist} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
