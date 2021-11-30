import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { generateOrder } from './generateOrder';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import './Checkout.scss';
export const Checkout = () => {
	const [orderId, setOrderId] = useState(null);
	const [values, setValues] = useState({
		name: '',
		email: '',
		tel: '',
	});
	const [disableConfirm, setDisableConfirm] = useState(false);
	const { cart, totalCompra, clear } = useContext(CartContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (values.name.length < 4) {
			alert('El nombre debe tener al menos 4 caracteres');
			return;
		}
		// regex para validar email
		if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
			alert('Ingresa un email valido');
			return;
		}
		if (!/^[0-9-+\s()]{6,16}/.test(values.tel)) {
			alert('Ingresa un telefono valido');
			return;
		}
		setDisableConfirm(true);
		generateOrder(values, cart, totalCompra, setOrderId, clear);
	};

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		orderId && setDisableConfirm(false);
	}, [orderId]);

	return (
		<div className='checkout-div'>
			{cart.length > 0 || orderId ? (
				orderId ? (
					<>
						<h2>Gracias por su compra!</h2>
						<p>Su número de comrpa es: {orderId}</p>
						<Link to='/'>Volver</Link>
					</>
				) : (
					<>
						<h2>Resumen de compra</h2>
						<Cart cart={cart} />
						<form className='checkout-form' onSubmit={handleSubmit}>
							<input
								type='text'
								name='name'
								placeholder='Nombre y apellido'
								value={values.name}
								onChange={handleInputChange}></input>
							<input
								type='text'
								name='email'
								placeholder='Email'
								value={values.email}
								onChange={handleInputChange}></input>
							<input
								type='tel'
								name='tel'
								placeholder='Telefono'
								value={values.tel}
								onChange={handleInputChange}></input>
							<button type='submit' disabled={disableConfirm}>
								Confirmar
							</button>
						</form>
					</>
				)
			) : (
				<h2>El carrito esta vacio</h2>
			)}
		</div>
	);
};
