import React from "react";

import styles from "../styles/tab.module.css";

const TabHeaders = ({ tabs, click_action, active_tab_id }) => {
  return (
    <div className={styles.tab_headers_wrapper}>
      {tabs.map((tab) => (
        <div
          className={
            tab.id == active_tab_id
              ? styles.tab_header_active
              : styles.tab_header
          }
          key={`renderTabHeadersElement${tab.id}`}
          onClick={() => click_action(tab.id)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default TabHeaders;
