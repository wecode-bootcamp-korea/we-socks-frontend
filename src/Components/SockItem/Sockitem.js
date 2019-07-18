import React from "react";
import "./sockitem.scss";

class SockItem extends React.Component {
  state = {
    isHover: false
  };

  handleHover = flag => {
    this.setState({
      isHover: flag
    });
  };

  render() {
    const { image } = this.props;
    const { isHover } = this.state;

    return (
      <div className="itemWrap" onMouseLeave={() => this.handleHover(false)}>
        <div
          className="itemImage"
          style={{ backgroundImage: `url(${image})` }}
          onMouseEnter={() => this.handleHover(true)}
        ></div>
        <div className="customLabel">
          <span className="miniLogo"></span>
          <span className="miniLabel">Customize</span>
          <div
            className={
              isHover ? "previewBox previewShow" : "previewBox previewHide"
            }
          >
            <div className="previewSet">
              <span className="previewItem"></span>
              <span className="previewItem"></span>
              <span className="previewItem"></span>
            </div>
          </div>
        </div>
        <div className="nameBox">
          <p className="itemName">Nike React Presto By You</p>
          <p className="tagName">Custom Men's Shoe</p>
          <p className="itemPrice">5,000 ₩</p>
        </div>
      </div>
    );
  }
}

export default SockItem;
