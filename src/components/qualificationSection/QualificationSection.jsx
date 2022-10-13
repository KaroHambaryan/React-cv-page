import React, { useReducer } from 'react';
import { useCallback } from 'react';


import qualification from "./qualification.module.css";

import QualificationDataMain from "./QualificationDataMain.jsx";
import RenderRouterAndLine from "./RenderRouterAndLine.jsx";

// the initial state toggleState
const initial = { toggleState: true }

// Controlling the opening and closing of a modal window
function reducer(state, action) {
	switch (action.type) {
		case "FIRST":
			return { toggleState: true };
		case "NEXT":
			return { toggleState: false };
		default:
			break;
	}
}

// Аction Тype
const _GENE = {
	_SHOW_FIRST: { type: "FIRST" },
	_SHOW_NEXT: { type: "NEXT" },
}

// <div className={qualification.tabs}></div>
// <div className={`${qualification.container} container`}></div>

const QualificationSection = () => {

	const [state, dispatch] = useReducer(reducer, initial);

	const activatePreviousOrNext = useCallback((e, data) => {
		e.preventDefault();
		dispatch(data);
	}, [])

	return (
		<section className={`${qualification.qualification} section`}>
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personel journey</span>

			<div className={`${qualification.container} container`}>
				<div className={qualification.tabs}>
					<div
						onClick={(e) => {
							if (!state.toggleState) {
								activatePreviousOrNext(e, _GENE._SHOW_FIRST);
							}
						}}
						className={
							state.toggleState ?
								`${qualification.button} ${qualification.button_active} button--flex` :
								`${qualification.button} button--flex`
						}
					>
						<i className={`${qualification.icon} uil uil-graduation-cap`}></i>Education
					</div>

					<div
						onClick={(e) => {
							if (state.toggleState) {
								activatePreviousOrNext(e, _GENE._SHOW_NEXT);
							}
						}}
						className={
							state.toggleState ?
								`${qualification.button} button--flex` :
								`${qualification.button} ${qualification.button_active} button--flex`
						}
					>
						<i className={`${qualification.icon} uil uil-briefcase-alt`}></i>Experience
					</div>
				</div>

				<div className={qualification.sections}>
					<div className={
						state.toggleState ?
							`${qualification.content} ${qualification.content_active}` :
							qualification.content
					}
					>
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

					<div className={
						state.toggleState ?
							qualification.content :
							`${qualification.content} ${qualification.content_active}`
					}
					>
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
			</div>
		</section>
	)
}

export default QualificationSection;