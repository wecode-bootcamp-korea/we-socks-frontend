import React from "react";
import axios from "axios";
import Button from "Components/Button";
import SockItem from "Components/SockItem";
import "./addedToCartMessage.scss";
import { Link } from "react-router-dom";

const categoryArr = ["Kids", "Casual", "Dressed", "Athletic"];
const typeArr = ["No-Show", "Ankle", "Mid", "High"];

class AddedToCartMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartMessageArray: []
    };
  }

  componentDidMount = () => {
    axios
      .post("http://10.58.7.11:8000/mypage/cart", { user_pk: 1 })
      .then(response => {
        this.setState({
          cartMessageArray: response.data.my_cart_list
        });
      });
  };

  render() {
    const { showMessage } = this.props;
    const { cartMessageArray } = this.state;
    console.log(cartMessageArray);
    return (
      showMessage && (
        <div className="addedToCartMessage">
          <ul className="addedToCartInformation">
            {cartMessageArray.map((el, idx) => (
              <li className="addedToCartList">
                <div className="addedToCartImage">
                  {console.log(el.main_type)}
                  <SockItem
                    key={`message-${idx}`}
                    color={el.design.color}
                    pattern={el.design.pattern}
                    uploaded={el.design.logo}
                    view="side"
                    type={el.design.main_type - 1}
                  />
                </div>
                <div className="addedToCartCategoryAndType">{`${
                  categoryArr[el.design.category]
                } ${typeArr[el.design.main_type]}`}</div>
                <div className="addedToCartPrice">{el.design.unit_price}</div>
              </li>
            ))}
          </ul>

          <Link to="/shoppingcart">
            <Button
              className="showCartDetailBtn"
              name="showCartDetailBtn"
              text="SHOW CART DETAIL"
            />
          </Link>
        </div>
      )
    );
  }
}

export default AddedToCartMessage;
