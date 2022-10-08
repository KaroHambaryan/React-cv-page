// import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import Burger from '../burger/Burger';

const Header = () => {
	return (
		<header className='app-header '>
			<div className='container app-header__wrapper_flex-sp-beetwin'>
				<div>sd</div>
				<Burger/>
			</div>
		</header>
	)
}

export default Header;