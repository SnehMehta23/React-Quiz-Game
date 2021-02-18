import React from "react";

// Function is just a re-usable chunk of code
// React calls this function and puts the returned JSX on the page.
function WelcomeMessage(props) {
  return <p>Welcome, {props.name}!</p>;
}

// Notes:
// -Class is a blueprint, from that blueprint you can create objects (instances) much like C#
// -When you put a class component in your JSX, react creates an instance and uses the render
// method to figure out what content should go on the page.
class WelcomeMessageClassComponent extends React.Component {
  render() {
    // this is equivalent to the reference to that object that is created from the blueprint
    return <p>Welcome, {this.props.name}!</p>;
  }
}

export default WelcomeMessage;
