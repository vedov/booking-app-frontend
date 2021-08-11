import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import Reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const initialState = {};
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleWare = composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(Reducers, initialState, middleWare);

export default store;
