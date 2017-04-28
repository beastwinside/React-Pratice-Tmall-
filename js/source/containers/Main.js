import React from 'react';
import Show_box_last from './Show_box_last'
import Mainshow from  './Mainshow';
import Show_box from  './Show_box';

class 	Main extends React.Component{
	render(){
		return <div  id="main">
		<Mainshow />
		<Show_box  topvalue="1"/>
		<Show_box  topvalue="2"/>
		<Show_box  topvalue="3"/>
		<Show_box  topvalue="4"/>
		<Show_box  topvalue="5"/>
		<Show_box  topvalue="6"/>
		<Show_box  topvalue="7"/>
		<Show_box  topvalue="8"/>
		<Show_box  topvalue="9"/>
		<Show_box  topvalue="10"/>
		<Show_box  topvalue="11"/>
		<Show_box  topvalue="12"/>
		
		<Show_box_last/>
		
		</div>;
	}


}

export default Main;