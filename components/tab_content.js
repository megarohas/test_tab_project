import { connect } from "react-redux";
import React from "react";

import ListWrapper from "./list_wrapper";

class TabContent extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let { tab } = this.props;
    if (tab.type == "custom") return <ListWrapper />;
    return <React.Fragment>{tab.content}</React.Fragment>;
  }
}

const mapStateToProps = (store) => {
  return {
    tab: store.tabs.filter((tab) => {
      return tab.id == store.active_tab_id;
    })[0] || { content: "", type: "" },
  };
};

export default connect(mapStateToProps, () => {
  return {};
})(TabContent);
