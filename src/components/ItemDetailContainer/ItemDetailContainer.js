import React, { useEffect, useState } from 'react';
import { products } from '../../data';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemCount } from '../ItemCount/ItemCount';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ItemDetailContainer.scss';
export const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isAdded, setIsAdded] = useState(false);
	const { itemId } = useParams();

	const onAdd = (quantityToAdd) => {
		alert(`Se ha añadido a su carrtito la cantidad de: ${quantityToAdd}`);
		setIsAdded(true);
	};

	useEffect(() => {
		const getProduct = new Promise((resolve, reject) => {
			const fetchedProducts = products;
			const index = Math.random() * 5;
			setTimeout(() => {
				resolve(fetchedProducts[itemId]);
			}, 2000);
		});
		getProduct.then((res) => {
			setItem(res);
			setLoading(false);
		});
	}, []);
	return (
		<div>
			<h3>Detalles</h3>
			{!loading ? (
				item ? (
					<>
						<ItemDetail item={item} />
						{!isAdded ? (
							<ItemCount stock={5} onAdd={onAdd} />
						) : (
							<div class='buy-btn'>
								<Link to='/cart'>Terminar compra</Link>
							</div>
						)}
					</>
				) : (
					<h1>No existe este item</h1>
				)
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};
