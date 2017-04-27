import React from 'react'

class Sitenav_ul extends React.Component{
	render(){
		return<ul id='Sitenav_ul'>
		<a><li>我的淘宝 </li></a>
		<a><li><img src="./source/image/sitenav_logo/关注.png" />我关注的品牌 </li></a>
		<a><li><img src="./source/image/sitenav_logo/购物车.png" />购物车 </li></a>
		<a><li>收藏夹 |</li></a>
		<a><li><img src="./source/image/sitenav_logo/手机.png" />手机版 </li></a>
		<a><li>淘宝网 </li></a>
		<a><li>企业购</li></a>
		<a><li>商家支持 </li></a>
		<a><li><img src="./source/image/sitenav_logo/网站导航.png" />网站导航 </li></a>
		</ul>
	}

}

export default Sitenav_ul;