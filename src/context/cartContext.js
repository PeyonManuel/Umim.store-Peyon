import { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(
		localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
	);
	const addItem = (item, quantity) => {
		const newCart = [...cart, { item, quantity }];
		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
	};
	const removeItem = (itemId) => {
		const newCart = cart.filter(({ item }) => item.id !== itemId);
		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
	};
	const clear = () => {
		setCart([]);
		localStorage.removeItem('cart');
	};
	const isInCart = (itemId) => {
		const itemToFind = cart.find(({ item }) => item.id === itemId);
		return itemToFind ? true : false;
	};
	const totalCompra = () => {
		return cart.reduce((a, b) => a + b.item.price * b.quantity, 0);
	};
	return (
		<CartContext.Provider
			value={{ addItem, removeItem, clear, isInCart, cart, totalCompra }}>
			{children}
		</CartContext.Provider>
	);
};
