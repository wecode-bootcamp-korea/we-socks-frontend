import React from "react";
import Main from "./Pages/Main";
import MyPage from "Pages/MyPage";
import Itemlist from "./Pages/Itemlist";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Custom from "Pages/Main/Custom";
<<<<<<< HEAD
import OrderDetail from "Pages/MyPage/OrderHistory/OrderDetail";
import ShoppingCart from "Pages/MyPage/ShoppingCart";
=======

import OrderDetail from "Pages/MyPage/OrderHistory/OrderDetail";
>>>>>>> ece82c7... MyPage started to communicate with the server
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
<<<<<<< HEAD
=======
          <Route exact path="/itemlist" component={Itemlist} />
>>>>>>> ece82c7... MyPage started to communicate with the server
          <Route exact path="/custom" component={Custom} />
          <Route exact path="/itemlist" component={Itemlist} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/orderdetail" component={OrderDetail} />
<<<<<<< HEAD
          <Route exact path="/shoppingcart" component={ShoppingCart} />
=======
>>>>>>> ece82c7... MyPage started to communicate with the server
        </Switch>
      </Router>
    );
  }
}

export default Routes;
