import React from 'react';
import Mainheader_nav from '../components/Mainheader_nav';

class Mainheader extends React.Component{
	render(){
		return <header id="mainheader">

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