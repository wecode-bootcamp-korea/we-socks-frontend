import React from "react";
import "./custom.scss";
import Header from "Components/Header";
import InputBox from "Components/InputBox";

class Custom extends React.Component {
  constructor() {
    super();

    this.state = {
      pickedColor: "white"
    };
  }

  changeSocksColor(e) {
    this.setState({
      pickedColor: e.target.value
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="customRoot">
          <div
            className="socksContainer"
            style={{ backgroundColor: this.state.pickedColor }}
          ></div>
          <div className="chooseWrap">
            <div className="chooseColor">
              <p>Choose Color</p>
              <div className="colorPickerContainer">
                <InputBox
                  type="color"
                  className="colorPicker"
                  handleChange={e => this.changeSocksColor(e)}
                />
              </div>
            </div>
            <div className="choosePattern">
              <p>Choose Pattern</p>
              <div className="patternPicker"></div>
            </div>
            <div className="chooseImage">
              <p>Choose Image</p>
              <div className="imagePicker"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Custom;
