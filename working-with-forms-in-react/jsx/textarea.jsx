class Textarea extends React.Component{
	constructor(props){
		super(props)
		this.state={description:' first description'}
		this.handleTextarea=this.handleTextarea.bind(this)
	}
	handleTextarea(event){
		console.log('onChange event: ', event.target.value)
	}
	render(){
		return <textarea name="description" value={this.state.description} onChange={this.handleTextarea}/>
	}
}