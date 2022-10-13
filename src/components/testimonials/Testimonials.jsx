import React from 'react';

import testimonial from "./testimonials.module.css";
import TestimonialsData from './TestimonialsData';

//   <div className={`${testimonial.testimonial} container section`}></div>
//   <div className={testimonial.testimonial}></div>

const Testimonials = () => {
	return (
		<section className={`${testimonial.testimonial} container section`}>
			<h2 className="section__title">My clients say</h2>
			<span className="section__subtitle">Testimonial</span>

			<div className={testimonial.container}></div>
		</section>
	);
};

export default Testimonials;