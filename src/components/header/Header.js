import React, { useState, useCallback  } from 'react'

import header from './header.module.css';
// import Burger from '../burger/Burger';

const Header = () => {
	// ================ Toggle Menu ===================
	const [Toggle, showMenu] = useState(false)

	const toggleМenuАctivities = useCallback(() => {
		showMenu(active => !active)
	},[]);

	return (
		<header className={`${header.header} `}>
			<nav className={`${header.nav} container`}>

				<a href="index.html" className={header.nav__logo}> Smith </a>

				<div className={Toggle ? `${header.nav__menu} ${header.show_menu}` : header.nav__menu}>
					<ul className={`${header.nav__list} grid`}>
						<li className={header.nav__item}>
							<a href="#home" className={header.nav__link }>
								<i className={`uil uil-estate ${header.nav__icon}`}></i> Home
							</a>
						</li>

						<li className={header.nav__item}>
							<a href="#about" className={header.nav__link}>
								<i className={` uil uil-user ${header.nav__icon}`}></i> About
							</a>
						</li>

						<li className={header.nav__item}>
							<a href="#skills" className={header.nav__link}>
								<i className={`uil uil-file-alt ${header.nav__icon}`}></i> Skills
							</a>
						</li >

						<li className={header.nav__item}>
							<a href="#services" className={header.nav__link}>
								<i className={`uil uil-briefcase-alt ${header.nav__icon}`}></i> Services
							</a>
						</li >

						<li className={header.nav__item}>
							<a href="#portfolio" className={header.nav__link}>
								<i className={`uil uil-scenery ${header.nav__icon}`}></i> Portfolio
							</a>
						</li>

						<li className={header.nav__item}>
							<a href="#contakt" className={`${header.nav__link} ${header.active_link}`}>
								<i className={`uil uil-message ${header.nav__icon}`}></i> Contact
							</a>
						</li>
					</ul>
					<i className={`uil uil-times ${header.nav__close}`} onClick={toggleМenuАctivities}></i>
				</div>

				<div className={header.nav__toggle} onClick={toggleМenuАctivities}>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	)
}

export default Header;