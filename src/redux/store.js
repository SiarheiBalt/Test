import { createStore, combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { calendarReducer } from "./reducers/calendarReducer";
import { infoReducer } from "./reducers/infoReducer";

export const store = createStore(
  combineReducers({
    calendarReducer,
    authReducer,
    infoReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
