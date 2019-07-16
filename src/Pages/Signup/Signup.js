import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";

import "./Signup.scss";

class Signup extends Component {
  handleOnclick = e => {};

  render() {
    return (
      <div className="signupContainer">
        <div className="signupContents">
          <div className="signupHeadText">
            <h2>Create an account</h2>
            <p>
              By creating an account with us, you will be able to move through
              the checkout process faster, store multiple shipping addresses,
              view your orders in your account and more.
            </p>
          </div>
          <div className="signupInputArea">
            <div>
              <InputBox
                type="text"
                classname="signup_input"
                placeholder="ex) userid@email.com"
              />
            </div>
            <div>
              <InputBox
                type="text"
                classname="signup_input"
                placeholder="ex) Nickname"
              />
            </div>
            <div>
              <InputBox
                type="password"
                classname="signup_input"
                placeholder="Password"
              />
            </div>
            <div>
              <InputBox
                type="password"
                classname="signup_input"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <Button
            className="signupBtn"
            text="회원가입"
            click={this.handleOnclick}
          />
        </div>
      </div>
    );
  }
}

export default Signup;
