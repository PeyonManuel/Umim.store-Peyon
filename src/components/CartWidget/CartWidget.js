import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './CartWidget.scss';
import { Link } from 'react-router-dom';

const CartWidget = () => {
	return (
		<Link to='/cart' className='cart-icon'>
			<FontAwesomeIcon icon={faShoppingCart} />
		</Link>
	);
};

export default CartWidget;
