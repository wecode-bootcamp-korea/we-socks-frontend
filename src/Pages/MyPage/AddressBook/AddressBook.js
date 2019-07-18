import React from "react";
import "./addressBook.scss";
import "Pages/MyPage/myPage.scss";
import Button from "Components/Button";
import InputBox from "Components/InputBox";

class AddressBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedBtn: ""
    };
    this.handleClick.bind(this);
  }

  handleClick = e => {
    this.setState(
      {
        clickedBtn: e.target.name
      },
      () => {
        if (this.state.clickedBtn === "addBtn") {
        } else if (this.state.clickedBtn === "editBtn") {
        } else {
        }
      }
    );
  };

  render() {
    return (
      <div
        className={`addressBookDetail ${
          this.props.className === "addressBook" ? "showDetail" : "hidden"
        }`}
      >
        <div className="addressBookRoot detailRoot">
          <div className="topSectionWrap">
            <p>ADDRESS BOOK</p>
            <Button
              className="addBtn"
              name="addBtn"
              onClick={e => this.handleClick(e)}
              text="ADD ADDRESS"
            />
          </div>
          <ul
            className={`addressList ${
              this.state.clickedBtn === "" ? "showDetail" : "hidden"
            }`}
          >
            <li>
              <div className="addressWrap">
                <div className="addressType">Home</div>
                <div className="recepient">Jason Kang</div>
                <div className="actualAddress">
                  서울시 강남구 테헤란로 427 <br></br>위워크타워
                </div>
                <div className="phoneNumber">010-1234-1234</div>
                <div className="email">jkang14@gmail.com</div>
                <div className="addressBtnWrap">
                  <Button
                    className="editBtn"
                    name="editBtn"
                    onClick={e => this.handleClick(e)}
                    text="edit"
                  />
                  <Button
                    className="removeBtn"
                    name="removeBtn"
                    onClick={e => this.handleClick(e)}
                    text="remove"
                  />
                </div>
              </div>
            </li>
          </ul>
          <div
            className={`addAddress ${
              this.state.clickedBtn === "addBtn" ? "showDtail" : "hidden"
            }`}
          ></div>
          <div
            className={`editAddress ${
              this.state.clickedBtn === "editBtn" ? "showDtail" : "hidden"
            }`}
          >
            <p>Edit Address</p>
            <p>
              Address Type
              <InputBox
                type="text"
                name="addressTypeInput"
                className="addressTypeInput"
                placeholder="Home, Work, John's..."
              />
            </p>
            <p>Address</p>
            <InputBox
              type="text"
              name="addressInput"
              className="addressInput"
              placeholder="Enter your address here..."
            />
            <p>Phone Number</p>
            <InputBox
              type="text"
              name="phoneNumberInput"
              className="phoneNumberInput"
              placeholder="Enter your phone number here..."
            />
            <p>Email</p>
            <InputBox
              type="text"
              name="emailInput"
              className="emailInput"
              placeholder="Enter your email here..."
            />
            <Button
              className="editCompleteBtn"
              name="editCompleteBtn"
              text="edit complete"
            />
          </div>
          <div
            className={`removeAddress ${
              this.state.clickedBtn === "removeBtn" ? "showDtail" : "hidden"
            }`}
          ></div>
        </div>
      </div>
    );
  }
}

export default AddressBook;