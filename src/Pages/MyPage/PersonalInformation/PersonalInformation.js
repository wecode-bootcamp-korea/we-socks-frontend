import React from "react";
import InputBox from "Components/InputBox";
import Button from "Components/Button";
import "./personalInformation.scss";

const PersonalInformation = props => {
  const handleClick = () => {};
  return (
    <div
      className={` personalInformationDetail ${
        props.className === "personalInformation" ? "showDetail" : "hidden"
      }`}
    >
      <div className="personalInformationDetailRoot detailRoot">
        <p>Personal Information</p>
        <p>당신의 정보를 최신으로 업데이트 하세요</p>
      </div>
      <div className="changeInformation">
        <div className="changeNickname">
          <p>Nickname</p>
          <InputBox
            className="nicknameInput"
            placeholder="Enter New Nickname"
          />
        </div>
        <div className="changePassword">
          <p>Password</p>
          <InputBox
            className="passwordInput"
            placeholder="Change Your Password"
            type="password"
          />
        </div>
        <Button
          className="updateInfoBtn"
          name="updateInfoBtn"
          text="update"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
