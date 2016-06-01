import React from "react";
import { shallow } from "enzyme";
import ChapterView from "./ChapterView";

describe("Containers", function() {
  describe("ChapterView", function() {
    beforeEach(function() {
      this.book = { id: "12345" };
      this.chapter = {
        title: "Attack of the Mutant Bears from Neptune",
        pages: [{ image: "theimage.src", id: "12355" }]
      };

      this.component = shallow(<ChapterView chapter={this.chapter} book={this.book} />);
    });

    it("Should render a `div` with a class of `chapter-view`", function() {
      expect(this.component.type()).to.equal("div");
      expect(this.component.hasClass("chapter-view")).to.be.true;
    });

    it("Should render back buttons", function() {
      const buttons = this.component.find(".chapter-view__back");
      expect(buttons).to.have.length(1);
      buttons.forEach( button => {
        expect(button.is("Link")).to.be.true;
        expect(button.shallow().text()).to.equal("Back");
        expect(button.prop("to")).to.equal(`/book/${this.book.id}`);
      });
    });

    it("Should render a PageList component, and pass it all of our pages", function() {
      const pageList = this.component.find("PageList");
      expect(pageList.prop("pages")).to.equal(this.chapter.pages);
    });

    it("Should render a Loading component if no book is passed in as a prop", function() {
      this.component = shallow(<ChapterView />);
      expect(this.component.text()).to.equal("loading...");
    });
  });
});
