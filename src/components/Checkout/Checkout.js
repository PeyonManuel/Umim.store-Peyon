import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { generateOrder } from './generateOrder';
import { Link } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
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

	const handleSubmit = () => {
		setDisableConfirm(true);
		generateOrder(values, cart, totalCompra, setOrderId, clear);
	};

	const validateSchema = yup.object().shape({
		name: yup
			.string()
			.required('Este campo es obligatorio')
			.min(4, 'El nombre debe tener al menos 4 caracteres')
			.max(30, 'El nombre no puede tener mas de 30 caracteres'),
		email: yup
			.string()
			.required('Este campo es obligatorio')
			.email('Ingrese un email valido'),
		tel: yup
			.string()
			.required('Este campo es obligatorio')
			.matches(/^[0-9-+\s()]{6,16}/, 'Ingrese un telefono valido'),
	});

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
						<Formik
							initialValues={values}
							validationSchema={validateSchema}
							onSubmit={handleSubmit}>
							{(formik) => (
								<form className='checkout-form' onSubmit={formik.handleSubmit}>
									<Field
										type='text'
										name='name'
										placeholder='Nombre y apellido'
										value={formik.values.name}
										onChange={formik.handleChange}></Field>
									<p className='formik-message'>{formik.errors.name}</p>
									<Field
										type='text'
										name='email'
										placeholder='Email'
										value={formik.values.email}
										onChange={formik.handleChange}></Field>
									<p className='formik-message'>{formik.errors.email}</p>
									<Field
										type='tel'
										name='tel'
										placeholder='Telefono'
										value={formik.values.tel}
										onChange={formik.handleChange}></Field>
									<p className='formik-message'>{formik.errors.tel}</p>
									<button type='submit' disabled={disableConfirm}>
										Confirmar
									</button>
								</form>
							)}
						</Formik>
					</>
				)
			) : (
				<h2>El carrito esta vacio</h2>
			)}
		</div>
	);
};
