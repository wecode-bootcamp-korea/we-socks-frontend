import React from "react";
import axios from "axios";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import "./personalInformation.scss";

class PersonalInformation extends React.Component {
  constructor() {
    super();

    this.state = {
      nickname: "",
      password: ""
    };
  }

  handleClick = e => {
    let body = {};
    let headers = {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDN9.ZqD0eEcH_WXZ11rKA6ww2kGd-4zdQNu_k57OU-y0G7A"
    };
    if (e.target.name === "updateNickname") {
      body = {
        nickname: this.state.nickname
      };
    } else if (e.target.name === "updatePassword") {
      body = {
        password: this.state.password
      };
    }
    axios
      .post("http://10.58.6.61:8000/user/update", body, { headers })
      .then(response => {
        console.log(response);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { className } = this.props;
    return (
      <div
        className={` personalInformationDetail ${
          className === "personalInformation" ? "showDetail" : "hidden"
        }`}
      >
        <div className="personalInformationDetailRoot detailRoot">
          <p>Personal Information</p>
          <p>당신의 정보를 최신으로 업데이트 하세요</p>
        </div>
        <div className="changeInformation">
          <div className="changeNickname">
            <p>Nickname</p>
            <InputBox
              className="nicknameInput"
              name="nickname"
              placeholder="Enter New Nickname"
              type="text"
              onChange={e => this.handleChange(e)}
            />
            <Button
              className="updateNicknameBtn"
              name="updateNickname"
              text="update"
              onClick={e => this.handleClick(e)}
            />
          </div>
          <div className="changePassword">
            <p>Password</p>
            <InputBox
              className="passwordInput"
              name="password"
              placeholder="Change Your Password"
              type="password"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <Button
            className="updatePasswordBtn"
            name="updatePassword"
            text="update"
            onClick={e => this.handleClick(e)}
          />
        </div>
      </div>
    );
  }
}

export default PersonalInformation;
