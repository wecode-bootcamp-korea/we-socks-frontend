import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./error.scss";

class ErrorPage extends Component {
  constructor(props) {
    super(props);
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div id="error">
        <div className="errorInner">
          <h1 className="notFoundTitle">The Bad News</h1>
          <p className="notFoundDesc">
            We couldn't find the page you were looking for.
          </p>
          <h1 className="notFoundTitle">The Good News</h1>
          <p className="notFoundDesc">We found all your missing socks.</p>

          <div className="backBtn" onClick={this.handleGoBack}>
            Back to the Page
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ErrorPage);
