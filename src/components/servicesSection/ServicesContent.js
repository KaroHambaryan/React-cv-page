import React from 'react';

const ServicesContent = (props) => {
	const {
		services, onDispatchOpen, onDispatchClose, state, servicesTitle, servicesIconType,
		modalTitle,modalDescription,serviceName_1,serviceName_2,serviceName_3,serviceName_4,
		serviceName_5 } = props;
	
	return (
		<div className={services.content}>
			<div>
				<i class={`${services.icon} ${servicesIconType}`}></i>
				<h3 className={services.title}>
					{servicesTitle}
				</h3>
			</div>
			<span
				className={services.button}
				onClick={(e) => {
					e.stopPropagation();
					onDispatchOpen();
				}}>
				View More
				<i class={`${services.button_icon} uil uil-arrow-right`}></i>
			</span>
			<div
				className={
					state.toggleState ?
						`${services.modal} ${services.acktive_modal}` :
						services.modal}
			>
				<div className={services.modal_content}>
					<i
						class={`${services.modal_close} uil uil-times`}
						onClick={(e) => {
							e.stopPropagation();
				
							onDispatchClose();
						}}
					></i>
					<h3 className={services.modal_title}>{modalTitle}</h3>

					<p className={services.modal_description}>
						{modalDescription}
					</p>

					<ul className={`${services.modal_services} grid`}>
						<li className={services.modal_service}>
							<i class={`${services.modal_icon} uil uil-check-circle`}></i>

							<p className={services.modal_info}>
								{serviceName_1}
							</p>
						</li>

						<li className={services.modal_service}>
							<i class={`${services.modal_icon} uil uil-check-circle`}></i>

							<p className={services.modal_info}>
								{serviceName_2}
							</p>
						</li>

						<li className={services.modal_service}>
							<i class={`${services.modal_icon} uil uil-check-circle`}></i>

							<p className={services.modal_info}>
								{serviceName_3}
							</p>
						</li>

						<li className={services.modal_service}>
							<i class={`${services.modal_icon} uil uil-check-circle`}></i>

							<p className={services.modal_info}>
								{serviceName_4}
							</p>
						</li>

						<li className={services.modal_service}>
							<i class={`${services.modal_icon} uil uil-check-circle`}></i>

							<p className={services.modal_info}>
								{serviceName_5}
							</p>
						</li>
					</ul>
				</div>
			</div>
			{console.log("opopo")}
		</div>
	)
}

export default ServicesContent