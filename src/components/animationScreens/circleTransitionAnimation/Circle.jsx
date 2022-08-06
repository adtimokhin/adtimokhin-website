import React, { Component } from "react";
// Copied from https://stackoverflow.com/questions/39426083/update-react-component-every-second

function calculateDisatnceToPoint(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = { radius: 20, deleteCircle: false };

    // calculating the maximum radius that the circle must get to
    this.maximumRadius = -1;

    const cornersCoordinates = [
      { x: 0, y: 0 },
      { x: window.innerWidth, y: 0 },
      { x: window.innerWidth, y: window.innerHeight },
      { x: 0, y: window.innerHeight },
    ];

    for (let i = 0; i < cornersCoordinates.length; i++) {
      const coordinates = cornersCoordinates[i];

      const distance = Math.round(
        calculateDisatnceToPoint(props.x, props.y, coordinates.x, coordinates.y)
      );

      if (distance > this.maximumRadius) {
        this.maximumRadius = distance;
      }
    }
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-screen h-screen">
        <circle
          cx={this.props.x}
          cy={this.props.y}
          r={this.state.radius}
          fill="#101010"
          // #101010 - the gray-900 colour from thre tailwind css classes
        />
      </svg>
    );
  }
  componentDidMount() {
    // Increasing circle's radius every millisecond.
    // TODO: Transition is too long!!
    this.interval = setInterval(() => {
      // When circle reaches its maximum size it will be removed from parent element
      if (this.state.radius >= this.maximumRadius && !this.state.deleteCircle) {
        this.setState({ deleteCircle: true });
        this.props.onReachingMaximumRadius();
      }
      this.setState({ radius: this.state.radius + 1 });
    }, 1);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Circle;
