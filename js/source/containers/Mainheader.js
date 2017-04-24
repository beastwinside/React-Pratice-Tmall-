import React from 'react';

class Mainheader extends React.Component{
	render(){
		return <header id="mainheader">
		<div id="headleftlogo">
		<div id="logo">天猫超市logo</div>
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