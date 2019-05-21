class ClickCounterButton extends React.Component {
	render() {
		return React.createElement(
			"button",
			{ onClick: this.props.handler, classeName: "btn btn-info" },
			"Click me and look at the counter below"
		);
	}

}