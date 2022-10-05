// import { useEffect, useState } from "react";
import { useCallback, useEffect, useState } from "react";

import useGetSpinerData from "../../services/service.hook.js";
import ImageItem from "../../container/ImageItem/ImageItem.jsx";
import Spinner from "../spinner/Spinner.js";
import ErrorMessage from "../errorMessage/ErrorMessage.js";

import "./slider.scss";

const Slider = () => {
	const[index, setIndex] = useState(0)
	const [sliderData, setSliderData] = useState(null);
	const [newItemLoading, setnewItemLoading] = useState(false);
	const { loading, error,getSpinerData } = useGetSpinerData();

	useEffect(() => {
		onRequest("data/info.json", true)
	}, []);

	const onRequest = useCallback((_url, initial) => {
		initial ? setnewItemLoading(false) : setnewItemLoading(true);
		if (_url) {
			getSpinerData(_url)
				.then(res => {
					setSliderData(res)
				});
		}
	}, []);

	const nextElement = useCallback(() => {
		if (index === 4) {
			setIndex(0)
		} else {
			setIndex(index => index + 1)
		}
	}, [index]);

	const previousElement = useCallback(() => {
		if (index === 0) {
			setIndex(4)
		} else {
			setIndex(index => index - 1)
		}
	}, [index]);

	const renderSliderImage =(data, index) => {
		return (
			<>
				<ImageItem data={data} index={ index } />
			</>
		);
	};
	const image = renderSliderImage(sliderData, index);
	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;

	return (
		<>
			<div className="slider">
				<div onClick={previousElement} className="slider__button-left slider__button-position "></div>
				<div className="slider__image-wrapper">
				{errorMessage}
				{spinner}
				{image}
				</div>
				<div onClick={nextElement} className="slider__button-right slider__button-position "></div>
			</div>

		</>
	);
}

export default Slider;