import React from 'react';
import Sideleft_item from '../components/Sideleft_item';


class Sideleftnav extends React.Component{

	constructor(props){
		super(props);
		
		this.scrolltoshow=this.scrolltoshow.bind(this);
		
	}



	scrolltoshow(){
		var xx=document.getElementsByClassName('side_left_item');
		var clear=()=>{
			xx[0].style.backgroundColor="#bf0000";
			xx[1].style.backgroundColor="#bf0000";
			xx[2].style.backgroundColor="#bf0000";
			xx[3].style.backgroundColor="#bf0000";
			xx[4].style.backgroundColor="#bf0000";
			xx[5].style.backgroundColor="#bf0000";
			xx[6].style.backgroundColor="#bf0000";
			xx[7].style.backgroundColor="#bf0000";
			xx[8].style.backgroundColor="#bf0000";
			xx[9].style.backgroundColor="#bf0000";
			xx[10].style.backgroundColor="#bf0000";
			xx[11].style.backgroundColor="#bf0000";


		};

		window.onscroll = function(){

			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;;
			if( scrollTop>=500){document.getElementById("sideleft").style.display='block';
		       if(scrollTop>=500&&scrollTop<1100){clear();xx[0].style.backgroundColor="black";}
		else if(scrollTop>=1100&&scrollTop<1700){clear();xx[1].style.backgroundColor="black";}
		else if(scrollTop>=1700&&scrollTop<2300){clear();xx[2].style.backgroundColor="black";}
		else if(scrollTop>=2300&&scrollTop<2900){clear();xx[3].style.backgroundColor="black";}
		else if(scrollTop>=2900&&scrollTop<3500){clear();xx[4].style.backgroundColor="black";}
		else if(scrollTop>=3500&&scrollTop<4100){clear();xx[5].style.backgroundColor="black";}
		else if(scrollTop>=4100&&scrollTop<4700){clear();xx[6].style.backgroundColor="black";}
		else if(scrollTop>=4700&&scrollTop<5300){clear();xx[7].style.backgroundColor="black";}
		else if(scrollTop>=5300&&scrollTop<5900){clear();xx[8].style.backgroundColor="black";}
		else if(scrollTop>=5900&&scrollTop<6500){clear();xx[9].style.backgroundColor="black";}
		else if(scrollTop>=6500&&scrollTop<7100){clear();xx[10].style.backgroundColor="black";}
		else if(scrollTop>=7100&&scrollTop<7700){clear();xx[11].style.backgroundColor="black";}}
		else if(scrollTop<500){document.getElementById("sideleft").style.display='none';}

				}

		}

		componentDidMount(){

			this.scrolltoshow();


		}



		render(){
			return <nav id="sideleft">
			<Sideleft_item item_value="生鲜水果 " />
			<Sideleft_item item_value="进口零食 " />
			<Sideleft_item item_value="进口酒饮 " />
			<Sideleft_item item_value="奶制品   " />
			<Sideleft_item item_value="休闲零食 " />
			<Sideleft_item item_value="饼干糖巧 " />
			<Sideleft_item item_value="酒水饮料 " />
			<Sideleft_item item_value="冲饮保健 " />
			<Sideleft_item item_value="米面杂粮 " />
			<Sideleft_item item_value="油品调味 " />
			<Sideleft_item item_value="个人清洁 " />
			<Sideleft_item item_value="美容护肤 " />
			<div id="sideleft_erweima" >
			<img src="./source/image/erweima.jpg"/>
			</div>
			<Sideleft_item item_value="在线咨询"/>
			</nav> ;
		}

	}

	export default Sideleftnav; 