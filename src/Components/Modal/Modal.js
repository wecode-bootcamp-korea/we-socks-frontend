import React from "react";
import Button from "Components/Button";
import "./modal.scss";

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalView: false
    };
  }

  changeModalView() {
    this.setState({
      modalView: !this.state.modalView
    });
  }

  render() {
    const { contents, title } = this.props;
    return (
      <main className="modalMain">
        <h1>{title}</h1>
        <div className="modalContainer">{contents}</div>

        <Button
          className="closeModalBtn"
          name="closeModalBtn"
          onClick={this.changeModalView}
          text="close"
        />
      </main>
    );
  }
}

export default Modal;
