import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { threeKitUpdate } from "./middleware/threeKitUpdate";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, threeKitUpdate))
);

export default store;
