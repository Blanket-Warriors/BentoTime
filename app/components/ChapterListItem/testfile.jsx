import React from "react";
import { shallow } from "enzyme";
import ChapterListItem from "app/components/ChapterListItem";

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

    it("Should render an `li` tag", function renderLi() {
      expect(this.component.type()).to.equal("li");
    });

    it("Should render a `Link` based on the book and chapter props", function renderLi() {
      const Link = this.component.find("Link");
      const to = `/book/${this.book.id}/chapter/${this.chapter.id}`;

      expect(Link).to.exist;
      expect(Link.hasClass("chapter-list-item__name")).to.be.true;
      expect(Link.prop("to")).to.equal(to);
      expect(Link.shallow().text()).to.equal(this.chapter.number);
    });
  });
});
