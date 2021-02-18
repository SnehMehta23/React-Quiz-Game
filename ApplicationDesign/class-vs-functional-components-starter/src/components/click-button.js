import React, { useState } from "react";

// Notes:
// - useState is how we create state variables. We can useState multiple times to create multiple
// pieces of state.
// - In a functional component, we use the setter returned from useState to update the state.
// Converting the class component into a functional component
function ClickButton() {
  const [clicks, setClicks] = useState(0);
  const onButtonClick = () => setClicks(clicks + 1);
  return <button onClick={onButtonClick}>Clicks: {clicks}</button>;
}

// Notes:
// -Constructor is called when the class is instantiated. Initial state is defined there.
// - state is stored as a single object.
// - In a class component we use this.setState to change the value of our state.
class ClickButtonClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  render() {
    return (
      <button onClick={this.onButtonClick}>Clicks: {this.state.clicks}</button>
    );
  }
}

export default ClickButton;
// export default ClickButtonClassComponent;
