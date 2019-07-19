import React from "react";
import "./sockitem.scss";

class SockItem extends React.Component {
  state = {
    isHover: false,
    isPreview: false,
    previewUrl: ""
  };

  handleHover = flag => {
    this.setState({
      isHover: flag
    });

    if (this.state.isPreview) {
      this.setState({
        isPreview: flag
      });
    }
  };

  getPreviewUrl = e => {
    const imgUrl = e.target.style.backgroundImage;

    this.setState({
      isPreview: true,
      previewUrl: imgUrl
    });
  };

  render() {
    const { image } = this.props;
    const { isHover, isPreview, previewUrl } = this.state;

    return (
      <div className="itemWrap" onMouseLeave={() => this.handleHover(false)}>
        <div
          className="itemImage"
          style={
            isPreview
              ? { backgroundImage: `${previewUrl}` }
              : { backgroundImage: `url(${image})` }
          }
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
              {/* API요청해서 받아온 후 렌더링 해야 할듯..? */}
              <span
                className="previewItem"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558981420-87aa9dad1c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')"
                }}
                onMouseOver={e => this.getPreviewUrl(e)}
              ></span>
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
