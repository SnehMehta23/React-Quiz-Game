import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    // Clean up / unsubscribe
    return () => clearInterval(intervalId);
  }, []);

  return <p>{seconds} seconds have elapsed.</p>;
}

// Notes:
// -Class components use lifecycle methods like componentDidMount and componentWillUnmount.
// -In a class component, to share a variable across multiple methods, we create a new property.
class TimerClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
    };
    this.intervalId = null;
  }

  // Used for initialization
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  // Used for cleanup
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <p>{this.state.seconds} seconds have elapsed.</p>;
  }
}

export default Timer;
// export default TimerClassComponent;
