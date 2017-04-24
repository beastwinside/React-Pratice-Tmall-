import React from 'react';
import Show_box_last from './Show_box_last'
import Mainshow from  './Mainshow';
import Show_box from  './Show_box';

class 	Main extends React.Component{
	render(){
		return <div  id="main">
		<Mainshow />
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box/>
		<Show_box_last/>
		
		</div>;
	}


}

export default Main;