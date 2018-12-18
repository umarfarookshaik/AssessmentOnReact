import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { counters, onDecrement, onIncrement, onDelete } = this.props;
    return (
      <div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
