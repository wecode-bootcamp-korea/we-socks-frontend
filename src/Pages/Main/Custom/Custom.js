import React from "react";
import "./custom.scss";
import Header from "Components/Header";

class Custom extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="customRoot">
          <canvas></canvas>
          <div className="colorPicker">color</div>
          <div className="patternPicker">pattern</div>
          <div className="imagePicker">image</div>
        </div>
      </>
    );
  }
}

export default Custom;
