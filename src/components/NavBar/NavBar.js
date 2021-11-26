import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

const NavBar = () => {
	return (
		<header className='navbar'>
			<ul>
				<li className='logo'>
					<Link to='/'>
						<img src='https://i.imgur.com/0vgQxY4.png' alt='logo'></img>
					</Link>
				</li>
				<li>
					<a href='#'>Supermercado</a>
				</li>
				<li>
					<a href='#'>Ofertas</a>
				</li>
				<li>
					<a href='#'>Ayuda</a>
				</li>
			</ul>
			<CartWidget />
		</header>
	);
};

export default NavBar;
