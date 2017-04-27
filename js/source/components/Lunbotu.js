import  React from 'react';



class Lunbotu extends React.Component{

	constructor(props){
		super(props);
		this.state={
			x:1,
			index:1,
			
		}

		this.xuanhuanalert=this.xuanhuanalert.bind(this);
		this.handlclick=this.handlclick.bind(this);
		

	}

	xuanhuanalert(){

		setInterval(()=> {
			var am=this.state.x;
			if(am>=1&&am<=6)
				am++;
			else am=1;
			this.setState({
				x:am,
				
			})
		}, 3000);

	}

	handlclick(e){
		
		this.setState({
			x:e.target.innerText,
		});
	}

	componentDidMount(){
		

		this.xuanhuanalert();

		
	}



	render(){
		var urlx="url('./source/image/mainshow_image/lunbo/lunbo"+this.state.x+".png')"
		return<div id="lunbo" 
		style={{backgroundImage:urlx}}>
		<div id="Lunbotu_7but">
		<div  
		onClick={this.handlclick}  >1</div>
		<div  
		onClick={this.handlclick}  >2</div>
		<div  
		onClick={this.handlclick}  >3</div>
		<div  
		onClick={this.handlclick}  >4</div>
		<div  
		onClick={this.handlclick}   >5</div>
		<div  
		onClick={this.handlclick}  >6</div>
		<div  
		onClick={this.handlclick}  >7</div>
		</div>
		</div>;


	}


}

export default Lunbotu;