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
					<Link to='/category/Tecnologia'>Tecnologia</Link>
				</li>
				<li>
					<Link to='/category/Limpieza y mantenimiento'>
						Limpieza y mantenimiento
					</Link>
				</li>
				<li>
					<Link to='/category/Deportes y fitness'>Deportes y fitness</Link>
				</li>
				<li>
					<Link to='/category/Belleza'>Belleza</Link>
				</li>
			</ul>
			<CartWidget />
		</header>
	);
};

export default NavBar;
