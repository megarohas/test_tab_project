import { connect } from "react-redux";
import React from "react";

import styles from "../styles/list.module.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { list } = this.props;
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
  }
}

const mapStateToProps = (store) => {
  return {
    list: store.list,
  };
};

export default connect(mapStateToProps, () => {})(List);
