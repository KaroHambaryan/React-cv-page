import { useHttp } from '../hooks/http.hook';

const useGetSpinerData = () => {
	const { loading, request, error, clearError } = useHttp();

	const getSpinerData = async (_URL) => {
		const res = await request(_URL);
		if (res) {
			let { id, path, extansion, items } = res.data.results
				.find((elem) => (elem.name === "slider"));
			return { id, path, extansion, items}
		}
	}

	// const getSpinerImage = async (sliderData, index) => {
	// 	if (sliderData) {
	// 		const { path, extansion, items } = await sliderData;
			
	// 		return `${path}+${items[index]}+${extansion}`;
	// 	}
		
	// }


	return { loading, error, clearError, getSpinerData }
}

export default useGetSpinerData;