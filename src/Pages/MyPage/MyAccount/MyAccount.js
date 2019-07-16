import React from "react";
import "./myAccount.scss";
import Button from "Components/Button";

class MyAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedBtn: ""
    };
  }
  componentDidMount() {
    window.addEventListener("click", e => this.handleClick(e));
  }

  componentWillUnmount() {
    window.removeEventListener("click", e => this.handleClick(e));
  }

  handleClick = e => {
    this.setState({
      clickedBtn: e.target.name
    });
  };

  render() {
    return (
      <div
        className={` myAccountDetail ${
          this.props.className === "myAccount" ? "showDetail" : "hidden"
        }`}
      >
        <div className="creatorsClub detailRoot">
          <p>WeSocks CREATORS CLUB</p>
          <p>
            당신만의 양말을 디자인해서 포인트를 획득하세요 <br></br>
            WeSocks CREATOR에게는 다양한 혜택이 제공됩니다
          </p>
          <p>Points</p>
          <meter
            className="points"
            min="0"
            low="50"
            value="350"
            optimum="300"
            high="400"
            max="500"
          ></meter>
          <div className="creatorsClubDetail">
            <div className="creatorsClubIntroduction">
              <p>당신은 꼬꼬마입니다</p>
              <p>
                Jason Kang 님만의 <br></br>WeSocks CREATORS Club ID를 <br></br>
                활용해서 최고의 양말을 디자인해주세요. <br></br>CREATORS CLUB
                LEVEL UP을 통해 <br></br>다양한 혜택을 누릴 수 있습니다.
              </p>
              <div className="creatorClubBtns">
                <Button
                  className="viewRewardsBtn"
                  name="viewRewards"
                  text="VIEW YOUR REWARDS"
                  onClick={e => this.handleClick(e)}
                />
                <div
                  className={`myAccountExplanation viewRewardsExplanation ${
                    this.state.clickedBtn === "viewRewards"
                      ? "showDetail"
                      : "hidden"
                  }`}
                >
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
                    <p>
                      WeSocks와 함께 Statement를 만드는 당신의 삶을 응원합니다.
                    </p>
                  </div>
                </div>
                <Button
                  className="learnMoreBtn"
                  name="learnMore"
                  text="LEARN MORE"
                  onClick={e => this.handleClick(e)}
                />
                <div
                  className={`myAccountExplanation learnMoreExplanation ${
                    this.state.clickedBtn === "learnMore"
                      ? "showDetail"
                      : "hidden"
                  }`}
                >
                  <div className="designerWrap">
                    <p>Rookie Deginer</p>
                    <p>
                      Rookie Designer는 WeSocks CREATORS CLUB에 처음 입성한
                      Designer입니다
                    </p>
                  </div>
                  <div className="designerWrap">
                    <p>Junior Deginer</p>
                    <p>
                      Junior Designer는 WeSocks CREATORS CLUB의 VIP입니다. 매월
                      5%의 할인 쿠폰이 발급됩니다. Junior Designer의 자격 유지
                      기간은 6개월입니다.
                    </p>
                  </div>
                  <div className="designerWrap">
                    <p>Senior Designer</p>
                    <p>
                      Senior Designer는 WeSocks CREATORS CLUB의 VVIP입니다. 매월
                      10%의 할인 쿠폰이 발급됩니다. Senior Designer의 자격 유지
                      기간은 1년입니다.
                    </p>
                  </div>
                  <div className="designerWrap">
                    <p>Master Designer</p>
                    <p>
                      Master Designer는 WeSocks CREATORS CLUB의 VVVIP
                      Designer입니다. 매월 20% 할인쿠폰이 발급됩니다. Master
                      Designer의 자격은 평생 유지됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clubImage"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccount;
