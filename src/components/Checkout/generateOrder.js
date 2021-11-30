import {
	collection,
	addDoc,
	Timestamp,
	writeBatch,
	documentId,
	query,
	where,
	getDocs,
} from 'firebase/firestore/lite';
import { db } from '../../firebase/config';

export const generateOrder = (values, cart, totalCompra, setOrderId, clear) => {
	const order = {
		buyer: {
			name: values.name,
			email: values.email,
			tel: values.tel,
		},
		items: cart,
		total: totalCompra(),
		date: Timestamp.fromDate(new Date()),
	};

	const batch = writeBatch(db);
	const ordersRef = collection(db, 'orders');
	const productsRef = collection(db, 'products');
	const q = query(
		productsRef,
		where(
			documentId(),
			'in',
			cart.map(({ item }) => item.id)
		)
	);

	const outOfStock = [];

	getDocs(q).then((res) => {
		res.docs.forEach((doc) => {
			const itemToUpdate = cart.find(({ item }) => item.id === doc.id);

			if (doc.data().stock >= itemToUpdate.quantity) {
				batch.update(doc.ref, {
					stock: doc.data().stock - itemToUpdate.quantity,
				});
			}

			if (doc.data().stock < itemToUpdate.quantity) {
				outOfStock.push(itemToUpdate);
			}
		});
		if (outOfStock.length === 0) {
			batch.commit();
			addDoc(ordersRef, order).then((res) => {
				setOrderId(res.id);
				clear();
			});
		}
		if (outOfStock.length > 0) {
			const quantity = outOfStock.length;
			const outOfStockNames = outOfStock.map(({ item }) => item.title).join('');
			alert(
				`${
					quantity > 1 ? 'Los productos' : 'El producto'
				} ${outOfStockNames} no ${
					quantity > 1 ? 'tienen' : 'tiene'
				} suficiente stock.`
			);
		}
	});
};
