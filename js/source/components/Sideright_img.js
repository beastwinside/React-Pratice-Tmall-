import React from 'react';

class Sideright_img extends React.Component{
	constructor(props){
		super(props);
		this.state={
			numx:this.props.num,
			display:'none',
		}
		this.handlemouseenter = this.handlemouseenter.bind(this);
		this.handlemouseleave = this.handlemouseleave.bind(this);

	}

	handlemouseenter(){
		var x='1'+this.props.num;
		this.setState({
			numx:x,
			display:'block',
		});
	}

	handlemouseleave(){
		this.setState({
			numx:this.props.num,
			display:'none',
		})
	}

	render(){
		var topheight=this.props.topvalue+'%';
		return<div style={{top:topheight}}
		onMouseEnter={this.handlemouseenter}
		onMouseLeave={this.handlemouseleave}>
		<span style={{display:this.state.display,
		}}>{this.props.spanvalue}</span>
		<img 
		src={'./source/image/siderightnav_logo/srlogo'+this.state.numx+'.png'} 
		
		
		/></div>;

	}
}


export default Sideright_img;