import React from "react"
import Display from "./Display"
import Minusbtn from "./Minusbtn"
import Refreshbtn from "./Refreshbtn"
import Plusbtn from "./Plusbtn"


class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {result:0}
	}

	render(){
		return(
			<div>
				<h1> React Clicker </h1>

				<Display result={this.state.result}/>
				<Minusbtn />
				<Refreshbtn />
				<Plusbtn />
			</div>
			)
	}
}

export default App