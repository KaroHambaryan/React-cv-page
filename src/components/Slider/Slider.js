// import { useEffect, useState } from "react";
import { useCallback, useEffect, useState } from "react";

import useGetData from "../services/service.hook";
import ImageItem from "../slider__Image_Items/ImageItem.jsx";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../error-message/ErrorMessage";

import "./slider.scss";

const Slider = () => {
	const [index, setIndex] = useState(0)
	const [sliderData, setSliderData] = useState(null);
	const [newItemLoading, setnewItemLoading] = useState(false);
	const { loading, error, clearError, getSliderData } = useGetData();

	useEffect(() => {
		onRequest("data/info.json")
	}, []);

	const onRequest = useCallback((_url) => {
		if (_url) {
			getSliderData(_url)
				.then(res => {
					setSliderData(res);
					if (error) {
						clearError()
					}
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

	const renderSliderImage = (data, index) => {
		return (
			<>
				<ImageItem data={data} index={index} />
			</>
		);
	};
	const image = renderSliderImage(sliderData, index);
	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;

	let render = spinner || errorMessage || image;
	return (
		<>
			<div className="slider">
				<div onClick={previousElement} className="slider__button-left slider__button-position "></div>
				<div className="slider__image-wrapper">
					{render}
				</div>
				<div onClick={nextElement} className="slider__button-right slider__button-position "></div>
			</div>

		</>
	);
}

export default Slider;