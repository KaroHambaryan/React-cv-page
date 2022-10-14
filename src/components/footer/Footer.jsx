import React from "react";

import _footer from "./footer.module.css";
import Scrollup from "../scrollup/Scrollup.jsx";
const Footer = () => {

	return (
		<>
		<footer className={_footer.footer}>
			<div className={`${_footer.container} container`}>
				<h1 className={_footer.title}>Smith</h1>
				<ul className={_footer.list}>
					<li>
						<a href="#about" className={_footer.link}>About</a>
					</li>
					<li>
						<a href="#projects" className={_footer.link}>Projects</a>
					</li>
					<li>
						<a href="#testimonials" className={_footer.link}>Testimonials</a>
					</li>
				</ul>

				<div className={_footer.social}>
					<a
						href="https://www.facebook.com/"
						className={_footer.social_link}
						target="__blank"
					>
						<i className="ub uil-facebook"></i>
					</a>
					<a
						href="https://www.instagram.com/"
						className={_footer.social_link}
						target="__blank"
					>
						<i className="uil uil-instagram"></i>
					</a>
					<a
						href="https://twitter.com/"
						className={_footer.social_link}
						target="__blank"
					>
						<i className="uil uil-twitter"></i>
					</a>
				</div>

				<div className={_footer.copy}>
					&#169; Crypticalcoder. All rigths reserved
				</div>
			</div>
		</footer>
		<Scrollup/>
		</>
	);
};

export default Footer;
