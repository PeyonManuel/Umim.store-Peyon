import React from 'react';
import './ItemDetail.scss';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
export const ItemDetail = ({ item, onAdd, isInCart }) => {
	return (
		<div className='item-detail' key={item.id}>
			<h3>{item.title}</h3>
			<img src={item.pictureUrl} alt='Product' />
			<p>{item.description}</p>
			<p>{item.category}</p>
			<span className='price'>{`$ ${item.price}`}</span>
			{!isInCart(item.id) ? (
				item.stock > 0 ? (
					<ItemCount stock={item.stock} onAdd={onAdd} item={item} />
				) : (
					<span className='no-stock'>Producto fuera de stock</span>
				)
			) : (
				<div className='buy-btn'>
					<Link to='/cart'>Terminar compra</Link>
				</div>
			)}
		</div>
	);
};
