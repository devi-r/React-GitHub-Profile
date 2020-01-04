import React, { Component } from "react";
import Octicon from '@primer/octicons-react';

export class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clickEvent}>{this.props.icon? <Octicon icon={this.props.icon}/> : null}
      	{this.props.data}
      </button>
    );
  }
}

export default Button;