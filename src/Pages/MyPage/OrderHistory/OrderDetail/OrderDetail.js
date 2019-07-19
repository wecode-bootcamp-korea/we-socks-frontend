import React from "react";
import Header from "Components/Header";
import Footer from "Components/Footer";

const OrderDetail = props => {
  return (
    <>
      <Header />
      <div className="orderDetailRoot">
        <p>Order Detail</p>
        <div className="orderStatusWrap">
          <div className="orderStatus">Purchased</div>
          <div className="orderNumberStatus">Order# CH1298712948</div>
        </div>
        <div className="bottomWrap">
          <div className="orderStatusSummary">
            <div className="orderedProductImage">enter image right here</div>
            <div className="orderName">Rainbows with Clouds</div>
            <div className="orderCategoryAndType">Casual High</div>
            <div className="orderPrice">8,000</div>
          </div>
        </div>
        <div className="orderPaymentDetail">
          <div className="recepientAddress">
            <p>Address</p>
            <div className="recepientAddressDetail">서울시 위워크타워</div>
          </div>
          <div className="paymentMethod">
            <p>Payment</p>
            <div className="paymentMethodDetail">비자카드 1771</div>
          </div>
          <div className="paymentSummary">
            <p>Summary</p>
            <div className="priceBreakDown">8,000원</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetail;
