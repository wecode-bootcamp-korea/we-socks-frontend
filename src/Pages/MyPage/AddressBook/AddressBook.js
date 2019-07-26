import React from "react";
import "./addressBook.scss";
import "Pages/MyPage/myPage.scss";
import Button from "Components/Button";
import InputBox from "Components/InputBox";
import Select from "Components/Select";
import axios from "axios";
import { API_URL, TOKEN_KEY } from "config";

const addressTypeArr = ["Home", "Work", "Parents'", "Lovers'"];

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
    const token = localStorage.getItem(TOKEN_KEY);
    let headers = {
      Authorization: token
    };
    let body = {
      id: 1,
      address_type: 2,
      address: this.state.addressInput,
      recepient: this.state.recepientInput
    };

    axios.post(
      `${API_URL}user/update`,
      body,
      { headers }.then(response => {
        window.location.reload();
      })
    );
  };

  render() {
    const { addressArr } = this.props;
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
            {addressArr.map((address, idx) => (
              <li>
                {console.log(address.address_type_id)}
                <div className="addressWrap">
                  <div className="addressType">
                    {addressTypeArr[address.address_type_id - 1]}
                  </div>
                  <div className="recepient">{address.recepient}</div>
                  <div className="actualAddress">{address.address}</div>
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
            ))}
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
              ref_array={["Choose Type", "Home", "Work", "Parents'", "Lovers'"]}
              makeSelection={e => this.handleChange(e)}
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
              text="edit complete"
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
