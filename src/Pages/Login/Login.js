import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import Header from "Components/Header";
import Footer from "Components/Footer";
import "./Login.scss";

class Login extends Component {
  handleOnclick = e => {};

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
                  classname="login_input"
                  placeholder="e-mail address"
                />
              </div>
              <div className="loginPwinput">
                <InputBox
                  type="password"
                  classname="login_input"
                  placeholder="Password"
                />
              </div>
            </div>
            <Button
              className="loginBtn"
              text="sign in"
              click={this.handleOnclick}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Login;
