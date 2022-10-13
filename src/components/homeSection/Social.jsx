import React from 'react'


const Social = ({ home }) => {
	return (
		<div className={home.social}>
			<a href="https://www.instagram.com/karo_hambaryan/"
				className={home.social_icon}
				target="__blank">
				<i className="uil uil-instagram"></i>
			</a>
			<a href="https://dribbble.com/Hambaryan"
				className={home.social_icon}
				target="__blank">
				<i className="uil uil-dribbble"></i>
			</a>
			<a href="https://github.com/KaroHambaryan"
				className={home.social_icon}
				target="__blank">
				<i className="uil uil-github-alt"></i>
			</a>
		</div>
	)
}

export default Social