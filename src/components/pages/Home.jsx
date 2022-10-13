import React from "react";

import HomeSection from "../homeSection/HomeSection.jsx";
import AboutSection from "../aboutSection/AboutSection.jsx";
import SkillsSection from "../skillsSection/skillsSection.jsx";
import ServisesSection from "../servicesSection/ServisesSection.jsx";
import QualificationSection from "../qualificationSection/QualificationSection.jsx"
import Testimonials from "../testimonials/Testimonials.jsx";
import ContactSection from "../contactSection/ContactSection.jsx"

const Home = () => {
	return (
		<>
			<HomeSection />
			<AboutSection />
			<SkillsSection />
			<ServisesSection />
			<QualificationSection />
			<Testimonials />
			<ContactSection/>
		</>
	);
};

export default Home;