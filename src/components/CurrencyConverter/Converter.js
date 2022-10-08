import { useState, useEffect, useRef } from "react";

import Screen from "../CurrencyScreen/Screen";
import Option from "../SelectOption/SelectOption";
import useGetData from "../../services/service.hook";


import "./converter.scss";

const Converter = () => {

	const { getCorrencyConverterData } = useGetData();

	const [convertData, setConvertData] = useState(null);
	const [selecLastValue, setSelectLastValue] = useState("amd");

	const firstValue = useRef();
	const lastValue = useRef();
	// const [exchange, setExchange] = useState();


	useEffect(() => {
		getCorrencyConverterData()
			.then(res => setConvertData(res));
	}, []);

	const handeleFirstValue = (e) => {
		getCorrencyConverterData(e.target.value)
			.then(res => {
				setConvertData(res)
				return res
			})
			.then(res => {
				let val = res.resData[selecLastValue].rate * firstValue.current.value;
				lastValue.current.value =
					firstValue.current.value ? val.toFixed(2) :
						res.resData[selecLastValue].rate;
			})
	}

	const handeleLastValue = (e) => {
		setSelectLastValue(e.target.value);
		let val = convertData?.resData[e.target.value]?.rate * firstValue.current.value
		lastValue.current.value = val.toFixed(2);
	}

	const inputFirstValue = (e) => {
		e.preventDefault();
		
			let val = convertData?.resData[selecLastValue]?.rate * e.target.value;
			
			lastValue.current.value = e.target.value ? val.toFixed(2) :
				convertData?.resData[selecLastValue]?.rate.toFixed(2);
			console.log(lastValue.current.value);

	}

	const inputLastValue = (e) => {
			e.preventDefault();
			let val = e.target.value / convertData?.resData[selecLastValue]?.rate
			firstValue.current.value = e.target.value >1 ? val.toFixed(2) :
			e.target.value ==='1'? val: 1 
	}

	return (
		<>
			<div className="converter">
				<div className="converter__wrapper">
					<h2>Currency Converter</h2>
					<div className="converter__content">
						<div className="converter__screen">
							<Screen
								settlementCurrency={convertData?.resData[selecLastValue]?.rate}
								firstCurrency={convertData?.resData[selecLastValue]?.code}
								exchangeCost={convertData?.defaultValue}
								lastCurrency={convertData?.default.toUpperCase()}
							/>
						</div>
						<div className="converter__Input">
							<div>
								<input
									ref={firstValue}
									onChange={(e) => inputFirstValue(e)}
									type="number"
									placeholder={convertData?.defaultValue}
									min='1'
								/>
								<select onChange={(e) => handeleFirstValue(e)} name="currency">
									{convertData && <>
										<option
											selected
											key={"hjshjdh887"}
											value={convertData.defaultValue}>
											{convertData.default.toUpperCase()}
										</option>
										<Option data={convertData} defaultValue={selecLastValue} />
									</>
									}
								</select>
							</div>
							<div>
								<input
									ref={lastValue}
									onChange={(e) => inputLastValue(e)}
									type="number"
									placeholder={convertData?.resData[selecLastValue]?.rate.toFixed(2)}
									min="1"
								/>
								<select onChange={(e) => handeleLastValue(e)} name="currency">
									{
										convertData && <>
											<option
												selected
												key={"sdjsh7s3jh3j4v"}
												value={selecLastValue}>
												{convertData.resData[selecLastValue].code + "___" + convertData.resData[selecLastValue].name}
											</option>
											<Option data={convertData} defaultValue={selecLastValue} />
										</>
									}
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);

}

export default Converter;