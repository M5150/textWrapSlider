import React, { Component } from 'react';

export default class TextWrapSlider extends Component {
  constructor () {
    super();
    this.state = {
      textInput: '',
      rangeInput: 1,
      textOutputA: '',
      textOutputB: '',
    };
  };

  handleRange (e) {
    this.setState({ rangeInput: e.target.value / 100 }, this.wrapText);
  };

  handleText (e) {
    this.setState({ textInput: e.target.value }, this.wrapText);
  };

  wrapText () {
    const { textInput, rangeInput } = this.state;
    let wrapIndex = Math.round(rangeInput * textInput.length);
    this.setState({
      textOutputA: textInput.slice(0, wrapIndex),
      textOutputB: textInput.slice(wrapIndex)
    });
  };

  render () {
    const { textOutputA, textOutputB } = this.state;
    return (
      <div>
        <input type = "text" onChange = { this.handleText.bind(this) }></input>
        <input type = "range" onChange = { this.handleRange.bind(this) }></input>
        <div>{ textOutputA }<br/>{ textOutputB }</div>
      </div>
    );
  };
};
