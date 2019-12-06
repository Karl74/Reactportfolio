import React from "react"
import Display from "./Display"
import Minusbtn from "./Minusbtn"
import Refreshbtn from "./Refreshbtn"
import Plusbtn from "./Plusbtn"


class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {result:0}
		this.countUp = this.countUp.bind(this)
		this.countDown = this.countDown.bind(this)
		this.zero = this.zero.bind(this)
	}

	countUp(){
		let count = this.state.result
		count ++
		this.setState({result:count})
	}

	countDown (){
		let count = this.state.result
		count --
		this.setState({result:count})

	}

	zero(){
		this.setState({result:0})
	}

	render(){
		return(
			<div>
				<div className="header">
					<h1> React Clicker </h1>
				</div>

				<div className="panelBox">
					<div className="panel">
						<div className="screenDisplay">
							<Display result={this.state.result}/>
						</div>

						<div className="controlHolder">
							<Minusbtn onClick={this.countDown} />
							<Refreshbtn onClick={this.zero}/>
							<Plusbtn onClick={this.countUp}/>
						</div>
					</div>	
				</div>	
			
			</div>
			)
	}
}

export default App