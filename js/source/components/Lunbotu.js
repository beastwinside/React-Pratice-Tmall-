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
				index:am,
				
			})
		}, 4000);

	}

	componentDidUpdate(){
		var ind=this.state.index;
		var ind_=ind-1;
		var mm="lunbo_but"+ind;

		var curbut=document.getElementById(mm);
		curbut.style.backgroundColor="red";


		if(ind_!=0){
			var mm_="lunbo_but"+ind_;
			var subbut=document.getElementById(mm_);
			subbut.style.backgroundColor="black";

		}
		else document.getElementById("lunbo_but7").style.backgroundColor="black";	
	}

	handlclick(e){

			
			document.getElementById("lunbo_but1").style.backgroundColor="black";
			document.getElementById("lunbo_but2").style.backgroundColor="black";
			document.getElementById("lunbo_but3").style.backgroundColor="black";
			document.getElementById("lunbo_but4").style.backgroundColor="black";
			document.getElementById("lunbo_but5").style.backgroundColor="black";
			document.getElementById("lunbo_but6").style.backgroundColor="black";
			document.getElementById("lunbo_but7").style.backgroundColor="black";

		this.setState({
			x:e.target.innerText,
			index:e.target.innerText,

		});
	}

	componentDidMount(){
		
document.getElementById("lunbo_but1").style.backgroundColor="red";
		this.xuanhuanalert();

		
	}



	render(){
		var urlx="url('./source/image/mainshow_image/lunbo/lunbo"+this.state.x+".png')"
		return<div id="lunbo" 
		style={{backgroundImage:urlx}}>
		<div id="Lunbotu_7but">
		<div  id="lunbo_but1"
		onClick={this.handlclick}  >1</div>
		<div  id="lunbo_but2"
		onClick={this.handlclick}  >2</div>
		<div  id="lunbo_but3"
		onClick={this.handlclick}  >3</div>
		<div  id="lunbo_but4"
		onClick={this.handlclick}  >4</div>
		<div  id="lunbo_but5"
		onClick={this.handlclick}   >5</div>
		<div  id="lunbo_but6"
		onClick={this.handlclick}  >6</div>
		<div  id="lunbo_but7"
		onClick={this.handlclick}  >7</div>
		</div>
		</div>;


	}


}

export default Lunbotu;