import React from 'react';

import skills from "./skills.module.css";
import Frontend from './Frontend';
import Backend from './Backend';

const SkillsSection = () => {
	return (
		<section className={`${skills.skills} section`} id="skills">
			<h2 className="section__title">Skills</h2>
			<span className="section__subtitle">My technical level</span>

			<div className={`${skills.container} container grid`}>
				<Frontend skills={ skills } />
				
				<Backend skills={ skills }/>
			</div>
		
		</section >
	)
}

export default SkillsSection;