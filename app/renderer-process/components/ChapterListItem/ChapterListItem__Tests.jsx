import React from "react";
import { shallow } from "enzyme";
import ChapterListItem from "./ChapterListItem";

describe("Components", function() {
  describe("ChapterListItem", function() {
    beforeEach(function() {
      this.book = {
        id: "funky-monkey"
      };

      this.chapter = {
        id: "funky-monkey-1",
        title: "The First Chapter of Funky Monkey",
        number: "1"
      };

      this.component = shallow(<ChapterListItem chapter={this.chapter} book={this.book} />);
    });

    it("Should render a `Link` based on the book and chapter props", function renderLi() {
      const to = `/book/${this.book.id}/chapter/${this.chapter.id}`;

      expect(this.component).to.exist;
      expect(this.component.hasClass("chapter-list-item")).to.be.true;
      expect(this.component.prop("to")).to.equal(to);
      expect(this.component.shallow().text()).to.equal(this.chapter.number);
    });
  });
});
