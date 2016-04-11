import Rx from 'rx';
import { forEach } from 'lodash';
import { getData, getData$, getLibrary$, getBook$, getChapter$ } from './mangaEdenApi';
import listApiFixture from 'test/fixtures/mangaEden/listApiFixture.js';
import mangaApiFixture from 'test/fixtures/mangaEden/mangaApiFixture.js';
import chapterApiFixture from 'test/fixtures/mangaEden/chapterApiFixture.js';

describe('Data', function() {
  describe('Services', function() {
    describe('MangaEden', function() {
      beforeEach(function () {
        this.xhr = sinon.useFakeXMLHttpRequest();
        this.xhr.onCreate = req => this.request = req;
      });

      afterEach(function () {
        this.request = null;
        this.xhr.restore();
      });

      it('should get the manga library', function() {
        const observableAction = {
          onNext: sinon.spy(),
          onError: sinon.spy(),
          onCompleted: sinon.spy()
        };
        getLibrary$().forEach(observableAction);

        this.request.respond(
          200,
          { 'Content-Type': 'application/json' },
          JSON.stringify(listApiFixture)
        );

        expect(observableAction.onNext.calledOnce);
        expect(observableAction.onCompleted.calledOnce);
      });

      it('should get manga book information', function() {
        const mangaID = '4e70e9f6c092255ef7004336';
        const observableAction = {
          onNext: sinon.spy(),
          onError: sinon.spy(),
          onCompleted: sinon.spy()
        };

        getBook$(mangaID).forEach(observableAction);

        this.request.respond(
          200,
          { 'Content-Type': 'application/json' },
          JSON.stringify(mangaApiFixture)
        );

        expect(observableAction.onNext.calledOnce);
        expect(observableAction.onCompleted.calledOnce);
      });

      it('should get a chapter\'s pages', function() {
        const chapterID = '4e711cb0c09225616d037cc2';
        const observableAction = {
          onNext: sinon.spy(),
          onError: sinon.spy(),
          onCompleted: sinon.spy()
        };
        getChapter$(chapterID).forEach(observableAction);

        this.request.respond(
          200,
          { 'Content-Type': 'application/json' },
          JSON.stringify(chapterApiFixture)
        );

        expect(observableAction.onNext.calledOnce);
        expect(observableAction.onCompleted.calledOnce);
      });
    });
  });
});
