import React, { Component } from "react";

export class SearchInput extends Component {
  render() {
    return (
      <input name={this.props.name} type="text" defaultValue={this.props.defaultValue} onChange={(e) => this.props.changeEvent(e)} placeholder="Search repositories..." />
    );
  }
}

export default SearchInput;
