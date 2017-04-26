import React from 'react'

class Mainshow_ul_li extends React.Component{
	render(){
		return <li>
		<img src={this.props.li_img_url}/>
		<span>进口商品</span>
		<p>
		<a>牛奶 </a>
		<a>零食 </a>
		<a>饼干 </a>
		<a>速食 </a>
		</p>
		</li>;
	}

}

export default Mainshow_ul_li;