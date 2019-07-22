import React from "react";
import ReactDOM from "react-dom";
// import Modal from "Components/Modal";
import "./index.scss";
import Routes from "./Routes";
// import { Provider } from "react-redux";
// import { createStore } from "redux";

// const store = createStore();

ReactDOM.render(
  // <Provider store={store}>
  //   <Routes />
  // </Provider>,
  <Routes />,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
