import React from 'react';
import Mainshow_ul_li from './Mainshow_ul_li'
class Mainshow_ul extends React.Component{
	render(){
		return <ul id="mainshow_ul">
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/飞机红.png"
			a1p="牛奶" a2p="零食" a3p="饼干" a4p="速食" />
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/饮料红.png"
			a1p="糖巧" a2p="变干" a3p="坚果" a4p="牛奶" />
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/油红.png"
			a1p="油" a2p="大米" a3p="调料" a4p="方便面" />
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/蜡烛红.png"
			a1p="洗发" a2p="沐浴" a3p="牙膏" a4p="洁面奶" />
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/剪刀红.png"
			a1p="毛巾" a2p="家电" a3p="水杯" a4p="收纳" />
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/餐巾纸红.png"
			a1p="纸" a2p="洗衣" a3p="洗洁精" a4p="垃圾袋" />
			<Mainshow_ul_li li_img_url="./source/image/mainshow_image/ul_li_icon/鱼儿红.png"
			a1p="纸尿裤" a2p="奶粉" a3p="" a4p="湿巾" />
		</ul>;
	}



}

export default Mainshow_ul;