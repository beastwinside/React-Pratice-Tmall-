import React from 'react';

class Footer_up extends React.Component{
	render(){
		return<div id='Footer_up'>
		<img  id="footerleft" src="./source/image/footer/footerup/footerleft.png"/>
		<div id="Footer_up_container">
		
		<dl id='Footer_up_gwzn'>
		<a><dt>购物指南</dt></a>
		<a><dd>购物流程</dd></a>
		<a><dd>配送区域及费用</dd></a>
		<a><dd>购买生鲜须知</dd></a>
		<a><dd>发票流程</dd></a>
		</dl>
		<dl id='Footer_up_shfw'>
		<a><dt>售后服务</dt></a>
		<a><dd>退货流程</dd></a>
		<a><dd>退货指南</dd></a>
		<a><dd>保质期说明</dd></a>
		<a><dd>联系客服</dd></a>
		</dl>
		<dl id='Footer_up_zzfw'>
		<a><dt>订单查询</dt></a>
		<a><dd>我的购物车</dd></a>
		<a><dd>我的现金券</dd></a>
		<a><dd>购物常见问题</dd></a>
		<a><dd>建议反馈</dd></a>
		
		</dl>
		<dl id='Footer_up_sjfw'>  
		<a><dt>商家服务</dt></a>
		<a><dd>关于天猫超市</dd></a>
		<a><dd>入驻天猫超市</dd></a>
		<a><dd>商家常见问题</dd></a>
		
		</dl>
		</div>	
		</div>;
	}

}

export default Footer_up;