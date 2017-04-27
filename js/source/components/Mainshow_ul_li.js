import React from 'react'

class Mainshow_ul_li extends React.Component{
	constructor(props){
		super(props);
		this.state={
			a1:this.props.a1p,
			a2:this.props.a2p,
			a3:this.props.a3p,
      		a4:this.props.a4p,

		};

	}




	render(){
		return <li>
		<img src={this.props.li_img_url}/>
		<span>进口商品</span>
		<p>
		<a>{this.state.a1}</a>
		<a>{this.state.a2} </a>
		<a>{this.state.a3} </a>
		<a>{this.state.a4} </a>
		</p>
		</li>;
	}

}

export default Mainshow_ul_li;