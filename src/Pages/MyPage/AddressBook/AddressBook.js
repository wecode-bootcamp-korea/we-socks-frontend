import React from "react";
import "./addressBook.scss";
import Button from "Components/Button";
import InputBox from "Components/InputBox";
import Select from "Components/Select";
import axios from "axios";

class AddressBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedBtn: undefined,
      addressTypeSelect: "",
      recepientInput: "",
      addressInput: ""
    };
  }

  // componentDidMount() {
  //   window.addEventListener("click", e => this.handleClick(e));
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("click", e => this.handleClick(e));
  // }

  handleClick = e => {
    this.setState({
      clickedBtn: e.target.name
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateAddress = () => {
    axios.post("http://localhost:8000");
  };

  handleAddressType;
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
            <p>Add Address</p>
            <p>Address Type</p>
            <Select
              className="addressTypeSelect"
              name="addressTypeSelect"
              makeSelection={e => this.handleChange(e)}
              ref_array={["Choose Type", "Home", "Work", "Parents'", "Lovers'"]}
            />
            <p>Recepient</p>
            <InputBox
              type="text"
              name="recepientInput"
              className="recepientInput"
              placeholder="Enter your phone number here..."
              onChange={e => this.handleChange(e)}
            />
            <p>Address</p>
            <InputBox
              type="text"
              name="addressInput"
              className="addressInput"
              placeholder="Enter your address here..."
              onChange={e => this.handleChange(e)}
            />
            <Button
              className="addCompleteBtn"
              name="addCompleteBtn"
              text="add complete"
              onClick={this.updateAddress}
            />
          </div>
          <div
            className={`editAddress ${
              this.state.clickedBtn === "editBtn" ? "showDtail" : "hidden"
            }`}
          >
            <p>Edit Address</p>
            <p>Address Type</p>
            <Select
              className="addressTypeSelect"
              name="addressTypeSelect"
              makeSelection={e => this.handleChange(e)}
              ref_array={["Choose Type", "Home", "Work", "Parents'", "Lovers'"]}
            />
            <p>Recepient</p>
            <InputBox
              type="text"
              name="recepientInput"
              className="recepientInput"
              placeholder="Enter your phone number here..."
              onChange={e => this.handleChange(e)}
            />
            <p>Address</p>
            <InputBox
              type="text"
              name="addressInput"
              className="addressInput"
              placeholder="Enter your address here..."
              onChange={e => this.handleChange(e)}
            />

            <Button
              className="addCompleteBtn"
              name="addCompleteBtn"
              text="add complete"
              onClick={this.updateAddress}
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
