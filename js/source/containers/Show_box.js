import React from 'react';

import Show_box_main_cell from '../components/Show_box_main_cell';


class Show_box extends React.Component{

	render(){
		return<div className="show_box">
		<header className="show_headerr">
		<span>{this.props.topvalue}</span>
		</header>


		<div className="show_container">
		<div className="show_box_left">
		
		<div className="show_box_left_top" >
		<span className="showbox_9item"></span>
		<span className="showbox_9item"></span>
		<span className="showbox_9item"></span>
		<span className="showbox_9item"></span>
		<span className="showbox_9item"></span>
		<span className="showbox_9item"></span>
		<span className="showbox_9item"></span>
		<span className="showbox_9item"></span>
		<span className="showbox_9item"></span>
		</div>


		<img className="showbox_left_img" alt="图片" />
		</div>

		<div className="show_box_main">
		<Show_box_main_cell/>
		<Show_box_main_cell/>
		<Show_box_main_cell/>
		<Show_box_main_cell/>
		<Show_box_main_cell/>
		<Show_box_main_cell/>
		<Show_box_main_cell/>
		<Show_box_main_cell/>
		</div>


		<div className="show_box_right">
		<img  alt="图" className="show_box_right_u" />
		<img  alt="图" className="show_box_right_d" />

		</div>
		
		</div>
		</div>;
	}
}

export default Show_box;