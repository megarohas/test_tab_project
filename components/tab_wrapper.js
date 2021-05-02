import { connect } from "react-redux";
import React from "react";

import TabContent from "./tab_content";
import TabHeaders from "./tab_headers";
import styles from "../styles/tab.module.css";

class TabWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.tab_wrapper_body}>
        <TabHeaders />
        <TabContent />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TabWrapper);
