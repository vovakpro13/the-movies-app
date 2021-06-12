import {applyMiddleware, createStore} from "redux";
import {default as reducers} from './reducers';
import thunk from "redux-thunk";

export const store = createStore(reducers, applyMiddleware(thunk));

