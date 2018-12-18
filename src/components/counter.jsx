import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Previous Props", prevProps);
    console.log("Previous States", prevState);
    if (prevProps.counter.value === this.props.counter.value) {
      console.log("didn't updated!!!");
    }
  }

  componentWillUnmount() {
    console.log("Component - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div className="jumbotron">
        <h4>Counter# {this.props.counter.id}</h4>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm ml-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes +=
      this.props.counter.value === 0
        ? "warning"
        : this.props.counter.value < 0
          ? "danger"
          : this.props.counter.value > 0
            ? "primary"
            : 0;
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
