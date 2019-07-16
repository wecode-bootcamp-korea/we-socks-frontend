import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import "./Signup.scss";

class Signup extends Component {
  state = {
    email: "",
    textShow: ""
  };
  emailCheck = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
  checkEmail = () => {
    if (!this.emailCheck.test(this.email)) {
      this.setState({ textShow: "textShow" });
    } else {
      this.setState({ textShow: "textHidden" });
    }
  };

  handleOnchange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    console.log(this.state.textShow);
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
                type="email"
                classname="signup_input"
                placeholder="ex) userid@email.com"
                handleChange={this.checkEmail}
              />
              <p className={this.state.textShow}>* e-mail 형식오류</p>
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
              <p>* 비밀번호 미일치</p>
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
