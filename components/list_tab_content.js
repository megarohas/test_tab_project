import React from "react";

import { getRandomString, removeRandomItem } from "../helpers/helpers";

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

  renderList() {
    return (
      <div>
        {this.state.list.map((item, index) => (
          <div key={`renderListElement${index}`}>{item}</div>
        ))}
      </div>
    );
  }
  renderButtons() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleRemove}>Remove</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderList()}
        {this.renderButtons()}
      </div>
    );
  }
}

ListTabContent.defaultProps = {};

export default ListTabContent;
