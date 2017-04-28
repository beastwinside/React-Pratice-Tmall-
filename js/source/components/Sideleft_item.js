import React from 'react'
class Sideleft_item extends React.Component{
	
	render(){
		return<div className="side_left_item">
		{this.props.item_value}
		</div>;


	}	
}

export default Sideleft_item;