import React from "react";
import axios from "axios";
import Button from "Components/Button";
import SockItem from "Components/SockItem";
import { AddCommaToNumber } from "Components/AddCommaToNumber/AddCommaToNumber";
import "./addedToCartMessage.scss";
import { Link } from "react-router-dom";
import { API_URL } from "config";

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
    axios.post(`${API_URL}cart/list`, { user_pk: 1 }).then(response => {
      this.setState({
        cartMessageArray: response.data.my_cart_list
      });
    });
  };

  render() {
    const { showMessage } = this.props;
    const { cartMessageArray } = this.state;
    return (
      showMessage && (
        <div className="addedToCartMessage">
          <div className="sectionContainer">
            <span className="sockImageSmall">Socks</span>
            <span className="sockCategoryAndTypeSmall">Type</span>
            <span className="sockPriceSmall">Price</span>
          </div>
          <ul className="addedToCartInformation">
            {cartMessageArray.map((el, idx) => (
              <li className="addedToCartList">
                <div className="addedToCartImage">
                  <SockItem
                    key={`shoppingCart-${idx}`}
                    type={el.design.main_type_id - 1}
                    color={el.design.color}
                    pattern={el.design.pattern__pattern_type}
                    patternSize={el.design.pattern__pattern_size}
                    view="side"
                  />
                </div>
                <div className="addedToCartCategoryAndType">{`${
                  categoryArr[el.design.category_id]
                } ${typeArr[el.design.main_type_id - 1]}`}</div>
                <div className="addedToCartPrice">
                  {AddCommaToNumber(el.design.unit_price * el.count)}
                </div>
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
