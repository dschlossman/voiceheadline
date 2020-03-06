import React from 'react'
import './Headline.css';
import FontSizeChanger from 'react-font-size-changer';



class Headline extends React.Component {
	constructor() {
		super()
		this.state = {
			voiceText: "HELLO VOICE",
			fontSize: {fontSize: "35px"}
		}
	}

  handleChange = (event) => {
    this.setState({voiceText: event.target.value})
  }

  handleButton = (event) => {
  	var c = document.getElementById('target');
  	var t = c.getContext('test');
  	window.open('', document.getElementById('2d').toDataURL());



  	window.open('', document.getElementById('target').toDataURL());

  }



	render() {
		return(
			<div className="container">
					<div className="title">
					<h1> Voice headline generator </h1>
					<h3> Enter text below and see the mageic..</h3>
					</div>
					<div id="target" className="voiceBox"> 
						<p className="content" style={this.state.fontSize}> {this.state.voiceText} </p> 
					</div>

				
				<div id="test" className="text input">
				<input type="text" name="voiceText" value={this.state.voiceText} placeholder="Hello World" onChange={this.handleChange} />
				<input type="button" name="button" label="button" onClick={this.handleButton} />
				</div>
				<div>
					<FontSizeChanger
					  targets={['#target .content']}
					  options={{
					    stepSize: 10,
					    range: 10
					  }}
					  customButtons={{
					    up: "bigger",
					    down: "smaller",
					    style: {
					      backgroundColor: 'red',
					      color: 'white',
					      WebkitBoxSizing: 'border-box',
					      WebkitBorderRadius: '5px',
					      width: '60px'
					    },
					    buttonsMargin: 10
					  }}
					/>
				</div>
				<canvas id="canvas" width="450" height="450">

				</canvas>
			</div>


			        
		)
	}
} 

export default Headline;