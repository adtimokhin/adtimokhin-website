import React, { Component } from "react";
// Copied from https://stackoverflow.com/questions/39426083/update-react-component-every-second

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = { radius: 20 };
  }
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-screen h-screen">
        <circle
          cx={this.props.x}
          cy={this.props.y}
          r={this.state.radius}
          fill="red"
        />
      </svg>
    );
  }
  componentDidMount() {
    // Increasing circle's radius every millisecond.
    this.interval = setInterval(() => {
      this.setState({ radius: this.state.radius + 1 });
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Circle;
