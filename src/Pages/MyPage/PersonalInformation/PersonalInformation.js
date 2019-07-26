import React from "react";
import axios from "axios";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import { API_URL, TOKEN_KEY } from "config";
import "./personalInformation.scss";

class PersonalInformation extends React.Component {
  constructor() {
    super();

    this.state = {
      nickname: "",
      password: "",
      showSuccessMessage: false
    };
  }

  handleClick = e => {
    const token = localStorage.getItem(TOKEN_KEY);
    let body = {};
    let headers = {
      Authorization: token
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
      .post(`${API_URL}user/update`, body, { headers })
      .then(response => {
        alert("정보변경 성공");
        window.location.reload();
      })
      .catch(error => {
        alert("실패");
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { className, userNickname } = this.props;
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
              placeholder={userNickname}
              type="text"
              onChange={e => this.handleChange(e)}
            />
            <Button
              className="updateInfoBtn updateNicknameBtn"
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
            <Button
              className="updateInfoBtn updatePasswordBtn"
              name="updatePassword"
              text="update"
              onClick={e => this.handleClick(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInformation;
