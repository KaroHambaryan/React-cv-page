// hooks
import { useState, useEffect, useRef } from "react";

// costom hook
import useGetData from "../services/service.hook"
import ErrorMessage from "../error-message/ErrorMessage";
import Spinner from "../spinner/Spinner";
// convertrer components
import Screen from "../currency-converter__screen/Screen.jsx";
import Option from "../currency-converter__select-option/SelectOption";

// converter styles
import "./converter.css";

// Converter
const Converter = () => {

	// variables
	const [convertData, setConvertData] = useState(null);
	const [selecLastValue, setSelectLastValue] = useState("amd");

	// cosstom hooks - getting function all data information
	const { loading, error, clearError, getCorrencyConverterData } = useGetData();

	// refs to input
	const firstValue = useRef();
	const lastValue = useRef();

	// mount - get datas
	useEffect(() => {
		getCorrencyConverterData()
			.then(res => {
				setConvertData(res);
				if (error) {
					clearError();
				}
			});
		return renderCurrencyConverter;
	}, []);

	// it's function handle the value of the currency of the first input,
	// which in turn is the main value against which the calculations will be carried out
	const handleFirstValue = (e) => {
		// get data by currency code value
		getCorrencyConverterData(e.target.value)
			.then(res => {
				setConvertData(res)
			
				return res
			})
			.then(res => {
				// processing the value of the second input, after the request,
				//  based on the value of the first input.
				if (!firstValue.current.value) {
					// lastValue ist's a value by second input received via useRef 
					lastValue.current.value = res.resData[selecLastValue].rate
				} else if (parseFloat(firstValue.current.value) === 0) {
					lastValue.current.value = 0;
				} else if (firstValue.current.value === "1") {
					lastValue.current.value = res.resData[selecLastValue].rate *
						firstValue.current.value;
				} else {
					// firstValue ist's a value by first input received via useRef
					let val = res.resData[selecLastValue].rate *
						firstValue.current.value;
					lastValue.current.value = val.toFixed(2)
				}
			})
	}

	// function handleLastValue after entering the value of the second currency,
	//  it calculates based on the value of the first input
	const handleLastValue = (e) => {
		setSelectLastValue(e.target.value);
		if (!firstValue.current.value) {
			lastValue.current.value = convertData?.resData[e.target.value]?.rate
		} else if (parseFloat(e.target.value) === 0) {
			lastValue.current.value = 0
		} else if (firstValue.current.value === "1") {
			lastValue.current.value = convertData?.resData[e.target.value]?.rate
		} else {
			let val = convertData?.resData[e.target.value]?.rate * firstValue.current.value
			lastValue.current.value = val.toFixed(2);
		}
	}

	// when entering a number in the right input, 
	// it performs calculations and displays the resulting value in the first input
	const inputFirstValue = (e) => {
		e.preventDefault();
		if (!e.target.value) {
			// lastValue ist's a value by second input received via useRef 
			lastValue.current.value = convertData?.resData[selecLastValue]?.rate
		} else if (parseFloat(e.target.value) === 0) {
			lastValue.current.value = 0;
		} else if (e.target.value === "1") {
			lastValue.current.value = convertData?.resData[selecLastValue]?.rate *
				e.target.value;
		} else {
			// firstValue ist's a value by first input received via useRef
			let val = convertData?.resData[selecLastValue]?.rate *
				firstValue.current.value;
			lastValue.current.value = val.toFixed(2)
		}
	}

	// when entering a number in the right input, 
	// it performs calculations and displays the resulting value in the first input
	const inputLastValue = (e) => {
		e.preventDefault();
		if (!e.target.value) {
			// lastValue ist's a value by second input received via useRef 
			firstValue.current.value = 1
		} else if (parseFloat(e.target.value) === 0) {
			firstValue.current.value = 0;
		} else if (e.target.value === "1") {
			firstValue.current.value = e.target.value / convertData?.resData[selecLastValue]?.rate
		} else {
			// firstValue ist's a value by first input received via useRef
			let val = e.target.value / convertData?.resData[selecLastValue]?.rate
			firstValue.current.value = val.toFixed(2)
		}

	}

	function renderCurrencyConverter() {
		return <>
			<div className="converter__screen">
				<Screen
					firstConverterValue={convertData?.defaultValue}
					firstValueCode={convertData?.default.toUpperCase()}
					LastConverterValue={convertData?.resData[selecLastValue]?.rate}
					lastValueCode={convertData?.resData[selecLastValue]?.code}
				/>
			</div>
		</>;
	}



	const converter = renderCurrencyConverter();
	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ?  <Spinner /> : null;

	let render = spinner || errorMessage || converter;

	return (
		<>
			<div className="converter">
				<div className="converter__wrapper">
					<h2>Currency Converter</h2>
					<div className="converter__content">
						{render}
						<div className="converter__input">
							{/* first input wrap */}
							<div>
								{/* first input value */}
								<input
									ref={firstValue}
									onChange={(e) => inputFirstValue(e)}
									type="number"
									placeholder={convertData?.defaultValue}
									min='1'
								/>
								{/* first value code */}
								<select onChange={(e) => handleFirstValue(e)} name="currency">
									{convertData && <>
										{/* default value code */}
										<option
											selected
											key={"hjshjdh887"}
											value={convertData.defaultValue}>
											{convertData.default.toUpperCase()}
										</option>
										<Option
											unikalKay={"hjh565gb5aj"}
											data={convertData}
											defaultValue={selecLastValue} />
									</>
									}
								</select>
							</div>
							{/* last input wrap */}
							<div>
								{/* last input Value */}
								<input
									ref={lastValue}
									onChange={(e) => inputLastValue(e)}
									type="number"
									placeholder={convertData?.resData[selecLastValue]?.rate}
									min="1"
								/>
								{/* last value code */}
								<select onChange={(e) => handleLastValue(e)} name="currency">
									{
										convertData && <>
											{/* default value */}
											<option
												selected
												key={"sdjsh7s3jh3j4v"}
												value={selecLastValue}>
												{convertData.resData[selecLastValue].code + "___" + convertData.resData[selecLastValue].name}
											</option>
											<Option
												unikalKay={"iteywte7s8s78s7"}
												data={convertData}
												defaultValue={selecLastValue} />
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