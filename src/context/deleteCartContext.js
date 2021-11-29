import React, { createContext, useContext, useState } from 'react';

const DeleteCartContext = createContext();

export const DeleteToggle = ({ children }) => {
	const [on, setOn] = useState(false);
	const toggle = () => setOn(!on);

	return (
		<DeleteCartContext.Provider value={{ on, toggle }}>
			{children}
		</DeleteCartContext.Provider>
	);
};

export const useToggle = () => {
	const context = useContext(DeleteCartContext);
	if (!context) {
		throw new Error('useToggle must be used within a <DeleteToggle />');
	}
	return context;
};

export const PopoverTrigger = ({ children }) => {
	const { toggle } = useToggle();
	return <span onClick={toggle}>{children}</span>;
};

export const PopoverContent = ({ children }) => {
	const { on } = useToggle();
	return on ? children : null;
};

export const PopoverCloseButton = () => {
	const { on, toggle } = useToggle();
	return on ? (
		<button className='popover-close-btn' onClick={toggle}>
			X
		</button>
	) : null;
};
