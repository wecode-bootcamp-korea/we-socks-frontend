/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-keys */
import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import Select from "Components/Select";
import { API_URL, TOKEN_KEY } from "config";

import "./Signup.scss";

const yearArr = ["출생년도"];
const monthArr = ["월"];
const dayArr = ["일"];

for (let i = 1960; i < 2020; i++) {
  yearArr.push(`${i + "년"}`);
}
for (let i = 1; i < 13; i++) {
  monthArr.push(`${i + "월"}`);
}
for (let i = 1; i < 32; i++) {
  dayArr.push(`${i + "일"}`);
}

class Signup extends Component {
  state = {
    textShow: "",
    email: "",
    checkEmail: "",
    nickname: "",
    password: "",
    rePassword: "",
    phoneNumber: "",
    year: "",
    month: "",
    day: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  };

  handleOnClick = () => {
    fetch(`${API_URL}user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nickname: this.state.nickname,
        email: this.state.email,
        password: this.state.password,
        phone_number: this.state.phoneNumber,
        birthday: this.state.year + this.state.month + this.state.day
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error_code === "EMAIL_ALREADY_EXISTS") {
          this.setState({
            checkEmail: "이메일 중복"
          });
          return;
        }
        if (data.error_code !== "EMAIL_ALREADY_EXISTS") {
          alert("로그인 페이지로 이동합니다. 가입하신 정보로 로그인 해주세요");
          this.props.history.push({
            pathname: "/login"
          });
        }
      });
  };
  render() {
    return (
      <div className="signupContainer">
        <div className="signupContents">
          <header className="signupHeader">
            <h1>Sign up</h1>
          </header>
          <div className="signupId">
            <InputBox
              type="email"
              name="email"
              placeholder="e-mail"
              classname="signupIdInput"
              handleChange={this.handleInput}
            />
            <p
              className={
                this.state.checkEmail.length < 2
                  ? "showEmailText1"
                  : "showEmailText2"
              }
            >
              {this.state.checkEmail}
            </p>
          </div>
          <div>
            <InputBox
              className="signupPwInput1"
              placeholder="password"
              type="password"
              name="password"
              handleChange={this.handleInput}
            />
          </div>
          <div className="signupPw">
            <InputBox
              type="password"
              placeholder="confirm password"
              className="signupPwInput2"
              name="rePassword"
              handleChange={this.handleInput}
            />
            <p
              className={`${
                this.state.password !== this.state.rePassword
                  ? "showPwText2"
                  : "hiddenPwText"
              }`}
            >
              입력하신 비밀번호가 일치하지 않습니다.
            </p>
          </div>
          <div className="signupNick">
            <InputBox
              type="text"
              placeholder="nickname"
              name="nickname"
              className="signupNickInput"
              handleChange={this.handleInput}
            />
          </div>
          <div className="signupBirth">
            <div className="signupBirthInput">
              <Select
                className="signupYearInputSelect"
                ref_array={yearArr}
                makeSelection={this.handleInput}
              />
              <Select
                className="signupMonthInputSelect"
                ref_array={monthArr}
                makeSelection={this.handleInput}
              />
              <Select
                className="signupDayInputSelect"
                ref_array={dayArr}
                makeSelection={this.handleInput}
              />
            </div>
          </div>
          <div className="signupPhoneNum">
            <div className="signupPhoneNumInput">
              <InputBox
                type="text"
                placeholder="phonenumber"
                name="phoneNumber"
                handleChange={this.handleInput}
              />
            </div>
          </div>
          <Button
            className="signupBtn"
            text="Sign up"
            onClick={this.handleOnClick}
          />
        </div>
      </div>
    );
  }
}

export default Signup;
