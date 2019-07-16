import React from "react";
import "./learnMoreModal.scss";

const LearnMoreModal = props => {
  return (
    <div
      className={`myAccountExplanation learnMoreExplanation ${
        this.state.clickedBtn === "learnMore" ? "showDetail" : "hidden"
      }`}
    >
      <div className="designerWrap">
        <p>Rookie Deginer</p>
        <p>
          Rookie Designer는 WeSocks CREATORS CLUB에 처음 입성한 Designer입니다
        </p>
      </div>
      <div className="designerWrap">
        <p>Junior Deginer</p>
        <p>
          Junior Designer는 WeSocks CREATORS CLUB의 VIP입니다. 매월 5%의 할인
          쿠폰이 발급됩니다. Junior Designer의 자격 유지 기간은 6개월입니다.
        </p>
      </div>
      <div className="designerWrap">
        <p>Senior Designer</p>
        <p>
          Senior Designer는 WeSocks CREATORS CLUB의 VVIP입니다. 매월 10%의 할인
          쿠폰이 발급됩니다. Senior Designer의 자격 유지 기간은 1년입니다.
        </p>
      </div>
      <div className="designerWrap">
        <p>Master Designer</p>
        <p>
          Master Designer는 WeSocks CREATORS CLUB의 VVVIP Designer입니다. 매월
          20% 할인쿠폰이 발급됩니다. Master Designer의 자격은 평생 유지됩니다.
        </p>
      </div>
    </div>
  );
};

export default LearnMoreModal;
