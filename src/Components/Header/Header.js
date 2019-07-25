import React from "react";
import "./header.scss";
import Button from "Components/Button";
import { Link } from "react-router-dom";
import { TOKEN_KEY } from "config";
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

  componentDidMount = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    console.log(token);
  };

  render() {
    const { cartBtnClicked } = this.state;
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
                <Link to="/mypage">
                  <Button className="myAccountBtn" text="My Account" />
                </Link>
              </div>

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
              <AddedToCartMessage showMessage={cartBtnClicked} />
            </div>
          </div>
          <Link to="/main">
            <div className="headerBottom">
              <div className="kids">
                <Button text="KIDS" />
              </div>
              <div className="casual">
                <Button text="CASUAL" />
              </div>
              <div className="dressed">
                <Button text="DRESSED" />
              </div>
              <div className="athletic">
                <Button text="ATHLETIC" />
              </div>
            </div>
          </Link>
        </header>
      </>
    );
  }
}

export default Header;
