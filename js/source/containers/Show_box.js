import React from 'react';
import Show_container from './Show_container';

class Show_box extends React.Component{

	render(){
		return<div className="show_box">
		<header className="show_headerr">
		<span>{this.props.topvalue}</span>
		</header>
		<Show_container/>
		</div>;
	}
}

export default Show_box;