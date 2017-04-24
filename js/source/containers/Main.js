import React from 'react';
import Footer from  './Footer';
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
		<Footer />	
		</div>;
	}


}

export default Main;