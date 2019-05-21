class MyCounter extends React.Component {
	render() {
		return React.createElement(
			"span",
			null,
			" you have clicked the counter button ",
			this.props.value,
			" times  "
		);
	}
}