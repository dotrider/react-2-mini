import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  render() {
    return (
      <select onChange={(event) => this.props.update(event.target.value)} disabled={ this.props.allowEdit === "false"} className="dropDownContainer">
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    );
  }
}
