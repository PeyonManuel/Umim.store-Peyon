import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
	return (
		<div>
			<FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
		</div>
	);
};

export default CartWidget;
