import React from 'react';
import { find } from 'lodash';
import TestUtils from 'react/lib/ReactTestUtils';
import ChapterView from 'app/containers/ChapterView';

describe('Containers', function() {
  describe('ChapterView', function() {
    beforeEach(function() {
      this.book = { id: '12345' };
      this.chapter = {
        title: 'Attack of the Mutant Bears from Neptune',
        pages: [{ image: 'theimage.src', id: '12355' }]
      };

      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<ChapterView chapter={this.chapter} book={this.book} />);
      this.component = shallowRenderer.getRenderOutput();
    });

    it('Should render a `div` with a class of `chapter-view`', function() {
      expect(this.component.type).to.equal('div');
      expect(this.component.props.className).to.equal('chapter-view');
      expect(this.component.props.children.length).to.equal(3);
    });

    it('Should render the title of the chapter', function() {
      const title = find(this.component.props.children, {type:'h1'}).props;
      expect(title.className).to.equal('chapter-view__title');
      expect(title.children).to.equal(this.chapter.title);
    });

    it('Should render a back button', function() {
      const backButton = this.component.props.children[1];
      expect(backButton.props.className).to.equal('chapter-view__back');
      expect(backButton.props.to).to.equal(`/book/${this.book.id}`);
    });

    it('Should render a PageList component, and pass it all of our pages', function() {
      const pageList = this.component.props.children[2].props;
      expect(pageList.pages).to.equal(this.chapter.pages);
    });

    it('Should render a Loading component if no book is passed in as a prop', function() {
      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(<ChapterView />);
      this.component = shallowRenderer.getRenderOutput();
      expect(this.component.props.children).to.equal('loading...');
    });
  });
});
