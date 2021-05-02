import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React from "react";

import { debounce } from "../helpers/helpers";
import { incrementList, decrementList } from "../redux_tools/actions.js";
import styles from "../styles/list.module.css";

class ListButtons extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let { incrementList, decrementList } = this.props;
    return (
      <div className={styles.list_button_wrapper}>
        <button
          className={styles.list_button}
          onClick={debounce(incrementList, 5000)}
        >
          Add
        </button>
        <button className={styles.list_button} onClick={decrementList}>
          Remove
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementList: bindActionCreators(incrementList, dispatch),
  decrementList: bindActionCreators(decrementList, dispatch),
});

export default connect(() => {
  return {};
}, mapDispatchToProps)(ListButtons);
