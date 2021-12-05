import React from 'react';
import { Link } from 'react-router-dom';
import {
	DeleteToggle,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
} from '../../context/deleteCartContext';
import './CartButtons.scss';

export const CartButtons = ({ clear, totalCompra }) => {
	return (
		<div>
			<Link to='/checkout' className='buy-cart-btn'>
				Terminar mi compra
			</Link>
			<DeleteToggle>
				<PopoverTrigger>
					<button className='clear-cart-btn'>Vaciar carrito</button>
				</PopoverTrigger>
				<PopoverContent>
					<div className='confirm-clear-pop'>
						<div className='confirm-clear-pop__div'>
							<h2>¿Estas seguro que deseas vaciar el carrito?</h2>
							<button className='clear-cart-btn' onClick={clear}>
								Continuar
							</button>
							<PopoverCloseButton />
						</div>
					</div>
				</PopoverContent>
			</DeleteToggle>
		</div>
	);
};
