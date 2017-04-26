import React from 'react';

class Sideright_img extends React.Component{
	constructor(props){
		super(props);
		this.state={
			numx:this.props.num,
		}
		this.handlechange = this.handlechange.bind(this);


	}

	

	handlechange(){
		alert(this.state.numx);
}

	render(){
		var topheight=this.props.topvalue+'%';
		return<img 
		src={'./source/image/siderightnav_logo/srlogo'+this.state.numx+'.png'} 
		  onClick={this.handlechange}

		style={{top:topheight}}
		/>;

	}
}


export default Sideright_img;