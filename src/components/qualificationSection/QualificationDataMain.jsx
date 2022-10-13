import React from 'react';

const QualificationDataMain = ({ qualification, dataTitle, dataSubtitle, dataCalendar, calendarIcon }) => {
	return (
		<div>
			<h3 className={qualification.title}>{dataTitle}</h3>
			<span className={qualification.subtitle}>
				{dataSubtitle}
			</span>
			<div className={qualification.calendar}>
				<i className={`${calendarIcon}`}></i>
				{dataCalendar}
			</div>
		</div>
	);
};

export default QualificationDataMain;