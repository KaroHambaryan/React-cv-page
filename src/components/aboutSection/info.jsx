import React from 'react'

const Info = ({ about }) => {
	return (
		<div className={`${about.info} grid`}>

			<div className={`${about.box}`}>
				<i className={`${about.icon} bx bx-award`}></i>

				<h3 className={`${about.title}`}>Experience</h3>
				<span className={`${about.subtitle}`}>8 Years Working</span>
			</div>

			<div className={`${about.box}`}>
				<i className={`${about.icon} bx bx-briefcase-alt`}></i>

				<h3 className={`${about.title}`}>Completed</h3>
				<span className={`${about.subtitle}`}>48 + Projects</span>
			</div>

			<div className={`${about.box}`}>
				<i className={`${about.icon} bx bx-support`}></i>

				<h3 className={`${about.title}`}>Support</h3>
				<span className={`${about.subtitle}`}>Online 24/7</span>
			</div>

		</div >
	)
}

export default Info