import React from 'react';
import Lunbotu from '../components/Lunbotu';
import Lunbodown from './Lunbodown';
class Lunbomain extends React.Component{

	render(){
		return <div id="lunbo_main">
		<Lunbotu/>
		<Lunbodown/>
		</div>


	}
}

export default Lunbomain;