import React from 'react';
import Mainshow_ul from '../components/Mainshow_ul';
import Lunbomain from './Lunbomain';
import Lunboright from './Lunboright';

class Mainshow extends React.Component{
	render(){
		return <div id="mainshow">
		<Lunbomain />
		<Lunboright />
		<Mainshow_ul />
		</div>;
	}
}

export default Mainshow;