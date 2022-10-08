
const Screen = ({ settlementCurrency, exchangeCost, firstCurrency, lastCurrency }) => {
	return (
		<>
			<div>
				<h2>{`${exchangeCost}  ${lastCurrency} `}</h2>
				<h2>{` ${parseFloat(settlementCurrency).toFixed(2)} ${firstCurrency}`}</h2>
			</div>
		</>
	);
}

export default Screen;