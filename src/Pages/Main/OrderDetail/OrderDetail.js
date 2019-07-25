import React from "react";
import Button from "Components/Button";
import "./orderDetail.scss";

class OrderDetail extends React.Component {
  handleClick() {
    return 123;
  }

  render() {
    return (
      <>
        <div className="orderDetailRoot">
          <p>Order Detail</p>
          <div className="leftBox">
            <ul className="entireOrder">
              <li className="eachItem">
                <div className="itemImage"></div>
                <div className="itemDetailInfo">
                  <div className="detailLeftBox">
                    <div className="category">Casual High</div>
                    <div className="itemName">이것이 바로 양말이다</div>
                    <div className="price">가격: 8,000</div>
                    <div className="pointsPrediction">예상포인트: 40</div>
                  </div>
                  <div className="detailRightBox">
                    <div className="itemCount">Count: 2</div>
                    <Button
                      className="removeItemBtn"
                      text="remove"
                      onClick={this.handleClick}
                    />
                  </div>
                </div>
              </li>
              <li className="eachItem">
                <div className="itemImage"></div>
                <div className="itemDetailInfo">
                  <div className="detailLeftBox">
                    <div className="category">Casual High</div>
                    <div className="itemName">이것이 바로 양말이다</div>
                    <div className="price">가격: 8,000</div>
                    <div className="pointsPrediction">예상포인트: 40</div>
                  </div>
                  <div className="detailRightBox">
                    <div className="itemCount">Count: 2</div>
                    <Button
                      className="removeItemBtn"
                      text="remove"
                      onClick={this.handleClick}
                    />
                  </div>
                </div>
              </li>
              <li className="eachItem">
                <div className="itemImage"></div>
                <div className="itemDetailInfo">
                  <div className="detailLeftBox">
                    <div className="category">Casual High</div>
                    <div className="itemName">이것이 바로 양말이다</div>
                    <div className="price">가격: 8,000</div>
                    <div className="pointsPrediction">예상포인트: 40</div>
                  </div>
                  <div className="detailRightBox">
                    <div className="itemCount">Count: 2</div>
                    <Button
                      className="removeItemBtn"
                      text="remove"
                      onClick={this.handleClick}
                    />
                  </div>
                </div>
              </li>
            </ul>
            <div className="paymentWrap">
              <Button
                className="payRightNowBtn"
                text="결제하기"
                onClick={this.handleClick}
              />
              <Button
                className="continueShoppingBtn"
                text="continue shopping"
                onClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OrderDetail;
