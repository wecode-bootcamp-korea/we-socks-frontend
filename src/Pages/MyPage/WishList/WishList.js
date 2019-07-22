import React from "react";
import axios from "axios";
import "./wishList.scss";
import Button from "Components/Button";
import SockItem from "Components/SockItem";
import { ADDRESS } from "Config/Config";

const categoryArr = ["Kids", "Casual", "Dressed", "Athletic"];
const typeArr = ["No-Show", "Ankle", "Mid", "High"];

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
      .post(`${ADDRESS}/product/cancel_wish_req`, {
        wished_id: item
      })
      .then(response => {
        if (response.status === 200) {
          axios
            .post(`${ADDRESS}/mypage/wishes`, { user_pk: 1 })
            .then(response => {
              this.setState({
                wishListArr: response.data.my_wish_list
              });
            });
        }
      });
  };

  addItemToCart = (design, wish) => {
    let body = {
      user_pk: 1,
      design_id: design,
      wished_id: wish,
      know_design_id: "yes",
      amount: 1
    };

    axios.post(`${ADDRESS}/product/add_cart_req`, body).then(response => {
      if (response.status === 200) {
        this.setState({
          listChanged: !this.state.listChanged
        });
        axios
          .post(`${ADDRESS}/mypage/wishes`, { user_pk: 1 })
          .then(response => {
            this.setState({
              wishListArr: response.data.my_wish_list
            });
          });
      }
    });
  };

  componentDidMount = () => {
    axios.post(`${ADDRESS}/mypage/wishes`, { user_pk: 1 }).then(response => {
      this.setState({
        wishListArr: response.data.my_wish_list
      });
    });
  };

  // componentWillUnmount = () => {
  //   axios
  //     .post("http://10.58.4.155:8000/mypage/wishes", { user_pk: 1 })
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
                  <SockItem
                    key={`wishList-${idx}`}
                    type={el.design.main_type - 1}
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
                        onClick={() => this.addItemToCart(el.design.id, el.id)}
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
