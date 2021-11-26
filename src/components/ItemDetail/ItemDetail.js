import React from 'react';
import './ItemDetail.scss';
export const ItemDetail = ({ item }) => {
	return (
		<div className='item-detail' key={item.id}>
			<h3>{item.title}</h3>
			<img src={item.pictureUrl} alt='Product picture' />
			<p>{item.description}</p>
			<p>{item.category}</p>
			<span className='price'>{`$ ${item.price}`}</span>
		</div>
	);
};
