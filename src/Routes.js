import React from "react";
import Main from "./Pages/Main";
import Itemlist from "./Pages/Itemlist";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
<<<<<<< HEAD
import Custom from "Pages/Main/Custom";

=======
import OrderDetail from "Pages/MyPage/OrderHistory/OrderDetail";
>>>>>>> 157ff8d... wip
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/itemlist" component={Itemlist} />
          <Route exact path="/custom" component={Custom} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/orderdetail" component={OrderDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
