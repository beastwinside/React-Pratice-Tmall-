import React from 'react';
import Show_box_left from './Show_box_left';
import Show_box_right from './Show_box_right';
import Show_box_main from './Show_box_main';


class Show_container extends React.Component{

	render(){
		return<div className="show_container">
		<Show_box_left />
		<Show_box_main />
		<Show_box_right />
		
		</div>;
	}
}

export default Show_container;