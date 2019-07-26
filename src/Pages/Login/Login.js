/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import Layout from "Components/Layout";
import "./Login.scss";
import { API_URL, TOKEN_KEY } from "config";

class Login extends Component {
  state = {
    email: "",
    password: "",
    emailText: "",
    pwText: "",
    checkBox: "loginCheckNone"
  };

  handleOnclickGuestLogin = () => {
    fetch(`${API_URL}user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "admin@gmail.com",
        password: "1234"
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.access_token) {
          localStorage.setItem(TOKEN_KEY, data.access_token);
          this.props.history.push({
            pathname: "/"
          });
          alert("수고에 오신 것을 환영합니다.");
        }
      });
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
        if (data.access_token) {
          localStorage.setItem(TOKEN_KEY, data.access_token);
          alert("We Socks에 오신것을 환영합니다. 오늘도 좋은 하루 되세요");
          window.location.href = "/";
        } else if (data.error_code === "EMAIL_NOT_EXISTS") {
          this.setState({
            emailText: "존재하지 않는 이메일입니다."
          });
          return;
        } else if (data.error_code === "INVALID_PASSWORD") {
          this.setState({
            pwText: "비밀번호 입력오류"
          });
        }
      });
  };
  componentDidMount() {
    window.Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      success: function(authObj) {
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
      <Layout>
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
                  placeholder="e-mail"
                  onChange={this.handleInput}
                />
                <p className="loginIdtext">{this.state.emailText}</p>
              </div>
              <div className="loginPwinput">
                <InputBox
                  type="password"
                  name="password"
                  classname="login_input"
                  placeholder="password"
                  onChange={this.handleInput}
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
                save e-mail
              </label>
            </div>
            <Button
              className="loginBtn"
              text="sign in"
              onClick={this.LoginBtnOnClick}
            />
            <div className="loginBtnBox">
              <a id="kakao-login-btn"></a>
              <div
                className="guestLogin"
                onClick={this.handleOnclickGuestLogin}
              >
                <img
                  src="https://wesocks-design-management.s3.ap-northeast-2.amazonaws.com/free-delivery.png"
                  className="guestLoginImg"
                />
                <span className="guestLoginText">게스트 로그인</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
