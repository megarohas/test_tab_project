import { connect } from "react-redux";
import React from "react";

import ListTabContent from "./list_tab_content";

class TabContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { tab } = this.props;
    if (tab.type == "custom") return <ListTabContent />;
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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TabContent);
