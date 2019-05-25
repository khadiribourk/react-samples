class Checkbox extends React.Component{
	constructor(props){
		super(props)
		this.state={
			checkeboxGroup:{
				angular:false,
				react:true,
				polymer:false,
				backbonjs:false
			}
		}
		this.handleCheckbox=this.handleCheckbox.bind(this)
	}
	handleCheckbox(event){
		let obj=Object.assign(this.state.checkeboxGroup)
		obj[event.target.value]=even.target.checked
		this.setState({checkeboxGroup:obj})
	}
	render(){
		return <form>
		<input type="checkbox" name="checkeboxGroup" value='angular'
		  checked={this.state.checkeboxGroup['angular']}
		  onChange={this.handleCheckbox}/>
		<input type="checkbox" name="checkeboxGroup" value='react'
		  checked={this.state.checkeboxGroup['react']}
		  onChange={this.handleCheckbox}/>
		<input type="checkbox" name="checkeboxGroup" value='polymer'
		  checked={this.state.checkeboxGroup['polymer']}
		  onChange={this.handleCheckbox}/>
		 <input type="checkbox" name="checkeboxGroup" value='backbonjs'
		  checked={this.state.checkeboxGroup['backbonjs']}
		  onChange={this.handleCheckbox}/>
		</form>
	}
}