import React from 'react';



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

		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/1.jpg"}/>
		<p>1</p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/2.jpg"}/>
		<p>1</p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/3.jpg"}/>
		<p>1</p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/4.jpg"}/>
		<p>1</p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/5.jpg"}/>
		<p>1</p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/6.jpg"}/>
		<p>1</p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/7.jpg"}/>
		<p>1</p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/8.jpg"}/>
		<p>1</p>
		</div>

		</div>


		<div className="show_box_right">
		<img  src={"./source/image/showbox/showbox"+this.props.boxid+"/11.jpg"} className="show_box_right_u" />
		<img  src={"./source/image/showbox/showbox"+this.props.boxid+"/12.jpg"} className="show_box_right_d" />

		</div>
		
		</div>
		</div>;
	}
}

export default Show_box;