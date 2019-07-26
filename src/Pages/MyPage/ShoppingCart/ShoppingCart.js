import React from "react";
import axios from "axios";
import Layout from "Components/Layout";
import Button from "Components/Button";
import Select from "Components/Select";
import SockItem from "Components/SockItem";
import { API_URL } from "config";
import {
  AddCommaToNumber,
  SliceThenAddComma
} from "Components/AddCommaToNumber/AddCommaToNumber";
import "./shoppingCart.scss";

const categoryArr = ["Kids", "Casual", "Dressed", "Athletic"];
const typeArr = ["No-Show", "Ankle", "Mid", "High"];

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartArr: [],
      totalPrice: 0,
      totalPoints: 0,
      totalCount: 0,
      discountRate: 0.1,
      checkChange: false
    };
  }

  handleCount = (e, item) => {
    let sockData = {
      cart_id: item,
      count: e.target.value
    };

    axios.post(`${API_URL}product/change_count`, sockData).then(response => {
      if (response.status === 200) {
        axios.post(`${API_URL}cart/list`, { user_pk: 1 }).then(response => {
          this.setState({
            cartArr: response.data.my_cart_list,
            totalPrice: response.data.my_cart_total_price,
            totalCount: response.data.my_cart_total_count,
            totalPoints: response.data.my_total_points
          });
        });
      }
    });
  };

  removeItem = item => {
    axios
      .post(`${API_URL}product/cancel_cart_req`, {
        cart_id: item
      })
      .then(response => {
        if (response.status === 200) {
          axios.post(`${API_URL}cart/list`, { user_pk: 1 }).then(response => {
            this.setState({
              cartArr: response.data.my_cart_list,
              totalPrice: response.data.my_cart_total_price,
              totalCount: response.data.my_cart_total_count,
              totalPoints: response.data.my_total_points
            });
          });
        }
      });
  };

  componentDidMount = () => {
    axios.post(`${API_URL}cart/list`, { user_pk: 1 }).then(response => {
      console.log("response: ", response);
      this.setState({
        cartArr: response.data.my_cart_list,
        totalPrice: response.data.my_cart_total_price,
        totalCount: response.data.my_cart_total_count,
        totalPoints: response.data.my_total_points
      });
    });
  };

  render() {
    const {
      cartArr,
      totalPrice,
      discountRate,
      totalCount,
      totalPoints
    } = this.state;

    const discountPrice = totalPrice * discountRate;
    console.log(discountPrice);
    return (
      <Layout>
        <div className="shoppingCartRoot">
          <p>Shopping Cart</p>
          <div className="shoppingCartContainer">
            <div className="leftBox">
              <ul className="shoppingCartTotal">
                {cartArr.map((el, idx) => (
                  <li className="shoppingCartList">
                    <div className="productImage">
                      <SockItem
                        key={`shoppingCart-${idx}`}
                        type={el.design.main_type - 1}
                        color={el.design.color}
                        pattern={el.design.pattern}
                        view="side"
                      />
                    </div>
                    <div className="productMiddleContainer">
                      <div className="productCategoryAndType">{`${
                        categoryArr[el.design.category]
                      } ${typeArr[el.design.main_type - 1]}`}</div>
                      <div className="productPrice">
                        가격: {AddCommaToNumber(el.total_price)}
                      </div>
                      <div className="pointsPrediction">
                        예상포인트: {AddCommaToNumber(el.reward_points)}
                      </div>
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
                        onClick={() => this.removeItem(el.id)}
                      />
                    </div>
                  </li>
                ))}
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
                <div className="countTotal">
                  총 주문 상품: {AddCommaToNumber(totalCount)}개
                </div>

                <div className="priceWrap">
                  <div className="subtotalWrap">
                    <p>총 주문 가격</p>
                    <div className="subtotal">
                      {AddCommaToNumber(totalPrice)}
                    </div>
                  </div>
                  <div className="discountWrap">
                    <p>할인</p>
                    <div className="discountTotal">
                      {AddCommaToNumber(discountPrice)}
                    </div>
                  </div>
                </div>
                <div className="pointsWrap">
                  <p>예상포인트 </p>
                  <div className="predictedPoints">
                    {SliceThenAddComma(totalPoints)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ShoppingCart;
