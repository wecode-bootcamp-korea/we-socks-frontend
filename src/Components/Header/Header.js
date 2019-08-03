import React from "react";
import "./header.scss";
import Button from "Components/Button";
import { setCookie, getCookie } from "Common/cookie";
import { Link } from "react-router-dom";
import { TOKEN_KEY } from "config";
import AddedToCartMessage from "Components/AddedToCartMessage";
class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      cartBtnClicked: false,
      loginCheck: false
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

  componentDidMount = () => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token !== null) {
      this.setState({
        loginCheck: !this.state.loginCheck
      });
    }
  };

  render() {
    const { cartBtnClicked, loginCheck } = this.state;

    const cookie = getCookie("sockType");

    return (
      <>
        <header className="pageHeader">
          <div className="headerTop">
            <Link to="/" className="logoWrap">
              <div className="logoIcon"></div>
            </Link>
            <div className="headerBtnWrap">
              <div className="myAccountWrap">
                <div className="myAccountIcon"></div>
                {loginCheck === false && (
                  <Link to="/login">
                    <Button className="loginBtn" text="Login" />
                  </Link>
                )}
                {loginCheck && (
                  <Link to="/mypage">
                    <Button className="myAccountBtn" text="MY ACCOUNT" />
                  </Link>
                )}
              </div>

              <div className="cartWrap">
                <div className="cartIcon"></div>
                <Link to="/shoppingcart">
                  <Button className="cartBtn" text="CART" onClick={this.handleCartBtnClicked} />
                </Link>
              </div>
              <AddedToCartMessage showMessage={cartBtnClicked} />
            </div>
          </div>
          <Link to="/itemlist">
            <div className="headerBottom">
              <div className="kids">
                <Button text="KIDS" className={cookie === "kids" ? "typeChange" : null} />
              </div>
              <div className="casual">
                <Button text="CASUAL" className={cookie === "casual" ? "typeChange" : null} />
              </div>
              <div className="dressed">
                <Button text="DRESSED" className={cookie === "dressed" ? "typeChange" : null} />
              </div>
              <div className="athletic">
                <Button text="ATHLETIC" className={cookie === "athletic" ? "typeChange" : null} />
              </div>
            </div>
          </Link>
        </header>
      </>
    );
  }
}

export default Header;
