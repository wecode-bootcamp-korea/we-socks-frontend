import React from "react";
import Main from "./Pages/Main";
import Itemlist from "./Pages/Itemlist";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/itemlist" component={Itemlist} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
