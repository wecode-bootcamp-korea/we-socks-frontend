import React from "react";
import axios from "axios";
import Header from "Components/Header";
import Footer from "Components/Footer";
import Button from "Components/Button";
import Select from "Components/Select";
import "./shoppingCart.scss";

class ShoppingCart extends React.Component {
  removeItem = () => {};

  componentDidMount() {
    axios
      .post("http://10.58.5.85:8002/mypage/my_basket", { buyer: "bj" })
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <>
        <Header />
        <div className="shoppingCartRoot">
          <p>Shopping Cart</p>
          <div className="shoppingCartContainer">
            <div className="leftBox">
              <ul className="shoppingCartTotal">
                <li className="shoppingCartList">
                  <div className="productImage"></div>
                  <div className="productMiddleContainer">
                    <div className="productName">Tacos Everywhere</div>
                    <div className="productCategoryAndType">Casual High</div>
                    <div className="productPrice">가격: 8,000</div>
                    <div className="pointsPrediction">예상포인트: 600</div>
                  </div>
                  <div className="productRightContainer">
                    <Select
                      className="count"
                      name="count"
                      makeSelection={this.handleCount}
                      ref_array={[1, 2, 3, 4, 5]}
                    />

                    <Button
                      className="removeItemBtn"
                      name="removeItemBtn"
                      text="삭제"
                      onClick={this.removeItem}
                    />
                  </div>
                </li>

                <li className="shoppingCartList">
                  <div className="productImage"></div>
                  <div className="productMiddleContainer">
                    <div className="productName">Tacos Everywhere</div>
                    <div className="productCategoryAndType">Casual High</div>
                    <div className="productPrice">가격: 8,000</div>
                    <div className="pointsPrediction">예상포인트: 600</div>
                  </div>
                  <div className="productRightContainer">
                    <Select
                      className="count"
                      name="count"
                      makeSelection={this.handleCount}
                      ref_array={[1, 2, 3, 4, 5]}
                    />

                    <Button
                      className="removeItemBtn"
                      name="removeItemBtn"
                      text="삭제"
                      onClick={this.removeItem}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="rightBox">
              <div clasName="paymentInformation">
                <Button
                  className="payBtn"
                  name="payBtn"
                  text="결제하기"
                  onClick={this.handlePayment}
                />
                <div className="countTotal">총 주문 상품: 2개</div>
                <div className="priceWrap">
                  <div className="subtotalWrap">
                    <p>총 주문 가격</p>
                    <div className="subtotal">318,000</div>
                  </div>
                  <div className="discountWrap">
                    <p>할인</p>
                    <div className="discountTotal">47,600</div>
                  </div>
                  <div className="shippingWrap">
                    <p>배송비</p>
                    <div className="shoppingFee">0</div>
                  </div>
                  <div className="priceTotalWrap">
                    <p>총 결제금액</p>
                    <div className="priceTotal">270,400</div>
                  </div>
                  <div className="pointsWrap">
                    <p>예상포인트</p>
                    <div className="predictedPoints">1,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ShoppingCart;
