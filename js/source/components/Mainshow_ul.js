import React from 'react';
import Mainshow_ul_li from './Mainshow_ul_li'
class Mainshow_ul extends React.Component{
	render(){
		return <ul id="mainshow_ul">
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/飞机红.png"
			a1p="牛奶" a2p="零食" a3p="饼干" a4p="速食"  atp="进口食品"/>
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/饮料红.png"
			a1p="糖巧" a2p="变干" a3p="坚果" a4p="牛奶" atp="食品饮料" />
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/油红.png"
			a1p="油" a2p="大米" a3p="调料" a4p="方便面"  atp="粮油副食"/>
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/蜡烛红.png"
			a1p="水" a2p="沐浴" a3p="牙膏" a4p="洁面奶"  atp="美容洗护"/>
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/剪刀红.png"
			a1p="毛巾" a2p="家电" a3p="水杯" a4p="收纳" atp="家具家电" />
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/餐巾纸红.png"
			a1p="纸" a2p="洗衣" a3p="纸巾" a4p="垃圾袋"  atp="家庭清洁"/>
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/鱼儿红.png"
			a1p="纸尿裤" a2p="奶粉" a3p="" a4p="湿巾"  atp="母婴用品"/>
		</ul>; atp="进口食品"
	}



}

export default Mainshow_ul;