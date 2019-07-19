import React from "react";
import axios from "axios";
import Button from "Components/Button";
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
    console.log(orderHistoryArr);
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
                <span className="productImage"></span>
                <div className="orderExplanationWrap">
                  <div className="orderSummary">
                    <div className="statusAndDate">Delivered: Jun 5, 2019</div>
                    <div className="productName">{el.design.label}</div>
                    <div className="categoryAndType">{`${el.design.category} ${el.design.main_type}`}</div>
                    <div className="orderedDate">
                      Ordered: {el.design.ordered_date}
                    </div>
                    <div className="orderNumber">
                      Order # {el.design.order_code}
                    </div>
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
