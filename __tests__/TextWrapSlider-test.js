jest.unmock('../TextWrapSlider');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TextWrapSlider from '../TextWrapSlider';

describe('TextWrapSlider', () => {
  it('changes the text after text input', () => {
    const app = TestUtils.renderIntoDocument(
      <TextWrapSlider />
    );

    const appNode = ReactDOM.findDOMNode(app);
    const textInputNode = TestUtils.findRenderedDOMComponentWithClass(app, 'textInput');
    const rangeInputNode = TestUtils.findRenderedDOMComponentWithClass(app, 'rangeInput');
    textInputNode.value = 'asdfasdf';
    rangeInputNode.value = 50;

    TestUtils.Simulate.change(textInputNode);
    TestUtils.Simulate.change(rangeInputNode);

    expect(appNode.textContent).toEqual('a     s     d     f     a     s     d     f     ');
  });

  it('splits the text after slider input', () => {
    const app = TestUtils.renderIntoDocument(
      <TextWrapSlider />
    );
    app.setState({
      textInput: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasfasfd',
      rangeInput: 50,
      textOutput: [''],
    }, app.wrapText);

    const appNode = ReactDOM.findDOMNode(app);
    const textOutputNode = TestUtils.scryRenderedDOMComponentsWithClass(app, 'textOutput');

    expect(app.state.textOutput[0]).toEqual('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfas');
    expect(app.state.textOutput.length).toEqual(3);
  });

});
