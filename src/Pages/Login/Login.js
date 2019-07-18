import React, { Component } from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import Header from "Components/Header";
import Footer from "Components/Footer";
import "./Login.scss";

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
    console.log("안도현");
    fetch("http://10.58.4.229:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
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
