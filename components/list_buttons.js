import React from "react";

import { debounce } from "../helpers/helpers";

import styles from "../styles/list.module.css";

const ListButtons = ({ add_action, remove_action }) => {
  return (
    <div className={styles.list_button_wrapper}>
      <button
        className={styles.list_button}
        onClick={debounce(add_action, 5000)}
      >
        Add
      </button>
      <button className={styles.list_button} onClick={remove_action}>
        Remove
      </button>
    </div>
  );
};

export default ListButtons;
