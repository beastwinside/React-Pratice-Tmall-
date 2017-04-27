import React from 'react';
import Mainheader_nav from '../components/Mainheader_nav';

class Mainheader extends React.Component{
	render(){
		return <header id="mainheader">
		<div id="mainheader_ico_container">
		<a><img src="./source/image/mainheader_ico/一站式股齐.png" /></a>
		<a><img src="./source/image/mainheader_ico/满88包邮.png" /></a>
		<a><img src="./source/image/mainheader_ico/国徽.png" /></a>
		</div>
		<ul id="header_form_down_ul">
		<a><li>酒水</li></a>
		<a><li>纸巾</li></a>
		<a><li>卫生巾</li></a>
		<a><li>垃圾袋</li></a>
		<a><li>牛奶</li></a>
		<a><li>袜子</li></a>
		</ul>
		<Mainheader_nav/>
		<div id="headleftlogo">
		<div id="logo"></div>
		</div>
		<div id="pos_select">北京</div>
		<form>
		<input type="text"   />
		<button id="search">搜索</button>
		</form>
		</header>;

	}


}

export default Mainheader;