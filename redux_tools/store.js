import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { useMemo } from "react";
import thunk from "redux-thunk";

import { getRandomString, removeRandomItem } from "../helpers/helpers";

let store;

const initialState = {
  list: [],
  active_tab_id: 0,
  tabs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TABS":
      return {
        ...state,
        tabs: action.payload,
      };
    case "SET_ACTIVE_TAB_ID":
      return {
        ...state,
        active_tab_id: action.payload,
      };
    case "INCREMENT_LIST":
      return {
        ...state,
        list: [...state.list, getRandomString()],
      };
    case "DECREMENT_LIST":
      return {
        ...state,
        list: removeRandomItem(state.list),
      };
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
