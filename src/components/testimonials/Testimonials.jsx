import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import testimonial from "./testimonials.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Data } from './TestimonialsData';
// import required modules
import { Pagination } from "swiper";

//   <div className={`${testimonial.testimonial} container section`}></div>
//   <div className={testimonial.testimonial}></div>

const Testimonials = () => {
	return (
		<section className={`${testimonial.testimonial} container section`}>
			<h2 className="section__title">My clients say</h2>
			<span className="section__subtitle">Testimonial</span>

			<Swiper
				loop={true}
				grabCursor={true}
				spaceBetween={24}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
				}}
				modules={[Pagination]}
				className={testimonial.container}
			>
				{
					Data.map(({ id, image, title, description }) => {
						return (
							<SwiperSlide key={id} className={testimonial._card}>
								<img src={image} alt="img" className={testimonial._img} />
								<h3 className={testimonial._name}>{title}</h3>
								<p className={testimonial._description}>{description}</p>
							</SwiperSlide>
						);
					})
				}
			</Swiper>
		</section>
	);
};

export default Testimonials;