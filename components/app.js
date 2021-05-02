import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React from "react";

import { getTabsData } from "../actions";
import TabWrapper from "./tab_wrapper";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getTabsData();
  }

  render() {
    return (
      <React.Fragment>
        <TabWrapper />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTabsData: bindActionCreators(getTabsData, dispatch),
});

export default connect(() => {}, mapDispatchToProps)(App);
