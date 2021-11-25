import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.scss';
export const ItemList = ({ items }) => {
	return (
		<div className='item-list'>
			{items.map((item) => (
				<Item
					id={item.id}
					title={item.title}
					price={item.price}
					pictureUrl={item.pictureUrl}
				/>
			))}
		</div>
	);
};
