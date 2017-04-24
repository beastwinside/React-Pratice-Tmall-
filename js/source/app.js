import React from 'react';
import ReactDOM from 'react-dom';
import Main from  './containers/Main';

import Sitenav from  './containers/Sitenav';
import Mainheader from  './containers/Mainheader';
import Sideleftnav from  './containers/Sideleftnav';
import Siderightnav from  './containers/Siderightnav';
import Footer from  './containers/./Footer';

ReactDOM.render(
		<div >
		<Sitenav />
		<Main />
		<Mainheader />
		<Sideleftnav />
		<Siderightnav />
		<Footer />	
		</div>
		,
		document.getElementById('app')

	);