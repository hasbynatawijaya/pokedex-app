import React, { Component } from "react";
import Header from "./Header";
import { Segment } from "semantic-ui-react";
import "./layout.css";

class DefaultLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="layout">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default DefaultLayout;
