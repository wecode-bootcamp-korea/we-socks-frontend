import React from "react";
import "./wishList.scss";
import Button from "Components/Button";

const WishList = props => {
  const handleClick = () => {};
  return (
    <div
      className={` wishList ${
        props.className === "wishList" ? "showDetail" : "hidden"
      }`}
    >
      <div className="wishListRoot detailRoot">
        <p>Wish List</p>
        <ul className="wishList">
          <li className="eachWishListItem">
            <div className="wishListImage"></div>
            <div className="wishListExplanation">
              <div className="wishListSummary">
                <div className="productName">Oreo All Around</div>
                <div className="categoryAndType">Casual High</div>
                <Button
                  className="removeBtn"
                  text="Remove"
                  onClick={handleClick}
                />
              </div>
              <div className="whatToDo">
                <div className="productStatus">In Stock</div>
                <div className="selectCount">1</div>
                <Button
                  className="addToBagBtn"
                  text="ADD TO BAG"
                  onClick={handleClick}
                />
              </div>
            </div>
          </li>
          <li className="eachWishListItem">
            <div className="wishListImage"></div>
            <div className="wishListExplanation">
              <div className="wishListSummary">
                <div className="productName">Oreo All Around</div>
                <div className="categoryAndType">Casual High</div>
                <Button
                  className="removeBtn"
                  text="Remove"
                  onClick={handleClick}
                />
              </div>
              <div className="whatToDo">
                <div className="productStatus">In Stock</div>
                <div className="selectCount">1</div>
                <Button
                  className="addToBagBtn"
                  text="ADD TO BAG"
                  onClick={handleClick}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WishList;
