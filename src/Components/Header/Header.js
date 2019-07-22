import React from "react";
import "./header.scss";
import Button from "Components/Button";
import { Link } from "react-router-dom";
import AddedToCartMessage from "Pages/MyPage/ShoppingCart/AddedToCartMessage";
class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      cartBtnClicked: false
    };
  }

  handleCartBtnClicked = () => {
    this.setState(
      {
        cartBtnClicked: !this.state.cartBtnClicked
      },
      () => {
        setTimeout(() => {
          this.setState({
            cartBtnClicked: !this.state.cartBtnClicked
          });
        }, 1500);
      }
    );
  };
  render() {
    const { cartBtnClicked } = this.state;
    return (
      <>
        <AddedToCartMessage showMessage={cartBtnClicked} />
        <header className="pageHeader">
          <div className="headerTop">
            <div className="myAccountWrap">
              <div className="myAccountIcon"></div>
              <Link to="/mypage">
                <Button className="myAccountBtn" text="My Account" />
              </Link>
            </div>
            <Link to="/" className="logo">
              <span className="logoIconSpan"></span>
            </Link>
            <div className="cartWrap">
              <div className="cartIcon"></div>
              <Button
                className="cartBtn"
                text="Cart"
                onClick={this.handleCartBtnClicked}
              />
            </div>
          </div>
          <div className="headerBottom">
            <div className="kids">KIDS</div>
            <div className="casual">CASUAL</div>
            <div className="dressed">DRESSED</div>
            <div className="athletic">ATHLETIC</div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
