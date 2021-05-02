import React from "react";

import styles from "../styles/list.module.css";

const List = ({ list }) => {
  if (list.length == 0)
    return <div className={styles.list_no_content}>NO CONTENT</div>;
  return (
    <div className={styles.list_wrapper}>
      {list.map((item, index) => (
        <div className={styles.list_item} key={`renderListElement${index}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
