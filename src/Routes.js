import React from "react";
import MyPage from "Pages/MyPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/mypage" component={MyPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
