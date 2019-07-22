import React from "react";
import axios from "axios";
import Button from "Components/Button";
import Sockitem from "Components/SockItem/Sockitem";
import { Link } from "react-router-dom";
import "./orderHistory.scss";

class OrderHistory extends React.Component {
  constructor() {
    super();

    this.state = {
      orderHistoryArr: []
    };
  }

  componentDidMount = () => {
    axios
      .post("http://10.58.5.85:8000/purchase/my_order", { buyer: "bj" })
      .then(response => {
        this.setState({
          orderHistoryArr: response.data[0].order_list
        });
      });
  };

  handleClick = () => {};
  render() {
    const { className } = this.props;
    const { orderHistoryArr } = this.state;
    return (
      <div
        className={`orderHistory ${
          className === "orderHistory" ? "showDetail" : "hidden"
        }`}
      >
        <div className="orderHistoryRoot detailRoot">
          <p>Order History</p>
          <ul className="previousOrders">
            {orderHistoryArr.map((el, idx) => (
              <li className="eachOrder">
                <span className="productImage">
                  <Sockitem
                    key={`orderHistory-${idx}`}
                    type={el.main_type}
                    color={el.color}
                    pattern={el.pattern}
                    view="side"
                  />
                </span>
                <div className="orderExplanationWrap">
                  <div className="orderSummary">
                    <div className="statusAndDate">Delivered: Jun 5, 2019</div>
                    <div className="productName">{el.label}</div>
                    <div className="categoryAndType">{`${el.category} ${el.main_type}`}</div>
                    <div className="orderedDate">
                      Ordered: {el.ordered_date}
                    </div>
                    <div className="orderNumber">Order # {el.order_code}</div>
                  </div>
                  <Link to="/orderdetail">
                    <Button
                      className="orderDetailBtn"
                      text="Order Detail"
                      onClick={this.handleClick}
                    />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default OrderHistory;
