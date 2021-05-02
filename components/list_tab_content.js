import React from "react";

import { getRandomString, removeRandomItem } from "../helpers/helpers";
import List from "./list";
import ListButtons from "./list_buttons";

class ListTabContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    this.setState({ list: [...this.state.list, getRandomString()] });
  }

  handleRemove() {
    this.setState({ list: removeRandomItem(this.state.list) });
  }

  render() {
    return (
      <React.Fragment>
        <List list={this.state.list} />
        <ListButtons
          add_action={this.handleAdd}
          remove_action={this.handleRemove}
        />
      </React.Fragment>
    );
  }
}

ListTabContent.defaultProps = {};

export default ListTabContent;
