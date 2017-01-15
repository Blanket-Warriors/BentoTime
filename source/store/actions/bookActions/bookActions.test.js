jest.mock("store/services/services.js");

import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import callApiMiddleware from "store/storeCreator/callApiMiddleware/callApiMiddleware.js";

import * as types from "../actionTypes.js";
import * as actions from "./bookActions.js";

const middlewares = [ thunk, callApiMiddleware ];
const mockStore = configureMockStore(middlewares);

it("Book actions file", function() {
	const store = mockStore({});
	return store
		.dispatch(actions.fetchBook())
		.then(() => expect(store.getActions()).toMatchSnapshot());
});
