import React, { Component } from "react";
import Header from "./Header";
import "./layout.css";

class DefaultLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="layout">
          <div className="layout-header">
            <Header />
          </div>
          <div className="layout-body">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default DefaultLayout;
