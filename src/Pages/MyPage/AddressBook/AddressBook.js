import React from "react";
import "./addressBook.scss";
import Button from "Components/Button";
import InputBox from "Components/InputBox";

class AddressBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedBtn: undefined
    };
  }

  componentDidMount() {
    window.addEventListener("click", e => this.handleClick(e));
  }

  componentWillUnmount() {
    window.removeEventListener("click", e => this.handleClick(e));
  }

  handleClick = e => {
<<<<<<< HEAD
=======
    console.log(e.target.name);
>>>>>>> ece82c7... MyPage started to communicate with the server
    this.setState({
      clickedBtn: e.target.name
    });
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
              this.state.clickedBtn === undefined ? "showDetail" : "hidden"
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
              className="addCompleteBtn"
              name="addCompleteBtn"
              text="add complete"
            />
          </div>
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
