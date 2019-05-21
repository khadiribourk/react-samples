class ClickCounterButton extends React.Component {
  render() {
    console.log("ClickCounterButton");
    return React.createElement(
      "button",
      {
        onClick: this.props.handler,
        className: "btn btn-danger" },
      "Increase Volume (Current volume is ",
      this.props.counter,
      ")"
    );
  }
}