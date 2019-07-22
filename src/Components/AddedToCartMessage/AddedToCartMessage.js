import React from "react";
import Button from "Components/Button";
import "./addedToCartMessage.scss";
import { Link } from "react-router-dom";

class AddedToCartMessage extends React.Component {
  render() {
    const { showMessage } = this.props;
    return (
      showMessage && (
        <div className="addedToCartMessage">
          <div className="addedToCartInformation">
            <div className="addedToCartImage"></div>
            <div className="addedToCartCategoryAndType">Casual High</div>
            <div className="addedToCartPrice">10,000</div>
          </div>
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
