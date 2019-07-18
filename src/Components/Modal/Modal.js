import React from "react";
import "./modal.scss";
import ViewRewardsModal from "Components/Modal/ViewRewardsModal";
import LearnMoreModal from "Components/Modal/LearnMoreModal";

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      viewRewardsModalView: false,
      learnMoreModalView: false
    };
  }

  render() {
    return (
      <div className="modalRoot">
        {this.state.viewRewardsModalView && <ViewRewardsModal />}
        {this.state.learnMoreModalView && <LearnMoreModal />}
      </div>
    );
  }
}

export default Modal;
