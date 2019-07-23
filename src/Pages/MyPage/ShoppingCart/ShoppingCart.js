// import React from "react";
// import axios from "axios";
// import Button from "Components/Button";
// import Select from "Components/Select";
// import SockItem from "Components/SockItem";
// import "./shoppingCart.scss";

// const categoryArr = ["Kids", "Casual", "Dressed", "Athletic"];
// const typeArr = ["noShow", "ankle", "mid", "high"];

// class ShoppingCart extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       cartArr: [],
//       totalPrice: 0,
//       discountRate: 0.1,
//       checkChange: false
//     };
//   }

//   removeItem = item => {
//     axios
//       .post("http://10.58.7.11:8000/product/cancel_cart_req", { cart_id: item })
//       .then(response => {
//         if (response.status === 200) {
//           this.setState({
//             checkChange: !this.state.checkChange
//           });
//         }
//       });
//   };

//   componentDidUpdate = prevState => {
//     if (this.state.checkChange !== prevState.checkChange) {
//       axios
//         .post("http://10.58.7.11:8000/mypage/cart", { user_pk: 1 })
//         .then(response => {
//           this.setState({
//             cartArr: response.data.my_cart_list,
//             totalPrice: response.data.my_cart_total_price,
//             totalCount: response.data.my_cart_total_amount,
//             totalPoints: response.data.my_total_points
//           });
//         });
//     }
//   };

//   componentDidMount = () => {
//     axios
//       .post("http://10.58.7.11:8000/mypage/cart", { user_pk: 1 })
//       .then(response => {
//         console.log(response);
//         this.setState({
//           cartArr: response.data.my_cart_list,
//           totalPrice: response.data.my_cart_total_price,
//           totalCount: response.data.my_cart_total_amount,
//           totalPoints: response.data.my_total_points
//         });
//       });
//   };

//   render() {
//     const {
//       cartArr,
//       totalPrice,
//       discountRate,
//       totalCount,
//       totalPoints
//     } = this.state;
//     const discountPrice = totalPrice * discountRate;
//     return (
//       <div className="shoppingCartRoot">
//         <p>Shopping Cart</p>
//         <div className="shoppingCartContainer">
//           <div className="leftBox">
//             <ul className="shoppingCartTotal">
//               {cartArr.map((el, idx) => (
//                 <li className="shoppingCartList">
//                   <div className="productImage">
//                     <SockItem
//                       type={el.design.main_type - 1}
//                       color={el.design.color}
//                       pattern={el.design.pattern}
//                       view="side"
//                     />
//                   </div>
//                   <div className="productMiddleContainer">
//                     <div className="productCategoryAndType">{`${
//                       categoryArr[el.design.category]
//                     } ${typeArr[el.design.main_type - 1]}`}</div>
//                     <div className="productPrice">가격: 8,000</div>
//                     <div className="pointsPrediction">예상포인트: 600</div>
//                   </div>
//                   <div className="productRightContainer">
//                     <Select
//                       className="count"
//                       name="count"
//                       makeSelection={this.handleCount}
//                       ref_array={[1, 2, 3, 4, 5]}
//                     />

//                     <Button
//                       className="removeItemBtn"
//                       name="removeItemBtn"
//                       text="삭제"
//                       onClick={this.removeItem}
//                     />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="rightBox">
//             <div clasName="paymentInformation">
//               <Button
//                 className="payBtn"
//                 name="payBtn"
//                 text="결제하기"
//                 onClick={this.handlePayment}
//               />
//               <div className="countTotal">총 주문 상품: 2개</div>
//               <div className="priceWrap">
//                 <div className="subtotalWrap">
//                   <p>총 주문 가격</p>
//                   <div className="subtotal">318,000</div>
//                 </div>
//                 <div className="discountWrap">
//                   <p>할인</p>
//                   <div className="discountTotal">47,600</div>
//                 </div>
//                 <div className="shippingWrap">
//                   <p>배송비</p>
//                   <div className="shoppingFee">0</div>
//                 </div>
//                 <div className="priceTotalWrap">
//                   <p>총 결제금액</p>
//                   <div className="priceTotal">270,400</div>
//                 </div>
//                 <div className="pointsWrap">
//                   <p>예상포인트</p>
//                   <div className="predictedPoints">1,500</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ShoppingCart;
