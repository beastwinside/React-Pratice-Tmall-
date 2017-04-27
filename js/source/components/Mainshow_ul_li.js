import React from 'react'

class Mainshow_ul_li extends React.Component{
	constructor(props){
		super(props);
		this.state={
			a1:this.props.a1p,
			a2:this.props.a2p,
			a3:this.props.a3p,
			a4:this.props.a4p,
			at:this.props.atp,

		};

	}




	render(){
		return <li>
		<div className='xxxx'></div>
		<img src={this.props.li_img_url}/>
		<span>{this.state.at}	
		</span>
		<p>
		<a>{this.state.a1} </a>
		<a>{this.state.a2} </a>
		<a>{this.state.a3} </a>
		<a>{this.state.a4} </a>
		</p>
		</li>;
	}

}

export default Mainshow_ul_li;