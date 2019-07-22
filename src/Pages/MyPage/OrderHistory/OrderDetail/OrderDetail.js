import React from "react";
import axios from "axios";
import Header from "Components/Header";
import Footer from "Components/Footer";
import "./orderDetail.scss";

const OrderDetail = props => {
  axios
    .post(`http://10.58.7.11:8000/mypage/cart`, { user_pk: 1 })

    .then(response => {
      console.log("response: ", response.data);
    })
    .catch(error => {
      console.log("error: ", error);
    });

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
            <div className="orderedProductImage"></div>
            <div className="orderExplanationWrap">
              <div className="orderName">Rainbows with Clouds</div>
              <div className="orderCategoryAndType">Casual High</div>
              <div className="orderPrice">8,000원</div>
            </div>
          </div>
          <div className="orderPaymentDetail">
            <div className="recepientAddress">
              <p>Address</p>
              <div className="recepientAddressDetail">
                서울시 강남구 삼성역 근처 <br></br>위워크타워 7층 <br></br>
                위코드 메인 오피스
              </div>
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
      </div>
      <Footer />
    </>
  );
};

export default OrderDetail;
