/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-keys */
import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import Select from "Components/Select";
import "./Signup.scss";
// import ImgUpLoad from "Components/ImgUpLoad";

const mailArr = ["@이메일 선택", "@daum.net", "@naver.com", "@gmail.com"];
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
    address: "",
    emailAdress: "",
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
    if (this.state.month < 10) {
      this.setState({ month: "0" + this.state.month });
    }
    if (this.state.day < 10) {
      this.setState({ day: "0" + this.state.day });
    }
    fetch("http://10.58.6.147:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nickname: this.state.nickname,
        email: this.state.email + this.state.address,
        password: this.state.password,
        phone_number: this.state.phoneNumber,
        birthday: this.state.year + this.state.month + this.state.day
      })
    });
  };

  render() {
    return (
      <div className="signupContainer">
        {/* <ImgUpLoad /> */}
        <div className="signupContents">
          <header className="signupHeader">
            <h1>Sign up</h1>
          </header>
          <div className="signupId">
            <InputBox
              type="email"
              placeholder="e-mail address"
              classname="signupIdInput"
              handleChange={this.handleEmailOnChange}
            />
            <p
              className={`${
                this.state.checkEmail !== this.state.email
                  ? "showEmailText"
                  : "hiddenEmailText"
              }`}
            >
              email이 중복되었습니다.
            </p>
          </div>
          <div className="signupPw">
            <InputBox
              classname="signupPwInput"
              placeholder="Password"
              type="password"
              name="password"
              handleChange={this.handlePwOnChange}
            />
            <p className="showPwText">
              비밀번호는 영문+숫자+특수문자 8자리 이상으로 설정해주세요.
            </p>
          </div>
          <div className="signupPw">
            <InputBox
              type="password"
              placeholder="Confirm password"
              classname="signupPwInput"
              name="rePassword"
              handleChange={this.handleRePwOnChange}
            />
            <p
              className={`${
                this.state.password !== this.state.rePassword
                  ? "showPwText"
                  : "hiddenPwText"
              }`}
            >
              입력하신 비밀번호가 일치하지 않습니다.
            </p>
          </div>
          <div className="signupNick">
            <InputBox
              type="text"
              placeholder="Nickname"
              name="nickname"
              classname="signupNickInput"
              handleChange={this.handleNicknameOnChange}
            />
          </div>
          <div className="signupBirth">
            <div className="signupBirthInput">
              <Select
                className="signupYearInputSelect"
                ref_array={yearArr}
                makeSelection={this.handleYearOnChange}
              />
              <Select
                className="signupMonthInputSelect"
                ref_array={monthArr}
                makeSelection={this.handleMonthOnChange}
              />
              <Select
                className="signupDayInputSelect"
                ref_array={dayArr}
                makeSelection={this.handleDayOnChange}
              />
            </div>
          </div>
          <div className="signupPhoneNum">
            <div className="signupPhoneNumInput">
              <InputBox
                type="text"
                placeholder="PhoneNumber"
                name="phoneNumber"
                handleChange={this.handlePhoneNumChange}
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
