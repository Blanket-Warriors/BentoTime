import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Img from 'app/components/Img';

describe('Components', function() {
  describe('Img', function() {
    beforeEach(function() {
      this.shallowRenderer = TestUtils.createRenderer();
    });

    it('Should render an `img` tag with appropriate props', function renderImg() {
      this.shallowRenderer.render(
        <Img
          src="assets/images/phant.svg"
          alt="Phant"
          fallback="assets/images/phant.png"
        />
       );
      const ImgComponent = this.shallowRenderer.getRenderOutput();
      expect(ImgComponent.type).to.equal('img');
      expect(ImgComponent.props.src).to.equal('assets/images/phant.svg');
      expect(ImgComponent.props.alt).to.equal('Phant');
      expect(ImgComponent.props.fallback).to.equal('assets/images/phant.png');
    });

    it('Should make the src match the fallback if onError is fired', function matchImgSrc() {
      const ImgComponent = TestUtils.renderIntoDocument(
        <Img
          src="assets/images/phant.svg"
          alt="Phant"
          fallback="assets/images/phant.png"
        />);
      expect(ImgComponent.state.src).to.equal('assets/images/phant.svg');
      TestUtils.Simulate.error(TestUtils.findRenderedDOMComponentWithTag(ImgComponent, 'img'));
      expect(ImgComponent.state.src).to.equal('assets/images/phant.png');
    });
  });
});
