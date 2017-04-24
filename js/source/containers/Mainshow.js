import React from 'react';
import Mainshow_ul from '../components/Mainshow_ul'
import Lunbomain from './Lunbomain'

class Mainshow extends React.Component{
	render(){
		return <div id="mainshow">
		<Lunbomain />
		<Mainshow_ul />
		</div>;
	}
}

export default Mainshow;