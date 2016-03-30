import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import BookList from 'app/components/BookList';

describe('Components', function() {
  describe('BookList', function() {
    var shallowRenderer;
    var node;
    var books;

    beforeEach(function() {
      node = document.createElement('div');
      shallowRenderer = TestUtils.createRenderer();
      books = {
        'flappy-monkey': {
          id: 'flappy-monkey',
          title: 'Flappy Monkey Banana Attack'
        },
        'flappy-monkey-2': {
          id: 'flappy-monkey-2',
          title: 'Return of the Flappy Monkey'
        }
      };
    });

    it('Should render an `ul` tag', function renderBookList() {
      shallowRenderer.render( <BookList books={books} /> );
      const BookListInstance = shallowRenderer.getRenderOutput();
      expect(BookListInstance.type).to.equal('ul');
    });

    it('Should not any books if filter prop is empty', function emptyProp() {
      shallowRenderer.render( <BookList books={books} /> );
      const BookListInstance = shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(0);
    });

    it('Should display no books if filter prop is false', function falseProp() {
      shallowRenderer.render( <BookList books={books} filter={false} /> );
      const BookListInstance = shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(0);
    });

    it('Should display all books if filter prop is true', function trueProp() {
      shallowRenderer.render( <BookList books={books} filter={true} /> );
      const BookListInstance = shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(2);
    });

    it('Should filter titles by string', function filterBookListByString() {
      shallowRenderer.render( <BookList books={books} filter="Return of the" />) ;
      const BookListInstance = shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(1);
    });

    it('Should filter at the beginning of the title if filter is less than 3 characters', function filterBookListByString() {
      shallowRenderer.render( <BookList books={books} filter="Fla" />) ;
      const BookListInstance = shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.equal(1);
    });

    it('Should not display all books if filter prop is the string true', function trueStringProp() {
      shallowRenderer.render( <BookList books={books} filter={"true"} /> );
      const BookListInstance = shallowRenderer.getRenderOutput();
      expect(BookListInstance.props.children.length).to.not.equal(2);
    });
  });
});
