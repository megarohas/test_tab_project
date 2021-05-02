import { connect } from "react-redux";
import React from "react";

import List from "./list";
import ListButtons from "./list_buttons";

const ListWrapper = () => {
  return (
    <React.Fragment>
      <List />
      <ListButtons />
    </React.Fragment>
  );
};

export default ListWrapper;
