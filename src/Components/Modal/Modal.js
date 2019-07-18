import React from "react";

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalView: false
    };
  }
  render() {
    const { title, contents } = this.props;
    return (
      <main className="modalRoot">
        <div className="modalContainer">
          <div className="modalTitle">{title}</div>
          <div className="modalContents">{contents}</div>
        </div>
      </main>
    );
  }
}

export default Modal;
