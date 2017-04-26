import React from 'react';

class Sideright_img extends React.Component{
	constructor(props){
		super(props);
		this.state={
			ss:'sasa',
		}


	}


	handlechange(){
		alert('123');
	}

	render(){	
		return<img 
		src={'./source/image/siderightnav_logo/srlogo'+this.props.num+'.png'} 
		className={this.state.ss}  onClick={this.handlechange}/>;

	}
}


export default Sideright_img;