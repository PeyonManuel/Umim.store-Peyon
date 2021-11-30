import React from 'react';
import './Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
export const Cart = ({ cart, removeItem }) => {
	return (
		<div className='cart-list'>
			{cart.map(({ item, quantity }) => {
				return (
					<div className='cart-item' key={item.id}>
						<div className='img-div'>
							<img src={item.pictureUrl} alt='product' />
						</div>
						<div className='title-quantity'>
							<h4>{item.title}</h4>
							<span>Cantidad: {quantity}</span>
						</div>
						<span className='price'>$ {item.price}</span>
						{removeItem && (
							<button
								className='item-delete-btn'
								onClick={() => removeItem(item.id)}>
								<FontAwesomeIcon icon={faTrash} />
							</button>
						)}
					</div>
				);
			})}
		</div>
	);
};
