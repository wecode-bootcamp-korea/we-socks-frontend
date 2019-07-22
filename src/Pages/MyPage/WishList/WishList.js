import React from "react";
import axios from "axios";
import "./wishList.scss";
import Button from "Components/Button";
import Sockitem from "Components/SockItem/Sockitem";

const categoryArr = ["Kids", "Casual", "Dressed", "Athletic"];
const typeArr = ["noShow", "ankle", "mid", "high"];

class WishList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wishListArr: [],
      listChanged: false
    };
  }

  removeFromWishList = item => {
    axios
      .post("http://10.58.7.11:8000/product/cancel_wish_req", {
        wished_id: item
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
      user_pk: 1,
      design_id: item,
      know_design_id: "yes",
      amount: "1"
    };
    axios
      .post("http://10.58.7.11:8000/product/add_cart_req", body)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            listChanged: !this.state.listChanged
          });
        }
      });
  };

  componentDidMount = () => {
    axios
      .post("http://10.58.7.11:8000/mypage/wishes", { user_pk: 1 })
      .then(response => {
        this.setState({
          wishListArr: response.data.my_wish_list
        });
      });
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   axios
  //     .post("http://10.58.7.11:8000/mypage/wishes", { user_pk: 1 })
  //     .then(response => {
  //       this.setState({
  //         wishListArr: response.data.my_wish_list
  //       });
  //     });
  // };

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
                <div className="wishListImage">
                  <Sockitem
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
                    <div className="wishListBtnWrap">
                      <Button
                        className="addToCartBtn"
                        text="ADD TO CART"
                        onClick={() => this.addItemToCart(el.design.id)}
                      />
                    </div>
                    <div className="wishListBtnWrap">
                      <Button
                        className="removeBtn"
                        text="REMOVE"
                        onClick={() => this.removeFromWishList(el.id)}
                      />
                    </div>
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
