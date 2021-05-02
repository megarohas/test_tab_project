import axios from "axios";

export function setActiveTabID(id) {
  return {
    type: "SET_ACTIVE_TAB_ID",
    payload: id,
  };
}
export function incrementList() {
  return {
    type: "INCREMENT_LIST",
  };
}
export function decrementList(id) {
  return {
    type: "DECREMENT_LIST",
  };
}

export function getTabsData() {
  return (dispatch) => {
    axios.get("/api/tabs").then((response) => {
      dispatch({
        type: "SET_TABS",
        payload: (response && response.data && response.data.tabs) || [],
      });
    });
  };
}
