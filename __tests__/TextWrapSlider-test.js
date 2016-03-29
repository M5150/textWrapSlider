'use strict';

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
    textInputNode.value = 'asdfasdf';
    TestUtils.Simulate.change(textInputNode);
    const textOutputA = TestUtils.findRenderedDOMComponentWithClass(app, 'textOutputA');

    expect(textOutputA.textContent).toEqual('asdfasdf');
  });

  it('splits the text after slider input', () => {
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
    const textOutputA = TestUtils.findRenderedDOMComponentWithClass(app, 'textOutputA');
    const textOutputB = TestUtils.findRenderedDOMComponentWithClass(app, 'textOutputB');

    expect(textOutputA.textContent).toEqual('asdf');
    expect(textOutputB.textContent).toEqual('asdf');
  });

});
