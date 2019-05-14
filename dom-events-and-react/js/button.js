class SaveButton extends React.Component {
	constructor(props) {}

	handleSave(event) {
		console.log(this, event);
	}
	render() {
		console.log('button clicked');
		return React.createElement(
			'button',
			{ onClick: this.handleSave.bind(this) },
			'Save'
		);
	}
}