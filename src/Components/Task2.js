import React, { Component } from 'react';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, 
    };
  }

  componentDidMount() {
    console.log('Component Mounted'); // Log when the component is mounted
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Updated'); // Log when the component is updated
    if (prevState.count !== this.state.count) {
      console.log(`Count updated from ${prevState.count} to ${this.state.count}`);
    }
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 })); // Method to increment count
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button> 
      </div>
    );
  }
}

export default LifecycleComponent;
