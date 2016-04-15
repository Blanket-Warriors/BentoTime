import React from "react";
import { Router, Route } from "react-router";
import { render, findDOMNode } from "react-dom";
import { createRenderer } from "react/lib/ReactTestUtils";
import createHistory from "history/lib/createMemoryHistory";
import Link from "./Link";

describe("Components", function() {
  describe("Link", function() {
    beforeEach(function() {
      this.node = document.createElement("div");
      this.shallowRenderer = createRenderer();
    });

    xit("Should render an `a` tag with a correct address", function() {
      class LinkWrapper extends React.Component {
        render() {
          return (
            <Link to="/blog" path="/home" query={{the: "query"}} hash="#hash">
              Home
            </Link>
          );
        }
      }

      render((
        <Router history={createHistory("/home")}>
          <Route path="/home" component={LinkWrapper} />
        </Router>
        ), this.node, function() {
          const a = this.node.querySelector("a");
          expect(a.getAttribute("href")).to.equal("/blog?the=query#hash");
        });
    });
  });
});
