import { clone } from "lodash";
import chapterReducer from "./chapterReducer";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";
import chapterFixture from "test/fixtures/models/chapterFixture";

describe("Data", function() {
  describe("Reducers", function() {
    describe("ChapterReducer", function() {
      xit("Should set `isFetching` when a request is initiated", function setIsFetching() {
        const nextState = chapterReducer(undefined, {
          type: ActionTypes.FETCH_CHAPTER_REQUEST
        });

        expect(nextState.isFetching).to.be.true;
      });

      xit("Should populate empty states correctly on success", function SetEmptyState() {
        const nextChapter = clone(chapterFixture);
        const nextState = chapterReducer(undefined, {
          type: ActionTypes.FETCH_CHAPTER_SUCCESS,
          chapter: nextChapter,
          receivedAt: 12345
        });

        expect(nextState.id).to.equal(chapterFixture.id);
        expect(nextState.lastUpdated).to.equal(12345);
        expect(nextState.pages).to.deep.equal(chapterFixture.pages);
      });

      xit("Should update state on successful update", function SetActiveState() {
        const previousState = clone(chapterFixture);
        previousState.propertyToRemain = "old state";
        previousState.id = "old id";

        const nextChapter = clone(chapterFixture);
        nextChapter.id = "next id";

        const nextState = chapterReducer(previousState, {
          type: ActionTypes.FETCH_CHAPTER_SUCCESS,
          chapter: nextChapter,
          receivedAt: 12345
        });

        expect(nextState.propertyToRemain).to.equal(previousState.propertyToRemain);
        expect(nextState.id).to.equal(nextChapter.id);
        expect(nextState.isFetching).to.equal(false);
        expect(nextState.lastUpdated).to.equal(12345);
        expect(nextState.pages).to.deep.equal(chapterFixture.pages);
      });

      xit("Should set `isFetching` to false on a failed request", function respondErrors() {
        const oldState = { isFetching: true };

        const nextState = chapterReducer(oldState, {
          type: ActionTypes.FETCH_CHAPTER_FAILURE
        });

        expect(oldState.isFetching).to.be.true;
        expect(nextState.isFetching).to.be.false;
      });
    });
  });
});
