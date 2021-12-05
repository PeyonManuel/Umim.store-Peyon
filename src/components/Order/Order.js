import { collection, getDoc, doc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react/cjs/react.development';
import { CartContext } from '../../context/cartContext';
import { db } from '../../firebase/config';
import { CheckoutDetail } from '../Checkout/CheckoutDetail';

export const Order = () => {
	const { orderId } = useParams();
	const [order, setOrder] = useState(null);
	const [loading, setLoading] = useState(true);
	const { totalCompra } = useContext(CartContext);

	useEffect(() => {
		const orderRef = collection(db, 'orders');
		const docRef = doc(orderRef, orderId);

		getDoc(docRef)
			.then((doc) => {
				if (doc.data()) {
					setOrder({ id: doc.id, ...doc.data() });
				}
			})
			.finally(() => setLoading(false));
	}, [orderId]);
	return (
		<div className='site-container'>
			{!loading ? (
				order ? (
					<>
						<h1>Orden {orderId}</h1>
						<CheckoutDetail cart={order.items} />
					</>
				) : (
					<h1>El id de orden no corresponde a ninguna orden</h1>
				)
			) : (
				<h1>Cargando...</h1>
			)}
		</div>
	);
};
