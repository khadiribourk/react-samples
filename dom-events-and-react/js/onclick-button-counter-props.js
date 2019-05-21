class OnClickButtonCounterProps extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = { counter: 0 };
		console.log("constructor");
	}
	handleClick(event) {
		this.setState({ counter: ++this.state.counter });
		console.log("counter : " + this.state.counter);
	}
	render() {
		console.log("render");
		return React.createElement(
			"div",
			null,
			React.createElement(ClickCounterButton, {
				counter: this.state.counter,
				handler: this.handleClick })
		);
	}
}