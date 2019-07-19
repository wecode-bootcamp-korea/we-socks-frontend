import React from "react";
import Header from "Components/Header";
import Footer from "Components/Footer";
import "./layout.scss";

class Layout extends React.Component {
  render() {
    return (
      <div className="contentWrap">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
