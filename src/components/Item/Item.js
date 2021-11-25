import React from 'react';
import './Item.scss';
export const Item = ({ id, title, price, pictureUrl }) => {
	const numberFormatter = new Intl.NumberFormat('en-IN');
	const formatedPrice = numberFormatter.format(price);
	return (
		<div className='list-item' key={id}>
			<h4>{title}</h4>
			<div className='img-div'>
				<img src={pictureUrl} alt='item picture' />
			</div>

			<span className='price'>${formatedPrice}</span>
		</div>
	);
};
