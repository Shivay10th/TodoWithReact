/** @format */

import React from 'react';
import './textbox.css';
export const Textbox = (props) => {
	return (
		<div>
			<input onKeyPress={props.handleKeyPress} type="text" />
		</div>
	);
};
