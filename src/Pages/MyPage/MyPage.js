import React from "react";
import "./myPage.scss";
import MyAccount from "Pages/MyPage/MyAccount";
import PersonalInformation from "Pages/MyPage/PersonalInformation";
import AddressBook from "Pages/MyPage/AddressBook";
import OrderHistory from "Pages/MyPage/OrderHistory";
import WishList from "Pages/MyPage/WishList";
import Button from "Components/Button";
import axios from "axios";
import { API_URL, TOKEN_KEY } from "config";

class MyPage extends React.Component {
  constructor() {
    super();

    this.state = {
      clickedClass: "addressBook",
      addressArr: [],
      userNickname: ""
    };
  }

  componentDidMount = () => {
    const headers = {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDN9.ZqD0eEcH_WXZ11rKA6ww2kGd-4zdQNu_k57OU-y0G7A"
    };

    axios.get(`${API_URL}user/mypage`, { headers }).then(response => {
      console.log(response);
      this.setState({
        addressArr: response.data.address_list,
        userNickname: response.data.nickname
      });
    });
  };

  handleOptionClick = name => {
    this.setState({
      clickedClass: name
    });
  };

  onClickLogout = e => {
    localStorage.removeItem(TOKEN_KEY);
    this.props.history.push({
      pathname: "/"
    });
  };

  render() {
    const { addressArr, userNickname } = this.state;
    return (
      <div className="myPageRoot">
        <div className="userInfo">
          <div className="userNickName">Hello, {userNickname}!</div>
          <div className="logoutBtnWrap">
            <Button
              className="logoutBtn"
              onClick={this.onClickLogout}
              text={`not ${userNickname}?`}
            />
          </div>
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
            <PersonalInformation
              className={this.state.clickedClass}
              userNickname={userNickname}
            />
            <AddressBook
              className={this.state.clickedClass}
              addressArr={addressArr}
            />
            <OrderHistory className={this.state.clickedClass} />
            <WishList className={this.state.clickedClass} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyPage;
