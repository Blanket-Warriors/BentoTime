import { clone } from 'lodash';
import bookReducer from './bookReducer';
import bookFixture from 'test/fixtures/types/bookTypeFixture';
import * as ActionTypes from 'app/data/actions/ActionTypes';

describe('Data', function() {
  describe('Reducers', function() {
    describe('Book', function() {
      it('Should set `isFetching` to true when a request is initiated', function setIsFetching() {
        const nextState = bookReducer(undefined, {
          type: ActionTypes.FETCH_BOOK_REQUEST
        });

        expect(nextState.isFetching).to.be.true;
      });

      it('Should populate empty states correctly on success', function SetEmptyState() {
        const nextState = bookReducer(undefined, {
          type: ActionTypes.FETCH_BOOK_SUCCESS,
          receivedAt: 12345,
          book: bookFixture
        });

        expect(nextState.isFetching).to.be.false;
        expect(nextState.id).to.equal(bookFixture.id);
        expect(nextState.lastUpdated).to.equal(12345);
        expect(nextState.title).to.equal(bookFixture.title);
        expect(nextState.chapters).to.deep.equal(bookFixture.chapters);
      });

      it('Should merge state on successful update', function SetActiveState() {
        const previousState = clone(bookFixture);
        previousState.propertyToRemain = 'old state';
        previousState.id = 'old id';

        const nextBook = clone(bookFixture);
        nextBook.id = 'next id';

        const nextState = bookReducer(previousState, {
          type: ActionTypes.FETCH_BOOK_SUCCESS,
          book: nextBook,
          receivedAt: 12345
        });

        expect(nextState.propertyToRemain).to.equal(previousState.propertyToRemain);
        expect(nextState.id).to.equal(nextBook.id);
        expect(nextState.isFetching).to.be.false;
        expect(nextState.title).to.equal('Airindream');
        expect(nextState.lastUpdated).to.equal(12345);
      });

      it('Should set `isFetching` to false on a failed request', function respondToErrors() {
        const nextState = bookReducer(undefined, {
          type: ActionTypes.FETCH_BOOK_FAILURE
        });

        expect(nextState.isFetching).to.be.false;
      });
    });
  });
});
