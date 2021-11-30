import { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const addItem = (item, quantity) => {
		setCart([...cart, { item, quantity }]);
	};
	const removeItem = (itemId) => {
		setCart(cart.filter(({ item }) => item.id !== itemId));
	};
	const clear = () => {
		setCart([]);
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
