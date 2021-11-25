import React, { useState } from 'react';
import './ItemCount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useCounter } from '../../customHooks/useCounter';
export const ItemCount = ({ stock = 10, initial = 1 }) => {
	const { count, increment, decrement, reset, setCount } = useCounter(1, 5);
	const addToCartAlert = (count) => {
		alert(`Se ha añadido a su carrtito la cantidad de: ${count}`);
		reset();
	};
	return (
		<div className='item-count'>
			<div>
				<button className='minus' onClick={decrement}>
					{<FontAwesomeIcon icon={faMinus} className='cart-icon' />}
				</button>
				{count}
				<button className='plus' onClick={increment}>
					{<FontAwesomeIcon icon={faPlus} className='cart-icon' />}
				</button>
			</div>

			<button className='add-to-cart-btn' onClick={() => addToCartAlert(count)}>
				Añadir al carrito
			</button>
		</div>
	);
};
