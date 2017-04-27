import  React from 'react';



class Lunbotu extends React.Component{

	constructor(props){
		super(props);
		this.state={
			x:1,
		}

		this.xuanhuanalert=this.xuanhuanalert.bind(this);

	}

	xuanhuanalert(){
		var am=this.state.x+1;
		
		this.setState({
			x:am,
		})
    
	}

	componentDidMount(){
		
			this.xuanhuanalert();
		

		
	}



	render(){
		var urlx="url('./source/image/mainshow_image/lunbo/lunbo"+this.state.x+".png')"
		return<div id="lunbo" 
		style={{backgroundImage:urlx}}>
		<div id="Lunbotu_7but">
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div>4</div>
		<div>5</div>
		<div>6</div>
		<div>7</div>
		</div>;
		</div>;


	}


}

export default Lunbotu;