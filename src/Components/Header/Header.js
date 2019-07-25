import React from "react";
import "./header.scss";
import Button from "Components/Button";
import { Link } from "react-router-dom";
import AddedToCartMessage from "Components/AddedToCartMessage";
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
              <span className="logoIcon"></span>
            </Link>
            <div className="cartWrap">
              <div className="cartIcon"></div>
              <Link to="/shoppingcart">
                <Button
                  className="cartBtn"
                  text="Cart"
                  onClick={this.handleCartBtnClicked}
                />
              </Link>
            </div>
          </div>
          <div className="headerBottom">
            <Link to="/main" className="headerLink">
              <Button className="kids headerBottomBtn" text="KIDS" />
              <Button className="casual headerBottomBtn" text="CASUAL" />
              <Button className="dressed headerBottomBtn" text="DRESSED" />
              <Button className="athletic headerBottomBtn" text="ATHLETIC" />
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
