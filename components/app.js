import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React from "react";

import { getTabsData } from "../redux_tools/actions";
import TabsWrapper from "./tabs_wrapper";

class App extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.getTabsData();
  }

  render() {
    return (
      <React.Fragment>
        <TabsWrapper />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTabsData: bindActionCreators(getTabsData, dispatch),
});

export default connect(() => {
  return {};
}, mapDispatchToProps)(App);
