import React from 'react'
class Sideleft_item extends React.Component{
	
	constructor(props)
	{
		super(props);
		
	}

	render(){
		return<div className="side_left_item"
		style={{backgroundColor:'#bf0000',}}>
		{this.props.item_value}
		</div>;


	}	
}

export default Sideleft_item;