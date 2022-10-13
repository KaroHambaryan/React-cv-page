import React from 'react';

const ContactCard = ({ contact, catdTitle, cardData, _URL, buttonLogo }) => {
	return (
		<div className={contact.card}>
			<i className={`${contact.card_icon} ${buttonLogo}`}></i>
			<h3 className={contact.card_title}>{catdTitle}</h3>
			<span className={contact.card_data}>{cardData}</span>

			<a href={_URL} className={contact.button}>Write me
				<i className={`${contact.button_icon} bx bx-right-arrow-alt`}></i>
			</a>
		</div>
	);
};

export default ContactCard;