import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import "./Login.scss";

class Login extends Component {
  handleOnclick = e => {};

  render() {
    return (
      <div className="loginContainer">
        <div className="loginContents">
          <div className="loginHeadText">
            <h2>Sign in</h2>
          </div>
          <div className="loginInputArea">
            <div>
              <p>* e-mail address</p>
              <InputBox
                type="text"
                classname="login_input"
                placeholder="e-mail address"
              />
            </div>
            <div>
              <p>* Password</p>
              <InputBox
                type="password"
                classname="login_input"
                placeholder="Password"
              />
            </div>
          </div>
          <Button
            className="signupBtn"
            text="로그인"
            click={this.handleOnclick}
          />
        </div>
      </div>
    );
  }
}

export default Login;
