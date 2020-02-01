import { FirestoreReducer } from "react-redux-firebase";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { load, save } from "redux-localstorage-simple";
import reduxLogger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
const middleware = [reduxLogger, thunk];

export interface SystemState {
  firestore: FirestoreReducer.Reducer;
}
const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

export default store;
