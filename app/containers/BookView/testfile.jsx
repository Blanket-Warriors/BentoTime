import React from 'react';
import { find } from 'lodash';
import TestUtils from 'react/lib/ReactTestUtils';
import BookView from 'app/containers/BookView';

describe('Containers', function() {
  describe('BookView', function() {
    beforeEach(function() {
      this.book = {
        title: 'The little engine that could',
        description: 'A book about a train that tried so hard and finally succeeded'
      };

      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<BookView book={this.book} />);
      this.component = shallowRenderer.getRenderOutput();
    });

    it('Should render a `div` with a class of `book-view`', function() {
      expect(this.component.type).to.equal('div');
      expect(this.component.props.className).to.equal('book-view');
      expect(this.component.props.children.length).to.equal(4);
    });

    it('Should render the title of the book', function() {
      const title = find(this.component.props.children, {type:'h1'}).props;
      expect(title.className).to.equal('book-view__title');
      expect(title.children).to.equal(this.book.title);
    });

    it('Should render a back button', function() {
      const backButton = this.component.props.children[2];
      expect(backButton.props.className).to.equal('book-view__back');
      expect(backButton.props.to).to.equal('/');
    });

    it('Should render a `ChapterList` component', function() {
      const chapterList = this.component.props.children[3];
      expect(chapterList.props.book).to.equal(this.book);
    });

    it('Should render a Loading component if no book is passed in as a prop', function() {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<BookView />);
      this.component = shallowRenderer.getRenderOutput();
      expect(this.component.props.children).to.equal('loading...');
    });
  });
});
