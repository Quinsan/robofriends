import React from 'react';

//tällä voi wrapata muita componentteja ja stylessä käyttää css in jsx
const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;