import React from 'react'
import { useState } from 'react'
import { menu } from './menu'
import './nav.css'

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');

	const renderMenu = () => {
		return menu.map(item => {
			if (item.type === "menu") {
				return (
					<a
						key={item.link}
						href={item.link} 
						onClick={() => setActiveNav(item.link)} 
						className={activeNav === item.link ? 'active' : ''}
					>
						{item.icon}
					</a>
				)
			} else {
				return (
					<a
						key={item.link}
						target="_blank"
						rel="norefferer"
						href={item.link}
					>
						{item.icon}
					</a>
				)
			}
		});
	}

	return (
		<nav>
			{renderMenu()}
		</nav>
	)
}

export default Nav