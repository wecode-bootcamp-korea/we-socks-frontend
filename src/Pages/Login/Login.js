import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import Header from "Components/Header";
import Footer from "Components/Footer";
import "./Login.scss";
import { post } from "Common/api";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  };

  handleOnClick = () => {
    post({
      path: "/user/login",
      body: {
        email: "admin@gmail.com",
        password: "1234"
      }
    }).then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <>
        <Header />
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
                <p className="loginIdtext">아이디 입력 오류</p>
              </div>
              <div className="loginPwinput">
                <InputBox
                  type="password"
                  name="password"
                  classname="login_input"
                  placeholder="Password"
                  handleChange={this.handleInput}
                />
              </div>
            </div>
            <Button
              className="loginBtn"
              text="sign in"
              onClick={this.handleOnClick}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
