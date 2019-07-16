import React from "react";
import axios from "axios";
import "./wishList.scss";
import Button from "Components/Button";
import SockItem from "Components/SockItem";

<<<<<<< HEAD
const categoryArr = ["Kids", "Casual", "Dressed", "Athletic"];
const typeArr = ["noShow", "ankle", "mid", "high"];

=======
>>>>>>> ece82c7... MyPage started to communicate with the server
class WishList extends React.Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      wishListArr: [],
      listChanged: false
    };
  }

  removeFromWishList = item => {
    axios
      .post("http://10.58.6.101:8001/product/cancel_wish_req", {
        wish_id: item
      })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            listChanged: !this.state.listChanged
          });
        }
      });
  };

  addItemToCart = item => {
    let body = {
      buyer: "bj",
      design_id: item,
      label: "socks",
      amount: "1"
    };
    axios.post("http://10.58.6.101:8001/product/add_cart_req", body);
  };

=======
      wishListArr: []
    };
  }

>>>>>>> ece82c7... MyPage started to communicate with the server
  handleClick = () => {};

  componentDidMount = () => {
    axios
      .post("http://10.58.5.85:8000/mypage/my_wishes", { buyer: "bj" })
<<<<<<< HEAD

=======
>>>>>>> ece82c7... MyPage started to communicate with the server
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
<<<<<<< HEAD
                <div className="wishListImage">
                  <SockItem
                    key={`wishList-${idx}`}
                    type={typeArr[el.design.main_type - 1]}
                    view="side"
                    color={el.design.color}
                    pattern={el.design.pattern}
                  />
                </div>
                <div className="wishListExplanation">
                  <div className="wishListSummary">
                    <div className="categoryAndType">{`${
                      categoryArr[el.design.category - 1]
                    } ${typeArr[el.design.main_type - 1]}`}</div>
                  </div>
                  <div className="whatToDo">
                    <Button
                      className="addToCartBtn"
                      text="ADD TO CART"
                      onClick={() => this.addItemToCart(el.design.id)}
                    />
                    <Button
                      className="removeBtn"
                      text="REMOVE"
                      onClick={() => this.removeFromWishList(el.id)}
=======
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
>>>>>>> ece82c7... MyPage started to communicate with the server
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
