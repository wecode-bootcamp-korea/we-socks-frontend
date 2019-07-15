import React from "react";
import Header from "Components/Header";
import "./mypage.scss";
import Button from "Components/Button";

class MyPage extends React.Component {
  constructor() {
    super();

    this.state = {
      clickedClass: "myAccount"
    };
  }

  handleClick = name => {
    this.setState({
      clickedClass: "myOrders"
    });
  };

  handleOptionClick = name => {
    this.setState({
      clickedClass: name
    });
  };

  render() {
    return (
      <>
        <Header />
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
                className={`myProfile ${
                  this.state.clickedClass === "myProfile"
                    ? "clicked"
                    : "unClicked"
                }`}
                onClick={() => this.handleOptionClick("myProfile")}
              >
                My Profile
              </div>
              <div
                className={`addressBook ${
                  this.state.clickedClass === "addressBook"
                    ? "clicked"
                    : "unClicked"
                }`}
                onClick={() => this.handleOptionClick("addressBook")}
              >
                Address book
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
                  this.state.clickedClass === "wishList"
                    ? "clicked"
                    : "unClicked"
                }`}
                onClick={() => this.handleOptionClick("addressBook")}
              >
                Wish List
              </div>
            </div>
            <div className="optionsDetail">
              <div
                className={` myAccountDetail ${
                  this.state.clickedClass === "myAccount"
                    ? "showDetail"
                    : "hidden"
                }`}
              >
                <div className="creatorsClub">
                  <p>WeSocks CREATORS CLUB</p>
                  <p>
                    당신만의 양말을 디자인해서 포인트를 획득하세요 <br></br>
                    WeSocks CREATOR에게는 다양한 혜택이 제공됩니다
                  </p>
                  <p>Points</p>
                  <meter
                    className="points"
                    min="0"
                    low="50"
                    value="350"
                    optimum="300"
                    high="400"
                    max="500"
                  ></meter>
                  <div className="creatorsClubDetail">
                    <div className="creatorsClubIntroduction">
                      <p>당신은 꼬꼬마입니다</p>
                      <p>
                        Jason Kang 님만의 <br></br>WeSocks CREATORS Club ID를{" "}
                        <br></br>
                        활용해서 최고의 양말을 디자인해주세요. <br></br>CREATORS
                        CLUB LEVEL UP을 통해 <br></br>다양한 혜택을 누릴 수
                        있습니다.
                      </p>
                      <div className="creatorClubBtns">
                        <Button
                          className="viewRewardsBtn"
                          text="VIEW YOUR REWARDS"
                          onClick={this.handleClick}
                        />
                        <Button
                          className="learnMoreBtn"
                          text="LEARN MORE"
                          onClick={this.handleClick}
                        />
                      </div>
                    </div>
                    <div className="clubImage"></div>
                  </div>
                </div>
              </div>
              <div
                className={
                  this.state.clickedClass === "myOrders"
                    ? "showDetail"
                    : "hidden"
                }
              ></div>
              <div
                className={
                  this.state.clickedClass === "AddressBook"
                    ? "showDetail"
                    : "hidden"
                }
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyPage;
