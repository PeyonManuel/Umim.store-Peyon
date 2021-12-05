import React from 'react';
import { Cart } from '../Cart/Cart';

export const CheckoutDetail = ({ cart }) => {
	return (
		<>
			<Cart cart={cart} />
			<div className='checkout-total'>
				<h2>
					Total:
					<span className='price'>
						${cart.reduce((a, b) => a + b.item.price * b.quantity, 0)}
					</span>
				</h2>
			</div>
		</>
	);
};
