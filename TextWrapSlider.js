import React, { Component } from 'react';

export default class TextWrapSlider extends Component {
  constructor () {
    super();
    this.state = {
      textInput: '',
      rangeInput: 100,
      textOutput: [],
    };
  };

  handleRange (e) {
    this.setState({ rangeInput: Number(e.target.value) }, this.wrapText);
  };

  handleText (e) {
    this.setState({ textInput: e.target.value }, this.wrapText);
  };

  wrapText () {
    const { textInput, rangeInput } = this.state;
    let result = [];
    let buffer = '';
    if (textInput.length < rangeInput) {
      let spacing = Math.round((rangeInput - textInput.length) / textInput.length);
      let spaces = rangeInput - textInput.length;
      for (let i = 0; i < textInput.length; ++i) {
        buffer += textInput[i];
        for (let j = 0; j < spacing; ++j) {
          if (spaces > 0) {
            buffer = buffer + ' ';
            --spaces;
          }
        }
      }

      result.push(buffer);
    } else {
      for (let k = 0; k < textInput.length; k += rangeInput) {
        result.push(textInput.substr(k, rangeInput));
      }
    }

    this.setState({ textOutput: result });
  };

  render () {
    const { textOutputA, textOutputB } = this.state;
    return (
      <div>
        <input
          className = "textInput"
          type = "text"
          onChange = { this.handleText.bind(this) }/>
        <input
          className = "rangeInput"
          type = "range"
          min = "1"
          max = "100"
          onChange = { this.handleRange.bind(this) }/>
        <pre>
          { this.state.textOutput.map((text, index) => {
            return <p
              className = "textOutput"
              key = { index }>{ text }</p>;
          }) }
        </pre>
      </div>
    );
  };
};
