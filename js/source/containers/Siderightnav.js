import React from 'react';
import Sideright_img from '../components/Sideright_img'

class Siderightnav extends React.Component{
	render(){
		return <nav id="sideright">
		<Sideright_img num='1' topvalue='24' spanvalue='我的天猫'/>
		<Sideright_img num='2' topvalue='27' spanvalue='我的钱包'/>
		<Sideright_img num='3' topvalue='30' spanvalue='我的关注'/>
		<Sideright_img num='4' topvalue='33' spanvalue='我的收藏'/>
		<Sideright_img num='5' topvalue='36' spanvalue='定时器'/>
		<Sideright_img num='6' topvalue='80' spanvalue='编辑'/>
		<Sideright_img num='7' topvalue='83' spanvalue='菜单'/>
		
		</nav> ;
	}

}

export default Siderightnav; 