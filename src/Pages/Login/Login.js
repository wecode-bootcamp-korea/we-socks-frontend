import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import "./Login.scss";

class Login extends Component {
  // this.handleOnclick = this.handleOnclick.bind(this)
  handleOnclick = e => {};

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
    );
  }
}

export default Login;
