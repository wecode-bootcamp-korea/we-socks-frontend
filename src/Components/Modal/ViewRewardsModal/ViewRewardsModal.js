import React from "react";
import "./viewRewardsModal.scss";

const ViewRewardsModal = props => {
  return (
    <div className="myAccountExplanation viewRewardsExplanation">
      <div className="designerLevelWrap">
        <p>당신은 Rookie Designer입니다</p>
        <p>포인트를 적립하여 다음 Level의 Designer가 되어보세요</p>
      </div>
      <div className="designerLevelWrap">
        <p>당신은 Junior Designer 입니다</p>
        <p>매월 5%의 할인쿠폰이 발급됩니다.</p>
        <p>포인트를 적립하여 다음 Level의 Designer가 되어보세요</p>
      </div>
      <div className="designerLevelWrap">
        <p>당신은 Senior Designer 입니다</p>
        <p>매월 10%의 할인쿠폰이 발급됩니다.</p>
        <p>포인트를 적립하여 다음 Level의 Designer가 되어보세요</p>
      </div>
      <div className="designerLevelWrap">
        <p>당신은 Master Designer 입니다</p>
        <p>매월 20%의 할인쿠폰이 발급됩니다.</p>
        <p>WeSocks와 함께 Statement를 만드는 당신의 삶을 응원합니다.</p>
      </div>
    </div>
  );
};

export default ViewRewardsModal;
