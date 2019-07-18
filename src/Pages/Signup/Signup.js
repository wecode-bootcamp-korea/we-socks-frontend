/* eslint-disable no-unused-expressions */
/* eslint-disable no-dupe-keys */
import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import Select from "Components/Select";
import "./Signup.scss";

class Signup extends Component {
  mailArr = ["@이메일 선택", "@daum.net", "@naver.com", "@gmail.com"];
  yearArr = ["출생년도"];
  monthArr = ["월"];
  dayArr = ["일"];

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

  handleEmailOnChange = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };
  handleEmailAddressOnChange = e => {
    this.setState({ address: e.target.value });
  };
  handleNicknameOnChange = e => {
    this.setState({ nickname: e.target.value });
  };
  handlePwOnChange = e => {
    this.setState({ password: e.target.value });
  };
  handleRePwOnChange = e => {
    this.setState({ rePassword: e.target.value });
  };
  handlePhoneNumChange = e => {
    this.setState({ phoneNumber: e.target.value });
  };
  handleYearOnChange = e => {
    this.setState({
      year: e.target.value
    });
  };
  handleMonthOnChange = e => {
    this.setState({
      month: e.target.value
    });
  };
  handleDayOnChange = e => {
    this.setState({
      day: e.target.value
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
    console.log(this.state.password === this.state.rePassword);
    for (let i = 1960; i < 2020; i++) {
      this.yearArr.push(`${i + "년"}`);
    }
    for (let i = 1; i < 13; i++) {
      this.monthArr.push(`${i + "월"}`);
    }
    for (let i = 1; i < 32; i++) {
      this.dayArr.push(`${i + "일"}`);
    }

    return (
      <div className="signupContainer">
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
              classname="signupNickInput"
              handleChange={this.handleNicknameOnChange}
            />
          </div>
          <div className="signupBirth">
            <div className="signupBirthInput">
              <Select
                className="signupYearInputSelect"
                ref_array={this.yearArr}
                makeSelection={this.handleYearOnChange}
              />
              <Select
                className="signupMonthInputSelect"
                ref_array={this.monthArr}
                makeSelection={this.handleMonthOnChange}
              />
              <Select
                className="signupDayInputSelect"
                ref_array={this.dayArr}
                makeSelection={this.handleDayOnChange}
              />
            </div>
          </div>
          <div className="signupPhoneNum">
            <div className="signupPhoneNumInput">
              <InputBox
                type="text"
                placeholder="PhoneNumber"
                classname=""
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
