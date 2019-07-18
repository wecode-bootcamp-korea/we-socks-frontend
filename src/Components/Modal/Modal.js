import React from "react";
import "./modal.scss";
import ViewRewardsModal from "Components/Modal/ViewRewardsModal";
import LearnMoreModal from "Components/Modal/LearnMoreModal";

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      toggleViewRewardsModalView: false,
      toggleLearnMoreModalView: false
    };
  }

  render() {
    const { toggleLearnMoreModalView, toggleViewRewardsModalView } = this.state;
    return (
      <div className="modalRoot">
        {toggleViewRewardsModalView && <ViewRewardsModal />}
        {toggleLearnMoreModalView && <LearnMoreModal />}
      </div>
    );
  }
}

export default Modal;
