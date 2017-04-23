import React from 'react';

class Logo extends React.Component{
		render(){
			return <div className="Logo" />;
		}

		componentDidMount(){
		window.onscroll = function(){
					//scrolltop获取兼容写法
					var scrollTop = document.body.scrollTop || 
					document.documentElement.scrollTop || 
					window.pageYOffset;;
					if( scrollTop>500)
						alert('123');
					
				}
				}


}

// var Logo=React.createClass({
// 	render:function(){
// 		return (<div className="Logo" />);
// 	}

// })


export default Logo