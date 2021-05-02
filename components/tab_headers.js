import React from "react";

const TabHeaders = ({ tabs, click_action }) => {
  return (
    <div>
      {tabs.map((tab) => (
        <div
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
