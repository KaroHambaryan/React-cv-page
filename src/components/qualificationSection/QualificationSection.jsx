import React from 'react';


import qualification from "./qualification.module.css";

import QualificationDataMain from "./QualificationDataMain.jsx";
import RenderRouterAndLine from "./RenderRouterAndLine.jsx";

// <div className={qualification.tabs}></div>
// <div className={`${qualification.container} container`}></div>

const QualificationSection = () => {

	return (
		<section className={`${qualification.qualification} section`}>
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personel journey</span>

			{/* container--------------------------------------*/}
			<div className={`${qualification.container} container`}>
				{/* tabs------------------------- */}
				<div className={qualification.tabs}>
					<div className={`${qualification.button} ${qualification.button_active} button--flex`}>
						<i className={`${qualification.icon} uil uil-graduation-cap`}>
						</i>Education
					</div>

					<div className={`${qualification.button} button--flex`}>
						<i className={`${qualification.icon} uil uil-briefcase-alt`}>
						</i>Experience
					</div>
				</div>
				{/* ------end tabs and start sections-------------------- */}
				<div className={qualification.sections}>
					<div className={`${qualification.content} ${qualification.content_active}`}>
						<div className={qualification.data}>
							<QualificationDataMain
								qualification={qualification}
								dataTitle={"Web Design"}
								dataSubtitle={"Spain - Institute"}
								dataCalendar={"2021 - Present"}
								calendarIcon={"uil uil-calendar-alt"}
							/>
							<RenderRouterAndLine qualification={qualification} />
						</div>

						<div className={qualification.data}>
							<div></div>
							<RenderRouterAndLine qualification={qualification} />
							<QualificationDataMain
								qualification={qualification}
								dataTitle={"Art Directior"}
								dataSubtitle={"Spaain - Institute"}
								dataCalendar={"2020 - 2021"}
								calendarIcon={"uil uil-calendar-alt"}
							/>
						</div>

						<div className={qualification.data}>
							<QualificationDataMain
								qualification={qualification}
								dataTitle={"Web Development"}
								dataSubtitle={"Spain - Institute"}
								dataCalendar={"2018 - 2020"}
								calendarIcon={"uil uil-calendar-alt"}
							/>
							<RenderRouterAndLine qualification={qualification} />
						</div>

						<div className={qualification.data}>
							<div></div>
							<RenderRouterAndLine qualification={qualification} />
							<QualificationDataMain
								qualification={qualification}
								dataTitle={"UX Expert"}
								dataSubtitle={"Spain - Institute"}
								dataCalendar={"2017 - 2018"}
								calendarIcon={"uil uil-calendar-alt"}
							/>
						</div>
					</div>

					<div className={qualification.content}>
						<div className={qualification.data}>
							<QualificationDataMain
								qualification={qualification}
								dataTitle={"Product Desinger"}
								dataSubtitle={"Microsoft - Spain"}
								dataCalendar={"2021 - Present"}
								calendarIcon={"uil uil-calendar-alt"}
							/>
							<RenderRouterAndLine qualification={qualification} />
						</div>

						<div className={qualification.data}>
							<div></div>
							<RenderRouterAndLine qualification={qualification} />
							<QualificationDataMain
								qualification={qualification}
								dataTitle={"UX Desinger"}
								dataSubtitle={"Apple Inc - Spain"}
								dataCalendar={"2020 - 2021"}
								calendarIcon={"uil uil-calendar-alt"}
							/>
						</div>

						<div className={qualification.data}>
							<QualificationDataMain
								qualification={qualification}
								dataTitle={"Web Desinger"}
								dataSubtitle={"Figma - Spain"}
								dataCalendar={"2018 - 2020"}
								calendarIcon={"uil uil-calendar-alt"}
							/>
							<RenderRouterAndLine qualification={qualification} />
						</div>
					</div>
				</div>
				{/* sections end-------------------------------- */}
			</div>
			{/* container end------------------------------------ */}
		</section>
	)
}

export default QualificationSection;