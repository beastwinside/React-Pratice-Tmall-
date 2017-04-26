import React from 'react';
import Sideright_img from '../components/Sideright_img'

class Siderightnav extends React.Component{
	render(){
		return <nav id="sideright">
		<Sideright_img num='11' topvalue='30'/>
		<Sideright_img num='12' topvalue='35'/>
		<Sideright_img num='13' topvalue='40'/>
		<Sideright_img num='14' topvalue='45'/>
		<Sideright_img num='15' topvalue='50'/>
		<Sideright_img num='16' topvalue='80'/>
		<Sideright_img num='17' topvalue='83'/>
		
		</nav> ;
	}

}

export default Siderightnav; 