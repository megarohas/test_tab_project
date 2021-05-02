import React from "react";
import TabWrapper from "./tab_wrapper.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          id: 0,
          type: "text",
          title: "tab 0",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          id: 1,
          type: "text",
          title: "tab 1",
          content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        {
          id: 2,
          type: "text",
          title: "tab 2",
          content:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <TabWrapper tabs={this.state.tabs} />
      </div>
    );
  }
}

App.defaultProps = {};

export default App;