import React, { Component, Fragment } from "react";

export class Success extends Component {
  first = (e) => {
    setTimeout(() => {
      this.props.firstStep();
    }, 1000);
  };
  render() {
    return (
      <div>
        <br />
        <p variant='title'>Thank you for your submission!</p>
        <br />
        <p>You will get an email with further instructions</p>
      </div>
    );
  }
}

export default Success;
