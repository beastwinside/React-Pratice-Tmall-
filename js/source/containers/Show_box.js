import React from 'react';



class Show_box extends React.Component{

	render(){

		var boxsrc="./source/image/showbox/showbox"+this.props.boxid+"/main.jpg";
		return<div className="show_box">
		<header className="show_headerr">
		<span>{this.props.topvalue}</span>
		<nav className="showboxheader_right">
		<a>{this.props.toprightvalue5}</a>
		<a>{this.props.toprightvalue4}</a>
		<a>{this.props.toprightvalue3}</a>
		<a>{this.props.toprightvalue2}</a>
		<a>{this.props.toprightvalue1}</a>
		</nav>

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
		<p>{this.props.mainitem1_price}<img  src="./source/image/showbox/shopcart.png" /></p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/2.jpg"}/>
		<p>{this.props.mainitem2_price}<img  src="./source/image/showbox/shopcart.png" /></p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/3.jpg"}/>
		<p>{this.props.mainitem3_price}<img  src="./source/image/showbox/shopcart.png" /></p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/4.jpg"}/>
		<p>{this.props.mainitem4_price}<img  src="./source/image/showbox/shopcart.png" /></p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/5.jpg"}/>
		<p>{this.props.mainitem5_price}<img  src="./source/image/showbox/shopcart.png" /></p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/6.jpg"}/>
		<p>{this.props.mainitem6_price}<img  src="./source/image/showbox/shopcart.png" /></p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/7.jpg"}/>
		<p>{this.props.mainitem7_price}<img  src="./source/image/showbox/shopcart.png" /></p>
		</div>
		<div className="show_box_main_item">
		<img src={"./source/image/showbox/showbox"+this.props.boxid+"/8.jpg"}/>
		<p>{this.props.mainitem8_price}<img  src="./source/image/showbox/shopcart.png" /></p>
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