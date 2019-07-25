import React from "react";
import axios from "axios";
import Button from "Components/Button";
import SockItem from "Components/SockItem";
import { Link } from "react-router-dom";
import "./orderHistory.scss";

const categoryArr = ["Kids", "Casual", "Dressed", "Athletic"];
const typeArr = ["No-Show", "Ankle", "Mid", "High"];

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
          {orderHistoryArr && (
            <ul className="previousOrders">
              {orderHistoryArr.map((el, idx) => (
                <li className="eachOrder">
                  <span className="productImage">
                    <SockItem
                      key={`orderHistory-${idx}`}
                      type={el.design.main_type - 1}
                      view="side"
                      color={el.design.color}
                      pattern={el.design.pattern}
                    />
                  </span>
                  <div className="orderExplanationWrap">
                    <div className="orderSummary">
                      <div className="statusAndDate">
                        Delivered: Jul 5, 2019
                      </div>
                      <div className="productName">{el.label}</div>
                      <div className="categoryAndType">{`${
                        categoryArr[el.design.category - 1]
                      } ${typeArr[el.design.main_type - 1]}`}</div>
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
          )}
        </div>
      </div>
    );
  }
}

export default OrderHistory;
