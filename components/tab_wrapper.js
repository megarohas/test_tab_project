import React from "react";

import TabContent from "./tab_content";
import TabHeaders from "./tab_headers";

import styles from "../styles/tab.module.css";

class TabWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: props.tabs,
      active_tab_id: props.tabs.length && props.tabs[0].id,
    };
  }

  getActiveTab() {
    return (this.state.tabs.filter((tab) => {
      return tab.id == this.state.active_tab_id;
    }) || [{ content: "" }])[0];
  }

  render() {
    return (
      <div className={styles.tab_wrapper_body}>
        <TabHeaders
          tabs={this.state.tabs}
          click_action={(id) => {
            this.setState({ active_tab_id: id });
          }}
          active_tab_id={this.state.active_tab_id}
        />
        <TabContent tab={this.getActiveTab()} />
      </div>
    );
  }
}

TabWrapper.defaultProps = { tabs: [] };

export default TabWrapper;
