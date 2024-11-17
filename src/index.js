import React from 'react';
import ReactDOM from 'react-dom';

const getTxt = () => {
	return {
		bnt: 'Click Me!',
		label: 'Enter Name:'
	};
};

const App = () => {
	return (
		<div>
			<label className="label" htmlFor="name">{getTxt().label}</label><br />
			<input id="name" type="text" /><br /><br />
			<button style={{ backgroundColor: '#DDD', color: '#F00'}}>{getTxt().bnt}</button>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
