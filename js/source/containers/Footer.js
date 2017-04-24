import React from 'react';
import Footer_up from './Footer_up';
import Footer_down from './Footer_down';

class Footer extends React.Component{
	render(){
		return <footer> 
		<Footer_up/>
		<Footer_down/>
		</footer>;
	}



}

export  default Footer;