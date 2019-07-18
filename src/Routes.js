import React from "react";
import Main from "./Pages/Main";
import MyPage from "Pages/MyPage";
import Itemlist from "./Pages/Itemlist";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import OrderDetail from "Pages/MyPage/OrderHistory/OrderDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/itemlist" component={Itemlist} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/orderdetail" component={OrderDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
