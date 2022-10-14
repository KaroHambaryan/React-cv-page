import React from 'react';
import _scrollup from "./scrollup.module.css"; 

const Scrollup = () => {

	window.addEventListener("scroll", function () {
		const scrollUp = document.querySelector(".scrollup");
		if (this.scrollY >= 560) {
			scrollUp.classList.add("show_scroll");
		} else {
			scrollUp.classList.remove("show_scroll");
		}
	})

	return (
		<a href='#about' className={`${_scrollup.scrollup} scrollup`}>
			<i className={`${_scrollup.scrollup_icon} uil uil-arrow-up`}></i>
		</a>
	)
};

export default Scrollup;