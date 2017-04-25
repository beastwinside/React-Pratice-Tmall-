import React from 'react';
import Mainheader_nav from '../components/Mainheader_nav';

class Mainheader extends React.Component{
	render(){
		return <header id="mainheader">
		<ul id="header_form_down_ul">
		<li>酒水</li>
		<li>纸巾</li>
		<li>卫生巾</li>
		<li>垃圾袋</li>
		<li>牛奶</li>
		<li>袜子</li>
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