import { useState } from 'react';

export const useCounter = (initial, stock) => {
	const [count, setCount] = useState(initial);
	const increment = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};
	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};
	const reset = () => {
		setCount(initial);
	};
	return {
		count,
		increment,
		decrement,
		reset,
		setCount,
	};
};
