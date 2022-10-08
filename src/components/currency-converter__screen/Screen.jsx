
const Screen = ({ firstConverterValue, firstValueCode, LastConverterValue, lastValueCode }) => {
	return (
		<>
			<div>
				<h2>{`${firstConverterValue}  ${firstValueCode}`}</h2>

				<h2>{` ${parseFloat(LastConverterValue).toFixed(5)} ${lastValueCode}`}</h2>
			</div>
		</>
	);
}

export default Screen;