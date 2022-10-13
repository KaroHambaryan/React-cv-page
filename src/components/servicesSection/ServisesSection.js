import React from 'react';


import services from "./services.module.css";
import ServicesContent from './ServicesContent';




const ServisesSection = () => {

	
	return (
		<section className={`${services.services} section`} id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What i offer</span>

			<div className={`${services.container} container grid`}>
				<ServicesContent
					key={"hsd8273hhy66t"}
					services={services}
					servicesTitle={<>Product<br />Designer</>}
					servicesIconType={'uil uil-web-grid'}
					modalTitle={'Product Designe'}
					modalDescription={'Service with more than 3 years of experience.Providing quality work to clients and companies.'}
					serviceName_1={'I develop the user interface.'}
					serviceName_2={'Web page development.'}
					serviceName_3={'I create ux element interactions.'}
					serviceName_4={'I position your company brand.'}
					serviceName_5={'Design and mockups of products for companies.'}
				/>
				
				<ServicesContent
					key={"jn232989sh"}
					services={services}
					servicesTitle={<>Product<br />Designer</>}
					servicesIconType={'uil uil-web-grid'}
					modalTitle={'bla bla'}
					modalDescription={'Service with more than 3 years of experience.Providing quality work to clients and companies.'}
					serviceName_1={'I develop the user interface.'}
					serviceName_2={'Web page development.'}
					serviceName_3={'I create ux element interactions.'}
					serviceName_4={'I position your company brand.'}
					serviceName_5={'Design and mockups of products for companies.'}
				/>
				
				<ServicesContent
					key={"ndh7y73njnd"}
					services={services}
					servicesTitle={<>Product<br />Designer</>}
					servicesIconType={'uil uil-web-grid'}
					modalTitle={'gogogo'}
					modalDescription={'Service with more than 3 years of experience.Providing quality work to clients and companies.'}
					serviceName_1={'I develop the user interface.'}
					serviceName_2={'Web page development.'}
					serviceName_3={'I create ux element interactions.'}
					serviceName_4={'I position your company brand.'}
					serviceName_5={'Design and mockups of products for companies.'}
				/>
				
			</div>

		</section>
	)
}

export default ServisesSection;