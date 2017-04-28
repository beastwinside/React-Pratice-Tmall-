import React from 'react';
import Show_box_main_cell from '../components/Show_box_main_cell';


class Show_box extends React.Component{

	render(){

		var boxsrc="./source/image/showbox/showbox"+this.props.boxid+"/main.jpg";
		return<div className="show_box">
		<header className="show_headerr">
		<span>{this.props.topvalue}</span>
		</header>


		<div className="show_container">
		<div className="show_box_left" style={{backgroundColor:this.props.bgcolor,}}>
		
		<div className="show_box_left_top" >
		<div className="showbox_9item" ><span>{this.props.itemvalue1}</span></div>
		<div className="showbox_9item" ><span>{this.props.itemvalue2}</span></div>
		<div className="showbox_9item" ><span>{this.props.itemvalue3}</span></div>
		<div className="showbox_9item" ><span>{this.props.itemvalue4}</span></div>
		<div className="showbox_9item" ><span>{this.props.itemvalue5}</span></div>
		<div className="showbox_9item" ><span>{this.props.itemvalue6}</span></div>
		<div className="showbox_9item" ><span>{this.props.itemvalue7}</span></div>
		<div className="showbox_9item" ><span>{this.props.itemvalue8}</span></div>
		<div className="showbox_9item" ><span>{this.props.itemvalue9}</span></div>
		</div>


		<img className="showbox_left_img" src={boxsrc} />
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