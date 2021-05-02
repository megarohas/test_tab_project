import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React from "react";

import { setActiveTabID } from "../redux_tools/actions";
import styles from "../styles/tabs.module.css";

class TabsHeaders extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let { tabs, active_tab_id, setActiveTabID } = this.props;
    return (
      <div className={styles.tabs_headers_wrapper}>
        {tabs.map((tab) => (
          <div
            className={
              tab.id == active_tab_id
                ? styles.tab_header_active
                : styles.tab_header
            }
            key={`renderTabHeadersElement${tab.id}`}
            onClick={() => setActiveTabID(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    tabs: store.tabs,
    active_tab_id: store.active_tab_id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setActiveTabID: bindActionCreators(setActiveTabID, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabsHeaders);
