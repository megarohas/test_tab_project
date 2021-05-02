import { connect } from "react-redux";
import React from "react";

import List from "./list";
import ListButtons from "./list_buttons";

class ListTabContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <List />
        <ListButtons />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListTabContent);
