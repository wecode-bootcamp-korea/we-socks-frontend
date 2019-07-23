/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import "./Login.scss";
import { post } from "Common/api";
import { API_URL, TOKEN_KEY } from "config";
import { validate, throwStatement } from "@babel/types";

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailText: "",
    pwText: "",
    checkBox: "loginCheckNone"
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  };

  handleOnclickChecked = e => {
    if (this.state.checkBox === "loginCheckNone") {
      this.setState({
        checkBox: "loginCheck"
      });
    } else {
      this.setState({
        checkBox: "loginCheckNone"
      });
    }
  };

  LoginBtnOnClick = () => {
    if (this.state.email.length === 0) {
      this.setState({
        emailText: "이메일을 입력하세요"
      });
    } else if (!this.state.password) {
      this.setState({
        pwText: "비밀번호를 입력하세요"
      });
    } else {
      fetch(`${API_URL}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.error_code === "EMAIL_NOT_EXISTS") {
            this.setState({
              emailText: "존재하지 않는 이메일입니다."
            });
            return;
          }
          if (data.error_code === "INVALID_PASSWORD") {
            this.setState({
              pwText: "비밀번호 입력오류"
            });
            return;
          } else {
            this.props.history.push({
              pathname: "/"
            });
          }
        });
    }
  };

  componentDidMount() {
    window.Kakao.init("ee298c66ffafca1d0d2da71485794771");
    window.Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      success: function(authObj) {
        console.log(JSON.stringify(authObj));
        fetch(`${API_URL}user/login/kakao`, {
          method: "GET",
          headers: {
            Authorization: authObj.access_token
          }
        })
          .then(res => res.json())
          .then(data => {
            if (data.access_token) {
              localStorage.setItem(TOKEN_KEY, data.access_token);
              window.location.href = "/";
            }
          });
      }
    });
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="loginContents">
          <div className="loginHeadText">
            <h2>Sign in</h2>
          </div>

          <div className="loginInputArea">
            <div className="loginIdinput">
              <InputBox
                type="text"
                name="email"
                classname="login_input"
                placeholder="e-mail address"
                handleChange={this.handleInput}
              />
              <p className="loginIdtext">{this.state.emailText}</p>
            </div>
            <div className="loginPwinput">
              <InputBox
                type="password"
                name="password"
                classname="login_input"
                placeholder="Password"
                handleChange={this.handleInput}
              />
              <p className="loginPwtext">{this.state.pwText}</p>
            </div>
          </div>
          <div
            className="checkBoxContainer"
            onClick={this.handleOnclickChecked}
          >
            <div id={this.state.checkBox}></div>
            <label id="loginCheckLabel" for="loginCheck">
              로그인 상태 유지
            </label>
          </div>
          <Button
            className="loginBtn"
            text="sign in"
            onClick={this.LoginBtnOnClick}
          />
          <a id="kakao-login-btn"></a>
        </div>
      </div>
    );
  }
}

export default Login;
