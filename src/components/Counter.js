import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>{this.title}</p>
        <p>Counter value: {this.state.count}</p>
        <button
          onClick={(event) => {
            const newCount = this.state.count + 1;
            this.setState({ count: newCount });
          }}
        >
          Add Count
        </button>
      </div>
    );
  }
}

export default Counter;