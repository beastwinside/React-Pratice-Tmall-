import React from 'react';
import Show_box_left_top from '../components/Show_box_left_top';

class Show_box_left extends React.Component{
	

	render(){
		return<div className="show_box_left">
		<Show_box_left_top />
		<img className="showbox_left_img" alt="图片" />
		</div>;
	}
}

export default Show_box_left;