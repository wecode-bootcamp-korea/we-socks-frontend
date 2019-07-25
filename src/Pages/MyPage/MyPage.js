import React from "react";
import Layout from "Components/Layout";
import "./myPage.scss";
import MyAccount from "Pages/MyPage/MyAccount";
import PersonalInformation from "Pages/MyPage/PersonalInformation";
import AddressBook from "Pages/MyPage/AddressBook";
import OrderHistory from "Pages/MyPage/OrderHistory";
import WishList from "Pages/MyPage/WishList";
import axios from "axios";

class MyPage extends React.Component {
  constructor() {
    super();

    this.state = {
      clickedClass: "orderHistory"
    };
  }

  componentDidMount = () => {
    const headers = {
      Authorizaion:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDN9.ZqD0eEcH_WXZ11rKA6ww2kGd-4zdQNu_k57OU-y0G7A"
    };
    axios
      .get("http://10.58.1.144:8000/user/mypage", { headers })
      .then(response => {
        console.log(response);
      });
  };

  handleOptionClick = name => {
    this.setState({
      clickedClass: name
    });
  };

  render() {
    return (
      <div className="myPageRoot">
        <div className="userInfo">
          <div className="userNickName">Hello, Jason Kang!</div>
        </div>
        <div className="optionsWrap">
          <div className="selectOptionsWrap">
            <div
              className={`myAccount ${
                this.state.clickedClass === "myAccount"
                  ? "clicked"
                  : "unClicked"
              }`}
              onClick={() => this.handleOptionClick("myAccount")}
            >
              My Account
            </div>
            <div
              className={`personalInformation ${
                this.state.clickedClass === "personalInformation"
                  ? "clicked"
                  : "unClicked"
              }`}
              onClick={() => this.handleOptionClick("personalInformation")}
            >
              Personal Information
            </div>
            <div
              className={`addressBook ${
                this.state.clickedClass === "addressBook"
                  ? "clicked"
                  : "unClicked"
              }`}
              onClick={() => this.handleOptionClick("addressBook")}
            >
              Address Book
            </div>
            <div
              className={`orderHistory ${
                this.state.clickedClass === "orderHistory"
                  ? "clicked"
                  : "unClicked"
              }`}
              onClick={() => this.handleOptionClick("orderHistory")}
            >
              Order History
            </div>
            <div
              className={`wishList ${
                this.state.clickedClass === "wishList" ? "clicked" : "unClicked"
              }`}
              onClick={() => this.handleOptionClick("wishList")}
            >
              Wish List
            </div>
          </div>
          <div className="optionsDetail">
            <MyAccount className={this.state.clickedClass} />
            <PersonalInformation className={this.state.clickedClass} />
            <AddressBook className={this.state.clickedClass} />
            <OrderHistory className={this.state.clickedClass} />
            <WishList className={this.state.clickedClass} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyPage;
