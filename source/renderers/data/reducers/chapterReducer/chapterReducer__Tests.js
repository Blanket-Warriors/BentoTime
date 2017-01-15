import chapterFixture from "test/fixtures/models/chapterFixture";
import * as ActionTypes from "app/renderer-process/data/actions/ActionTypes";

import Chapter from "test/stubs/models/ChapterModel";

var chapterReducer;

describe("Data", function() {
  describe("Reducers", function() {
    describe("ChapterReducer", function() {
      beforeEach(function() {
        var chapterReducerInjector = require("inject!renderer/data/reducers/chapterReducer");

        this.merge = sinon.stub();
        Chapter.prototype.merge = this.merge;
        chapterReducer = chapterReducerInjector({
          "renderer/data/models/Chapter": Chapter
        });
      });

      it("Should set `isFetching` when a request is initiated", function() {
        chapterReducer(undefined, {
          type: ActionTypes.FETCH_CHAPTER_REQUEST
        });

        const mergeFirstCallArgs = this.merge.args[0];
        const nextState = mergeFirstCallArgs[0];
        expect(nextState.isFetching).to.be.true;
      });

      it("Should merge state on successful update", function() {

        chapterReducer(undefined, {
          type: ActionTypes.FETCH_CHAPTER_SUCCESS,
          receivedAt: 12345,
          chapter: chapterFixture
        });

        const mergeFirstCallArgs = this.merge.args[0];
        const nextState = mergeFirstCallArgs[0];
        expect(nextState.id).to.equal(chapterFixture.id);
        expect(nextState.isFetching).to.be.false;
        expect(nextState.lastUpdated).to.equal(12345);
        expect(nextState.pages).to.deep.equal(chapterFixture.pages);
      });

      it("Should set `isFetching` to false on a failed request", function() {
        chapterReducer(undefined, {
          type: ActionTypes.FETCH_CHAPTER_FAILURE
        });

        const mergeFirstCallArgs = this.merge.args[0];
        const nextState = mergeFirstCallArgs[0];
        expect(nextState.isFetching).to.be.false;
      });
    });
  });
});
