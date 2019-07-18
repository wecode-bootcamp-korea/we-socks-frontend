import React from "react";
import Button from "Components/Button";
import "./orderHistory.scss";

const OrderHistory = props => {
  const handleClick = () => {};
  return (
    <div
      className={`orderHistory ${
        props.className === "orderHistory" ? "showDetail" : "hidden"
      }`}
    >
      <div className="orderHistoryRoot detailRoot">
        <p>Order History</p>
        <ul className="previousOrders">
          <li className="eachOrder">
            <span className="productImage"></span>
            <div className="orderExplanationWrap">
              <div className="orderSummary">
                <div className="statusAndDate">Delivered: Jun 5, 2019</div>
                <div className="productName">Rainbows with Clouds</div>
                <div className="categoryAndType">Casual High</div>
                <div className="orderedDate">Ordered: Jun 1, 2019</div>
                <div className="orderNumber">Order #CH15739817394</div>
              </div>
              <Button
                className="orderDetailBtn"
                text="Order Detail"
                onClick={handleClick}
              />
            </div>
          </li>
          <li className="eachOrder">
            <span className="productImage"></span>
            <div className="orderExplanationWrap">
              <div className="orderSummary">
                <div className="statusAndDate">Delivered: Jun 5, 2019</div>
                <div className="productName">Rainbows with Clouds</div>
                <div className="categoryAndType">Casual High</div>
                <div className="orderedDate">Ordered: Jun 1, 2019</div>
                <div className="orderNumber">Order #CH15739817394</div>
              </div>
              <Button
                className="orderDetailBtn"
                text="Order Detail"
                onClick={handleClick}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderHistory;
