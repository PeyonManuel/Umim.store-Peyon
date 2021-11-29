import React from 'react';
import { Link } from 'react-router-dom';
import './CartButtons.scss';

export const CartButtons = ({ cart, clear }) => {
	return (
		<div className='cart-buttons'>
			<div>
				<Link to='/checkout' className='buy-cart-btn'>
					Terminar mi compra
				</Link>
				<button className='clear-cart-btn' onClick={clear}>
					Vaciar carrito
				</button>
			</div>
			<div className='cart-total'>
				<h2>
					Total:
					<span className='price'>
						${cart.reduce((a, b) => a + b.item.price * b.quantity, 0)}
					</span>
				</h2>
			</div>
		</div>
	);
};
