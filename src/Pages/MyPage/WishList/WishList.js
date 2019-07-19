import React from "react";
import axios from "axios";
import "./wishList.scss";
import Button from "Components/Button";

class WishList extends React.Component {
  constructor() {
    super();

    this.state = {
      wishListArr: []
    };
  }

  handleClick = () => {};

  componentDidMount = () => {
    axios
      .post("http://10.58.5.85:8000/mypage/my_wishes", { buyer: "bj" })
      .then(response => {
        this.setState({
          wishListArr: response.data[0].my_wish_list
        });
      });
  };

  render() {
    const { className } = this.props;
    const { wishListArr } = this.state;

    return (
      <div
        className={` wishList ${
          className === "wishList" ? "showDetail" : "hidden"
        }`}
      >
        <div className="wishListRoot detailRoot">
          <p>Wish List</p>
          <ul className="wishList">
            {wishListArr.map((el, idx) => (
              <li className="eachWishListItem">
                <div className="wishListImage"></div>
                <div className="wishListExplanation">
                  <div className="wishListSummary">
                    <div className="productName">{el.design.label}</div>
                    <div className="categoryAndType">{`${el.design.category} ${el.design.main_type}`}</div>
                    <Button
                      className="removeBtn"
                      text="Remove"
                      onClick={this.handleClick}
                    />
                  </div>
                  <div className="whatToDo">
                    <div className="productStatus">In Stock</div>
                    <div className="selectCount">1</div>
                    <Button
                      className="addToBagBtn"
                      text="ADD TO BAG"
                      onClick={this.handleClick}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default WishList;
