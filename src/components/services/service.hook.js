import { useHttp } from '../hooks/http.hook';

const useGetData = () => {
	const { loading, request, error, clearError } = useHttp();
	// get Slider Data
	const getSliderData = async (_URL) => {
		const res = await request(_URL);
		if (res) {
			let { id, path, extansion, items } = res.data.results
				.find((elem) => (elem.name === "slider"));
			return { id, path, extansion, items }
		}
	}


	const getCorrencyConverterData = async (_URL = 'usd') => {
		const res = await request(`https://www.floatrates.com/daily/${_URL}.json`);
		if (res) {
			return correncyDataArray(res,_URL);
		}
	}


function correncyDataArray(resData, url) {
		if (resData) {
			let name = [];
			for (let key in resData) {
				name.push(key);
			}
			return { name , resData, default: url, defaultValue: 1};
		}
	}
	// const getSpinerImage = async (sliderData, index) => {
	// 	if (sliderData) {
	// 		const { path, extansion, items } = await sliderData;

	// 		return `${path}+${items[index]}+${extansion}`;
	// 	}

	// }


	return { loading, error, clearError, getSliderData, getCorrencyConverterData }
}

export default useGetData;