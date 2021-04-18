/** @format */
import React from 'react';
import './list.css'
export const List = (props) => {
	return (
		<div>
			<ul>
				{props.value.map((value, index) => {
					return (
						<li key={index} onClick={(e)=>e.target.className='checked'}><span><i onClick={props.handleOnClick.bind(this, index)} className='fa fa-trash'></i></span>
							{value}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
