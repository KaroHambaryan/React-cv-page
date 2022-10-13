import React from "react";

import home from "./home.module.css";
import Social from "./Social.jsx";
import Data from "./Data.jsx";
import ScrollDown from "./ScrollDown";

const HomeSection = () => {
	return (
		<section className={`${home.home}  section`}>
			<div className={`${home.container} container grid`}>
				<div className={`${home.content} grid`}>
					<Social home={home} />
					<div className={home.img}></div>
					<Data home={home} />
				</div>
				<ScrollDown home={home} />
			</div>
		</section>
	)
}

export default HomeSection;