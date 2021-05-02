import { connect } from "react-redux";
import React from "react";

import TabContent from "./tab_content";
import TabsHeaders from "./tabs_headers";
import styles from "../styles/tabs.module.css";

const TabsWrapper = () => {
  return (
    <div className={styles.tabs_wrapper_body}>
      <TabsHeaders />
      <TabContent />
    </div>
  );
};

export default TabsWrapper;
