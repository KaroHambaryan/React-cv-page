import React from "react";

import HomeSection from "../homeSection/HomeSection.jsx";
import AboutSection from "../aboutSection/AboutSection.jsx";
import Skills from "../skillsSection/skillsSection.jsx";
import ServisesSection from "../servicesSection/ServisesSection";

const Home = () => {
	return (
		<>
			<HomeSection />
			<AboutSection/>
			<Skills/>
			<ServisesSection/>
		</>
	);
};

export default Home;