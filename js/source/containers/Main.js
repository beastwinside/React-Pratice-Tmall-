import React from 'react';
import Footer from  './Footer';
import Mainshow from  './Mainshow';
class 	Main extends React.Component{
	render(){
		return <div  id="main">
		<Mainshow />
		<Footer />	
		</div>;
	}


}

export default Main;