import React from "react";

import { debounce } from "../helpers/helpers";

const ListButtons = ({ add_action, remove_action }) => {
  return (
    <div>
      <button onClick={debounce(add_action, 5000)}>Add</button>
      <button onClick={remove_action}>Remove</button>
    </div>
  );
};

export default ListButtons;
