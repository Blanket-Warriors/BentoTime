import React from "react";
import { shallow } from "enzyme";
import ChapterList from "app/components/ChapterList";

describe("Components", function() {
  describe("ChapterList", function() {
    beforeEach(function() {
      this.book = {
        id: "flappy-monkey-attack",
        title: "Flappy Monkey Attack!!!",
        chapters: {
          "flappy-monkey": {
            id: "flappy-monkey",
            title: "Flappy Monkey Banana Attack",
            number: 1
          },
          "flappy-monkey-2": {
            id: "flappy-monkey-2",
            title: "Return of the Flappy Monkey",
            number: 2
          }
        }
      };

      this.component = shallow(<ChapterList book={this.book} />);
    });

    it("Should render an `ul` tag", function renderUl() {
      expect(this.component.type()).to.equal("ul");
    });

    it("Should display all chapter data as Chapter List Items", function renderChapters() {
      expect(this.component.find("ChapterListItem")).to.have.length(2);
    });
  });
});
